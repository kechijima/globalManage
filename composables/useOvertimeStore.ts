import {
  collection, query, where, orderBy, onSnapshot,
  addDoc, updateDoc, deleteDoc, doc,
} from 'firebase/firestore'
import { db } from '~/plugins/firebase.client'

export interface OvertimeDoc {
  id: string
  userId: string
  staffName: string
  date: string
  startTime: string
  endTime: string
  totalMinutes: number
  nightMinutes: number
  reason: string
  status: 'pending' | 'approved' | 'rejected'
  appliedAt: string
  rejectionReason?: string
  handledBy?: string
}

function timeToMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

export function calcTotalMinutes(startTime: string, endTime: string): number {
  const startMin = timeToMinutes(startTime)
  const endMin = timeToMinutes(endTime)
  if (endMin > startMin) return endMin - startMin
  return (24 * 60 - startMin) + endMin
}

export function calcNightMinutes(_date: string, startTime: string, endTime: string): number {
  const startMin = timeToMinutes(startTime)
  let endMin = timeToMinutes(endTime)
  if (endMin <= startMin) endMin += 24 * 60

  const nightRanges: [number, number][] = [[0, 300], [1320, 1740]]
  let nightMin = 0
  for (const [ns, ne] of nightRanges) {
    const overlapStart = Math.max(startMin, ns)
    const overlapEnd = Math.min(endMin, ne)
    if (overlapEnd > overlapStart) nightMin += overlapEnd - overlapStart
  }
  return nightMin
}

export function formatMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (m === 0) return `${h}時間`
  return `${h}時間${m}分`
}

let _unsubOvertime: (() => void) | null = null
let _listenKey = ''

export const useOvertimeStore = () => {
  const { isAdmin, currentUser } = useAuth()
  const overtimes = useState<OvertimeDoc[]>('overtime:list', () => [])
  const loading = useState<boolean>('overtime:loading', () => false)

  function startListening() {
    const uid = currentUser.value?.uid ?? ''
    const key = `${uid}:${isAdmin.value}`
    if (_listenKey === key && _unsubOvertime) return

    _unsubOvertime?.()
    _unsubOvertime = null
    _listenKey = key

    if (!uid) return
    loading.value = true

    const col = collection(db, 'overtime')
    const q = isAdmin.value
      ? query(col, orderBy('appliedAt', 'desc'))
      : query(col, where('userId', '==', uid))

    _unsubOvertime = onSnapshot(q, (snap) => {
      overtimes.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as OvertimeDoc))
        .sort((a, b) => b.appliedAt.localeCompare(a.appliedAt))
      loading.value = false
    }, (err) => {
      console.error('overtime listen error:', err)
      loading.value = false
    })
  }

  // 認証解決がページマウントより遅れても確実に購読されるようにする
  watchEffect(() => {
    if (currentUser.value) startListening()
  })

  function stopListening() {
    _unsubOvertime?.()
    _unsubOvertime = null
    _listenKey = ''
  }

  async function createOvertime(data: Omit<OvertimeDoc, 'id'>) {
    await addDoc(collection(db, 'overtime'), data)
    const h = Math.floor(data.totalMinutes / 60)
    const m = data.totalMinutes % 60
    const timeLabel = m === 0 ? `${h}時間` : `${h}時間${m}分`
    await addDoc(collection(db, 'notifications'), {
      targetRole: 'admin',
      actorUid: data.userId,
      type: 'overtime_new',
      title: '残業申請が提出されました',
      body: `${data.staffName}さんが残業申請（${timeLabel}）を提出しました。`,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/overtime',
    })
  }

  async function approveOvertime(id: string, userId: string, staffName: string, adminStaffName: string) {
    await updateDoc(doc(db, 'overtime', id), {
      status: 'approved',
      rejectionReason: null,
      handledBy: adminStaffName,
    })
    await addDoc(collection(db, 'notifications'), {
      userId,
      staffName,
      type: 'overtime_approved',
      title: '残業申請が承認されました',
      body: '申請した残業が承認されました。',
      handledBy: adminStaffName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/overtime',
    })
    await addDoc(collection(db, 'notifications'), {
      targetRole: 'admin',
      actorUid: currentUser.value?.uid,
      type: 'audit_overtime_approved',
      title: '残業申請を承認しました',
      body: `${adminStaffName}が${staffName}さんの残業申請を承認しました。`,
      staffName,
      handledBy: adminStaffName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/overtime',
    })
  }

  async function rejectOvertime(id: string, reason: string, userId: string, staffName: string, adminStaffName: string) {
    await updateDoc(doc(db, 'overtime', id), {
      status: 'rejected',
      rejectionReason: reason,
      handledBy: adminStaffName,
    })
    await addDoc(collection(db, 'notifications'), {
      userId,
      staffName,
      type: 'overtime_rejected',
      title: '残業申請が却下されました',
      body: `却下理由: ${reason}`,
      handledBy: adminStaffName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/overtime',
    })
    await addDoc(collection(db, 'notifications'), {
      targetRole: 'admin',
      actorUid: currentUser.value?.uid,
      type: 'audit_overtime_rejected',
      title: '残業申請を却下しました',
      body: `${adminStaffName}が${staffName}さんの残業申請を却下しました。理由: ${reason}`,
      staffName,
      handledBy: adminStaffName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/overtime',
    })
  }

  async function updateOvertime(id: string, data: Record<string, unknown>) {
    await updateDoc(doc(db, 'overtime', id), data)
  }

  async function deleteOvertime(id: string) {
    await deleteDoc(doc(db, 'overtime', id))
  }

  return {
    overtimes,
    loading,
    startListening,
    stopListening,
    createOvertime,
    approveOvertime,
    rejectOvertime,
    updateOvertime,
    deleteOvertime,
  }
}
