<template>
  <div class="max-w-2xl mx-auto pb-8">

    <!-- ヘッダー -->
    <div class="flex items-center justify-between mb-4">
      <div>
        <h1 class="text-xl font-bold text-gray-800">通知一覧</h1>
        <p class="text-xs text-gray-400 mt-0.5">未読 {{ unreadCount }}件</p>
      </div>
      <button v-if="unreadCount > 0" @click="markAllRead"
        class="text-xs px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition font-medium">
        すべて既読にする
      </button>
    </div>

    <!-- フィルター（管理者のみ） -->
    <div v-if="isAdmin" class="flex gap-2 mb-4 overflow-x-auto pb-1">
      <button v-for="f in filters" :key="f.key" @click="activeFilter = f.key"
        class="flex-shrink-0 text-xs px-3 py-1.5 rounded-full border transition font-medium"
        :class="activeFilter === f.key
          ? 'bg-primary-600 text-white border-primary-600'
          : 'bg-white text-gray-500 border-gray-200 hover:border-primary-300'">
        {{ f.label }}
        <span v-if="f.count > 0" class="ml-1 bg-white/30 text-inherit rounded-full px-1">{{ f.count }}</span>
      </button>
    </div>

    <!-- 通知リスト -->
    <div v-if="filteredNotifs.length === 0"
      class="bg-white rounded-2xl border border-gray-200 py-16 text-center">
      <p class="text-4xl mb-3">🔔</p>
      <p class="text-sm text-gray-400">通知はありません</p>
    </div>

    <div v-else class="space-y-2">
      <button v-for="n in filteredNotifs" :key="n.id"
        @click="handleClick(n)"
        class="w-full bg-white rounded-2xl border transition text-left p-4 flex gap-3 items-start hover:shadow-sm active:scale-[0.99]"
        :class="n.read ? 'border-gray-100' : 'border-primary-200 bg-primary-50/30'">

        <!-- アイコン -->
        <div class="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg"
          :class="iconBg(n.type)">
          {{ iconEmoji(n.type) }}
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-2">
            <p class="text-sm font-semibold text-gray-800 leading-snug">{{ n.title }}</p>
            <span v-if="!n.read" class="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-1.5"></span>
          </div>
          <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">{{ n.body }}</p>

          <!-- 管理者: 対応者表示 -->
          <div v-if="isAdmin && n.handledBy" class="mt-1.5 flex items-center gap-1">
            <span class="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
              対応: {{ n.handledBy }}
            </span>
          </div>

          <!-- タイプバッジ（管理者） -->
          <div v-if="isAdmin" class="mt-1.5 flex items-center gap-1.5 flex-wrap">
            <span class="text-[10px] px-2 py-0.5 rounded-full font-medium" :class="typeBadge(n.type)">
              {{ typeLabel(n.type) }}
            </span>
          </div>

          <p class="text-[10px] text-gray-400 mt-1.5">{{ formatDate(n.createdAt) }}</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NotificationDoc } from '~/composables/useNotifications'

const { notifications, unreadCount, markRead, markAllRead } = useNotifications()
const { isAdmin } = useAuth()

type FilterKey = 'all' | 'new_app' | 'audit' | 'result'

const activeFilter = ref<FilterKey>('all')

// 既読済みの通知は一覧から非表示にする（未読のみを対象に集計・表示する）
const unreadNotifs = computed(() => notifications.value.filter(n => !n.read))

const filters = computed(() => [
  { key: 'all' as FilterKey,     label: 'すべて',   count: unreadNotifs.value.length },
  { key: 'new_app' as FilterKey, label: '新規申請', count: unreadNotifs.value.filter(n => isNewApp(n.type)).length },
  { key: 'audit' as FilterKey,   label: '対応履歴', count: unreadNotifs.value.filter(n => isAudit(n.type)).length },
  { key: 'result' as FilterKey,  label: '申請結果', count: unreadNotifs.value.filter(n => isResult(n.type)).length },
])

function isNewApp(type: string) {
  return ['leave_new', 'expense_new', 'overtime_new', 'vehicle_update'].includes(type)
}
function isAudit(type: string) {
  return type.startsWith('audit_')
}
function isResult(type: string) {
  return ['leave_approved', 'leave_rejected', 'expense_approved', 'expense_rejected',
    'overtime_approved', 'overtime_rejected'].includes(type)
}

const filteredNotifs = computed(() => {
  const list = unreadNotifs.value
  switch (activeFilter.value) {
    case 'new_app':  return list.filter(n => isNewApp(n.type))
    case 'audit':    return list.filter(n => isAudit(n.type))
    case 'result':   return list.filter(n => isResult(n.type))
    default:         return list
  }
})

function iconEmoji(type: string) {
  if (isNewApp(type)) return '📋'
  if (type.includes('approved')) return '✅'
  if (type.includes('rejected')) return '❌'
  if (isAudit(type)) return '📝'
  if (type.startsWith('vehicle')) return '🚗'
  return '🔔'
}

function iconBg(type: string) {
  if (isNewApp(type)) return 'bg-blue-50'
  if (type.includes('approved')) return 'bg-green-50'
  if (type.includes('rejected')) return 'bg-red-50'
  if (isAudit(type)) return 'bg-gray-50'
  return 'bg-primary-50'
}

function typeLabel(type: string) {
  const map: Record<string, string> = {
    leave_new: '有給申請（新規）',
    expense_new: '経費申請（新規）',
    overtime_new: '残業申請（新規）',
    leave_approved: '有給：承認',
    leave_rejected: '有給：却下',
    expense_approved: '経費：承認',
    expense_rejected: '経費：却下',
    overtime_approved: '残業：承認',
    overtime_rejected: '残業：却下',
    audit_leave_approved: '有給承認（対応履歴）',
    audit_leave_rejected: '有給却下（対応履歴）',
    audit_expense_approved: '経費承認（対応履歴）',
    audit_expense_rejected: '経費却下（対応履歴）',
    audit_overtime_approved: '残業承認（対応履歴）',
    audit_overtime_rejected: '残業却下（対応履歴）',
    vehicle_update: '車両情報更新',
    test: 'テスト通知',
  }
  return map[type] ?? type
}

function typeBadge(type: string) {
  if (isNewApp(type)) return 'bg-blue-100 text-blue-700'
  if (type.includes('approved')) return 'bg-green-100 text-green-700'
  if (type.includes('rejected')) return 'bg-red-100 text-red-700'
  if (isAudit(type)) return 'bg-gray-100 text-gray-600'
  return 'bg-gray-100 text-gray-500'
}

function formatDate(iso: string) {
  const d = new Date(iso)
  const now = new Date()
  const diff = Math.floor((now.getTime() - d.getTime()) / 1000)
  if (diff < 60) return 'たった今'
  if (diff < 3600) return `${Math.floor(diff / 60)}分前`
  if (diff < 86400) return `${Math.floor(diff / 3600)}時間前`
  if (diff < 86400 * 7) return `${Math.floor(diff / 86400)}日前`
  return d.toLocaleDateString('ja-JP', { month: 'short', day: 'numeric' })
}

async function handleClick(n: NotificationDoc) {
  if (!n.read) await markRead(n.id)
  if (n.link) navigateTo(n.link)
}
</script>
