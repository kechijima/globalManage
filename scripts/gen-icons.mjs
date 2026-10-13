/**
 * みかんアイコン PNG 生成（依存ゼロ・Node.js 内蔵 zlib のみ使用）
 */
import { deflate } from 'zlib'
import { writeFileSync, mkdirSync } from 'fs'
import { promisify } from 'util'

const deflateAsync = promisify(deflate)

// ---- CRC32 ----
const crcTable = new Uint32Array(256)
for (let i = 0; i < 256; i++) {
  let c = i
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  crcTable[i] = c
}
function crc32(buf) {
  let crc = 0xffffffff
  for (const b of buf) crc = crcTable[(crc ^ b) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const typeB = Buffer.from(type, 'ascii')
  const lenB  = Buffer.allocUnsafe(4); lenB.writeUInt32BE(data.length, 0)
  const crcB  = Buffer.allocUnsafe(4); crcB.writeUInt32BE(crc32(Buffer.concat([typeB, data])), 0)
  return Buffer.concat([lenB, typeB, data, crcB])
}

// ---- 画素操作 ----
function hexRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function blend(pixels, size, x, y, r, g, b, a) {
  if (x < 0 || x >= size || y < 0 || y >= size) return
  const i = (~~y * size + ~~x) * 4
  const f = a / 255
  pixels[i]     = pixels[i]     * (1 - f) + r * f | 0
  pixels[i + 1] = pixels[i + 1] * (1 - f) + g * f | 0
  pixels[i + 2] = pixels[i + 2] * (1 - f) + b * f | 0
  pixels[i + 3] = 255
}

function fillRounded(pixels, size, x0, y0, w, h, rad, r, g, b) {
  for (let y = y0; y < y0 + h; y++) {
    for (let x = x0; x < x0 + w; x++) {
      const lx = x - x0, ly = y - y0
      const inCorner = (
        (lx < rad   && ly < rad    && Math.hypot(lx - rad,     ly - rad    ) > rad) ||
        (lx >= w-rad && ly < rad   && Math.hypot(lx - (w-rad), ly - rad    ) > rad) ||
        (lx < rad   && ly >= h-rad && Math.hypot(lx - rad,     ly - (h-rad)) > rad) ||
        (lx >= w-rad && ly >= h-rad && Math.hypot(lx - (w-rad),ly - (h-rad)) > rad)
      )
      if (!inCorner) blend(pixels, size, x, y, r, g, b, 255)
    }
  }
}

// アンチエイリアス付き円
function drawCircle(pixels, size, cx, cy, r, R, G, B, alphaMax = 255) {
  const S = 4
  for (let y = Math.floor(cy - r - 1); y <= Math.ceil(cy + r + 1); y++) {
    for (let x = Math.floor(cx - r - 1); x <= Math.ceil(cx + r + 1); x++) {
      let hits = 0
      for (let sy = 0; sy < S; sy++) {
        for (let sx = 0; sx < S; sx++) {
          const px = x + (sx + .5) / S - cx
          const py = y + (sy + .5) / S - cy
          if (px * px + py * py <= r * r) hits++
        }
      }
      if (hits > 0) blend(pixels, size, x, y, R, G, B, (hits / (S * S) * alphaMax) | 0)
    }
  }
}

// アンチエイリアス付き回転楕円
function drawEllipse(pixels, size, cx, cy, rx, ry, angle, R, G, B, alphaMax = 255) {
  const S = 4
  const cosA = Math.cos(angle)
  const sinA = Math.sin(angle)
  const bound = Math.max(rx, ry) + 2
  for (let y = Math.floor(cy - bound); y <= Math.ceil(cy + bound); y++) {
    for (let x = Math.floor(cx - bound); x <= Math.ceil(cx + bound); x++) {
      let hits = 0
      for (let sy = 0; sy < S; sy++) {
        for (let sx = 0; sx < S; sx++) {
          const px = x + (sx + .5) / S - cx
          const py = y + (sy + .5) / S - cy
          const lx = px * cosA + py * sinA
          const ly = -px * sinA + py * cosA
          if ((lx / rx) * (lx / rx) + (ly / ry) * (ly / ry) <= 1) hits++
        }
      }
      if (hits > 0) blend(pixels, size, x, y, R, G, B, (hits / (S * S) * alphaMax) | 0)
    }
  }
}

// みかん描画
function drawMikan(pixels, size) {
  const [oR, oG, oB] = hexRgb('#fb923c')  // orange-400
  const [lR, lG, lB] = hexRgb('#16a34a')  // green-600（葉）
  const [sR, sG, sB] = hexRgb('#15803d')  // green-700（茎）

  const bodyR = size * 0.31
  const bodyCx = size * 0.5
  const bodyCy = size * 0.56

  // 本体（オレンジ円）
  drawCircle(pixels, size, bodyCx, bodyCy, bodyR, oR, oG, oB)

  // 茎（小さな緑円）
  drawCircle(pixels, size, bodyCx, bodyCy - bodyR - size * 0.025, size * 0.028, sR, sG, sB)

  // 葉（右上に傾いた楕円）
  drawEllipse(pixels, size,
    bodyCx + size * 0.085, bodyCy - bodyR + size * 0.01,
    size * 0.15, size * 0.055, -Math.PI * 0.32,
    lR, lG, lB)

  // ハイライト（左上に薄い白）
  drawCircle(pixels, size,
    bodyCx - bodyR * 0.28, bodyCy - bodyR * 0.3,
    bodyR * 0.32, 255, 255, 255, 70)
}

// ---- PNG 出力 ----
async function generateIcon(size, path) {
  const pixels = new Uint8Array(size * size * 4)

  const [bgR, bgG, bgB] = hexRgb('#1e40af')
  const rad = (size * 0.22) | 0
  fillRounded(pixels, size, 0, 0, size, size, rad, bgR, bgG, bgB)

  drawMikan(pixels, size)

  const raw = Buffer.allocUnsafe(size * (1 + size * 3))
  for (let y = 0; y < size; y++) {
    raw[y * (1 + size * 3)] = 0
    for (let x = 0; x < size; x++) {
      const s = (y * size + x) * 4
      const d = y * (1 + size * 3) + 1 + x * 3
      raw[d] = pixels[s]; raw[d+1] = pixels[s+1]; raw[d+2] = pixels[s+2]
    }
  }

  const compressed = await deflateAsync(raw, { level: 9 })

  const ihdr = Buffer.allocUnsafe(13)
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4)
  ihdr[8]=8; ihdr[9]=2; ihdr[10]=0; ihdr[11]=0; ihdr[12]=0

  const png = Buffer.concat([
    Buffer.from([137,80,78,71,13,10,26,10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0)),
  ])
  writeFileSync(path, png)
  console.log(`✓ ${path}  (${size}x${size}px, ${(png.length/1024).toFixed(1)} KB)`)
}

mkdirSync('public/icons', { recursive: true })
await generateIcon(192, 'public/icons/icon-192.png')
await generateIcon(512, 'public/icons/icon-512.png')
console.log('アイコン生成完了！')
