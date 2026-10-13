<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h2 class="text-base font-semibold text-gray-700">社用カード経費申請</h2>
        <p class="text-xs text-gray-400 mt-0.5">クレジットカードの利用明細CSVを取り込み、領収書の受領状況を管理します</p>
      </div>
      <label class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition cursor-pointer flex-shrink-0"
        :class="importing ? 'opacity-50 pointer-events-none' : ''">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        {{ importing ? `取込中... ${importDone}/${importTotal}` : 'CSVを取り込む' }}
        <input type="file" accept=".csv" class="hidden" @change="handleCsvSelect" />
      </label>
    </div>

    <p v-if="importError" class="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">{{ importError }}</p>
    <p v-if="importResult" class="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2.5">{{ importResult }}</p>

    <!-- フィルター -->
    <div class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2">
      <input v-model="selectedMonth" type="month" @change="onMonthChange"
        class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400" />
      <select v-model="filterCardHolder" class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700">
        <option value="">すべてのカード</option>
        <option v-for="name in cardHolderNames" :key="name" :value="name">{{ name }}</option>
      </select>
      <select v-model="filterReceipt" class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700">
        <option value="">すべて</option>
        <option value="received">受領済</option>
        <option value="unreceived">未受領</option>
      </select>
      <input v-model="searchText" type="text" placeholder="支払先で検索"
        class="w-full sm:w-48 text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400" />
      <select v-model="sortKey" class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700">
        <option value="date-desc">日付が新しい順</option>
        <option value="date-asc">日付が古い順</option>
        <option value="cardNumber">カード番号順</option>
        <option value="amount-desc">金額が高い順</option>
        <option value="amount-asc">金額が低い順</option>
      </select>
    </div>

    <!-- サマリー -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white rounded-xl border border-gray-200 p-4">
        <p class="text-xs text-gray-500">対象件数</p>
        <p class="text-xl font-bold text-gray-800 mt-1">{{ filteredExpenses.length }}件</p>
      </div>
      <div class="bg-white rounded-xl border border-gray-200 p-4">
        <p class="text-xs text-gray-500">合計金額</p>
        <p class="text-xl font-bold text-gray-800 mt-1">¥{{ totalAmount.toLocaleString() }}</p>
      </div>
      <div class="bg-white rounded-xl border border-gray-200 p-4">
        <p class="text-xs text-gray-500">領収書受領済（計上対象）</p>
        <p class="text-xl font-bold text-green-600 mt-1">¥{{ receivedAmount.toLocaleString() }}</p>
        <p class="text-xs text-gray-400 mt-0.5">{{ receivedCount }}件</p>
      </div>
      <div class="bg-white rounded-xl border border-gray-200 p-4">
        <p class="text-xs text-gray-500">未受領</p>
        <p class="text-xl font-bold text-red-500 mt-1">¥{{ unreceivedAmount.toLocaleString() }}</p>
        <p class="text-xs text-gray-400 mt-0.5">{{ unreceivedCount }}件</p>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex items-center justify-center py-12">
      <svg class="animate-spin w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </div>

    <!-- 一覧 -->
    <div v-else class="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <!-- Mobile cards -->
      <div class="sm:hidden">
        <div v-if="filteredExpenses.length === 0" class="px-5 py-8 text-center text-sm text-gray-400">
          データがありません。CSVを取り込んでください。
        </div>
        <div v-else class="divide-y divide-gray-100">
          <label v-for="e in filteredExpenses" :key="e.id" class="p-4 flex items-start gap-3 cursor-pointer">
            <input type="checkbox" :checked="e.receiptReceived" @change="toggleReceipt(e)"
              class="w-5 h-5 mt-0.5 rounded border-gray-300 text-primary-600 focus:ring-primary-400 flex-shrink-0" />
            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between gap-2">
                <p class="text-sm font-semibold text-gray-800 truncate">{{ e.payeeKanji || e.payee }}</p>
                <p class="text-sm font-bold tabular-nums flex-shrink-0" :class="e.amount < 0 ? 'text-gray-800' : 'text-primary-600'">
                  ¥{{ Math.abs(e.amount).toLocaleString() }}
                </p>
              </div>
              <p class="text-xs text-gray-400">{{ e.transactionDate }} ／ {{ e.cardHolderName }}<span v-if="e.cardLast4"> ／ ****{{ e.cardLast4 }}</span></p>
            </div>
          </label>
        </div>
      </div>

      <!-- Desktop table -->
      <div class="hidden sm:block overflow-x-auto">
        <table class="min-w-[800px] w-full">
          <thead>
            <tr class="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wide border-b border-gray-100">
              <th class="px-4 py-3 whitespace-nowrap">領収書</th>
              <th class="px-4 py-3 whitespace-nowrap">日付</th>
              <th class="px-4 py-3">支払先</th>
              <th class="px-4 py-3 whitespace-nowrap">カード</th>
              <th class="px-4 py-3 whitespace-nowrap">カード番号</th>
              <th class="px-4 py-3 whitespace-nowrap text-right">金額</th>
              <th class="px-4 py-3 whitespace-nowrap">状況</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr v-for="e in filteredExpenses" :key="e.id" class="hover:bg-gray-50 transition">
              <td class="px-4 py-3 whitespace-nowrap">
                <input type="checkbox" :checked="e.receiptReceived" @change="toggleReceipt(e)"
                  class="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-400 cursor-pointer" />
              </td>
              <td class="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{{ e.transactionDate }}</td>
              <td class="px-4 py-3 text-sm text-gray-800">
                {{ e.payeeKanji || e.payee }}
                <span v-if="e.memo" class="block text-xs text-gray-400">{{ e.memo }}</span>
              </td>
              <td class="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{{ e.cardHolderName }}</td>
              <td class="px-4 py-3 text-sm text-gray-500 whitespace-nowrap font-mono">{{ e.cardLast4 ? `****${e.cardLast4}` : '—' }}</td>
              <td class="px-4 py-3 text-sm font-semibold text-right whitespace-nowrap tabular-nums"
                :class="e.amount < 0 ? 'text-gray-800' : 'text-primary-600'">
                {{ e.amount < 0 ? '' : '+' }}¥{{ Math.abs(e.amount).toLocaleString() }}
              </td>
              <td class="px-4 py-3 whitespace-nowrap">
                <span class="text-xs px-2 py-0.5 rounded-full font-medium"
                  :class="e.receiptReceived ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'">
                  {{ e.receiptReceived ? '受領済' : '未受領' }}
                </span>
              </td>
            </tr>
            <tr v-if="filteredExpenses.length === 0">
              <td colspan="7" class="px-5 py-8 text-center text-sm text-gray-400">データがありません。CSVを取り込んでください。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { parseCardExpenseCsv, type CardExpenseDoc } from '~/composables/useCardExpenses'

