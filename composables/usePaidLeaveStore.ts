import {
  collection, query, where, orderBy, onSnapshot, addDoc, updateDoc, doc
} from 'firebase/firestore'
import { db } from '~/plugins/firebase.client'

export interface PaidLeaveDoc {
  id: string
  userId: string
  staffName: string
  type: string
  startDate: string
  endDate: string
  days: number
  reason: string
  status: 'pending' | 'approved' | 'rejected'
  appliedAt: string
  rejectionReason?: string
  adminNote?: string
  handledBy?: string
}

let _unsubLeave: (() => void) | null = null
let _listenKey = ''

export const usePaidLeaveStore = () => {
  const { isAdmin, currentUser, userProfile } = useAuth()
  const leaves = useState<PaidLeaveDoc[]>('paidLeave:leaves', () => [])
  const loading = useState<boolean>('paidLeave:loading', () => false)

  function startListening() {
    const uid = currentUser.value?.uid ?? ''
    const admin = isAdmin.value
    const key = `${uid}:${admin}`

    if (_unsubLeave && _listenKey === key) return

    _unsubLeave?.()
    _unsubLeave = null
    _listenKey = ''
    leaves.value = []

    if (!uid) {
      loading.value = false
      return
    }

    loading.value = true
    _listenKey = key

    const col = collection(db, 'paidLeave')
    const q = admin
      ? query(col, orderBy('appliedAt', 'desc'))
      : query(col, where('userId', '==', uid))

    _unsubLeave = onSnapshot(q, (snap) => {
      leaves.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as PaidLeaveDoc))
        .sort((a, b) => b.appliedAt.localeCompare(a.appliedAt))
      loading.value = false
    }, (err) => {
      console.error('paidLeave listen error:', err)
      loading.value = false
    })
  }

  // 認証解決がページマウントより遅れても確実に購読されるようにする
  watchEffect(() => {
    if (currentUser.value) startListening()
  })

  function stopListening() {
    _unsubLeave?.()
    _unsubLeave = null
    _listenKey = ''
  }

  async function createPaidLeave(data: Omit<PaidLeaveDoc, 'id'>) {
    await addDoc(collection(db, 'paidLeave'), data)
    await addDoc(collection(db, 'notifications'), {
      targetRole: 'admin',
      actorUid: data.userId,
      type: 'leave_new',
      title: '有給申請が提出されました',
      body: `${data.staffName}さんが有給申請（${data.days}日）を提出しました。`,
      staffName: data.staffName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/paid-leave',
    })
  }

  async function updateLeave(id: string, data: Record<string, unknown>) {
    await updateDoc(doc(db, 'paidLeave', id), data)
  }

  async function approveLeave(id: string, userId: string, staffName: string) {
    const adminName = userProfile.value?.staffName ?? '管理者'
    await updateDoc(doc(db, 'paidLeave', id), { status: 'approved', rejectionReason: null, handledBy: adminName })
    await addDoc(collection(db, 'notifications'), {
      userId, staffName,
      type: 'leave_approved',
      title: '有給申請が承認されました',
      body: `申請した有給が${adminName}に承認されました。`,
      handledBy: adminName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/paid-leave',
    })
    await addDoc(collection(db, 'notifications'), {
      targetRole: 'admin',
      actorUid: currentUser.value?.uid,
      type: 'audit_leave_approved',
      title: '有給申請を承認しました',
      body: `${staffName}さんの有給申請を${adminName}が承認しました。`,
      staffName,
      handledBy: adminName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/paid-leave',
    })
  }

  async function rejectLeave(id: string, reason: string, userId: string, staffName: string) {
    const adminName = userProfile.value?.staffName ?? '管理者'
    await updateDoc(doc(db, 'paidLeave', id), { status: 'rejected', rejectionReason: reason, handledBy: adminName })
    await addDoc(collection(db, 'notifications'), {
      userId, staffName,
      type: 'leave_rejected',
      title: '有給申請が却下されました',
      body: `却下理由: ${reason}`,
      handledBy: adminName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/paid-leave',
    })
    await addDoc(collection(db, 'notifications'), {
      targetRole: 'admin',
      actorUid: currentUser.value?.uid,
      type: 'audit_leave_rejected',
      title: '有給申請を却下しました',
      body: `${staffName}さんの有給申請を${adminName}が却下しました。理由: ${reason}`,
      staffName,
      handledBy: adminName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/paid-leave',
    })
  }

  async function resetLeave(id: string) {
    await updateDoc(doc(db, 'paidLeave', id), { status: 'pending', rejectionReason: null, handledBy: null })
  }

  return {
    leaves, loading,
    startListening, stopListening,
    createPaidLeave, updateLeave, approveLeave, rejectLeave, resetLeave,
  }
}
