/**
 * One-time setup script:
 * 1. Creates nishijima@llc-addition.com in Firebase Auth
 * 2. Writes admin profile to Firestore users/{uid}
 * 3. Seeds 5 vehicle assignments to Firestore vehicles collection
 *
 * Usage:
 *   node scripts/setup.mjs
 *   node scripts/setup.mjs --password YOUR_PASSWORD
 */

const API_KEY = 'AIzaSyAjczSlMbbtUk4-fqNwFCglTAr8DHHSseA'
const PROJECT_ID = 'globalmanage-e324b'
const FIRESTORE_BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`
const AUTH_BASE = 'https://identitytoolkit.googleapis.com/v1'

const ADMIN_EMAIL = 'nishijima@llc-addition.com'
const ADMIN_PASSWORD = process.argv.includes('--password')
  ? process.argv[process.argv.indexOf('--password') + 1]
  : 'GlobalManage2024!'

const vehicles = [
  {
    id: 'v1',
    staffName: '田中 美咲',
    vehicleName: 'プリウス（白）',
    plate: '横浜300あ1234',
    inspectionExpiry: '2026-06-15',
    lastOilChangeDate: '2025-11-15',
    lastOilChangeMileage: 42000,
    currentMileage: 47800,
    oilChangeIntervalKm: 5000,
    oilChangeIntervalMonths: 6,
  },
  {
    id: 'v2',
    staffName: '佐藤 健太',
    vehicleName: 'ノア（シルバー）',
    plate: '横浜500い5678',
    inspectionExpiry: '2027-03-15',
    lastOilChangeDate: '2025-12-01',
    lastOilChangeMileage: 31000,
    currentMileage: 34200,
    oilChangeIntervalKm: 5000,
    oilChangeIntervalMonths: 6,
  },
  {
    id: 'v3',
    staffName: '鈴木 由香',
    vehicleName: 'フィット（青）',
    plate: '横浜100う9012',
    inspectionExpiry: '2026-05-30',
    lastOilChangeDate: '2025-10-20',
    lastOilChangeMileage: 58000,
    currentMileage: 62500,
    oilChangeIntervalKm: 5000,
    oilChangeIntervalMonths: 6,
  },
  {
    id: 'v4',
    staffName: '高橋 誠',
    vehicleName: 'アクア（赤）',
    plate: '横浜400え3456',
    inspectionExpiry: '2027-01-28',
    lastOilChangeDate: '2025-09-10',
    lastOilChangeMileage: 21000,
    currentMileage: 27300,
    oilChangeIntervalKm: 5000,
    oilChangeIntervalMonths: 6,
  },
  {
    id: 'v5',
    staffName: '西島',
    vehicleName: 'ヴィッツ（白）',
    plate: '横浜200お7890',
    inspectionExpiry: '2026-09-05',
    lastOilChangeDate: '2025-12-15',
    lastOilChangeMileage: 15000,
    currentMileage: 17200,
    oilChangeIntervalKm: 5000,
    oilChangeIntervalMonths: 6,
  },
]

async function post(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(JSON.stringify(data.error ?? data))
  return data
}

async function firestoreSet(collection, docId, fields, idToken) {
  const url = `${FIRESTORE_BASE}/${collection}/${docId}?updateMask.fieldPaths=${Object.keys(fields).join('&updateMask.fieldPaths=')}`
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify({ fields }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(JSON.stringify(data.error ?? data))
  return data
}

function toFirestoreValue(val) {
  if (typeof val === 'string') return { stringValue: val }
  if (typeof val === 'number') return { integerValue: String(val) }
  if (typeof val === 'boolean') return { booleanValue: val }
  return { stringValue: String(val) }
}

function toFirestoreFields(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, toFirestoreValue(v)])
  )
}

async function main() {
  console.log('=== GlobalManage Setup Script ===\n')

  // Step 1: Try to sign in first (user may already exist)
  let idToken, uid
  console.log(`1. Authenticating ${ADMIN_EMAIL}...`)
  try {
    const signIn = await post(`${AUTH_BASE}/accounts:signInWithPassword?key=${API_KEY}`, {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      returnSecureToken: true,
    })
    idToken = signIn.idToken
    uid = signIn.localId
    console.log(`   Signed in existing account. UID: ${uid}`)
  } catch {
    // User doesn't exist — create them
    try {
      console.log(`   Account not found, creating...`)
      const signUp = await post(`${AUTH_BASE}/accounts:signUp?key=${API_KEY}`, {
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        returnSecureToken: true,
      })
      idToken = signUp.idToken
      uid = signUp.localId
      console.log(`   Created new account. UID: ${uid}`)
    } catch (err) {
      console.error('   Failed to create/sign in account:', err.message)
      process.exit(1)
    }
  }

  // Step 2: Write admin profile to Firestore
  console.log('\n2. Writing admin profile to Firestore...')
  try {
    await firestoreSet(
      'users',
      uid,
      toFirestoreFields({
        name: '西島',
        staffName: '西島',
        role: 'admin',
        email: ADMIN_EMAIL,
      }),
      idToken
    )
    console.log('   Admin profile saved.')
  } catch (err) {
    console.error('   Failed to write admin profile:', err.message)
    process.exit(1)
  }

  // Step 3: Seed vehicle data
  console.log('\n3. Seeding vehicle assignments...')
  for (const v of vehicles) {
    const { id, ...fields } = v
    try {
      await firestoreSet('vehicles', id, toFirestoreFields(fields), idToken)
      console.log(`   ${v.staffName} → ${v.vehicleName} (${v.plate}) ✓`)
    } catch (err) {
      console.error(`   Failed for ${v.staffName}:`, err.message)
    }
  }

  console.log('\n=== Setup complete! ===')
  console.log(`Admin: ${ADMIN_EMAIL}`)
  console.log(`Password: ${ADMIN_PASSWORD}`)
  console.log('\nYou can now log in to the app with these credentials.')
}

main().catch((err) => {
  console.error('Unexpected error:', err)
  process.exit(1)
})
