<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white w-full sm:rounded-2xl sm:max-w-md shadow-2xl rounded-t-2xl overflow-hidden">
        <div class="flex justify-center pt-3 pb-1 sm:hidden">
          <div class="w-10 h-1 bg-gray-200 rounded-full"></div>
        </div>

        <div class="px-6 pt-4 pb-2 text-center">
          <div class="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-2xl mb-3">
            <MikanIcon class="w-9 h-9" />
          </div>
          <h2 class="text-base font-bold text-gray-800">ようこそ！はじめに2つ設定しましょう</h2>
          <p class="text-xs text-gray-400 mt-1 leading-relaxed">スマホアプリのように使え、承認・却下などの通知もすぐ届くようになります</p>
        </div>

        <div class="px-6 py-4 space-y-3">
          <!-- ホーム画面に追加 -->
          <div class="border border-gray-200 rounded-2xl p-4 flex items-center gap-3">
            <div class="w-11 h-11 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">ホーム画面に追加</p>
              <p class="text-xs text-gray-400 mt-0.5">アプリのようにすぐ起動できます</p>
            </div>
            <span v-if="isInstalled" class="text-xs text-green-600 font-semibold flex-shrink-0">✓ 済</span>
            <button v-else @click="openInstallGuide"
              class="text-xs px-3 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition flex-shrink-0">
              追加する
            </button>
          </div>

          <!-- 通知を有効にする -->
          <div class="border border-gray-200 rounded-2xl p-4 flex items-center gap-3">
            <div class="w-11 h-11 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800">プッシュ通知</p>
              <p class="text-xs text-gray-400 mt-0.5">承認・却下をすぐお知らせします</p>
            </div>
            <span v-if="permissionState === 'granted'" class="text-xs text-green-600 font-semibold flex-shrink-0">✓ 済</span>
            <button v-else-if="permissionState === 'denied'" disabled
              class="text-xs px-3 py-2 bg-gray-100 text-gray-400 font-semibold rounded-lg flex-shrink-0">
              ブロック中
            </button>
            <button v-else @click="handleEnableNotif" :disabled="registering"
              class="text-xs px-3 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 disabled:opacity-50 transition flex-shrink-0">
              {{ registering ? '設定中...' : '有効にする' }}
            </button>
          </div>

          <p v-if="notifDeniedMsg" class="text-xs text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-xl px-3 py-2 leading-relaxed">
            ブラウザ側で通知がブロックされています。設定から許可に変更後、マイページから再度お試しください。
          </p>
        </div>

        <div class="px-6 pb-6 pt-1">
          <button @click="close"
            class="w-full py-3 bg-gray-50 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-100 transition">
            あとで設定する
          </button>
        </div>
      </div>
    </div>
  </Teleport>

  <PwaGuideModal v-model="installGuideOpen" />
</template>

<script setup lang="ts">
import MikanIcon from '~/components/icons/MikanIcon.vue'

const open = defineModel<boolean>({ default: false })

const { isInstalled } = usePwa()
const { permissionState, registering, enableNotifications } = useFcm()

const installGuideOpen = ref(false)
const notifDeniedMsg = ref(false)

function openInstallGuide() {
  installGuideOpen.value = true
}

async function handleEnableNotif() {
  notifDeniedMsg.value = false
  const ok = await enableNotifications()
  if (!ok && permissionState.value === 'denied') {
    notifDeniedMsg.value = true
  }
}

function close() {
  open.value = false
}
</script>
