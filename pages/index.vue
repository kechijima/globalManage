<template>
  <div class="space-y-6">
    <!-- 挨拶 -->
    <div class="bg-white rounded-xl border border-gray-200 p-5">
      <h1 class="text-lg font-bold text-gray-800">こんにちは、{{ userProfile?.staffName || userProfile?.name }}さん</h1>
      <p class="text-xs text-gray-400 mt-1">{{ todayLabel }}</p>
    </div>

    <!-- クイックアクション -->
    <div class="bg-white rounded-xl border border-gray-200 p-5">
      <p class="text-xs font-semibold text-gray-500 uppercase mb-3 flex items-center gap-1.5">
        <span>⚡</span> クイックアクション
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        <NuxtLink v-for="action in quickActions" :key="action.to" :to="action.to"
          class="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50/50 transition">
          <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" :class="action.bg">
            <span class="text-base">{{ action.emoji }}</span>
          </div>
          <span class="text-sm font-medium text-gray-700">{{ action.label }}</span>
        </NuxtLink>
      </div>
    </div>

    <!-- お知らせ -->
    <div class="bg-white rounded-xl border border-gray-200">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 class="font-semibold text-gray-800 flex items-center gap-1.5">
          <span>📢</span> お知らせ
          <span v-if="unreadAnnouncements.length > 0" class="text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5 font-bold">
            {{ unreadAnnouncements.length }}
          </span>
        </h2>
        <NuxtLink v-if="isAdmin" to="/announcements" class="text-xs text-primary-600 hover:underline">管理する</NuxtLink>
      </div>
      <div v-if="announcementsLoading" class="px-5 py-8 text-center text-sm text-gray-400">読み込み中...</div>
      <div v-else-if="myAnnouncements.length === 0" class="px-5 py-8 text-center text-sm text-gray-400">お知らせはありません</div>
      <div v-else class="divide-y divide-gray-50">
        <button v-for="a in myAnnouncements" :key="a.id" @click="openAnnouncement(a)"
          class="w-full text-left px-5 py-3.5 flex items-start gap-3 hover:bg-gray-50 transition">
          <span class="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" :class="isRead(a.id) ? 'bg-gray-200' : 'bg-primary-500'"></span>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium text-gray-800 truncate">{{ a.title }}</p>
            <p class="text-xs text-gray-400 mt-0.5">{{ formatAnnDate(a.createdAt) }} ／ {{ a.authorName }}</p>
          </div>
        </button>
      </div>
    </div>

    <!-- Summary cards（管理者のみ） -->
    <div v-if="isAdmin" class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="card in summaryCards" :key="card.title"
        class="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" :class="card.iconBg">
          <svg class="w-5 h-5" :class="card.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="card.icon" />
          </svg>
        </div>
        <div class="min-w-0">
          <p class="text-sm text-gray-500">{{ card.title }}</p>
          <p class="text-2xl font-bold text-gray-800 mt-0.5">{{ card.value }}</p>
          <p class="text-xs mt-1 truncate" :class="card.changeColor">{{ card.change }}</p>
        </div>
      </div>
    </div>

    <div v-if="isAdmin" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 最近の有給申請 -->
      <div class="bg-white rounded-xl border border-gray-200">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 class="font-semibold text-gray-800">最近の有給申請</h2>
          <NuxtLink to="/paid-leave" class="text-xs text-primary-600 hover:underline">すべて見る</NuxtLink>
        </div>
        <div v-if="leavesLoading" class="px-5 py-8 text-center text-sm text-gray-400">読み込み中...</div>
        <ul v-else-if="recentLeaves.length" class="divide-y divide-gray-50">
          <li v-for="leave in recentLeaves" :key="leave.id" class="px-5 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-medium text-gray-800 truncate">{{ leave.staffName }}</p>
              <p class="text-xs text-gray-500">{{ leave.startDate }}（{{ leave.days }}日）{{ leave.type }}</p>
            </div>
            <StatusBadge :status="leave.status" />
          </li>
        </ul>
        <p v-else class="px-5 py-8 text-center text-sm text-gray-400">申請データがありません</p>
      </div>

      <!-- 最近の経費申請 -->
      <div class="bg-white rounded-xl border border-gray-200">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 class="font-semibold text-gray-800">最近の経費申請</h2>
          <NuxtLink to="/expense" class="text-xs text-primary-600 hover:underline">すべて見る</NuxtLink>
        </div>
        <div v-if="expensesLoading" class="px-5 py-8 text-center text-sm text-gray-400">読み込み中...</div>
        <ul v-else-if="recentExpenses.length" class="divide-y divide-gray-50">
          <li v-for="expense in recentExpenses" :key="expense.id" class="px-5 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-medium text-gray-800 truncate">
                {{ expense.staffName }}
                <span class="text-gray-400 font-normal">— {{ expense.items[0]?.accountItem ?? '—' }}</span>
              </p>
              <p class="text-xs text-gray-500">{{ expense.appliedAt }}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-sm font-semibold text-gray-800">¥{{ expense.totalAmount.toLocaleString() }}</p>
              <StatusBadge :status="expense.status" />
            </div>
          </li>
        </ul>
        <p v-else class="px-5 py-8 text-center text-sm text-gray-400">経費データがありません</p>
      </div>

      <!-- 車両状況 -->
      <div class="bg-white rounded-xl border border-gray-200">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 class="font-semibold text-gray-800">車両状況</h2>
          <NuxtLink to="/vehicle" class="text-xs text-primary-600 hover:underline">すべて見る</NuxtLink>
        </div>
        <div v-if="vehiclesLoading" class="px-5 py-8 text-center text-sm text-gray-400">読み込み中...</div>
        <ul v-else-if="vehiclesWithAlert.length" class="divide-y divide-gray-50">
          <li v-for="v in vehiclesWithAlert" :key="v.id" class="px-5 py-3 flex items-center justify-between gap-3">
            <div class="min-w-0">
              <p class="text-sm font-medium text-gray-800 truncate">{{ v.vehicleName }}
                <span class="text-gray-400 font-normal text-xs">（{{ v.staffName }}）</span>
              </p>
              <p class="text-xs text-gray-500 font-mono">{{ v.plate }} ／ {{ v.currentMileage.toLocaleString() }} km</p>
            </div>
            <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium flex-shrink-0"
              :class="{
                'bg-red-100 text-red-700': v.alertInfo.level === 'danger',
                'bg-yellow-100 text-yellow-700': v.alertInfo.level === 'warning',
                'bg-green-100 text-green-700': v.alertInfo.level === 'ok',
              }">
              <span class="w-1.5 h-1.5 rounded-full"
                :class="{
                  'bg-red-500': v.alertInfo.level === 'danger',
                  'bg-yellow-500': v.alertInfo.level === 'warning',
                  'bg-green-500': v.alertInfo.level === 'ok',
                }"></span>
              {{ v.alertInfo.level === 'danger' ? '緊急' : v.alertInfo.level === 'warning' ? '注意' : '正常' }}
            </span>
          </li>
        </ul>
        <p v-else class="px-5 py-8 text-center text-sm text-gray-400">車両データがありません</p>
      </div>

      <!-- 有給残日数サマリー -->
      <div class="bg-white rounded-xl border border-gray-200">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 class="font-semibold text-gray-800">有給残日数</h2>
          <NuxtLink to="/paid-leave" class="text-xs text-primary-600 hover:underline">詳細を見る</NuxtLink>
        </div>
        <div v-if="usersLoading" class="px-5 py-8 text-center text-sm text-gray-400">読み込み中...</div>
        <ul v-else-if="leaveBalanceSummary.length" class="divide-y divide-gray-50">
          <li v-for="u in leaveBalanceSummary" :key="u.uid" class="px-5 py-3">
            <div class="flex items-center justify-between mb-1.5">
              <p class="text-sm font-medium text-gray-800">{{ u.staffName }}</p>
              <p class="text-sm font-semibold" :class="u.remaining <= 3 ? 'text-red-600' : 'text-gray-700'">
                残 {{ u.remaining }}日
                <span class="text-xs font-normal text-gray-400">/ {{ u.total }}日</span>
              </p>
            </div>
            <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full rounded-full transition-all"
                :class="u.remaining <= 3 ? 'bg-red-400' : u.remaining <= 7 ? 'bg-yellow-400' : 'bg-primary-500'"
                :style="{ width: u.total > 0 ? Math.min(100, u.used / u.total * 100) + '%' : '0%' }"></div>
            </div>
          </li>
        </ul>
        <p v-else class="px-5 py-8 text-center text-sm text-gray-400">ユーザーデータがありません</p>
      </div>
    </div>

    <!-- お知らせ詳細モーダル -->
    <div v-if="openedAnnouncement" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-lg max-h-[90dvh] overflow-y-auto">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div class="min-w-0">
            <h3 class="font-semibold text-gray-800">{{ openedAnnouncement.title }}</h3>
            <p class="text-xs text-gray-400 mt-0.5">{{ formatAnnDate(openedAnnouncement.createdAt) }} ／ {{ openedAnnouncement.authorName }}</p>
          </div>
          <button @click="openedAnnouncement = null" class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="px-6 py-5 prose prose-sm max-w-none text-sm text-gray-700" v-html="openedAnnouncement.bodyHtml"></div>
        <div class="px-6 pb-6">
          <button @click="openedAnnouncement = null"
            class="w-full py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">
            閉じる
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { calcLeaveTotal } from '~/composables/useUsers'
import type { UserRecord } from '~/composables/useUsers'
import type { AnnouncementDoc } from '~/composables/useAnnouncements'

