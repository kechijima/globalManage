export interface PaidLeave {
  id: number
  name: string
  type: string
  startDate: string
  endDate: string
  days: number
  reason: string
  status: 'pending' | 'approved' | 'rejected'
  appliedAt: string
  remainingDays: number
  rejectionReason?: string
  adminNote?: string
}

export interface ExpenseLineItem {
  receiptDate: string
  accountItem: string
  amount: number
  memo: string
}

export interface Expense {
  id: number
  name: string
  items: ExpenseLineItem[]
  totalAmount: number
  appliedAt: string
  hasReceipt: boolean
  note: string
  status: 'pending' | 'approved' | 'rejected'
  rejectionReason?: string
  adminNote?: string
}

export interface Vehicle {
  id: number
  vehicleName: string
  plate: string
  driver: string
  date: string
  startTime: string
  endTime: string
  destination: string
  distance: number
  purpose: string
  status: 'reserved' | 'in_use' | 'returned'
}

export interface VehicleInfo {
  id: number
  name: string
  plate: string
  type: string
  inspectionDate: string
  insuranceDate: string
  status: 'available' | 'in_use' | 'maintenance'
  mileage: number
}

export interface Billing {
  id: number
  patientName: string
  patientId: string
  month: string
  serviceType: string
  visits: number
  units: number
  unitPrice: number
  amount: number
  insuranceCoverage: number
  selfPay: number
  paymentStatus: 'unpaid' | 'paid' | 'pending'
  insuranceType: string
}

export const usePaidLeave = () => {
  const leaves = ref<PaidLeave[]>([
    { id: 1, name: '西島', type: '有給休暇', startDate: '2026-06-02', endDate: '2026-06-02', days: 1, reason: '私用のため', status: 'pending', appliedAt: '2026-05-20', remainingDays: 10 },
    { id: 2, name: '田中 美咲', type: '有給休暇', startDate: '2026-05-26', endDate: '2026-05-27', days: 2, reason: '家族の用事', status: 'approved', appliedAt: '2026-05-15', remainingDays: 8 },
    { id: 3, name: '鈴木 由香', type: '半日休暇（午前）', startDate: '2026-05-22', endDate: '2026-05-22', days: 0.5, reason: '通院のため', status: 'approved', appliedAt: '2026-05-18', remainingDays: 13 },
    { id: 4, name: '佐藤 健太', type: '有給休暇', startDate: '2026-06-09', endDate: '2026-06-11', days: 3, reason: '旅行のため', status: 'pending', appliedAt: '2026-05-21', remainingDays: 7 },
    { id: 5, name: '高橋 誠', type: '特別休暇', startDate: '2026-05-16', endDate: '2026-05-16', days: 1, reason: '忌引き', status: 'approved', appliedAt: '2026-05-15', remainingDays: 12 },
    { id: 6, name: '田中 美咲', type: '代休', startDate: '2026-05-30', endDate: '2026-05-30', days: 1, reason: '5/3（土）勤務の振替', status: 'pending', appliedAt: '2026-05-22', remainingDays: 8 },
  ])

  const staffLeaveBalance = ref([
    { name: '西島',    total: 20, used: 10, remaining: 10 },
    { name: '田中 美咲', total: 20, used: 12, remaining: 8 },
    { name: '佐藤 健太', total: 20, used: 13, remaining: 7 },
    { name: '鈴木 由香', total: 20, used: 7,  remaining: 13 },
    { name: '高橋 誠',  total: 20, used: 8,  remaining: 12 },
  ])

  return { leaves, staffLeaveBalance }
}

export const useExpense = () => {
  const expenses = ref<Expense[]>([
    {
      id: 1, name: '西島', appliedAt: '2026-05-20', hasReceipt: true, status: 'pending', note: '',
      totalAmount: 2060,
      items: [
        { receiptDate: '2026-05-20', accountItem: '旅費交通費', amount: 520,  memo: '患者宅訪問・電車代（定期外）' },
        { receiptDate: '2026-05-19', accountItem: '消耗品費',   amount: 1540, memo: 'コピー用紙・ボールペン' },
      ],
    },
    {
      id: 2, name: '田中 美咲', appliedAt: '2026-05-19', hasReceipt: true, status: 'approved', note: '',
      totalAmount: 2860,
      items: [
        { receiptDate: '2026-05-19', accountItem: '消耗品費', amount: 2860, memo: 'マスク・使い捨て手袋 購入' },
      ],
    },
    {
      id: 3, name: '佐藤 健太', appliedAt: '2026-05-19', hasReceipt: true, status: 'approved', note: '',
      totalAmount: 7500,
      items: [
        { receiptDate: '2026-05-18', accountItem: '車両費',    amount: 4500, memo: 'ガソリン代（訪問巡回分）' },
        { receiptDate: '2026-05-18', accountItem: '旅費交通費', amount: 3000, memo: '高速道路代（往復）' },
      ],
    },
    {
      id: 4, name: '鈴木 由香', appliedAt: '2026-05-18', hasReceipt: false, status: 'approved', note: '',
      totalAmount: 640,
      items: [
        { receiptDate: '2026-05-17', accountItem: '旅費交通費', amount: 320, memo: 'バス代（往路）' },
        { receiptDate: '2026-05-17', accountItem: '旅費交通費', amount: 320, memo: 'バス代（復路）' },
      ],
    },
    {
      id: 5, name: '高橋 誠', appliedAt: '2026-05-21', hasReceipt: true, status: 'pending', note: '領収書は別途提出予定',
      totalAmount: 9650,
      items: [
        { receiptDate: '2026-05-10', accountItem: '研修費',    amount: 8000, memo: '訪問看護スキルアップ研修 参加費' },
        { receiptDate: '2026-05-10', accountItem: '旅費交通費', amount: 1650, memo: '研修会場までの交通費（往復）' },
      ],
    },
    {
      id: 6, name: '田中 美咲', appliedAt: '2026-05-21', hasReceipt: true, status: 'pending', note: '',
      totalAmount: 780,
      items: [
        { receiptDate: '2026-05-21', accountItem: '旅費交通費', amount: 780, memo: '遠方患者宅訪問・電車代' },
      ],
    },
    {
      id: 7, name: '佐藤 健太', appliedAt: '2026-05-10', hasReceipt: true, status: 'approved', note: '',
      totalAmount: 3000,
      items: [
        { receiptDate: '2026-05-01', accountItem: '通信費', amount: 3000, memo: '業務用携帯電話代（5月分）' },
      ],
    },
  ])

  return { expenses }
}

