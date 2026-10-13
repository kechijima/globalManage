import { resolveModulePath } from '../node_modules/exsolve/dist/index.mjs'
import { pathToFileURL } from 'node:url'
import { statSync } from 'node:fs'

const rootDir = 'C:\\Users\\Public\\Desktop\\workspace\\globalManage\\'

let normalizedBase
if (rootDir.endsWith('/') || statSync(rootDir).isDirectory()) {
  normalizedBase = pathToFileURL(rootDir + '/')
} else {
  normalizedBase = pathToFileURL(rootDir)
}
console.log('normalizedBase:', normalizedBase.href)

const r = resolveModulePath('nuxt', { from: normalizedBase, try: true })
console.log('nuxt from URL object:', r)

const r2 = resolveModulePath('nuxt', { from: normalizedBase.href, try: true })
console.log('nuxt from URL string:', r2)
