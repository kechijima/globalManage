<template>
  <div class="max-w-lg mx-auto space-y-4 pb-8">

    <!-- 申請者 -->
    <div class="bg-white rounded-2xl border border-gray-200 px-5 py-4">
      <p class="text-xs text-gray-400 mb-0.5">申請者</p>
      <template v-if="isAdmin">
        <select v-model="form.staffName"
          class="text-base font-semibold text-gray-800 border-none outline-none bg-transparent w-full">
          <option value="">選択してください</option>
          <option v-for="s in staffNames" :key="s" :value="s">{{ s }}</option>
        </select>
      </template>
      <template v-else>
        <p class="text-base font-semibold text-gray-800">{{ form.staffName || '読み込み中...' }}</p>
      </template>
    </div>

    <!-- 休暇種別 -->
    <div class="bg-white rounded-2xl border border-gray-200 px-5 py-4">
      <p class="text-sm font-semibold text-gray-600 mb-3">
        🏷 休暇の種類 <span class="text-red-400">*</span>
      </p>
      <div class="grid grid-cols-2 gap-2">
        <button
          v-for="t in leaveTypes" :key="t.value" type="button"
          @click="form.type = t.value"
          class="flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left transition active:scale-95"
          :class="form.type === t.value
            ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
            : 'bg-white text-gray-700 border-gray-200 hover:border-primary-300'">
          <span class="text-2xl leading-none flex-shrink-0">{{ t.emoji }}</span>
          <div>
            <p class="text-sm font-semibold leading-tight">{{ t.label }}</p>
            <p class="text-xs mt-0.5 leading-tight"
              :class="form.type === t.value ? 'text-primary-100' : 'text-gray-400'">
              {{ t.sub }}
            </p>
          </div>
        </button>
      </div>
    </div>

    <!-- 日付 -->
    <div class="bg-white rounded-2xl border border-gray-200 px-5 py-4">
      <p class="text-sm font-semibold text-gray-600 mb-3">
        📅 日程 <span class="text-red-400">*</span>
      </p>

      <template v-if="isHalfDay">
        <div>
          <label class="text-xs text-gray-500 mb-1 block">取得日</label>
          <input v-model="form.startDate" type="date" class="form-input text-base py-3 rounded-xl" />
        </div>
      </template>

      <template v-else>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs text-gray-500 mb-1 block">開始日</label>
            <input v-model="form.startDate" type="date" class="form-input text-base py-3 rounded-xl" />
          </div>
          <div>
            <label class="text-xs text-gray-500 mb-1 block">終了日</label>
            <input v-model="form.endDate" type="date" :min="form.startDate" class="form-input text-base py-3 rounded-xl" />
          </div>
        </div>
        <p v-if="calcDays > 0" class="text-sm text-primary-600 font-semibold mt-2 text-right">
          📆 {{ calcDays }}日間
        </p>
      </template>
    </div>

    <!-- 理由（任意） -->
    <div class="bg-white rounded-2xl border border-gray-200 px-5 py-4">
      <p class="text-sm font-semibold text-gray-600 mb-2">💬 申請理由（任意）</p>
      <textarea v-model="form.reason" rows="5" class="form-input w-full rounded-xl resize-y text-base"
        placeholder="理由があれば入力してください" />
    </div>

    <!-- 申請内容プレビュー -->
    <div v-if="canSubmit" class="bg-primary-50 border border-primary-200 rounded-2xl px-5 py-4 text-sm text-primary-800 space-y-1">
      <p class="font-semibold text-primary-700 mb-2">📋 申請内容の確認</p>
      <p>申請者：<span class="font-medium">{{ form.staffName }}</span></p>
      <p>種別：<span class="font-medium">{{ leaveTypes.find(t => t.value === form.type)?.label }}</span></p>
      <p v-if="isHalfDay">日程：<span class="font-medium">{{ form.startDate }}</span></p>
      <p v-else>日程：<span class="font-medium">{{ form.startDate }} 〜 {{ form.endDate }}（{{ calcDays }}日間）</span></p>
    </div>

    <!-- エラー表示 -->
    <div v-if="error" class="bg-red-50 border border-red-200 rounded-2xl px-5 py-3 text-sm text-red-700">
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
        {{ saving ? '送信中...' : canSubmit ? '申請する' : '必要事項を入力してください' }}
      </button>
      <NuxtLink to="/paid-leave"
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
      有給申請を受け付けました
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' })