export const useVehicle = () => {
  const vehicles = ref<VehicleInfo[]>([
    { id: 1, name: 'プリウス（白）', plate: '横浜 300 あ 1234', type: 'セダン', inspectionDate: '2027-03-15', insuranceDate: '2026-12-31', status: 'available', mileage: 45230 },
    { id: 2, name: 'ノア（シルバー）', plate: '横浜 500 い 5678', type: 'ミニバン', inspectionDate: '2026-09-20', insuranceDate: '2026-11-30', status: 'in_use', mileage: 32110 },
    { id: 3, name: 'フィット（青）', plate: '横浜 100 う 9012', type: 'コンパクト', inspectionDate: '2026-07-10', insuranceDate: '2027-01-31', status: 'maintenance', mileage: 61800 },
  ])

  const reservations = ref<Vehicle[]>([
    { id: 1, vehicleName: 'プリウス（白）', plate: '横浜 300 あ 1234', driver: '田中 美咲', date: '2026-05-14', startTime: '09:00', endTime: '12:00', destination: '横浜市 鶴見区（患者宅巡回）', distance: 18, purpose: '患者訪問', status: 'reserved' },
    { id: 2, vehicleName: 'ノア（シルバー）', plate: '横浜 500 い 5678', driver: '佐藤 健太', date: '2026-05-14', startTime: '10:00', endTime: '15:30', destination: '横浜市 港北区（複数患者訪問）', distance: 25, purpose: '患者訪問', status: 'in_use' },
    { id: 3, vehicleName: 'プリウス（白）', plate: '横浜 300 あ 1234', driver: '鈴木 由香', date: '2026-05-15', startTime: '13:00', endTime: '17:00', destination: '横浜市 保土ケ谷区', distance: 15, purpose: '患者訪問', status: 'reserved' },
    { id: 4, vehicleName: 'ノア（シルバー）', plate: '横浜 500 い 5678', driver: '高橋 誠', date: '2026-05-16', startTime: '08:30', endTime: '11:00', destination: '横浜市 西区', distance: 12, purpose: '患者訪問', status: 'reserved' },
  ])

  return { vehicles, reservations }
}

export const useBilling = () => {
  const billings = ref<Billing[]>([
    { id: 1, patientName: '山田 太郎', patientId: 'P001', month: '2026-04', serviceType: '訪問看護（医療）', visits: 8, units: 240, unitPrice: 1230, amount: 295200, insuranceCoverage: 265680, selfPay: 29520, paymentStatus: 'paid', insuranceType: '医療保険' },
    { id: 2, patientName: '佐々木 花子', patientId: 'P002', month: '2026-04', serviceType: '訪問看護（介護）', visits: 12, units: 480, unitPrice: 820, amount: 393600, insuranceCoverage: 354240, selfPay: 39360, paymentStatus: 'paid', insuranceType: '介護保険' },
    { id: 3, patientName: '中村 一郎', patientId: 'P003', month: '2026-04', serviceType: '訪問看護（医療）', visits: 4, units: 120, unitPrice: 1230, amount: 147600, insuranceCoverage: 132840, selfPay: 14760, paymentStatus: 'pending', insuranceType: '医療保険' },
    { id: 4, patientName: '小林 清子', patientId: 'P004', month: '2026-04', serviceType: '訪問看護（介護）', visits: 16, units: 640, unitPrice: 820, amount: 524800, insuranceCoverage: 472320, selfPay: 52480, paymentStatus: 'unpaid', insuranceType: '介護保険' },
    { id: 5, patientName: '加藤 次郎', patientId: 'P005', month: '2026-04', serviceType: '訪問看護（医療）', visits: 6, units: 180, unitPrice: 1230, amount: 221400, insuranceCoverage: 199260, selfPay: 22140, paymentStatus: 'paid', insuranceType: '医療保険' },
    { id: 6, patientName: '吉田 幸子', patientId: 'P006', month: '2026-04', serviceType: '訪問看護（介護）', visits: 10, units: 400, unitPrice: 820, amount: 328000, insuranceCoverage: 295200, selfPay: 32800, paymentStatus: 'paid', insuranceType: '介護保険' },
    { id: 7, patientName: '田辺 雄一', patientId: 'P007', month: '2026-04', serviceType: '訪問看護（医療）', visits: 3, units: 90, unitPrice: 1230, amount: 110700, insuranceCoverage: 99630, selfPay: 11070, paymentStatus: 'pending', insuranceType: '医療保険' },
    { id: 8, patientName: '松本 富子', patientId: 'P008', month: '2026-04', serviceType: '訪問看護（介護）', visits: 20, units: 800, unitPrice: 820, amount: 656000, insuranceCoverage: 590400, selfPay: 65600, paymentStatus: 'paid', insuranceType: '介護保険' },
  ])

  return { billings }
}
