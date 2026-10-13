import {
  collection, query, orderBy, onSnapshot, addDoc, updateDoc, deleteDoc, doc, where, getDocs,
} from 'firebase/firestore'
import { db } from '~/plugins/firebase.client'

export type AnnouncementAudience = 'all' | 'admin' | 'user' | 'custom'

export interface AnnouncementDoc {
  id: string
  title: string
  bodyHtml: string
  audience: AnnouncementAudience
  audienceStaffNames?: string[]
  active: boolean
  completed?: boolean
  authorUid: string
  authorName: string
  createdAt: string
  updatedAt?: string
}

let _unsub: (() => void) | null = null
let _listenKey = ''

export const useAnnouncements = () => {
  const { currentUser, isAdmin, userProfile } = useAuth()
  const announcements = useState<AnnouncementDoc[]>('announcements:list', () => [])
  const loading = useState<boolean>('announcements:loading', () => false)
  const readIds = useState<Set<string>>('announcements:readIds', () => new Set())

  function startListening() {
    const uid = currentUser.value?.uid ?? ''
    const key = `${uid}:${isAdmin.value}`
    if (_listenKey === key && _unsub) return

    _unsub?.()
    _unsub = null
    _listenKey = key

    if (!uid) return
    loading.value = true

    // 管理者は非表示のものも管理画面で扱うため全件、スタッフは表示中のもののみ
    const col = collection(db, 'announcements')
    const q = isAdmin.value
      ? query(col, orderBy('createdAt', 'desc'))
      : query(col, where('active', '==', true))

    _unsub = onSnapshot(q, (snap) => {
      announcements.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as AnnouncementDoc))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      loading.value = false
    }, (err) => {
      console.error('announcements listen error:', err)
      loading.value = false
    })

    loadReadIds()
  }

  watchEffect(() => {
    if (currentUser.value) startListening()
  })

  async function loadReadIds() {
    const uid = currentUser.value?.uid
    if (!uid) return
    const snap = await getDocs(query(collection(db, 'announcementReads'), where('uid', '==', uid)))
    readIds.value = new Set(snap.docs.map(d => (d.data().announcementId as string)))
  }

  function isRead(id: string): boolean {
    return readIds.value.has(id)
  }

  async function markRead(id: string) {
    const uid = currentUser.value?.uid
    if (!uid || readIds.value.has(id)) return
    readIds.value.add(id)
    readIds.value = new Set(readIds.value)
    await addDoc(collection(db, 'announcementReads'), {
      announcementId: id,
      uid,
      readAt: new Date().toISOString(),
    })
  }

  /** ロール・個別指定に基づき、自分に表示すべきお知らせかどうか判定する */
  function isForMe(a: AnnouncementDoc): boolean {
    if (!a.active || a.completed) return false
    if (a.audience === 'all') return true
    if (a.audience === 'admin') return isAdmin.value
    if (a.audience === 'user') return !isAdmin.value
    if (a.audience === 'custom') return (a.audienceStaffNames ?? []).includes(userProfile.value?.staffName ?? '')
    return false
  }

  const myAnnouncements = computed(() => announcements.value.filter(isForMe))
  const unreadAnnouncements = computed(() => myAnnouncements.value.filter(a => !isRead(a.id)))

  async function createAnnouncement(data: Omit<AnnouncementDoc, 'id' | 'createdAt'>) {
    await addDoc(collection(db, 'announcements'), {
      ...data,
      createdAt: new Date().toISOString(),
    })
  }

  async function updateAnnouncement(id: string, data: Partial<Omit<AnnouncementDoc, 'id'>>) {
    await updateDoc(doc(db, 'announcements', id), {
      ...data,
      updatedAt: new Date().toISOString(),
    })
  }

  async function deleteAnnouncement(id: string) {
    await deleteDoc(doc(db, 'announcements', id))
  }

  return {
    announcements, myAnnouncements, unreadAnnouncements, loading,
    startListening, isRead, markRead,
    createAnnouncement, updateAnnouncement, deleteAnnouncement,
  }
}
