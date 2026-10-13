import { collection, getDocs, doc, updateDoc, addDoc, deleteDoc } from 'firebase/firestore'
import { db } from '~/plugins/firebase.client'

async function notifyAdmins(title: string, body: string, link = '/vehicle') {
  await addDoc(collection(db, 'notifications'), {
    targetRole: 'admin',
    type: 'vehicle_update',
    title,
    body,
    read: false,
    createdAt: new Date().toISOString(),
    link,
  })
}

export interface InsuranceInfo {
  company: string
  policyNumber: string
  expiry: string
}

export interface ManagedVehicle {
  id: string
  staffName: string
  vehicleName: string
  plate: string
  inspectionExpiry: string
  lastOilChangeDate: string
  lastOilChangeMileage: number
  currentMileage: number
  oilChangeIntervalKm: number
  oilChangeIntervalMonths: number
  // 任意保険情報
  insuranceCompany?: string
  insurancePolicyNumber?: string
  insuranceExpiry?: string
  // 管理者制御アラート
  alertActive?: boolean
  // 書類URL（Firebase Storage）
  docUrls?: { jibaisha?: string; ninin?: string; shaken?: string }
}

export type AlertLevel = 'danger' | 'warning' | 'ok'

let _vehiclesLoadedUid = ''

export const useVehicleManagement = () => {
  const { isAdmin, currentUser } = useAuth()
  const vehicles = useState<ManagedVehicle[]>('vehicles', () => [])
  const vehiclesLoaded = useState<boolean>('vehicles:loaded', () => false)

  async function loadVehicles() {
    const uid = currentUser.value?.uid ?? ''
    // 別アカウントへのログイン切り替え時にも確実に再取得する
    if (vehiclesLoaded.value && _vehiclesLoadedUid === uid) return
    if (!uid) return
    try {
      const snap = await getDocs(collection(db, 'vehicles'))
      vehicles.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as ManagedVehicle))
      vehiclesLoaded.value = true
      _vehiclesLoadedUid = uid
    } catch (e) {
      console.error('車両データの読み込みに失敗しました', e)
    }
  }

  // 認証解決がページマウントより遅れても、別ユーザーへの切り替えでも確実に読み込まれるようにする
  watchEffect(() => {
    if (currentUser.value && _vehiclesLoadedUid !== currentUser.value.uid) loadVehicles()
  })

  function getAlertLevel(v: ManagedVehicle): AlertLevel {
    const now = new Date()
    const daysToInspection = (new Date(v.inspectionExpiry).getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    const lastOilDate = new Date(v.lastOilChangeDate)
    const monthsSinceOil = (now.getFullYear() - lastOilDate.getFullYear()) * 12 + (now.getMonth() - lastOilDate.getMonth())
    const oilKmRatio = (v.currentMileage - v.lastOilChangeMileage) / v.oilChangeIntervalKm

    // 任意保険期限チェック
    const insExpiry = v.insuranceExpiry ? (new Date(v.insuranceExpiry).getTime() - now.getTime()) / (1000 * 60 * 60 * 24) : Infinity

    if (daysToInspection <= 30 || oilKmRatio > 0.9 || insExpiry <= 30) return 'danger'
    if (daysToInspection <= 90 || oilKmRatio > 0.75 || monthsSinceOil >= v.oilChangeIntervalMonths - 1 || insExpiry <= 90) return 'warning'
    return 'ok'
  }

  function getAlertInfo(v: ManagedVehicle) {
    const level = getAlertLevel(v)
    const now = new Date()
    const daysToInspection = Math.ceil((new Date(v.inspectionExpiry).getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    const kmSinceOil = v.currentMileage - v.lastOilChangeMileage
    const oilRemainingKm = v.oilChangeIntervalKm - kmSinceOil
    const messages: string[] = []
    if (daysToInspection <= 90) messages.push(`車検まで${daysToInspection}日`)
    if (kmSinceOil / v.oilChangeIntervalKm > 0.75) messages.push(`オイル交換まで${oilRemainingKm} km`)
    if (v.insuranceExpiry) {
      const insD = Math.ceil((new Date(v.insuranceExpiry).getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      if (insD <= 90) messages.push(`任意保険まで${insD}日`)
    }
    return { level, messages, daysToInspection, oilRemainingKm }
  }

  async function updateMileage(id: string, newMileage: number) {
    const v = vehicles.value.find(x => x.id === id)
    if (v && newMileage > v.currentMileage) {
      v.currentMileage = newMileage
      await updateDoc(doc(db, 'vehicles', id), { currentMileage: newMileage })
      if (!isAdmin.value) {
        await notifyAdmins(
          '走行距離が更新されました',
          `${v.staffName}さんが走行距離を更新しました（${newMileage.toLocaleString()} km）`,
        )
      }
    }
  }

  async function updateInsurance(id: string, data: { insuranceCompany: string; insurancePolicyNumber: string; insuranceExpiry: string }) {
    const v = vehicles.value.find(x => x.id === id)
    if (v) {
      Object.assign(v, data)
      await updateDoc(doc(db, 'vehicles', id), data)
      if (!isAdmin.value) {
        await notifyAdmins(
          '任意保険情報が更新されました',
          `${v.staffName}さんが任意保険情報を更新しました。`,
        )
      }
    }
  }

  async function addVehicle(data: Omit<ManagedVehicle, 'id'>) {
    const ref = await addDoc(collection(db, 'vehicles'), data)
    vehicles.value.push({ id: ref.id, ...data })
  }

  async function updateVehicle(id: string, data: Partial<Omit<ManagedVehicle, 'id'>>) {
    const idx = vehicles.value.findIndex(x => x.id === id)
    if (idx >= 0) Object.assign(vehicles.value[idx], data)
    await updateDoc(doc(db, 'vehicles', id), data as Record<string, unknown>)
  }

  async function deleteVehicle(id: string) {
    await deleteDoc(doc(db, 'vehicles', id))
    vehicles.value = vehicles.value.filter(x => x.id !== id)
  }

  async function toggleAlert(id: string, active: boolean) {
    const v = vehicles.value.find(x => x.id === id)
    if (v) v.alertActive = active
    await updateDoc(doc(db, 'vehicles', id), { alertActive: active })
  }

  async function saveDocUrl(id: string, docType: 'jibaisha' | 'ninin' | 'shaken', url: string) {
    const v = vehicles.value.find(x => x.id === id)
    if (v) {
      if (!v.docUrls) v.docUrls = {}
      v.docUrls[docType] = url
    }
    await updateDoc(doc(db, 'vehicles', id), { [`docUrls.${docType}`]: url })
    if (!isAdmin.value && v) {
      const docLabel = docType === 'jibaisha' ? '自賠責保険証' : docType === 'ninin' ? '任意保険証' : '車検証'
      await notifyAdmins(
        '車両書類がアップロードされました',
        `${v.staffName}さんが${docLabel}をアップロードしました。`,
      )
    }
  }

  async function recordOilChange(id: string, date: string, mileage: number) {
    const v = vehicles.value.find(x => x.id === id)
    if (v) {
      v.lastOilChangeDate = date
      v.lastOilChangeMileage = mileage
      if (mileage > v.currentMileage) v.currentMileage = mileage
      await updateDoc(doc(db, 'vehicles', id), {
        lastOilChangeDate: date,
        lastOilChangeMileage: mileage,
        currentMileage: v.currentMileage,
      })
      if (!isAdmin.value) {
        await notifyAdmins(
          'オイル交換が記録されました',
          `${v.staffName}さんがオイル交換を記録しました（${mileage.toLocaleString()} km）。`,
        )
      }
    }
  }

  const vehiclesWithAlert = computed(() =>
    vehicles.value.map(v => ({ ...v, alertInfo: getAlertInfo(v) }))
  )
  const hasAnyAlert = computed(() => vehiclesWithAlert.value.some(v => v.alertInfo.level !== 'ok'))
  const dangerCount = computed(() => vehiclesWithAlert.value.filter(v => v.alertInfo.level === 'danger').length)
  const warningCount = computed(() => vehiclesWithAlert.value.filter(v => v.alertInfo.level === 'warning').length)

  return {
    vehicles, vehiclesWithAlert, hasAnyAlert, dangerCount, warningCount,
    loadVehicles, addVehicle, updateVehicle, deleteVehicle, toggleAlert, saveDocUrl, updateMileage, updateInsurance, recordOilChange,
    getAlertLevel, getAlertInfo,
  }
}
