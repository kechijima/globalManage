<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <h2 class="text-base font-semibold text-gray-700">ユーザー一覧</h2>
      <div class="flex items-center gap-2">
        <select v-model="sortKey" class="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700">
          <option value="hireDate-asc">入社日が早い順</option>
          <option value="hireDate-desc">入社日が遅い順</option>
          <option value="name">表示名順</option>
        </select>
        <button @click="openAddModal"
          class="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition flex-shrink-0">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          ユーザー追加
        </button>
      </div>
    </div>

    <!-- Mobile cards (sm未満) -->
    <div class="sm:hidden bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div v-if="loading" class="px-5 py-8 text-center text-sm text-gray-400">読み込み中...</div>
      <div v-else-if="!users.length" class="px-5 py-8 text-center text-sm text-gray-400">ユーザーがいません</div>
      <div v-else class="divide-y divide-gray-100">
        <div v-for="u in sortedUsers" :key="u.uid" class="p-4 space-y-2">
          <div class="flex items-start justify-between gap-2">
            <div>
              <p class="text-sm font-semibold text-gray-800">{{ u.name }}</p>
              <p class="text-xs text-gray-500">{{ u.staffName }}</p>
              <p class="text-xs text-gray-400 mt-0.5 break-all">{{ u.email }}</p>
            </div>
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0"
              :class="u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'">
              {{ u.role === 'admin' ? '管理者' : 'スタッフ' }}
            </span>
          </div>
          <div class="text-xs text-gray-500">
            <span class="text-gray-400">入社日:</span> {{ u.hireDate ?? '—' }}
            <span v-if="u.hireDate" class="text-gray-400 ml-1">({{ hireDateLabel(u.hireDate) }})</span>
          </div>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div class="bg-gray-50 rounded-lg p-2">
              <p class="text-xs text-gray-400">付与</p>
              <p class="text-sm font-bold text-gray-700">{{ effectiveLeaveTotal(u) }}<span class="text-xs font-normal">日</span></p>
            </div>
            <div class="bg-gray-50 rounded-lg p-2">
              <p class="text-xs text-gray-400">使用済</p>
              <p class="text-sm font-bold text-gray-600">{{ u.leaveUsed ?? 0 }}<span class="text-xs font-normal">日</span></p>
            </div>
            <div class="bg-gray-50 rounded-lg p-2">
              <p class="text-xs text-gray-400">残り</p>
              <p class="text-sm font-bold" :class="leaveRemaining(u) <= 3 ? 'text-red-600' : 'text-gray-800'">
                {{ leaveRemaining(u) }}<span class="text-xs font-normal">日</span>
              </p>
            </div>
          </div>
          <div class="flex gap-2 pt-1">
            <button @click="startEdit(u)"
              class="flex-1 text-xs py-2 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
              編集
            </button>
            <button @click="confirmDelete(u)"
              class="flex-1 text-xs py-2 bg-white border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition">
              削除
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop table (sm以上) -->
    <div class="hidden sm:block bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-[900px] w-full">
          <thead>
            <tr class="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wide border-b border-gray-100">
              <th class="px-4 py-3 whitespace-nowrap">名前／スタッフ名</th>
              <th class="px-4 py-3 whitespace-nowrap">メールアドレス</th>
              <th class="px-4 py-3 whitespace-nowrap">ロール</th>
              <th class="px-4 py-3 whitespace-nowrap">入社年月日</th>
              <th class="px-4 py-3 whitespace-nowrap text-center">有給付与日数</th>
              <th class="px-4 py-3 whitespace-nowrap text-center">有給使用済</th>
              <th class="px-4 py-3 whitespace-nowrap text-center">有給残日数</th>
              <th class="px-4 py-3 whitespace-nowrap">操作</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr v-if="loading">
              <td colspan="8" class="px-5 py-8 text-center text-sm text-gray-400">読み込み中...</td>
            </tr>
            <template v-else>
              <tr v-for="u in sortedUsers" :key="u.uid" class="hover:bg-gray-50 transition">

                <!-- 編集中 -->
                <template v-if="editingUid === u.uid">
                  <td class="px-4 py-2" colspan="1">
                    <input v-model="editForm.name" placeholder="表示名" class="form-input text-sm py-1.5 mb-1" />
                    <input v-model="editForm.staffName" placeholder="スタッフ名" class="form-input text-sm py-1.5" />
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{{ u.email }}</td>
                  <td class="px-4 py-2">
                    <select v-model="editForm.role" class="form-input text-sm py-1.5">
                      <option value="user">スタッフ</option>
                      <option value="admin">管理者</option>
                    </select>
                  </td>
                  <td class="px-4 py-2">
                    <input v-model="editForm.hireDate" type="date" class="form-input text-sm py-1.5"
                      @change="syncLeaveFromHire" />
                    <p v-if="editForm.hireDate" class="text-xs text-gray-400 mt-0.5">
                      法定: {{ calcLeaveTotal(editForm.hireDate) }}日
                    </p>
                  </td>
                  <td class="px-4 py-2 text-center">
                    <input v-model.number="editForm.leaveTotal" type="number" min="0" max="40"
                      class="w-16 text-center form-input text-sm py-1.5" />
                  </td>
                  <td class="px-4 py-2 text-center">
                    <input v-model.number="editForm.leaveUsed" type="number" min="0"
                      :max="editForm.leaveTotal"
                      class="w-16 text-center form-input text-sm py-1.5" />
                  </td>
                  <td class="px-4 py-3 text-center text-sm font-semibold whitespace-nowrap"
                    :class="(editForm.leaveTotal - editForm.leaveUsed) <= 3 ? 'text-red-600' : 'text-gray-800'">
                    {{ editForm.leaveTotal - editForm.leaveUsed }}日
                  </td>
                  <td class="px-4 py-2 whitespace-nowrap">
                    <div class="flex items-center gap-2">
                      <button @click="saveEdit(u.uid)"
                        class="text-xs px-3 py-1.5 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition">
                        保存
                      </button>
                      <button @click="editingUid = null"
                        class="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition">
                        取消
                      </button>
                    </div>
                  </td>
                </template>

                <!-- 表示モード -->
                <template v-else>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <p class="text-sm font-medium text-gray-800">{{ u.name }}</p>
                    <p class="text-xs text-gray-500">{{ u.staffName }}</p>
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">{{ u.email }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
                      :class="u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'">
                      {{ u.role === 'admin' ? '管理者' : 'スタッフ' }}
                    </span>
                  </td>
                  <td class="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
                    {{ u.hireDate ?? '—' }}
                    <span v-if="u.hireDate" class="block text-xs text-gray-400">
                      ({{ hireDateLabel(u.hireDate) }})
                    </span>
                  </td>
                  <td class="px-4 py-3 text-center text-sm text-gray-700 whitespace-nowrap">
                    {{ effectiveLeaveTotal(u) }}日
                    <span v-if="u.hireDate && u.leaveTotal == null" class="block text-xs text-gray-400">自動</span>
                  </td>
                  <td class="px-4 py-3 text-center text-sm text-gray-600 whitespace-nowrap">
                    {{ u.leaveUsed ?? 0 }}日
                  </td>
                  <td class="px-4 py-3 text-center text-sm font-semibold whitespace-nowrap"
                    :class="leaveRemaining(u) <= 3 ? 'text-red-600' : 'text-gray-800'">
                    {{ leaveRemaining(u) }}日
                  </td>
                  <td class="px-4 py-3 whitespace-nowrap">
                    <div class="flex items-center gap-2">
                      <button @click="startEdit(u)"
                        class="text-xs px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
                        編集
                      </button>
                      <button @click="confirmDelete(u)"
                        class="text-xs px-3 py-1.5 bg-white border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition">
                        削除
                      </button>
                    </div>
                  </td>
                </template>
              </tr>
              <tr v-if="!users.length">
                <td colspan="8" class="px-5 py-8 text-center text-sm text-gray-400">ユーザーがいません</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Mobile Edit Modal (sm未満のみ表示) -->
    <div v-if="editingUid !== null" class="fixed inset-0 bg-black/40 flex items-end sm:hidden justify-center z-50">
      <div class="bg-white rounded-t-2xl shadow-xl w-full max-h-[90dvh] overflow-y-auto">
        <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h3 class="font-semibold text-gray-800">ユーザーを編集</h3>
          <button @click="editingUid = null" class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="px-5 py-5 space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">表示名</label>
              <input v-model="editForm.name" placeholder="表示名" class="form-input text-sm" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">スタッフ名</label>
              <input v-model="editForm.staffName" placeholder="スタッフ名" class="form-input text-sm" />
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">ロール</label>
            <select v-model="editForm.role" class="form-input text-sm">
              <option value="user">スタッフ</option>
              <option value="admin">管理者</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">入社年月日</label>
            <input v-model="editForm.hireDate" type="date" class="form-input text-sm" @change="syncLeaveFromHire" />
            <p v-if="editForm.hireDate" class="text-xs text-gray-400 mt-0.5">
              法定: {{ calcLeaveTotal(editForm.hireDate) }}日
            </p>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">有給付与日数</label>
              <input v-model.number="editForm.leaveTotal" type="number" min="0" max="40"
                class="w-full text-center form-input text-sm" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">有給使用済</label>
              <input v-model.number="editForm.leaveUsed" type="number" min="0"
                :max="editForm.leaveTotal"
                class="w-full text-center form-input text-sm" />
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg px-4 py-3 text-sm">
            残日数:
            <span class="font-bold ml-1" :class="(editForm.leaveTotal - editForm.leaveUsed) <= 3 ? 'text-red-600' : 'text-gray-800'">
              {{ editForm.leaveTotal - editForm.leaveUsed }}日
            </span>
          </div>
        </div>
        <div class="px-5 pb-8 flex gap-3">
          <button @click="editingUid = null"
            class="flex-1 py-3 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition">
            取消
          </button>
          <button @click="saveEdit(editingUid)"
            class="flex-1 py-3 bg-primary-600 text-white text-sm font-medium rounded-xl hover:bg-primary-700 transition">
            保存
          </button>
        </div>
      </div>
    </div>

    <!-- Add User Modal -->
    <div v-if="showAddModal" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-md max-h-[90dvh] overflow-y-auto p-6">
        <h3 class="font-semibold text-gray-800 mb-5">ユーザーを追加</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">メールアドレス <span class="text-red-500">*</span></label>
            <input v-model="addForm.email" type="email" class="form-input" placeholder="example@email.com" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">初期パスワード <span class="text-red-500">*</span></label>
            <input v-model="addForm.password" type="text" class="form-input" placeholder="6文字以上" />
            <p class="text-xs text-gray-400 mt-1">ユーザーに初期パスワードを共有してください</p>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">表示名 <span class="text-red-500">*</span></label>
              <input v-model="addForm.name" type="text" class="form-input" placeholder="山田 太郎" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">スタッフ名 <span class="text-red-500">*</span></label>
              <input v-model="addForm.staffName" type="text" class="form-input" placeholder="山田 太郎" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ロール</label>
            <select v-model="addForm.role" class="form-input">
              <option value="user">スタッフ</option>
              <option value="admin">管理者</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">入社年月日</label>
            <input v-model="addForm.hireDate" type="date" class="form-input" />
            <p v-if="addForm.hireDate" class="text-xs text-primary-600 mt-1">
              法定付与日数: {{ calcLeaveTotal(addForm.hireDate) }}日（入社から6ヶ月経過後）
            </p>
          </div>
          <p v-if="addError" class="text-sm text-red-600">{{ addError }}</p>
        </div>
        <div class="flex gap-3 mt-6">
          <button @click="showAddModal = false"
            class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">
            キャンセル
          </button>
          <button @click="submitAdd" :disabled="addLoading || !addFormValid"
            class="flex-1 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
            {{ addLoading ? '作成中...' : '追加する' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Confirm Modal -->
    <div v-if="deletingUser" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        <h3 class="font-semibold text-gray-800 mb-2">ユーザーを削除</h3>
        <p class="text-sm text-gray-500 mb-6">
          <span class="font-medium text-gray-800">{{ deletingUser.name }}</span>（{{ deletingUser.email }}）を削除しますか？<br />
          この操作は取り消せません。
        </p>
        <div class="flex gap-3">
          <button @click="deletingUser = null"
            class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">
            キャンセル
          </button>
          <button @click="executeDelete"
            class="flex-1 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition">
            削除する
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserRecord } from '~/composables/useUsers'
import { calcLeaveTotal } from '~/composables/useUsers'

definePageMeta({ middleware: 'auth' })

const { users, loadUsers, updateUser, removeUser, createUser } = useUsers()

const loading = ref(true)
onMounted(async () => {
  await loadUsers(true)
  loading.value = false
})

const sortKey = ref<'hireDate-asc' | 'hireDate-desc' | 'name'>('hireDate-asc')

/** スタッフ権限を上、管理者権限を下に自動でグループ分けしてから、選択中の並び順を適用する */
const sortedUsers = computed(() => {
  const list = [...users.value]

  function secondaryCompare(a: UserRecord, b: UserRecord): number {
    if (sortKey.value === 'name') {
      return (a.staffName || a.name || '').localeCompare(b.staffName || b.name || '', 'ja')
    }
    // 入社日未設定のユーザーは並び順に関わらず末尾に表示する
    if (!a.hireDate && !b.hireDate) return 0
    if (!a.hireDate) return 1
    if (!b.hireDate) return -1
    return sortKey.value === 'hireDate-asc'
      ? a.hireDate.localeCompare(b.hireDate)
      : b.hireDate.localeCompare(a.hireDate)
  }

  list.sort((a, b) => {
    if (a.role !== b.role) return a.role === 'admin' ? 1 : -1
    return secondaryCompare(a, b)
  })
  return list
})

/** 実効付与日数（手動設定優先、なければ入社日から計算） */
function effectiveLeaveTotal(u: UserRecord): number {
  if (u.leaveTotal != null) return u.leaveTotal
  if (u.hireDate) return calcLeaveTotal(u.hireDate)
  return 0
}

function leaveRemaining(u: UserRecord): number {
  return effectiveLeaveTotal(u) - (u.leaveUsed ?? 0)
}

function hireDateLabel(hireDate: string): string {
  const hire = new Date(hireDate)
  const today = new Date()
  const months = (today.getFullYear() - hire.getFullYear()) * 12
    + (today.getMonth() - hire.getMonth())
  const y = Math.floor(months / 12)
  const m = months % 12
  return y > 0 ? `${y}年${m}ヶ月` : `${m}ヶ月`
}

// Edit
const editingUid = ref<string | null>(null)
const editForm = reactive({
  name: '',
  staffName: '',
  role: 'user' as 'admin' | 'user',
  hireDate: '',
  leaveTotal: 0,
  leaveUsed: 0,
})

function startEdit(u: UserRecord) {
  editingUid.value = u.uid
  editForm.name = u.name
  editForm.staffName = u.staffName
  editForm.role = u.role
  editForm.hireDate = u.hireDate ?? ''
  editForm.leaveTotal = effectiveLeaveTotal(u)
  editForm.leaveUsed = u.leaveUsed ?? 0
}

function syncLeaveFromHire() {
  if (editForm.hireDate) {
    editForm.leaveTotal = calcLeaveTotal(editForm.hireDate)
  }
}

async function saveEdit(uid: string) {
  await updateUser(uid, {
    name: editForm.name,
    staffName: editForm.staffName,
    role: editForm.role,
    hireDate: editForm.hireDate || undefined,
    leaveTotal: editForm.leaveTotal,
    leaveUsed: editForm.leaveUsed,
  })
  editingUid.value = null
}

// Delete
const deletingUser = ref<UserRecord | null>(null)

function confirmDelete(u: UserRecord) { deletingUser.value = u }

async function executeDelete() {
  if (!deletingUser.value) return
  await removeUser(deletingUser.value.uid)
  deletingUser.value = null
}

// Add
const showAddModal = ref(false)
const addError = ref('')
const addLoading = ref(false)
const addForm = reactive({
  email: '',
  password: '',
  name: '',
  staffName: '',
  role: 'user' as 'admin' | 'user',
  hireDate: '',
})

const addFormValid = computed(() =>
  addForm.email && addForm.password.length >= 6 && addForm.name && addForm.staffName
)

function openAddModal() {
  Object.assign(addForm, { email: '', password: '', name: '', staffName: '', role: 'user', hireDate: '' })
  addError.value = ''
  showAddModal.value = true
}

async function submitAdd() {
  addError.value = ''
  addLoading.value = true
  try {
    const leaveTotal = addForm.hireDate ? calcLeaveTotal(addForm.hireDate) : 0
    await createUser(addForm.email, addForm.password, {
      name: addForm.name,
      staffName: addForm.staffName,
      role: addForm.role,
      hireDate: addForm.hireDate || undefined,
      leaveTotal,
      leaveUsed: 0,
    })
    showAddModal.value = false
  } catch (e: unknown) {
    addError.value = e instanceof Error ? e.message : 'エラーが発生しました'
  } finally {
    addLoading.value = false
  }
}
</script>
