import {
  collection, query, where, orderBy, onSnapshot, addDoc, updateDoc, doc
} from 'firebase/firestore'
import { db } from '~/plugins/firebase.client'
import type { ExpenseLineItem } from '~/composables/useMockData'

export interface ExpenseDoc {
  id: string
  userId: string
  staffName: string
  items: ExpenseLineItem[]
  totalAmount: number
  note: string
  hasReceipt: boolean
  receiptUrls?: string[]
  status: 'pending' | 'approved' | 'rejected'
  appliedAt: string
  rejectionReason?: string
  adminNote?: string
  handledBy?: string
}

let _unsubExpense: (() => void) | null = null
let _listenKey = ''

export const useExpenseStore = () => {
  const { isAdmin, currentUser, userProfile } = useAuth()
  const expenses = useState<ExpenseDoc[]>('expense:expenses', () => [])
  const loading = useState<boolean>('expense:loading', () => false)

  function startListening() {
    const uid = currentUser.value?.uid ?? ''
    const admin = isAdmin.value
    const key = `${uid}:${admin}`

    if (_unsubExpense && _listenKey === key) return

    _unsubExpense?.()
    _unsubExpense = null
    _listenKey = ''
    expenses.value = []

    if (!uid) {
      loading.value = false
      return
    }

    loading.value = true
    _listenKey = key

    const col = collection(db, 'expenses')
    const q = admin
      ? query(col, orderBy('appliedAt', 'desc'))
      : query(col, where('userId', '==', uid))

    _unsubExpense = onSnapshot(q, (snap) => {
      expenses.value = snap.docs
        .map(d => ({ id: d.id, ...d.data() } as ExpenseDoc))
        .sort((a, b) => b.appliedAt.localeCompare(a.appliedAt))
      loading.value = false
    }, (err) => {
      console.error('expense listen error:', err)
      loading.value = false
    })
  }

  // 認証解決がページマウントより遅れても確実に購読されるようにする
  watchEffect(() => {
    if (currentUser.value) startListening()
  })

  function stopListening() {
    _unsubExpense?.()
    _unsubExpense = null
    _listenKey = ''
  }

  async function createExpense(data: Omit<ExpenseDoc, 'id'>) {
    await addDoc(collection(db, 'expenses'), data)
    await addDoc(collection(db, 'notifications'), {
      targetRole: 'admin',
      actorUid: data.userId,
      type: 'expense_new',
      title: '経費申請が提出されました',
      body: `${data.staffName}さんが経費申請（¥${data.totalAmount.toLocaleString()}）を提出しました。`,
      staffName: data.staffName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/expense',
    })
  }

  async function updateExpense(id: string, data: Record<string, unknown>) {
    await updateDoc(doc(db, 'expenses', id), data)
  }

  async function approveExpense(id: string, userId: string, staffName: string) {
    const adminName = userProfile.value?.staffName ?? '管理者'
    await updateDoc(doc(db, 'expenses', id), { status: 'approved', rejectionReason: null, handledBy: adminName })
    await addDoc(collection(db, 'notifications'), {
      userId, staffName,
      type: 'expense_approved',
      title: '経費申請が承認されました',
      body: `申請した経費が${adminName}に承認されました。`,
      handledBy: adminName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/expense',
    })
    await addDoc(collection(db, 'notifications'), {
      targetRole: 'admin',
      actorUid: currentUser.value?.uid,
      type: 'audit_expense_approved',
      title: '経費申請を承認しました',
      body: `${staffName}さんの経費申請を${adminName}が承認しました。`,
      staffName,
      handledBy: adminName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/expense',
    })
  }

  async function rejectExpense(id: string, reason: string, userId: string, staffName: string) {
    const adminName = userProfile.value?.staffName ?? '管理者'
    await updateDoc(doc(db, 'expenses', id), { status: 'rejected', rejectionReason: reason, handledBy: adminName })
    await addDoc(collection(db, 'notifications'), {
      userId, staffName,
      type: 'expense_rejected',
      title: '経費申請が却下されました',
      body: `却下理由: ${reason}`,
      handledBy: adminName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/expense',
    })
    await addDoc(collection(db, 'notifications'), {
      targetRole: 'admin',
      actorUid: currentUser.value?.uid,
      type: 'audit_expense_rejected',
      title: '経費申請を却下しました',
      body: `${staffName}さんの経費申請を${adminName}が却下しました。理由: ${reason}`,
      staffName,
      handledBy: adminName,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/expense',
    })
  }

  async function resetExpense(id: string) {
    await updateDoc(doc(db, 'expenses', id), { status: 'pending', rejectionReason: null, handledBy: null })
  }

  return {
    expenses, loading,
    startListening, stopListening,
    createExpense, updateExpense, approveExpense, rejectExpense, resetExpense,
  }
}
