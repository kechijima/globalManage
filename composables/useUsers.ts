import { collection, getDocs, getDoc, doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '~/plugins/firebase.client'

const API_KEY = 'AIzaSyAjczSlMbbtUk4-fqNwFCglTAr8DHHSseA'

export interface UserRecord {
  uid: string
  name: string
  staffName: string
  email: string
  role: 'admin' | 'user'
  hireDate?: string    // 入社年月日 (YYYY-MM-DD)
  leaveTotal?: number  // 付与日数（手動設定 or 自動計算）
  leaveUsed?: number   // 使用済日数
  fcmToken?: string
}

/** 労働基準法第39条に基づく有給付与日数を計算 */
export function calcLeaveTotal(hireDate: string): number {
  if (!hireDate) return 10
  const hire = new Date(hireDate)
  const today = new Date()
  const months = (today.getFullYear() - hire.getFullYear()) * 12
    + (today.getMonth() - hire.getMonth())
  if (months < 6)  return 0
  if (months < 18) return 10
  if (months < 30) return 11
  if (months < 42) return 12
  if (months < 54) return 14
  if (months < 66) return 16
  if (months < 78) return 18
  return 20
}

/** Firestoreはundefinedな値を持つフィールドを許可しないため、書き込み前に取り除く */
function stripUndefined<T extends object>(obj: T): Partial<T> {
  const result: Partial<T> = {}
  for (const key of Object.keys(obj) as (keyof T)[]) {
    if (obj[key] !== undefined) result[key] = obj[key]
  }
  return result
}

const AUTH_ERRORS: Record<string, string> = {
  EMAIL_EXISTS: 'このメールアドレスはすでに使用されています',
  WEAK_PASSWORD__PASSWORD_SHOULD_BE_AT_LEAST_6_CHARACTERS: 'パスワードは6文字以上にしてください',
  INVALID_EMAIL: 'メールアドレスの形式が正しくありません',
}

let _usersLoadedKey = ''

export const useUsers = () => {
  const { isAdmin, currentUser } = useAuth()
  const users = useState<UserRecord[]>('users:list', () => [])
  const usersLoaded = useState<boolean>('users:loaded', () => false)

  async function loadUsers(force = false) {
    const uid = currentUser.value?.uid ?? ''
    const key = `${uid}:${isAdmin.value}`
    // ログアウト→別アカウントでログインし直した場合でも確実に再取得する
    // （usersLoaded だけで判定すると、前のユーザーで取得済みのフラグが残ってしまい
    //   新しいユーザー・権限でのデータが反映されない不具合があった）
    if (usersLoaded.value && _usersLoadedKey === key && !force) return

    if (isAdmin.value) {
      // 管理者は全スタッフ分を取得
      const snap = await getDocs(collection(db, 'users'))
      users.value = snap.docs.map(d => ({ uid: d.id, ...d.data() } as UserRecord))
    } else {
      // スタッフは自分自身のレコードのみ取得可能（Firestoreルール上、全件listはできないため）
      if (!uid) return
      const snap = await getDoc(doc(db, 'users', uid))
      users.value = snap.exists() ? [{ uid: snap.id, ...snap.data() } as UserRecord] : []
    }
    usersLoaded.value = true
    _usersLoadedKey = key
  }

  // 認証解決がページマウントより遅れても、別ユーザーへの切り替えでも確実に読み込まれるようにする
  watchEffect(() => {
    const uid = currentUser.value?.uid ?? ''
    if (currentUser.value && _usersLoadedKey !== `${uid}:${isAdmin.value}`) loadUsers()
  })

  async function updateUser(uid: string, data: Partial<Omit<UserRecord, 'uid'>>) {
    await updateDoc(doc(db, 'users', uid), stripUndefined(data) as Record<string, unknown>)
    const idx = users.value.findIndex(u => u.uid === uid)
    if (idx >= 0) Object.assign(users.value[idx], data)
  }

  async function removeUser(uid: string) {
    await deleteDoc(doc(db, 'users', uid))
    users.value = users.value.filter(u => u.uid !== uid)
  }

  async function createUser(
    email: string,
    password: string,
    profile: { name: string; staffName: string; role: 'admin' | 'user'; hireDate?: string; leaveTotal?: number; leaveUsed?: number }
  ) {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, returnSecureToken: false }),
      }
    )
    const data = await res.json()
    if (!res.ok) {
      const msg = data.error?.message ?? ''
      throw new Error(AUTH_ERRORS[msg] ?? msg ?? 'ユーザー作成に失敗しました')
    }
    const uid: string = data.localId
    const record: UserRecord = { uid, email, ...profile }
    await setDoc(doc(db, 'users', uid), stripUndefined({ email, ...profile }))
    users.value.push(record)
    return uid
  }

  // 同じスタッフ名で管理者権限・スタッフ権限の2アカウントを持つ場合があるため重複を除去する
  const staffNames = computed(() =>
    Array.from(new Set(users.value.map(u => u.staffName).filter(Boolean))).sort()
  )

  return { users, loadUsers, updateUser, removeUser, createUser, staffNames }
}