definePageMeta({ middleware: 'auth' })

const { isAdmin, userProfile } = useAuth()
const { leaves, loading: leavesLoading, startListening: startLeaveListening } = usePaidLeaveStore()
const { expenses, loading: expensesLoading, startListening: startExpenseListening } = useExpenseStore()
const { vehiclesWithAlert, loadVehicles } = useVehicleManagement()
const { users, loadUsers } = useUsers()
const {
  myAnnouncements, unreadAnnouncements, loading: announcementsLoading,
  startListening: startAnnouncementsListening, isRead, markRead,
} = useAnnouncements()

const vehiclesLoading = ref(true)
const usersLoading = ref(true)

onMounted(async () => {
  startAnnouncementsListening()
  if (isAdmin.value) {
    startLeaveListening()
    startExpenseListening()
    await Promise.all([
      loadVehicles().then(() => { vehiclesLoading.value = false }),
      loadUsers().then(() => { usersLoading.value = false }),
    ])
  }
})

const todayLabel = computed(() =>
  new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })
)

const quickActions = computed(() => {
  if (isAdmin.value) {
    return [
      { to: '/paid-leave', label: '有給管理', emoji: '📅', bg: 'bg-blue-50' },
      { to: '/expense', label: '経費管理', emoji: '🧾', bg: 'bg-orange-50' },
      { to: '/card-expenses', label: '社用カード経費申請', emoji: '💳', bg: 'bg-indigo-50' },
      { to: '/overtime', label: '残業管理', emoji: '🕐', bg: 'bg-purple-50' },
      { to: '/vehicle', label: '車両管理', emoji: '🚗', bg: 'bg-green-50' },
      { to: '/health-checkups', label: '健康診断管理', emoji: '🩺', bg: 'bg-teal-50' },
      { to: '/users', label: 'ユーザー管理', emoji: '👥', bg: 'bg-pink-50' },
      { to: '/announcements', label: 'お知らせ管理', emoji: '📢', bg: 'bg-yellow-50' },
    ]
  }
  return [
    { to: '/paid-leave/new', label: '有給申請', emoji: '📅', bg: 'bg-blue-50' },
    { to: '/expense/new', label: '経費申請', emoji: '🧾', bg: 'bg-orange-50' },
    { to: '/card-expenses', label: '社用カード経費申請', emoji: '💳', bg: 'bg-indigo-50' },
    { to: '/overtime', label: '残業申請', emoji: '🕐', bg: 'bg-purple-50' },
    { to: '/vehicle', label: '車両管理', emoji: '🚗', bg: 'bg-green-50' },
    { to: '/health-checkups', label: '健康診断', emoji: '🩺', bg: 'bg-teal-50' },
    { to: '/announcements', label: 'お知らせ', emoji: '📢', bg: 'bg-yellow-50' },
  ]
})

