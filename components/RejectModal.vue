<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
      <h3 class="font-semibold text-gray-800 mb-1">却下理由を入力</h3>
      <p class="text-sm text-gray-500 mb-4">申請者に却下理由が通知されます。</p>
      <textarea
        v-model="reason"
        rows="4"
        class="form-input w-full rounded-xl resize-none text-base mb-4"
        placeholder="例：領収書が添付されていません。再申請してください。"
        autofocus
      />
      <div class="flex gap-3">
        <button @click="$emit('cancel')"
          class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition">
          キャンセル
        </button>
        <button @click="$emit('confirm', reason)" :disabled="!reason.trim()"
          class="flex-1 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-xl hover:bg-red-700 disabled:opacity-40 transition">
          却下する
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{ confirm: [reason: string]; cancel: [] }>()
const reason = ref('')
</script>
