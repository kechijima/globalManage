<template>
  <div class="max-w-lg mx-auto pb-8">

    <!-- ヘッダー：申請者 + 合計（固定） -->
    <div class="bg-white rounded-2xl border border-gray-200 px-5 py-4 flex items-center justify-between mb-4">
      <div>
        <p class="text-xs text-gray-400 mb-0.5">申請者</p>
        <template v-if="isAdmin">
          <select v-model="applicantName"
            class="text-base font-semibold text-gray-800 border-none outline-none bg-transparent">
            <option value="">選択してください</option>
            <option v-for="s in staffNames" :key="s" :value="s">{{ s }}</option>
          </select>
        </template>
        <template v-else>
          <p class="text-base font-semibold text-gray-800">{{ applicantName || '読み込み中...' }}</p>
        </template>
      </div>
      <div class="text-right">
        <p class="text-xs text-gray-400 mb-0.5">{{ items.length }}件の合計</p>
        <p class="text-2xl font-bold text-primary-700">¥{{ totalAmount.toLocaleString() }}</p>
      </div>
    </div>

    <!-- 対象月（必須） -->
    <div class="bg-white rounded-2xl border border-gray-200 px-5 py-4 mb-4">
      <p class="text-xs text-gray-400 mb-1.5">何月分の申請ですか？ <span class="text-red-400">*</span></p>
      <input v-model="targetMonth" type="month"
        class="w-full px-3 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary-400"
        :class="targetMonth ? 'border-gray-200' : 'border-red-300 bg-red-50'" />
    </div>

    <!-- 入力済み明細リスト（レシートテープ） -->
    <div class="bg-white rounded-2xl border border-gray-200 mb-4 overflow-hidden">
      <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
        <p class="text-sm font-semibold text-gray-600">入力済み明細</p>
        <p class="text-xs text-gray-400">{{ items.length }}件</p>
      </div>

      <div v-if="items.length === 0" class="py-8 text-center text-sm text-gray-400">
        下のフォームから明細を追加してください
      </div>

      <div v-else class="divide-y divide-gray-50">
        <div v-for="(item, idx) in items" :key="idx"
          class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition group">
          <span class="text-xs font-bold text-gray-300 w-4 flex-shrink-0">{{ idx + 1 }}</span>
          <span class="text-xs text-gray-400 flex-shrink-0 whitespace-nowrap">{{ item.receiptDate }}</span>
          <span class="text-xs px-2 py-1 rounded-md flex-shrink-0 whitespace-nowrap"
            :class="item.accountItem ? 'bg-primary-50 text-primary-700 font-medium' : 'bg-gray-100 text-gray-400'">
            {{ item.accountItem || '未分類' }}
          </span>
          <span class="flex-1 text-sm text-gray-500 truncate min-w-0">{{ item.memo || '' }}</span>
          <span class="text-base font-bold text-gray-800 flex-shrink-0 tabular-nums">
            ¥{{ (item.amount || 0).toLocaleString() }}
          </span>
          <button @click="removeItem(idx)" type="button"
            class="opacity-0 group-hover:opacity-100 p-1 text-gray-300 hover:text-red-400 transition flex-shrink-0">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- 合計行 -->
        <div class="flex items-center justify-between px-4 py-3 bg-primary-50">
          <span class="text-sm font-bold text-primary-700">合計</span>
          <span class="text-xl font-bold text-primary-700 tabular-nums">
            ¥{{ totalAmount.toLocaleString() }}
          </span>
        </div>
      </div>
    </div>

    <!-- 新規明細入力フォーム -->
    <div class="bg-white rounded-2xl border-2 border-primary-200 overflow-hidden mb-4">
      <div class="px-4 pt-4 pb-2">
        <p class="text-xs font-semibold text-primary-600 mb-3">＋ 新しい明細を追加</p>

        <!-- 領収日 -->
        <div class="mb-3">
          <p class="text-xs text-gray-400 mb-1.5">領収日 <span class="text-red-400">*</span></p>
          <input v-model="draft.receiptDate" type="date"
            class="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary-400" />
        </div>

        <!-- 金額（大きく） -->
        <div class="bg-gray-50 border-2 rounded-xl px-4 py-3 flex items-center gap-2 mb-3 transition"
          :class="draft.amount ? 'border-primary-400 bg-primary-50' : 'border-gray-200'">
          <span class="text-2xl font-bold text-gray-400">¥</span>
          <input
            ref="amountInput"
            v-model.number="draft.amount"
            type="number" inputmode="numeric" pattern="[0-9]*"
            placeholder="0" min="0"
            class="flex-1 text-2xl font-bold bg-transparent border-none outline-none placeholder-gray-300 min-w-0"
            :class="draft.amount ? 'text-primary-700' : 'text-gray-300'"
            @keyup.enter="addDraft"
          />
          <span v-if="draft.amount" class="text-sm text-gray-400 flex-shrink-0">円</span>
        </div>

        <!-- 勘定科目チップ -->
        <div class="mb-3">
          <p class="text-xs text-gray-400 mb-1.5">勘定科目（任意）</p>
          <div class="flex flex-wrap gap-1.5">
            <button
              v-for="a in accountItems" :key="a" type="button"
              @click="draft.accountItem = draft.accountItem === a ? '' : a"
              class="text-xs px-2.5 py-1.5 rounded-lg border transition active:scale-95"
              :class="draft.accountItem === a
                ? 'bg-primary-600 text-white border-primary-600 font-semibold'
                : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300'">
              {{ a }}
            </button>
          </div>
        </div>

        <!-- 管理者追加フィールド -->
        <div v-if="isAdmin" class="grid grid-cols-2 gap-2 mb-3">
          <div>
            <p class="text-xs text-gray-400 mb-1">支払方法</p>
            <div class="flex gap-1">
              <button v-for="m in paymentMethods" :key="m.value" type="button"
                @click="draft.paymentMethod = draft.paymentMethod === m.value ? '' : m.value"
                class="flex-1 text-xs py-2 rounded-lg border transition"
                :class="draft.paymentMethod === m.value
                  ? 'bg-primary-600 text-white border-primary-600 font-semibold'
                  : 'bg-white text-gray-500 border-gray-200'">
                {{ m.label }}
              </button>
            </div>
          </div>
          <div>
            <p class="text-xs text-gray-400 mb-1">取引先</p>
            <input v-model="draft.vendor" type="text"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-400"
              placeholder="〇〇店" />
          </div>
        </div>

        <!-- メモ -->
        <div class="mb-3">
          <p class="text-xs text-gray-400 mb-1">内容・メモ（任意）</p>
          <input v-model="draft.memo" type="text"
            class="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary-400"
            placeholder="例：〇〇駅→△△駅"
            @keyup.enter="addDraft" />
        </div>
      </div>

      <!-- 追加ボタン -->
      <button @click="addDraft" :disabled="!draft.amount" type="button"
        class="w-full py-4 font-bold text-sm transition"
        :class="draft.amount
          ? 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800'
          : 'bg-gray-100 text-gray-400 cursor-not-allowed'">
        <span v-if="draft.amount">
          ¥{{ (draft.amount || 0).toLocaleString() }} を追加 →
        </span>
        <span v-else>金額を入力してください</span>
      </button>
    </div>

    <!-- 写真添付 -->
    <div class="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
      <p class="text-sm font-semibold text-gray-600 mb-3">📷 領収書の写真</p>
      <div class="grid grid-cols-4 gap-2 mb-2">
        <div v-for="(photo, i) in photos" :key="i" class="relative aspect-square">
          <img :src="photo.url" class="w-full h-full object-cover rounded-xl border border-gray-200" />
          <button @click="removePhoto(i)" type="button"
            class="absolute top-1 right-1 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center text-white">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <label class="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-primary-400 hover:bg-primary-50 transition">
          <svg class="w-5 h-5 text-gray-400 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span class="text-xs text-gray-400">追加</span>
          <input type="file" accept="image/*" multiple class="hidden" @change="addPhotos" />
        </label>
      </div>
      <p class="text-xs text-gray-400">複数枚まとめて選択できます（{{ photos.length }}枚）</p>
    </div>

    <!-- 備考 -->
    <div class="bg-white rounded-2xl border border-gray-200 px-5 py-4 mb-4">
      <p class="text-sm font-semibold text-gray-600 mb-2">📌 備考<span class="text-xs text-gray-400 ml-2 font-normal">任意</span></p>
      <textarea v-model="note" rows="2" class="form-input w-full rounded-xl resize-y text-base"
        placeholder="補足事項があれば入力" />
    </div>

    <!-- エラー -->
    <div v-if="error" class="bg-red-50 border border-red-200 rounded-2xl px-5 py-3 mb-4 text-sm text-red-700">
      {{ error }}
    </div>

    <!-- 送信ボタン -->
    <div class="space-y-3">
      <button @click="submit" :disabled="!canSubmit || saving"
        class="w-full py-4 text-base font-bold text-white bg-primary-600 rounded-2xl hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed active:scale-98 transition shadow-sm flex items-center justify-center gap-2">
        <svg v-if="saving" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        {{ saving ? '送信中...' :
           canSubmit ? `${items.length}件・¥${totalAmount.toLocaleString()} を申請する` :
           items.length === 0 ? '明細を追加してください' :
           !targetMonth ? '対象月を入力してください' : '申請者を選択してください' }}
      </button>
      <NuxtLink to="/expense"
        class="block w-full py-3.5 text-sm font-medium text-center text-gray-600 bg-white border border-gray-300 rounded-2xl hover:bg-gray-50 transition">
        キャンセル
      </NuxtLink>
    </div>

    <!-- 完了トースト -->
    <div v-if="submitted"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3.5 rounded-2xl shadow-xl flex items-center gap-2 text-sm font-semibold z-50 whitespace-nowrap">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      {{ items.length }}件の経費申請を受け付けました
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '~/plugins/firebase.client'

