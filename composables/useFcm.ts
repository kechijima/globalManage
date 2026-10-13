import { getToken } from 'firebase/messaging'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { db, getMessagingInstance } from '~/plugins/firebase.client'

const VAPID_KEY = 'BK4ozyCE6I8eDuslk8PaNZvaSHZHIpT9zg24ku3V1jiljTxhUyoS6Cr366B6tbg9fiaD9blIkZW8WVbQrqT61x4'

export type FcmPermissionState = 'unsupported' | 'default' | 'granted' | 'denied'

export const useFcm = () => {
  const { currentUser } = useAuth()
  const permissionState = useState<FcmPermissionState>('fcm:permission', () => 'default')
  const registering = useState<boolean>('fcm:registering', () => false)
  const lastError = useState<string>('fcm:lastError', () => '')

  function isNotificationSupported(): boolean {
    return typeof window !== 'undefined' && 'Notification' in window && 'serviceWorker' in navigator
  }

  function refreshPermissionState() {
    if (!isNotificationSupported()) {
      permissionState.value = 'unsupported'
      return
    }
    permissionState.value = Notification.permission as FcmPermissionState
  }

  async function _register(): Promise<boolean> {
    if (!currentUser.value) return false
    if (!isNotificationSupported()) {
      permissionState.value = 'unsupported'
      return false
    }

    try {
      const swReg = await navigator.serviceWorker.register('/firebase-messaging-sw.js')
      await navigator.serviceWorker.ready

      const messaging = await getMessagingInstance()
      if (!messaging) {
        lastError.value = 'この端末・ブラウザはプッシュ通知に対応していません。'
        return false
      }

      const token = await getToken(messaging, {
        vapidKey: VAPID_KEY,
        serviceWorkerRegistration: swReg,
      })

      if (token) {
        // 複数端末（PC・スマホなど）で同時に通知を受け取れるよう、配列に追加する
        // （単一フィールドに上書きすると、後からログインした端末のみに通知が届いてしまう）
        await updateDoc(doc(db, 'users', currentUser.value.uid), {
          fcmTokens: arrayUnion(token),
          fcmToken: token, // 後方互換用（旧フィールド）
        })
        return true
      }
      lastError.value = '通知トークンを取得できませんでした。'
      return false
    } catch (err) {
      console.warn('[FCM] トークン登録失敗:', err)
      lastError.value = '通知の登録中にエラーが発生しました。'
      return false
    }
  }

  /** アプリ起動時などに自動で呼ぶ。既に許可済みの場合のみ静かに再登録する（許可ダイアログは出さない） */
  async function registerFcmToken(): Promise<void> {
    if (!currentUser.value) return
    if (!isNotificationSupported()) {
      permissionState.value = 'unsupported'
      return
    }
    refreshPermissionState()
    if (Notification.permission !== 'granted') return
    await _register()
  }

  /** ユーザーの操作（タップ）から呼ぶ。許可ダイアログを表示し、許可されればトークンを登録する */
  async function enableNotifications(): Promise<boolean> {
    lastError.value = ''
    if (!isNotificationSupported()) {
      permissionState.value = 'unsupported'
      lastError.value = 'この端末・ブラウザはプッシュ通知に対応していません。'
      return false
    }
    if (Notification.permission === 'denied') {
      permissionState.value = 'denied'
      lastError.value = 'ブラウザの設定で通知がブロックされています。設定から許可してください。'
      return false
    }

    registering.value = true
    try {
      const permission = await Notification.requestPermission()
      refreshPermissionState()
      if (permission !== 'granted') return false
      return await _register()
    } finally {
      registering.value = false
    }
  }

  return {
    permissionState,
    registering,
    lastError,
    refreshPermissionState,
    registerFcmToken,
    enableNotifications,
  }
}
