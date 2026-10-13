<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-base font-semibold text-gray-700">{{ isAdmin ? 'お知らせ管理' : 'お知らせ' }}</h2>
      <button v-if="isAdmin" @click="openNewModal"
        class="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        お知らせを作成
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
        <input v-model="showCompleted" type="checkbox" class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-400" />
        完了したものも表示
      </label>

      <div v-if="visibleAnnouncements.length === 0" class="bg-white rounded-xl border border-gray-200 py-16 text-center">
        <p class="text-4xl mb-3">📢</p>
        <p class="text-sm text-gray-400">お知らせはまだありません</p>
      </div>

      <div v-else class="space-y-3">
        <div v-for="a in visibleAnnouncements" :key="a.id"
          class="bg-white rounded-xl border border-gray-200 p-5">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span v-if="a.completed" class="text-xs px-2 py-0.5 rounded-full font-medium bg-blue-100 text-blue-700">
                  完了
                </span>
                <span v-else class="text-xs px-2 py-0.5 rounded-full font-medium"
                  :class="a.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'">
                  {{ a.active ? '表示中' : '非表示' }}
                </span>
                <span class="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">
                  {{ audienceLabel(a) }}
                </span>
                <span class="text-xs text-gray-400">{{ formatDate(a.createdAt) }}</span>
              </div>
              <h3 class="text-sm font-semibold text-gray-800">{{ a.title }}</h3>
              <div class="prose prose-sm max-w-none text-xs text-gray-500 mt-1 line-clamp-2" v-html="a.bodyHtml"></div>
              <p class="text-xs text-gray-400 mt-1.5">作成者: {{ a.authorName }}</p>
            </div>
            <div class="flex flex-col gap-1.5 flex-shrink-0">
              <button v-if="!a.completed" @click="toggleActive(a)"
                class="text-xs px-2.5 py-1.5 rounded-md transition"
                :class="a.active ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-primary-50 text-primary-700 hover:bg-primary-100'">
                {{ a.active ? '非表示にする' : '表示する' }}
              </button>
              <button @click="toggleCompleted(a)"
                class="text-xs px-2.5 py-1.5 rounded-md transition"
                :class="a.completed ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'">
                {{ a.completed ? '完了を解除' : '完了にする' }}
              </button>
              <button @click="openEditModal(a)"
                class="text-xs px-2.5 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
                編集
              </button>
              <button @click="confirmDelete(a)"
                class="text-xs px-2.5 py-1.5 bg-white border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition">
                削除
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- ===== スタッフビュー（閲覧のみ） ===== -->
    <template v-else>
      <div v-if="myAnnouncements.length === 0" class="bg-white rounded-xl border border-gray-200 py-16 text-center">
        <p class="text-4xl mb-3">📢</p>
        <p class="text-sm text-gray-400">お知らせはありません</p>
      </div>
      <div v-else class="bg-white rounded-xl border border-gray-200 divide-y divide-gray-50">
        <button v-for="a in myAnnouncements" :key="a.id" @click="openStaffDetail(a)"
          class="w-full text-left px-5 py-3.5 flex items-start gap-3 hover:bg-gray-50 transition">
          <span class="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" :class="isRead(a.id) ? 'bg-gray-200' : 'bg-primary-500'"></span>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium text-gray-800 truncate">{{ a.title }}</p>
            <p class="text-xs text-gray-400 mt-0.5">{{ formatDate(a.createdAt) }} ／ {{ a.authorName }}</p>
          </div>
        </button>
      </div>

      <!-- スタッフ用 詳細モーダル -->
      <div v-if="staffDetail" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
        <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-lg max-h-[90dvh] overflow-y-auto">
          <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div class="min-w-0">
              <h3 class="font-semibold text-gray-800">{{ staffDetail.title }}</h3>
              <p class="text-xs text-gray-400 mt-0.5">{{ formatDate(staffDetail.createdAt) }} ／ {{ staffDetail.authorName }}</p>
            </div>
            <button @click="staffDetail = null" class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="px-6 py-5 prose prose-sm max-w-none text-sm text-gray-700" v-html="staffDetail.bodyHtml"></div>
          <div class="px-6 pb-6">
            <button @click="staffDetail = null" class="w-full py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">閉じる</button>
          </div>
        </div>
      </div>
    </template>

    <!-- 作成・編集モーダル -->
    <div v-if="showModal" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-2xl max-h-[92dvh] overflow-y-auto">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 class="font-semibold text-gray-800">{{ editingId ? 'お知らせを編集' : 'お知らせを作成' }}</h3>
          <button @click="showModal = false" class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="px-6 py-5 space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">タイトル <span class="text-red-400">*</span></label>
            <input v-model="form.title" class="form-input w-full text-sm" placeholder="例：2026年秋 健康診断のお知らせ" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">本文 <span class="text-red-400">*</span></label>
            <RichTextEditor v-model="form.bodyHtml" storage-path="announcements" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-2">掲載範囲</label>
            <div class="grid grid-cols-2 gap-2">
              <button v-for="opt in audienceOptions" :key="opt.value" type="button"
                @click="form.audience = opt.value"
                class="px-3 py-2.5 rounded-lg border-2 text-sm font-medium transition text-left"
                :class="form.audience === opt.value
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300'">
                {{ opt.label }}
              </button>
            </div>
            <div v-if="form.audience === 'custom'" class="mt-3 flex flex-wrap gap-2">
              <button v-for="name in staffNames" :key="name" type="button"
                @click="toggleStaffName(name)"
                class="text-xs px-3 py-1.5 rounded-full border transition"
                :class="form.audienceStaffNames.includes(name)
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300'">
                {{ name }}
              </button>
              <p v-if="staffNames.length === 0" class="text-xs text-gray-400">スタッフデータがありません</p>
            </div>
          </div>

          <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
            <input v-model="form.active" type="checkbox" class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-400" />
            作成後すぐに表示する
          </label>

          <p v-if="saveError" class="text-sm text-red-600">{{ saveError }}</p>
        </div>

        <div class="px-6 pb-6 pt-2 flex gap-3">
          <button @click="showModal = false"
            class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">
            キャンセル
          </button>
          <button @click="submitForm" :disabled="!formValid || saving"
            class="flex-1 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 disabled:opacity-50 transition">
            {{ saving ? '保存中...' : '保存する' }}
          </button>
        </div>
      </div>
    </div>

    <!-- 削除確認 -->
    <div v-if="deletingItem" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        <h3 class="font-semibold text-gray-800 mb-2">お知らせを削除</h3>
        <p class="text-sm text-gray-500 mb-6">
          <span class="font-medium text-gray-800">{{ deletingItem.title }}</span> を削除しますか？<br />
          この操作は取り消せません。
        </p>
        <div class="flex gap-3">
          <button @click="deletingItem = null" class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">キャンセル</button>
          <button @click="executeDelete" class="flex-1 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition">削除する</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AnnouncementDoc, AnnouncementAudience } from '~/composables/useAnnouncements'

