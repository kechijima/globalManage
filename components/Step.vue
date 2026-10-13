<template>
  <div class="flex gap-3">
    <div class="w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
      {{ n }}
    </div>
    <div class="flex-1">
      <p class="text-sm font-semibold text-gray-800">{{ title }}</p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ n: number | string; title: string }>()
</script>
