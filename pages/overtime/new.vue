<template>
  <div class="max-w-lg mx-auto space-y-4 pb-8">

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

    <div class="bg-white rounded-2xl border border-gray-200 px-5 py-4">
      <p class="text-sm font-semibold text-gray-600 mb-3">
        📅 残業日 <span class="text-red-400">*</span>
      </p>
      <input v-model="form.date" type="date"
        class="form-input text-base py-3 rounded-xl w-full" />
    </div>

    <div class="bg-white rounded-2xl border border-gray-200 px-5 py-4">
      <p class="text-sm font-semibold text-gray-600 mb-3">
        🕐 時間帯 <span class="text-red-400">*</span>
      </p>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="text-xs text-gray-500 mb-1 block">開始時間</label>
          <input v-model="form.startTime" type="time" step="900"
            class="form-input text-base py-3 rounded-xl w-full" />
        </div>
        <div>
          <label class="text-xs text-gray-500 mb-1 block">終了時間</label>
          <input v-model="form.endTime" type="time" step="900"
            class="form-input text-base py-3 rounded-xl w-full" />
        </div>
      </div>
      <div v-if="form.startTime && form.endTime && totalMinutes > 0" class="mt-3 space-y-1">
        <div class="flex items-center justify-between text-sm">
          <span class="text-gray-500">合計残業時間</span>
          <span class="font-semibold text-primary-700">{{ formatMinutes(totalMinutes) }}</span>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span class="text-gray-500">深夜手当対象（22:00〜05:00）</span>
          <span class="font-semibold" :class="nightMinutes > 0 ? 'text-purple-700' : 'text-gray-400'">
            {{ nightMinutes > 0 ? formatMinutes(nightMinutes) : 'なし' }}
          </span>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-2xl border border-gray-200 px-5 py-4">
      <p class="text-sm font-semibold text-gray-600 mb-2">💬 残業理由 <span class="text-red-400">*</span></p>
      <textarea v-model="form.reason" rows="5" class="form-input w-full rounded-xl resize-y text-base"
        placeholder="業務内容や残業が必要な理由を入力してください" />
    </div>

    <div v-if="canSubmit" class="bg-primary-50 border border-primary-200 rounded-2xl px-5 py-4 text-sm text-primary-800 space-y-1">
      <p class="font-semibold text-primary-700 mb-2">📋 申請内容の確認</p>
      <p>申請者：<span class="font-medium">{{ form.staffName }}</span></p>
      <p>残業日：<span class="font-medium">{{ form.date }}</span></p>
      <p>時間帯：<span class="font-medium">{{ form.startTime }}〜{{ form.endTime }}</span></p>
      <p>合計：<span class="font-medium">{{ formatMinutes(totalMinutes) }}</span></p>
      <p v-if="nightMinutes > 0">深夜手当：<span class="font-medium text-purple-700">{{ formatMinutes(nightMinutes) }}</span></p>
    </div>

    <div v-if="error" class="bg-red-50 border border-red-200 rounded-2xl px-5 py-3 text-sm text-red-700">
      {{ error }}
    </div>

    <div class="space-y-3">
      <button @click="submit" :disabled="!canSubmit || saving"
        class="w-full py-4 text-base font-bold text-white bg-primary-600 rounded-2xl hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed active:scale-98 transition shadow-sm flex items-center justify-center gap-2">
        <svg v-if="saving" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        {{ saving ? '送信中...' : canSubmit ? '申請する' : '必要事項を入力してください' }}
      </button>
      <NuxtLink to="/overtime"
        class="block w-full py-3.5 text-sm font-medium text-center text-gray-600 bg-white border border-gray-300 rounded-2xl hover:bg-gray-50 transition">
        キャンセル
      </NuxtLink>
    </div>

    <div v-if="submitted"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3.5 rounded-2xl shadow-xl flex items-center gap-2 text-sm font-semibold z-50 whitespace-nowrap">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      残業申請を受け付けました
    </div>
  </div>
</template>

<script setup lang="ts">
import { calcTotalMinutes, calcNightMinutes, formatMinutes } from '~/composables/useOvertimeStore'

const { isAdmin, userProfile, currentUser } = useAuth()
const { staffNames, loadUsers } = useUsers()
const { createOvertime } = useOvertimeStore()

onMounted(async () => {
  if (isAdmin.value) await loadUsers()
})

function today() { return new Date().toISOString().slice(0, 10) }

const form = reactive({
  staffName: '',
  date: today(),
  startTime: '',
  endTime: '',
  reason: '',
})

watchEffect(() => {
  if (!isAdmin.value && userProfile.value?.staffName) {
    form.staffName = userProfile.value.staffName
  }
})

const totalMinutes = computed(() => {
  if (!form.startTime || !form.endTime) return 0
  return calcTotalMinutes(form.startTime, form.endTime)
})

const nightMinutes = computed(() => {
  if (!form.startTime || !form.endTime) return 0
  return calcNightMinutes(form.date, form.startTime, form.endTime)
})

const canSubmit = computed(() =>
  !!form.staffName && !!form.date && !!form.startTime && !!form.endTime && !!form.reason.trim() && totalMinutes.value > 0
)

const submitted = ref(false)
const saving = ref(false)
const error = ref('')

async function submit() {
  if (!canSubmit.value || saving.value) return
  saving.value = true
  error.value = ''
  try {
    await createOvertime({
      userId: currentUser.value!.uid,
      staffName: form.staffName,
      date: form.date,
      startTime: form.startTime,
      endTime: form.endTime,
      totalMinutes: totalMinutes.value,
      nightMinutes: nightMinutes.value,
      reason: form.reason,
      status: 'pending',
      appliedAt: new Date().toISOString(),
    })
    submitted.value = true
    setTimeout(() => {
      submitted.value = false
      navigateTo('/overtime')
    }, 2000)
  } catch (e: unknown) {
    error.value = '申請の送信に失敗しました。もう一度お試しください。'
    console.error(e)
  } finally {
    saving.value = false
  }
}
</script>