definePageMeta({ middleware: 'auth' })

const { isAdmin, currentUser, userProfile } = useAuth()
const {
  announcements, myAnnouncements, loading, startListening,
  isRead, markRead, createAnnouncement, updateAnnouncement, deleteAnnouncement,
} = useAnnouncements()
const { staffNames, loadUsers } = useUsers()

onMounted(async () => {
  startListening()
  if (isAdmin.value) await loadUsers()
})

const showCompleted = ref(false)
const visibleAnnouncements = computed(() =>
  showCompleted.value ? announcements.value : announcements.value.filter(a => !a.completed)
)

async function toggleCompleted(a: AnnouncementDoc) {
  await updateAnnouncement(a.id, { completed: !a.completed })
}

const staffDetail = ref<AnnouncementDoc | null>(null)
function openStaffDetail(a: AnnouncementDoc) {
  staffDetail.value = a
  if (!isRead(a.id)) markRead(a.id)
}

const audienceOptions: { value: AnnouncementAudience; label: string }[] = [
  { value: 'all', label: '全員' },
  { value: 'admin', label: '管理者のみ' },
  { value: 'user', label: 'スタッフのみ' },
  { value: 'custom', label: '個別スタッフ指定' },
]

function audienceLabel(a: AnnouncementDoc): string {
  if (a.audience === 'custom') return `個別（${(a.audienceStaffNames ?? []).length}名）`
  return audienceOptions.find(o => o.value === a.audience)?.label ?? a.audience
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString('ja-JP', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch { return iso }
}

const showModal = ref(false)
const editingId = ref<string | null>(null)
const saving = ref(false)
const saveError = ref('')

const form = reactive({
  title: '',
  bodyHtml: '',
  audience: 'all' as AnnouncementAudience,
  audienceStaffNames: [] as string[],
  active: true,
})

const formValid = computed(() =>
  !!form.title.trim() && !!form.bodyHtml.trim() && form.bodyHtml !== '<p></p>'
)

function toggleStaffName(name: string) {
  const idx = form.audienceStaffNames.indexOf(name)
  if (idx >= 0) form.audienceStaffNames.splice(idx, 1)
  else form.audienceStaffNames.push(name)
}

function openNewModal() {
  editingId.value = null
  Object.assign(form, { title: '', bodyHtml: '', audience: 'all', audienceStaffNames: [], active: true })
  saveError.value = ''
  showModal.value = true
}

function openEditModal(a: AnnouncementDoc) {
  editingId.value = a.id
  Object.assign(form, {
    title: a.title,
    bodyHtml: a.bodyHtml,
    audience: a.audience,
    audienceStaffNames: [...(a.audienceStaffNames ?? [])],
    active: a.active,
  })
  saveError.value = ''
  showModal.value = true
}

async function submitForm() {
  if (!formValid.value || !currentUser.value) return
  saving.value = true
  saveError.value = ''
  try {
    if (editingId.value) {
      await updateAnnouncement(editingId.value, {
        title: form.title,
        bodyHtml: form.bodyHtml,
        audience: form.audience,
        audienceStaffNames: form.audience === 'custom' ? form.audienceStaffNames : [],
        active: form.active,
      })
    } else {
      await createAnnouncement({
        title: form.title,
        bodyHtml: form.bodyHtml,
        audience: form.audience,
        audienceStaffNames: form.audience === 'custom' ? form.audienceStaffNames : [],
        active: form.active,
        authorUid: currentUser.value.uid,
        authorName: userProfile.value?.staffName ?? '管理者',
      })
    }
    showModal.value = false
  } catch (e: unknown) {
    saveError.value = e instanceof Error ? e.message : '保存に失敗しました'
  } finally {
    saving.value = false
  }
}

async function toggleActive(a: AnnouncementDoc) {
  await updateAnnouncement(a.id, { active: !a.active })
}

const deletingItem = ref<AnnouncementDoc | null>(null)
function confirmDelete(a: AnnouncementDoc) { deletingItem.value = a }
async function executeDelete() {
  if (!deletingItem.value) return
  await deleteAnnouncement(deletingItem.value.id)
  deletingItem.value = null
}
</script>
