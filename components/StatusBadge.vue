<template>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="badgeClass">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  status: string
}>()

const statusMap: Record<string, { label: string; class: string }> = {
  pending:     { label: '申請中',  class: 'bg-yellow-100 text-yellow-800' },
  approved:    { label: '承認済',  class: 'bg-green-100 text-green-800' },
  rejected:    { label: '却下',    class: 'bg-red-100 text-red-800' },
  reserved:    { label: '予約済',  class: 'bg-blue-100 text-blue-800' },
  in_use:      { label: '使用中',  class: 'bg-orange-100 text-orange-800' },
  returned:    { label: '返却済',  class: 'bg-gray-100 text-gray-700' },
  available:   { label: '利用可',  class: 'bg-green-100 text-green-800' },
  maintenance: { label: '整備中',  class: 'bg-red-100 text-red-800' },
  paid:        { label: '支払済',  class: 'bg-green-100 text-green-800' },
  unpaid:      { label: '未払い',  class: 'bg-red-100 text-red-800' },
}

const badgeClass = computed(() => statusMap[props.status]?.class ?? 'bg-gray-100 text-gray-700')
const label = computed(() => statusMap[props.status]?.label ?? props.status)
</script>