const { isAdmin, userProfile, currentUser } = useAuth()
const { staffNames, loadUsers } = useUsers()
const { createPaidLeave } = usePaidLeaveStore()
const route = useRoute()

onMounted(async () => {
  if (isAdmin.value) await loadUsers()

  const copyParam = route.query.copy
  if (typeof copyParam === 'string') {
    try {
      const parsed = JSON.parse(decodeURIComponent(copyParam)) as Partial<typeof form>
      if (parsed.type) form.type = parsed.type
      if (parsed.startDate) form.startDate = parsed.startDate
      if (parsed.endDate) form.endDate = parsed.endDate
      if (parsed.reason) form.reason = parsed.reason
    } catch { /* ignore malformed copy param */ }
  }
})

const leaveTypes = [
  { value: '有給休暇',     label: '有給休暇', emoji: '🏖', sub: '全日・複数日可' },
  { value: '半日休暇（午前）', label: '午前休',  emoji: '🌅', sub: '午前中のみ' },
  { value: '半日休暇（午後）', label: '午後休',  emoji: '🌇', sub: '午後のみ' },
  { value: '特別休暇',     label: '特別休暇', emoji: '⭐', sub: '慶弔・その他' },
  { value: '介護休暇',     label: '介護休暇', emoji: '🏥', sub: '介護・看護' },
  { value: '代休',         label: '代休',    emoji: '🔄', sub: '休日出勤の振替' },
]

function today() { return new Date().toISOString().slice(0, 10) }

const form = reactive({
  staffName: '',
  type: '',
  startDate: today(),
  endDate: today(),
  reason: '',
})

watchEffect(() => {
  if (!isAdmin.value && userProfile.value?.staffName) {
    form.staffName = userProfile.value.staffName
  }
})

const isHalfDay = computed(() =>
  form.type === '半日休暇（午前）' || form.type === '半日休暇（午後）'
)

watch(() => form.type, () => {
  if (isHalfDay.value) form.endDate = form.startDate
})
watch(() => form.startDate, (d) => {
  if (isHalfDay.value || form.endDate < d) form.endDate = d
})

const calcDays = computed(() => {
  if (!form.startDate || !form.endDate) return 0
  const diff = (new Date(form.endDate).getTime() - new Date(form.startDate).getTime()) / 86400000
  return Math.max(0, Math.round(diff)) + 1
})

const canSubmit = computed(() =>
  !!form.staffName && !!form.type && !!form.startDate && (isHalfDay.value || !!form.endDate)
)

const submitted = ref(false)
const saving = ref(false)
const error = ref('')

async function submit() {
  if (!canSubmit.value || saving.value) return
  saving.value = true
  error.value = ''
  try {
    await createPaidLeave({
      userId: currentUser.value!.uid,
      staffName: form.staffName,
      type: form.type,
      startDate: form.startDate,
      endDate: isHalfDay.value ? form.startDate : form.endDate,
      days: isHalfDay.value ? 0.5 : calcDays.value,
      reason: form.reason,
      status: 'pending',
      appliedAt: today(),
    })
    submitted.value = true
    setTimeout(() => {
      submitted.value = false
      navigateTo('/paid-leave')
    }, 2000)
  } catch (e: unknown) {
    error.value = '申請の送信に失敗しました。もう一度お試しください。'
    console.error(e)
  } finally {
    saving.value = false
  }
}
</script>
