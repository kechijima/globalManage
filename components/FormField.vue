<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1.5">
      {{ label }}
      <span v-if="required" class="text-red-500 ml-0.5">*</span>
    </label>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  required?: boolean
}>()
</script>

<style>
.form-input {
  @apply w-full box-border px-3 py-2.5 text-sm text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition;
}
textarea.form-input {
  @apply w-full block;
}
</style>
