<template>
  <div>
    <p class="text-sm font-semibold text-gray-600 mb-2">{{ label }}
      <span v-if="required" class="text-red-400 ml-0.5">*</span>
    </p>

    <!-- 添付済み -->
    <div v-if="file" class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
      <img v-if="file.type.startsWith('image/')" :src="file.url"
        class="w-14 h-14 object-cover rounded-lg flex-shrink-0 border border-gray-200" />
      <div v-else class="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-100">
        <svg class="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-700 truncate">{{ file.name }}</p>
        <p class="text-xs text-gray-400 mt-0.5">{{ formatSize(file.size) }}</p>
      </div>
      <button @click="remove" type="button"
        class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition flex-shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- 未添付 -->
    <label v-else
      class="flex items-center gap-3 w-full px-4 py-3.5 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-primary-400 hover:bg-primary-50 transition active:scale-98">
      <svg class="w-6 h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
      </svg>
      <div>
        <p class="text-sm font-medium text-gray-600">{{ label }}を添付</p>
        <p class="text-xs text-gray-400 mt-0.5">写真・PDF に対応</p>
      </div>
      <input type="file" class="hidden" :accept="accept" @change="onSelect" />
    </label>
  </div>
</template>

<script setup lang="ts">
export interface AttachedFile {
  name: string
  size: number
  type: string
  url: string
}

const props = withDefaults(defineProps<{
  label: string
  modelValue: AttachedFile | null
  required?: boolean
  accept?: string
}>(), {
  accept: 'image/*,.pdf',
})

const emit = defineEmits<{ 'update:modelValue': [v: AttachedFile | null] }>()

const file = computed(() => props.modelValue)

function onSelect(e: Event) {
  const f = (e.target as HTMLInputElement).files?.[0]
  if (!f) return
  if (props.modelValue?.url) URL.revokeObjectURL(props.modelValue.url)
  emit('update:modelValue', { name: f.name, size: f.size, type: f.type, url: URL.createObjectURL(f) })
}

function remove() {
  if (props.modelValue?.url) URL.revokeObjectURL(props.modelValue.url)
  emit('update:modelValue', null)
}

function formatSize(bytes: number) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1048576).toFixed(1) + ' MB'
}
</script>
