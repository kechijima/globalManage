import {
  collection, query, where, onSnapshot, updateDoc, doc
} from 'firebase/firestore'
import { db } from '~/plugins/firebase.client'

export interface NotificationDoc {
  id: string
  userId?: string
  targetRole?: string
  actorUid?: string
  staffName?: string
  handledBy?: string
  type: string
  title: string
  body: string
  read: boolean
  createdAt: string
  link?: string
}

let _unsubUser: (() => void) | null = null
let _unsubAdmin: (() => void) | null = null
let _listenKey = ''
const _userMap = new Map<string, NotificationDoc>()
const _adminMap = new Map<string, NotificationDoc>()

export const useNotifications = () => {
  const { currentUser, isAdmin } = useAuth()
  const notifications = useState<NotificationDoc[]>('notif:list', () => [])
  const seenIds = useState<Set<string>>('notif:seen', () => new Set())

  const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

  function _rebuild() {
    const all = new Map([..._userMap, ..._adminMap])
    notifications.value = Array.from(all.values())
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  }

  function startListening() {
    if (!currentUser.value) return
    const uid = currentUser.value.uid
    const admin = isAdmin.value
    const key = `${uid}:${admin}`
    if (_listenKey === key) return

    _unsubUser?.()
    _unsubAdmin?.()
    _unsubUser = null
    _unsubAdmin = null
    _listenKey = ''
    _userMap.clear()
    _adminMap.clear()
    notifications.value = []
    seenIds.value = new Set()

    _listenKey = key

    // ユーザー個人宛通知
    _unsubUser = onSnapshot(
      query(collection(db, 'notifications'), where('userId', '==', uid)),
      (snap) => {
        _userMap.clear()
        for (const d of snap.docs) _userMap.set(d.id, { id: d.id, ...d.data() } as NotificationDoc)
        _rebuild()

        const newUnread = snap.docs
          .map(d => ({ id: d.id, ...d.data() } as NotificationDoc))
          .filter(n => !n.read && !seenIds.value.has(n.id))
        for (const notif of newUnread) _showBrowserNotif(notif)
        snap.docs.forEach(d => seenIds.value.add(d.id))
      },
      err => console.error('notif user listen error:', err)
    )

    // 管理者ブロードキャスト通知（管理者のみ、自分自身が行った操作は除外）
    if (admin) {
      _unsubAdmin = onSnapshot(
        query(collection(db, 'notifications'), where('targetRole', '==', 'admin')),
        (snap) => {
          _adminMap.clear()
          for (const d of snap.docs) {
            const notif = { id: d.id, ...d.data() } as NotificationDoc
            if (notif.actorUid === uid) continue
            _adminMap.set(d.id, notif)
          }
          _rebuild()

          const newUnread = snap.docs
            .map(d => ({ id: d.id, ...d.data() } as NotificationDoc))
            .filter(n => n.actorUid !== uid && !n.read && !seenIds.value.has(n.id))
          for (const notif of newUnread) _showBrowserNotif(notif)
          snap.docs.forEach(d => seenIds.value.add(d.id))
        },
        err => console.error('notif admin listen error:', err)
      )
    }
  }

  function stopListening() {
    _unsubUser?.()
    _unsubAdmin?.()
    _unsubUser = null
    _unsubAdmin = null
    _listenKey = ''
    _userMap.clear()
    _adminMap.clear()
  }

  async function markRead(id: string) {
    await updateDoc(doc(db, 'notifications', id), { read: true })
  }

  async function markAllRead() {
    const unread = notifications.value.filter(n => !n.read)
    await Promise.all(unread.map(n => updateDoc(doc(db, 'notifications', n.id), { read: true })))
  }

  function _showBrowserNotif(notif: NotificationDoc) {
    if (typeof window === 'undefined') return
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(notif.title, { body: notif.body, icon: '/icons/icon-192.png' })
    }
  }

  async function requestPermission(): Promise<NotificationPermission> {
    if (typeof window === 'undefined' || !('Notification' in window)) return 'denied'
    if (Notification.permission === 'granted') return 'granted'
    return await Notification.requestPermission()
  }

  return { notifications, unreadCount, startListening, stopListening, markRead, markAllRead, requestPermission }
}
