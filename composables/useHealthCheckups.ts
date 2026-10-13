import {
  collection, query, orderBy, onSnapshot, addDoc, updateDoc, deleteDoc, doc, setDoc, where,
} from 'firebase/firestore'
import { db } from '~/plugins/firebase.client'

export interface HealthCheckupEvent {
  id: string
  title: string
  description?: string
  audience: 'all' | 'custom'
  audienceStaffNames?: string[]
  deadlineDate?: string
  active: boolean
  completed?: boolean
  authorUid: string
  authorName: string
  createdAt: string
}

export interface HealthCheckupResponse {
  id: string
  eventId: string
  userId: string
  staffName: string
  reservationDate?: string
  examDate?: string
  resultFileUrl?: string
  resultFileName?: string
  updatedAt: string
}

export type HealthCheckupStatus = 'none' | 'reserved' | 'examined' | 'submitted'

export function getHealthCheckupStatus(r?: HealthCheckupResponse | null): HealthCheckupStatus {
  if (!r) return 'none'
  if (r.resultFileUrl) return 'submitted'
  if (r.examDate) return 'examined'
  if (r.reservationDate) return 'reserved'
  return 'none'
}

export const healthCheckupStatusLabels: Record<HealthCheckupStatus, string> = {
  none: '未予約',
  reserved: '予約済',
  examined: '受診済',
  submitted: '結果提出済',
}

/** Firestoreはundefinedな値を持つフィールドを許可しないため、書き込み前に取り除く */
function stripUndefined<T extends object>(obj: T): Partial<T> {
  const result: Partial<T> = {}
  for (const key of Object.keys(obj) as (keyof T)[]) {
    if (obj[key] !== undefined) result[key] = obj[key]
  }
  return result
}

let _unsubEvents: (() => void) | null = null
let _unsubResponses: (() => void) | null = null
let _listenKey = ''

export const useHealthCheckups = () => {
  const { currentUser, isAdmin, userProfile } = useAuth()
  const events = useState<HealthCheckupEvent[]>('healthCheckups:events', () => [])
  const responses = useState<HealthCheckupResponse[]>('healthCheckups:responses', () => [])
  const loading = useState<boolean>('healthCheckups:loading', () => false)

  function startListening() {
    const uid = currentUser.value?.uid ?? ''
    const key = `${uid}:${isAdmin.value}`
    if (_listenKey === key && _unsubEvents) return

    _unsubEvents?.()
    _unsubResponses?.()
    _unsubEvents = null
    _unsubResponses = null
    _listenKey = key

    if (!uid) return
    loading.value = true

    _unsubEvents = onSnapshot(
      query(collection(db, 'healthCheckupEvents'), orderBy('createdAt', 'desc')),
      (snap) => {
        events.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as HealthCheckupEvent))
        loading.value = false
      },
      (err) => { console.error('healthCheckupEvents listen error:', err); loading.value = false }
    )

    const responsesCol = collection(db, 'healthCheckupResponses')
    const responsesQuery = isAdmin.value ? responsesCol : query(responsesCol, where('userId', '==', uid))
    _unsubResponses = onSnapshot(responsesQuery, (snap) => {
      responses.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as HealthCheckupResponse))
    }, (err) => console.error('healthCheckupResponses listen error:', err))
  }

  watchEffect(() => {
    if (currentUser.value) startListening()
  })

  function isForMe(e: HealthCheckupEvent): boolean {
    if (!e.active || e.completed) return false
    if (e.audience === 'all') return true
    return (e.audienceStaffNames ?? []).includes(userProfile.value?.staffName ?? '')
  }

  const myEvents = computed(() => events.value.filter(isForMe))

  function myResponseFor(eventId: string): HealthCheckupResponse | undefined {
    const uid = currentUser.value?.uid
    return responses.value.find(r => r.eventId === eventId && r.userId === uid)
  }

  function responsesForEvent(eventId: string): HealthCheckupResponse[] {
    return responses.value.filter(r => r.eventId === eventId)
  }

  async function createEvent(data: Omit<HealthCheckupEvent, 'id' | 'createdAt'>) {
    await addDoc(collection(db, 'healthCheckupEvents'), stripUndefined({
      ...data,
      createdAt: new Date().toISOString(),
    }))
  }

  async function updateEvent(id: string, data: Partial<Omit<HealthCheckupEvent, 'id'>>) {
    await updateDoc(doc(db, 'healthCheckupEvents', id), stripUndefined(data))
  }

  async function deleteEvent(id: string) {
    await deleteDoc(doc(db, 'healthCheckupEvents', id))
  }

  /** スタッフ自身の回答（予約日・受診日・結果ファイル）を作成・更新する */
  async function saveMyResponse(eventId: string, data: Partial<Pick<HealthCheckupResponse, 'reservationDate' | 'examDate' | 'resultFileUrl' | 'resultFileName'>>) {
    if (!currentUser.value) return
    const uid = currentUser.value.uid
    const docId = `${eventId}_${uid}`
    await setDoc(doc(db, 'healthCheckupResponses', docId), {
      eventId,
      userId: uid,
      staffName: userProfile.value?.staffName ?? '',
      ...data,
      updatedAt: new Date().toISOString(),
    }, { merge: true })

    const event = events.value.find(e => e.id === eventId)
    await addDoc(collection(db, 'notifications'), {
      targetRole: 'admin',
      actorUid: uid,
      type: 'health_checkup_update',
      title: '健康診断の入力が更新されました',
      body: `${userProfile.value?.staffName ?? ''}さんが「${event?.title ?? '健康診断'}」の情報を入力しました。`,
      read: false,
      createdAt: new Date().toISOString(),
      link: '/health-checkups',
    })
  }

  return {
    events, myEvents, responses, loading,
    startListening, myResponseFor, responsesForEvent,
    createEvent, updateEvent, deleteEvent, saveMyResponse,
  }
}