definePageMeta({ middleware: 'auth' })

const { isAdmin, userProfile, currentUser } = useAuth()
const { staffNames, loadUsers } = useUsers()
const { createExpense } = useExpenseStore()
const route = useRoute()

onMounted(async () => {
  if (isAdmin.value) await loadUsers()

  const copyParam = route.query.copy
  if (typeof copyParam === 'string') {
    try {
      const parsed = JSON.parse(decodeURIComponent(copyParam)) as { items?: ExpenseItem[]; note?: string; targetMonth?: string }
      if (Array.isArray(parsed.items)) items.value = parsed.items.map(i => ({ ...i }))
      if (parsed.note) note.value = parsed.note
      if (parsed.targetMonth) targetMonth.value = parsed.targetMonth
    } catch { /* ignore malformed copy param */ }
  }
})

const applicantName = ref('')
watchEffect(() => {
  if (!isAdmin.value && userProfile.value?.staffName) {
    applicantName.value = userProfile.value.staffName
  }
})

const accountItems = [
  '旅費交通費', '車両費', '消耗品費', '通信費', '研修費', '会議費', '接待費', '福利厚生費', '雑費',
]

const paymentMethods = [
  { value: '現金', label: '現金' },
  { value: 'カード', label: 'カード' },
  { value: '振込', label: '振込' },
]

