<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
    :class="isActive
      ? 'bg-primary-700 text-white'
      : 'text-primary-200 hover:bg-primary-700 hover:text-white'"
  >
    <component :is="iconComponent" class="w-5 h-5 flex-shrink-0" />
    {{ label }}
  </NuxtLink>
</template>

<script setup lang="ts">
import DashboardIcon from './icons/DashboardIcon.vue'
import CalendarIcon from './icons/CalendarIcon.vue'
import ReceiptIcon from './icons/ReceiptIcon.vue'
import CarIcon from './icons/CarIcon.vue'
import DocumentIcon from './icons/DocumentIcon.vue'
import UsersIcon from './icons/UsersIcon.vue'
import ClockIcon from './icons/ClockIcon.vue'
import BellIcon from './icons/BellIcon.vue'

const props = defineProps<{
  to: string
  icon: string
  label: string
}>()

const route = useRoute()
const isActive = computed(() => {
  if (props.to === '/') return route.path === '/'
  return route.path.startsWith(props.to)
})

const iconMap: Record<string, any> = {
  dashboard: DashboardIcon,
  calendar: CalendarIcon,
  receipt: ReceiptIcon,
  car: CarIcon,
  document: DocumentIcon,
  users: UsersIcon,
  clock: ClockIcon,
  bell: BellIcon,
}
const iconComponent = computed(() => iconMap[props.icon])
</script>
