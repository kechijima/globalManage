import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '~/plugins/firebase.client'

export interface UserProfile {
  name: string
  role: 'admin' | 'user'
  staffName: string
}

let unsubscribeAuth: (() => void) | null = null

export const useAuth = () => {
  const currentUser = useState<User | null>('auth:currentUser', () => null)
  const userProfile = useState<UserProfile | null>('auth:userProfile', () => null)
  const authLoading = useState<boolean>('auth:loading', () => true)

  const isLoggedIn = computed(() => currentUser.value !== null)
  const isAdmin = computed(() => userProfile.value?.role === 'admin')

  async function loadUserProfile(uid: string) {
    try {
      const snap = await getDoc(doc(db, 'users', uid))
      if (snap.exists()) {
        userProfile.value = snap.data() as UserProfile
      } else {
        userProfile.value = { name: 'ユーザー', role: 'user', staffName: '' }
      }
    } catch {
      userProfile.value = { name: 'ユーザー', role: 'user', staffName: '' }
    }
  }

  function initAuth() {
    if (unsubscribeAuth) return

    authLoading.value = true

    try {
      unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
        currentUser.value = user
        if (user) {
          await loadUserProfile(user.uid)
        } else {
          userProfile.value = null
        }
        authLoading.value = false
      })
    } catch {
      authLoading.value = false
    }
  }

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function logout() {
    // currentUser / userProfile のクリアは onAuthStateChanged のコールバックが行う。
    // ここでリスナーを破棄してしまうと、再ログインしても画面側が新しいログイン状態を
    // 検知できなくなる（ページを再読み込みするまで切り替わらない不具合の原因だった）。
    await signOut(auth)
  }

  return {
    currentUser,
    userProfile,
    authLoading,
    isLoggedIn,
    isAdmin,
    initAuth,
    login,
    logout,
  }
}