interface ExpenseItem {
  receiptDate: string
  amount: number | null
  accountItem: string
  paymentMethod: string
  vendor: string
  memo: string
}

const items = ref<ExpenseItem[]>([])

function today() { return new Date().toISOString().slice(0, 10) }

const draft = reactive<ExpenseItem>({
  receiptDate: today(),
  amount: null,
  accountItem: '',
  paymentMethod: '',
  vendor: '',
  memo: '',
})

const amountInput = ref<HTMLInputElement | null>(null)

function addDraft() {
  if (!draft.amount) return
  items.value.push({ ...draft })
  const keepDate = draft.receiptDate
  const keepAccount = draft.accountItem
  draft.amount = null
  draft.memo = ''
  draft.vendor = ''
  draft.paymentMethod = ''
  draft.receiptDate = keepDate
  draft.accountItem = keepAccount
  nextTick(() => amountInput.value?.focus())
}

function removeItem(idx: number) {
  items.value.splice(idx, 1)
}

const totalAmount = computed(() =>
  items.value.reduce((s, i) => s + (i.amount || 0), 0)
)

interface PhotoFile { url: string; name: string; file: File }
const photos = ref<PhotoFile[]>([])

function addPhotos(e: Event) {
  const files = Array.from((e.target as HTMLInputElement).files ?? [])
  for (const f of files) photos.value.push({ url: URL.createObjectURL(f), name: f.name, file: f })
  ;(e.target as HTMLInputElement).value = ''
}

function removePhoto(idx: number) {
  URL.revokeObjectURL(photos.value[idx].url)
  photos.value.splice(idx, 1)
}

const note = ref('')
const targetMonth = ref(today().slice(0, 7))
const submitted = ref(false)
const saving = ref(false)
const error = ref('')

const canSubmit = computed(() =>
  !!applicantName.value && !!targetMonth.value && items.value.length > 0 && totalAmount.value > 0
)

async function submit() {
  if (!canSubmit.value || saving.value) return
  saving.value = true
  error.value = ''
  try {
    const receiptUrls: string[] = []
    for (let i = 0; i < photos.value.length; i++) {
      const photo = photos.value[i]
      const path = `expenses/${currentUser.value!.uid}/${Date.now()}_${i}_${photo.name}`
      const fileRef = storageRef(storage, path)
      await uploadBytes(fileRef, photo.file)
      receiptUrls.push(await getDownloadURL(fileRef))
    }
    await createExpense({
      userId: currentUser.value!.uid,