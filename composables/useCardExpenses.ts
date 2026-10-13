import {
  collection, query, where, orderBy, onSnapshot, doc, updateDoc,
  writeBatch,
} from 'firebase/firestore'
import { db } from '~/plugins/firebase.client'

export interface CardExpenseDoc {
  id: string
  transactionDate: string // YYYY-MM-DD（絞り込み用）
  transactionDatetime: string // 取引日時（表示用、元のCSV値）
  confirmedDatetime?: string
  payee: string
  payeeKana?: string
  payeeKanji?: string
  status: string // 速報 / 確定
  amount: number // 元の符号のまま（マイナス=支出、プラス=返金）
  cardHolderName: string // 例: MIKAN-1
  cardLast4?: string
  memo?: string
  receiptReceived: boolean
  receiptCheckedBy?: string
  receiptCheckedAt?: string
  importedAt: string
}

// ---- CSVパース（引用符・カンマを含むフィールドに対応した簡易パーサー） ----
function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++ } else { inQuotes = false }
      } else {
        field += c
      }
    } else if (c === '"') {
      inQuotes = true
    } else if (c === ',') {
      row.push(field); field = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(field); field = ''
      if (row.length > 1 || row[0] !== '') rows.push(row)
      row = []
    } else {
      field += c
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field)
    if (row.length > 1 || row[0] !== '') rows.push(row)
  }
  return rows
}

/** カード会社CSV（カード利用明細ID,取引日時,確定日時,支払先,...）をパースする */
export function parseCardExpenseCsv(text: string): Omit<CardExpenseDoc, 'receiptReceived' | 'importedAt'>[] {
  const cleaned = text.replace(/^﻿/, '') // BOM除去
  const rows = parseCsv(cleaned)
  if (rows.length === 0) return []

  const header = rows[0]
  const idx = (name: string) => header.indexOf(name)
  const iId = idx('カード利用明細ID')
  const iDatetime = idx('取引日時')
  const iConfirmed = idx('確定日時')
  const iPayee = idx('支払先')
  const iPayeeKana = idx('支払先（カナ）')
  const iPayeeKanji = idx('支払先（漢字）')
  const iStatus = idx('取引状況')
  const iAmount = idx('金額')
  const iCardHolder = idx('カード名義人')
  const iCardLast4 = idx('カード番号4桁')
  const iMemo = idx('メモ')

  if (iId === -1 || iDatetime === -1 || iAmount === -1) return []

  const out: Omit<CardExpenseDoc, 'receiptReceived' | 'importedAt'>[] = []
  for (let r = 1; r < rows.length; r++) {
    const cols = rows[r]
    if (cols.length < 2 || !cols[iId]) continue
    const datetime = cols[iDatetime] ?? ''
    out.push({
      id: cols[iId],
      transactionDatetime: datetime,
      transactionDate: datetime.slice(0, 10),
      confirmedDatetime: cols[iConfirmed] || undefined,
      payee: cols[iPayee] ?? '',
      payeeKana: cols[iPayeeKana] || undefined,
      payeeKanji: cols[iPayeeKanji] || undefined,
      status: cols[iStatus] ?? '',
      amount: Number(cols[iAmount]) || 0,
      cardHolderName: cols[iCardHolder] ?? '不明',
      cardLast4: cols[iCardLast4] || undefined,
      memo: cols[iMemo] || undefined,
    })
  }
  return out
}

function stripUndefined<T extends object>(obj: T): Partial<T> {
  const result: Partial<T> = {}
  for (const key of Object.keys(obj) as (keyof T)[]) {
    if (obj[key] !== undefined) result[key] = obj[key]
  }
  return result
}

let _unsub: (() => void) | null = null
let _listenKey = ''

export const useCardExpenses = () => {
  const { currentUser, userProfile } = useAuth()
  const cardExpenses = useState<CardExpenseDoc[]>('cardExpenses:list', () => [])
  const loading = useState<boolean>('cardExpenses:loading', () => false)
  const currentMonth = useState<string>('cardExpenses:month', () => new Date().toISOString().slice(0, 7))

  function listenMonth(yearMonth: string) {
    currentMonth.value = yearMonth
    const key = `${currentUser.value?.uid ?? ''}:${yearMonth}`
    if (_listenKey === key && _unsub) return

    _unsub?.()
    _unsub = null
    _listenKey = key
    loading.value = true

    const start = `${yearMonth}-01`
    const [y, m] = yearMonth.split('-').map(Number)
    const nextMonth = new Date(y, m, 1) // m is 1-indexed already -> next month
    const end = nextMonth.toISOString().slice(0, 10)

    const q = query(
      collection(db, 'cardExpenses'),
      where('transactionDate', '>=', start),
      where('transactionDate', '<', end),
      orderBy('transactionDate', 'desc'),
    )
    _unsub = onSnapshot(q, (snap) => {
      cardExpenses.value = snap.docs.map(d => ({ id: d.id, ...d.data() } as CardExpenseDoc))
      loading.value = false
    }, (err) => {
      console.error('cardExpenses listen error:', err)
      loading.value = false
    })
  }

  function stopListening() {
    _unsub?.()
    _unsub = null
    _listenKey = ''
  }

  /** CSVからパースした明細をFirestoreへインポートする（同じ明細IDは上書き＝重複しない） */
  async function importRows(
    rows: Omit<CardExpenseDoc, 'receiptReceived' | 'importedAt'>[],
    onProgress?: (done: number, total: number) => void,
  ) {
    const CHUNK = 400
    const importedAt = new Date().toISOString()
    let done = 0
    for (let i = 0; i < rows.length; i += CHUNK) {
      const chunk = rows.slice(i, i + CHUNK)
      const batch = writeBatch(db)
      for (const row of chunk) {
        const ref = doc(db, 'cardExpenses', row.id)
        batch.set(ref, stripUndefined({ ...row, importedAt }), { merge: true })
      }
      await batch.commit()
      done += chunk.length
      onProgress?.(done, rows.length)
    }
  }

  async function setReceiptReceived(id: string, received: boolean) {
    await updateDoc(doc(db, 'cardExpenses', id), {
      receiptReceived: received,
      receiptCheckedBy: received ? (userProfile.value?.staffName ?? '担当者') : null,
      receiptCheckedAt: received ? new Date().toISOString() : null,
    })
  }

  return {
    cardExpenses, loading, currentMonth,
    listenMonth, stopListening, importRows, setReceiptReceived,
  }
}
