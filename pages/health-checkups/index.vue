<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-base font-semibold text-gray-700">
        {{ isAdmin ? '健康診断管理' : '健康診断' }}
      </h2>
      <button v-if="isAdmin" @click="openNewEventModal"
        class="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        イベントを作成
      </button>
    </div>

    <div v-if="loading" class="flex items-center justify-center py-12">
      <svg class="animate-spin w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </div>

    <!-- ===== 管理者ビュー ===== -->
    <template v-else-if="isAdmin">
      <label class="flex items-center gap-1.5 text-sm text-gray-600 cursor-pointer select-none">
        <input v-model="showCompletedEvents" type="checkbox" class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-400" />
        完了したものも表示
      </label>

      <div v-if="visibleEvents.length === 0" class="bg-white rounded-xl border border-gray-200 py-16 text-center">
        <p class="text-4xl mb-3">🩺</p>
        <p class="text-sm text-gray-400">イベントはまだありません</p>
      </div>
      <div v-else class="space-y-3">
        <div v-for="ev in visibleEvents" :key="ev.id" class="bg-white rounded-xl border border-gray-200 p-5 cursor-pointer hover:border-primary-300 transition"
          @click="openEventDetail(ev)">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span v-if="ev.completed" class="text-xs px-2 py-0.5 rounded-full font-medium bg-blue-100 text-blue-700">
                  完了
                </span>
                <span v-else class="text-xs px-2 py-0.5 rounded-full font-medium"
                  :class="ev.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'">
                  {{ ev.active ? '表示中' : '非表示' }}
                </span>
                <span v-if="ev.deadlineDate" class="text-xs text-gray-400">期限: {{ ev.deadlineDate }}</span>
              </div>
              <h3 class="text-sm font-semibold text-gray-800">{{ ev.title }}</h3>
              <div v-if="ev.description" class="prose prose-sm max-w-none text-xs text-gray-500 mt-1 line-clamp-2" v-html="ev.description"></div>
            </div>
            <div class="flex flex-col gap-1.5 flex-shrink-0" @click.stop>
              <button v-if="!ev.completed" @click="toggleEventActive(ev)"
                class="text-xs px-2.5 py-1.5 rounded-md transition"
                :class="ev.active ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-primary-50 text-primary-700 hover:bg-primary-100'">
                {{ ev.active ? '非表示にする' : '表示する' }}
              </button>
              <button @click="toggleEventCompleted(ev)"
                class="text-xs px-2.5 py-1.5 rounded-md transition"
                :class="ev.completed ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'">
                {{ ev.completed ? '完了を解除' : '完了にする' }}
              </button>
              <button @click="openEditEventModal(ev)"
                class="text-xs px-2.5 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
                編集
              </button>
              <button @click="copyEvent(ev)"
                class="text-xs px-2.5 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
                コピーして作成
              </button>
              <button @click="confirmDeleteEvent(ev)"
                class="text-xs px-2.5 py-1.5 bg-white border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition">
                削除
              </button>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-2 mt-4">
            <div v-for="s in statusSummary(ev)" :key="s.key" class="bg-gray-50 rounded-lg p-2 text-center">
              <p class="text-lg font-bold" :class="s.color">{{ s.count }}</p>
              <p class="text-[10px] text-gray-400">{{ s.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- ===== スタッフビュー ===== -->
    <template v-else>
      <div v-if="myEvents.length === 0" class="bg-white rounded-xl border border-gray-200 py-16 text-center">
        <p class="text-4xl mb-3">🩺</p>
        <p class="text-sm text-gray-400">対象の健康診断はありません</p>
      </div>
      <div v-else class="space-y-4">
        <div v-for="ev in myEvents" :key="ev.id" class="bg-white rounded-xl border border-gray-200 p-5">
          <div class="flex items-center gap-2 flex-wrap mb-2">
            <h3 class="text-sm font-semibold text-gray-800">{{ ev.title }}</h3>
            <span class="text-xs px-2 py-0.5 rounded-full font-medium" :class="statusBadgeClass(getHealthCheckupStatus(myResponseFor(ev.id)))">
              {{ healthCheckupStatusLabels[getHealthCheckupStatus(myResponseFor(ev.id))] }}
            </span>
          </div>
          <div v-if="ev.description" class="prose prose-sm max-w-none text-xs text-gray-500 mb-1" v-html="ev.description"></div>
          <p v-if="ev.deadlineDate" class="text-xs text-gray-400 mb-4">期限: {{ ev.deadlineDate }}</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">受診予約日</label>
              <input type="date" :value="myResponseFor(ev.id)?.reservationDate ?? ''"
                @change="e => saveField(ev.id, 'reservationDate', (e.target as HTMLInputElement).value)"
                class="form-input text-sm w-full" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">受診日</label>
              <input type="date" :value="myResponseFor(ev.id)?.examDate ?? ''"
                @change="e => saveField(ev.id, 'examDate', (e.target as HTMLInputElement).value)"
                class="form-input text-sm w-full" />
            </div>
          </div>

          <div class="mt-3">
            <label class="block text-xs font-semibold text-gray-500 mb-1">受診結果</label>
            <div class="flex items-center gap-2">
              <a v-if="myResponseFor(ev.id)?.resultFileUrl" :href="myResponseFor(ev.id)?.resultFileUrl" target="_blank"
                class="text-xs px-3 py-1.5 bg-primary-50 text-primary-700 rounded-md hover:bg-primary-100 transition">
                {{ myResponseFor(ev.id)?.resultFileName || '添付を開く' }}
              </a>
              <span v-else class="text-xs text-gray-300">未添付</span>
              <label class="text-xs px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-md hover:bg-gray-50 transition cursor-pointer"
                :class="uploadingEventId === ev.id ? 'opacity-50 pointer-events-none' : ''">
                {{ uploadingEventId === ev.id ? 'アップロード中...' : (myResponseFor(ev.id)?.resultFileUrl ? '差替' : '結果を添付') }}
                <input type="file" class="hidden" accept="image/*,.pdf" @change="e => handleResultUpload(ev.id, e)" />
              </label>
            </div>
          </div>
          <p v-if="savedEventId === ev.id" class="text-xs text-green-600 mt-2">✓ 保存しました</p>
        </div>
      </div>
    </template>

    <!-- イベント作成・編集モーダル -->
    <div v-if="showNewEventModal" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-lg max-h-[92dvh] overflow-y-auto">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 class="font-semibold text-gray-800">{{ editingEventId ? '健康診断イベントを編集' : '健康診断イベントを作成' }}</h3>
          <button @click="showNewEventModal = false" class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="px-6 py-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">タイトル <span class="text-red-400">*</span></label>
            <input v-model="newEventForm.title" class="form-input w-full text-sm" placeholder="例：2026年秋 健康診断" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">説明（任意）</label>
            <RichTextEditor v-model="newEventForm.description" storage-path="healthCheckups" placeholder="実施期間や注意事項など" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">受診期限（任意）</label>
            <input v-model="newEventForm.deadlineDate" type="date" class="form-input w-full text-sm" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-2">対象者</label>
            <div class="grid grid-cols-2 gap-2">
              <button type="button" @click="newEventForm.audience = 'all'"
                class="px-3 py-2.5 rounded-lg border-2 text-sm font-medium transition"
                :class="newEventForm.audience === 'all' ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300'">
                全員
              </button>
              <button type="button" @click="newEventForm.audience = 'custom'"
                class="px-3 py-2.5 rounded-lg border-2 text-sm font-medium transition"
                :class="newEventForm.audience === 'custom' ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300'">
                個別指定
              </button>
            </div>
            <div v-if="newEventForm.audience === 'custom'" class="mt-3 flex flex-wrap gap-2">
              <button v-for="name in staffNames" :key="name" type="button" @click="toggleNewEventStaff(name)"
                class="text-xs px-3 py-1.5 rounded-full border transition"
                :class="newEventForm.audienceStaffNames.includes(name) ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300'">
                {{ name }}
              </button>
            </div>
          </div>
          <p v-if="newEventError" class="text-sm text-red-600">{{ newEventError }}</p>
        </div>
        <div class="px-6 pb-6 flex gap-3">
          <button @click="showNewEventModal = false" class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">キャンセル</button>
          <button @click="submitNewEvent" :disabled="!newEventForm.title.trim() || newEventSaving"
            class="flex-1 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 disabled:opacity-50 transition">
            {{ newEventSaving ? '保存中...' : (editingEventId ? '保存する' : '作成する') }}
          </button>
        </div>
      </div>
    </div>

    <!-- イベント詳細（管理者・スタッフ別ステータス） -->
    <div v-if="detailEvent" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-2xl max-h-[92dvh] overflow-y-auto">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 class="font-semibold text-gray-800">{{ detailEvent.title }}</h3>
          <button @click="detailEvent = null" class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-[600px] w-full">
            <thead>
              <tr class="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wide border-b border-gray-100">
                <th class="px-4 py-3">スタッフ</th>
                <th class="px-4 py-3">予約日</th>
                <th class="px-4 py-3">受診日</th>
                <th class="px-4 py-3">結果</th>
                <th class="px-4 py-3">状況</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="row in detailRows" :key="row.staffName">
                <td class="px-4 py-3 text-sm font-medium text-gray-800 whitespace-nowrap">{{ row.staffName }}</td>
                <td class="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{{ row.response?.reservationDate ?? '—' }}</td>
                <td class="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{{ row.response?.examDate ?? '—' }}</td>
                <td class="px-4 py-3 whitespace-nowrap">
                  <a v-if="row.response?.resultFileUrl" :href="row.response.resultFileUrl" target="_blank"
                    class="text-xs px-2.5 py-1 bg-primary-50 text-primary-700 rounded-md hover:bg-primary-100 transition">開く</a>
                  <span v-else class="text-xs text-gray-300">未提出</span>
                </td>
                <td class="px-4 py-3 whitespace-nowrap">
                  <span class="text-xs px-2 py-0.5 rounded-full font-medium" :class="statusBadgeClass(row.status)">
                    {{ healthCheckupStatusLabels[row.status] }}
                  </span>
                </td>
              </tr>
              <tr v-if="detailRows.length === 0">
                <td colspan="5" class="px-4 py-8 text-center text-sm text-gray-400">対象スタッフがいません</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="px-6 py-5">
          <button @click="detailEvent = null" class="w-full py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">閉じる</button>
        </div>
      </div>
    </div>

    <!-- 削除確認 -->
    <div v-if="deletingEvent" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        <h3 class="font-semibold text-gray-800 mb-2">イベントを削除</h3>
        <p class="text-sm text-gray-500 mb-6">
          <span class="font-medium text-gray-800">{{ deletingEvent.title }}</span> を削除しますか？<br />
          スタッフの回答データも合わせて表示されなくなります。この操作は取り消せません。
        </p>
        <div class="flex gap-3">
          <button @click="deletingEvent = null" class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">キャンセル</button>
          <button @click="executeDeleteEvent" class="flex-1 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition">削除する</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '~/plugins/firebase.client'
import {
  getHealthCheckupStatus, healthCheckupStatusLabels,
  type HealthCheckupEvent, type HealthCheckupStatus,
} from '~/composables/useHealthCheckups'

definePageMeta({ middleware: 'auth' })

const { isAdmin, currentUser, userProfile } = useAuth()
const {
  events, myEvents, loading, startListening,
  myResponseFor, responsesForEvent, createEvent, updateEvent, deleteEvent, saveMyResponse,
} = useHealthCheckups()
const { staffNames, loadUsers } = useUsers()

onMounted(() => {
  startListening()
  if (isAdmin.value) loadUsers()
})

function statusBadgeClass(status: HealthCheckupStatus): string {
  switch (status) {
    case 'submitted': return 'bg-green-100 text-green-700'
    case 'examined': return 'bg-blue-100 text-blue-700'
    case 'reserved': return 'bg-yellow-100 text-yellow-700'
    default: return 'bg-gray-100 text-gray-500'
  }
}

// ===== 管理者: イベント作成・編集・コピー・削除 =====
const showNewEventModal = ref(false)
const newEventSaving = ref(false)
const newEventError = ref('')
const editingEventId = ref<string | null>(null)
const newEventForm = reactive({
  title: '', description: '', deadlineDate: '',
  audience: 'all' as 'all' | 'custom',
  audienceStaffNames: [] as string[],
})

function openNewEventModal() {
  editingEventId.value = null
  Object.assign(newEventForm, { title: '', description: '', deadlineDate: '', audience: 'all', audienceStaffNames: [] })
  newEventError.value = ''
  showNewEventModal.value = true
}

function openEditEventModal(ev: HealthCheckupEvent) {
  editingEventId.value = ev.id
  Object.assign(newEventForm, {
    title: ev.title,
    description: ev.description ?? '',
    deadlineDate: ev.deadlineDate ?? '',
    audience: ev.audience,
    audienceStaffNames: [...(ev.audienceStaffNames ?? [])],
  })
  newEventError.value = ''
  showNewEventModal.value = true
}

/** 既存イベントの内容をコピーして新規作成フォームを開く（タイトルには「（コピー）」を付与） */
function copyEvent(ev: HealthCheckupEvent) {
  editingEventId.value = null
  Object.assign(newEventForm, {
    title: `${ev.title}（コピー）`,
    description: ev.description ?? '',
    deadlineDate: ev.deadlineDate ?? '',
    audience: ev.audience,
    audienceStaffNames: [...(ev.audienceStaffNames ?? [])],
  })
  newEventError.value = ''
  showNewEventModal.value = true
}

function toggleNewEventStaff(name: string) {
  const idx = newEventForm.audienceStaffNames.indexOf(name)
  if (idx >= 0) newEventForm.audienceStaffNames.splice(idx, 1)
  else newEventForm.audienceStaffNames.push(name)
}

async function submitNewEvent() {
  if (!newEventForm.title.trim() || !currentUser.value) return
  newEventSaving.value = true
  newEventError.value = ''
  try {
    const payload = {
      title: newEventForm.title,
      description: newEventForm.description || undefined,
      deadlineDate: newEventForm.deadlineDate || undefined,
      audience: newEventForm.audience,
      audienceStaffNames: newEventForm.audience === 'custom' ? newEventForm.audienceStaffNames : [],
    }
    if (editingEventId.value) {
      await updateEvent(editingEventId.value, payload)
    } else {
      await createEvent({
        ...payload,
        active: true,
        authorUid: currentUser.value.uid,
        authorName: userProfile.value?.staffName ?? '管理者',
      })
    }
    showNewEventModal.value = false
  } catch (e: unknown) {
    newEventError.value = e instanceof Error ? e.message : '保存に失敗しました'
  } finally {
    newEventSaving.value = false
  }
}

async function toggleEventActive(ev: HealthCheckupEvent) {
  await updateEvent(ev.id, { active: !ev.active })
}

const showCompletedEvents = ref(false)
const visibleEvents = computed(() =>
  showCompletedEvents.value ? events.value : events.value.filter(ev => !ev.completed)
)

async function toggleEventCompleted(ev: HealthCheckupEvent) {
  await updateEvent(ev.id, { completed: !ev.completed })
}

const deletingEvent = ref<HealthCheckupEvent | null>(null)
function confirmDeleteEvent(ev: HealthCheckupEvent) { deletingEvent.value = ev }
async function executeDeleteEvent() {
  if (!deletingEvent.value) return
  await deleteEvent(deletingEvent.value.id)
  deletingEvent.value = null
}

// ===== 管理者: 集計・詳細 =====
function statusSummary(ev: HealthCheckupEvent) {
  const targets = ev.audience === 'all' ? staffNames.value : (ev.audienceStaffNames ?? [])
  const counts: Record<HealthCheckupStatus, number> = { none: 0, reserved: 0, examined: 0, submitted: 0 }
  for (const name of targets) {
    const resp = responsesForEvent(ev.id).find(r => r.staffName === name)
    counts[getHealthCheckupStatus(resp)]++
  }
  return [
    { key: 'none', label: healthCheckupStatusLabels.none, count: counts.none, color: 'text-gray-500' },
    { key: 'reserved', label: healthCheckupStatusLabels.reserved, count: counts.reserved, color: 'text-yellow-600' },
    { key: 'examined', label: healthCheckupStatusLabels.examined, count: counts.examined, color: 'text-blue-600' },
    { key: 'submitted', label: healthCheckupStatusLabels.submitted, count: counts.submitted, color: 'text-green-600' },
  ]
}

const detailEvent = ref<HealthCheckupEvent | null>(null)
function openEventDetail(ev: HealthCheckupEvent) { detailEvent.value = ev }

const detailRows = computed(() => {
  if (!detailEvent.value) return []
  const ev = detailEvent.value
  const targets = ev.audience === 'all' ? staffNames.value : (ev.audienceStaffNames ?? [])
  return targets.map(name => {
    const response = responsesForEvent(ev.id).find(r => r.staffName === name)
    return { staffName: name, response, status: getHealthCheckupStatus(response) }
  })
})

// ===== スタッフ: 回答入力 =====
const savedEventId = ref<string | null>(null)

async function saveField(eventId: string, field: 'reservationDate' | 'examDate', value: string) {
  await saveMyResponse(eventId, { [field]: value })
  savedEventId.value = eventId
  setTimeout(() => { if (savedEventId.value === eventId) savedEventId.value = null }, 3000)
}

const uploadingEventId = ref<string | null>(null)
async function handleResultUpload(eventId: string, e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  uploadingEventId.value = eventId
  try {
    const fileRef = storageRef(storage, `healthCheckups/${eventId}/${currentUser.value?.uid}_${file.name}`)
    await uploadBytes(fileRef, file)
    const url = await getDownloadURL(fileRef)
    await saveMyResponse(eventId, { resultFileUrl: url, resultFileName: file.name })
    savedEventId.value = eventId
    setTimeout(() => { if (savedEventId.value === eventId) savedEventId.value = null }, 3000)
  } finally {
    uploadingEventId.value = null
    ;(e.target as HTMLInputElement).value = ''
  }
}
</script>