function formatAnnDate(iso: string): string {
  const d = new Date(iso)
  const now = new Date()
  const diff = Math.floor((now.getTime() - d.getTime()) / 1000)
  if (diff < 60) return 'たった今'
  if (diff < 3600) return `${Math.floor(diff / 60)}分前`
  if (diff < 86400) return `${Math.floor(diff / 3600)}時間前`
  if (diff < 86400 * 7) return `${Math.floor(diff / 86400)}日前`
  return d.toLocaleDateString('ja-JP', { month: 'short', day: 'numeric' })
}

const openedAnnouncement = ref<AnnouncementDoc | null>(null)
function openAnnouncement(a: AnnouncementDoc) {
  openedAnnouncement.value = a
  if (!isRead(a.id)) markRead(a.id)
}

const recentLeaves = computed(() => [...leaves.value].sort((a, b) => b.appliedAt.localeCompare(a.appliedAt)).slice(0, 5))
const recentExpenses = computed(() => [...expenses.value].sort((a, b) => b.appliedAt.localeCompare(a.appliedAt)).slice(0, 5))

function effectiveLeaveTotal(u: UserRecord): number {
  if (u.leaveTotal != null) return u.leaveTotal
  if (u.hireDate) return calcLeaveTotal(u.hireDate)
  return 0
}