definePageMeta({ middleware: 'auth' })

const { cardExpenses, loading, listenMonth, importRows, setReceiptReceived } = useCardExpenses()

onMounted(() => {
  listenMonth(selectedMonth.value)
})

const selectedMonth = ref(new Date().toISOString().slice(0, 7))
function onMonthChange() {
  listenMonth(selectedMonth.value)
}

const filterCardHolder = ref('')
const filterReceipt = ref('')
const searchText = ref('')
const sortKey = ref<'date-desc' | 'date-asc' | 'cardNumber' | 'amount-desc' | 'amount-asc'>('date-desc')

const cardHolderNames = computed(() => {
  const names = new Set(cardExpenses.value.map(e => e.cardHolderName))
  return Array.from(names).sort()
})

const filteredExpenses = computed(() => {
  let list = cardExpenses.value
  if (filterCardHolder.value) list = list.filter(e => e.cardHolderName === filterCardHolder.value)
  if (filterReceipt.value === 'received') list = list.filter(e => e.receiptReceived)
  if (filterReceipt.value === 'unreceived') list = list.filter(e => !e.receiptReceived)
  if (searchText.value.trim()) {
    const q = searchText.value.trim().toLowerCase()
    list = list.filter(e =>
      e.payee?.toLowerCase().includes(q) ||
      e.payeeKanji?.toLowerCase().includes(q) ||
      e.payeeKana?.toLowerCase().includes(q)
    )
  }

  list = [...list]
  switch (sortKey.value) {
    case 'date-asc':
      list.sort((a, b) => a.transactionDatetime.localeCompare(b.transactionDatetime))
      break
    case 'cardNumber':
      list.sort((a, b) =>
        (a.cardLast4 ?? '').localeCompare(b.cardLast4 ?? '') ||
        b.transactionDatetime.localeCompare(a.transactionDatetime)
      )
      break
    case 'amount-desc':
      list.sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount))
      break
    case 'amount-asc':
      list.sort((a, b) => Math.abs(a.amount) - Math.abs(b.amount))
      break
    default:
      list.sort((a, b) => b.transactionDatetime.localeCompare(a.transactionDatetime))
  }
  return list
})

const totalAmount = computed(() => Math.abs(filteredExpenses.value.reduce((s, e) => s + e.amount, 0)))
const receivedList = computed(() => filteredExpenses.value.filter(e => e.receiptReceived))
const unreceivedList = computed(() => filteredExpenses.value.filter(e => !e.receiptReceived))
const receivedCount = computed(() => receivedList.value.length)
const unreceivedCount = computed(() => unreceivedList.value.length)
const receivedAmount = computed(() => Math.abs(receivedList.value.reduce((s, e) => s + e.amount, 0)))
const unreceivedAmount = computed(() => Math.abs(unreceivedList.value.reduce((s, e) => s + e.amount, 0)))

async function toggleReceipt(e: CardExpenseDoc) {
  await setReceiptReceived(e.id, !e.receiptReceived)
}

// ===== CSV取込 =====
const importing = ref(false)
const importDone = ref(0)
const importTotal = ref(0)
const importError = ref('')
const importResult = ref('')

async function handleCsvSelect(ev: Event) {
  const file = (ev.target as HTMLInputElement).files?.[0]
  if (!file) return
  importError.value = ''
  importResult.value = ''
  importing.value = true
  importDone.value = 0
  importTotal.value = 0
  try {
    const text = await file.text()
    const rows = parseCardExpenseCsv(text)
    if (rows.length === 0) {
      importError.value = 'CSVを読み取れませんでした。フォーマットをご確認ください。'
      return
    }
    importTotal.value = rows.length
    await importRows(rows, (done, total) => {
      importDone.value = done
      importTotal.value = total
    })
    importResult.value = `${rows.length}件の明細を取り込みました。`
    // 直近の取込データが見えるよう、最新の取引月に切り替える
    const latestMonth = rows.map(r => r.transactionDate.slice(0, 7)).sort().reverse()[0]
    if (latestMonth) {
      selectedMonth.value = latestMonth
      listenMonth(latestMonth)
    }
  } catch (e: unknown) {
    importError.value = e instanceof Error ? e.message : '取込中にエラーが発生しました'
  } finally {
    importing.value = false
    ;(ev.target as HTMLInputElement).value = ''
  }
}
</script>
