<template>
  <NuxtLink :to="to"
    class="flex flex-col items-center justify-center flex-1 py-2 gap-0.5 transition-colors"
    :class="active ? 'text-primary-600' : 'text-gray-400'">
    <!-- dashboard -->
    <svg v-if="icon === 'dashboard'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
    <!-- calendar -->
    <svg v-else-if="icon === 'calendar'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <!-- receipt -->
    <svg v-else-if="icon === 'receipt'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9 14H7m2 0h2m-2 0v2m0-2V7m4 7h2m-2 0h-2m2 0v2m0-2V7M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <!-- car -->
    <svg v-else-if="icon === 'car'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1.293 1.293A1 1 0 005 18h1m10-2h2a1 1 0 001-1v-3.586a1 1 0 00-.293-.707l-2.414-2.414A1 1 0 0016 10h-1m-6 6h6" />
    </svg>
    <!-- users -->
    <svg v-else-if="icon === 'users'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    <!-- clock -->
    <svg v-else-if="icon === 'clock'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span class="text-[10px] font-medium leading-none">{{ label }}</span>
    <!-- アクティブインジケーター -->
    <span v-if="active" class="w-1 h-1 rounded-full bg-primary-600 mt-0.5"></span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  icon: 'dashboard' | 'calendar' | 'receipt' | 'car' | 'users' | 'clock'
  label: string
  active: boolean
}>()
</script>