const leaveBalanceSummary = computed(() =>
  users.value.map(u => ({
    uid: u.uid,
    staffName: u.staffName,
    total: effectiveLeaveTotal(u),
    used: u.leaveUsed ?? 0,
    remaining: effectiveLeaveTotal(u) - (u.leaveUsed ?? 0),
  })).sort((a, b) => a.remaining - b.remaining)
)

const summaryCards = computed(() => {
  const pendingLeaves = leaves.value.filter(l => l.status === 'pending').length
  const pendingExpenses = expenses.value.filter(e => e.status === 'pending')
  const pendingExpenseAmount = pendingExpenses.reduce((s, e) => s + e.totalAmount, 0)
  const vehicleAlerts = vehiclesWithAlert.value.filter(v => v.alertInfo.level !== 'ok').length
  const staffCount = users.value.length

  return [
    {
      title: '有給申請（承認待ち）',
      value: pendingLeaves + '件',
      change: `今月の申請 ${leaves.value.filter(l => l.appliedAt?.startsWith(new Date().toISOString().slice(0, 7))).length}件`,
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      changeColor: pendingLeaves > 0 ? 'text-yellow-600' : 'text-gray-400',
    },
    {
      title: '経費申請（承認待ち）',
      value: pendingExpenses.length + '件',
      change: pendingExpenseAmount > 0 ? `¥${pendingExpenseAmount.toLocaleString()} 申請中` : '申請なし',
      icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      changeColor: pendingExpenses.length > 0 ? 'text-yellow-600' : 'text-gray-400',
    },
    {
      title: '車両アラート',
      value: vehicleAlerts + '台',
      change: `全${vehiclesWithAlert.value.length}台中`,
      icon: 'M19 17H5m0 0a2 2 0 01-2-2V9a2 2 0 012-2h1.5l1.5-3h8l1.5 3H17a2 2 0 012 2v6a2 2 0 01-2 2z',
      iconBg: vehicleAlerts > 0 ? 'bg-red-50' : 'bg-green-50',
      iconColor: vehicleAlerts > 0 ? 'text-red-600' : 'text-green-600',
      changeColor: vehicleAlerts > 0 ? 'text-red-500' : 'text-gray-400',
    },
    {
      title: 'スタッフ数',
      value: staffCount + '名',
      change: `管理者 ${users.value.filter(u => u.role === 'admin').length}名 / スタッフ ${users.value.filter(u => u.role === 'user').length}名`,
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      changeColor: 'text-gray-400',
    },
  ]
})
</script>
