import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getMessaging, isSupported, type Messaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyAjczSlMbbtUk4-fqNwFCglTAr8DHHSseA',
  authDomain: 'globalmanage-e324b.firebaseapp.com',
  projectId: 'globalmanage-e324b',
  storageBucket: 'globalmanage-e324b.firebasestorage.app',
  messagingSenderId: '345729592199',
  appId: '1:345729592199:web:c11c85bd5e0775fb374122',
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)
auth.languageCode = 'ja'
export const db = getFirestore(app)
export const storage = getStorage(app)

// FCM messaging インスタンス（遅延初期化）
let _messaging: Messaging | null = null

export async function getMessagingInstance(): Promise<Messaging | null> {
  if (_messaging) return _messaging
  try {
    const supported = await isSupported()
    if (!supported) return null
    _messaging = getMessaging(app)
    return _messaging
  } catch {
    return null
  }
}

export default defineNuxtPlugin(() => {
  return { provide: { auth, db } }
})
