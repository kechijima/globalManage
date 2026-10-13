<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Logo / Header -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 shadow-sm border border-gray-100">
          <MikanIcon class="w-10 h-10" />
        </div>
        <h1 class="text-2xl font-bold text-gray-800">みかん管理システム</h1>
        <p class="text-sm text-gray-500 mt-1">訪問看護ステーション</p>
      </div>

      <!-- Card -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 class="text-lg font-semibold text-gray-800 mb-6">ログイン</h2>

        <!-- Error message -->
        <div v-if="errorMsg" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-start gap-2">
          <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ errorMsg }}
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
            <input
              v-model="email"
              type="email"
              required
              placeholder="example@nurse.example"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">パスワード</label>
            <input
              v-model="password"
              type="password"
              required
              placeholder="パスワードを入力"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full py-2.5 px-4 bg-primary-700 text-white text-sm font-semibold rounded-lg hover:bg-primary-800 disabled:opacity-60 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
          >
            <svg v-if="loading" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {{ loading ? 'ログイン中...' : 'ログイン' }}
          </button>

          <button type="button" @click="showReset = !showReset"
            class="w-full text-xs text-primary-600 hover:text-primary-800 py-1 transition text-center">
            パスワードを忘れた方はこちら
          </button>
        </form>

        <!-- パスワードリセット -->
        <div v-if="showReset" class="mt-4 pt-4 border-t border-gray-100">
          <p class="text-sm font-medium text-gray-700 mb-2">パスワードリセット</p>
          <p class="text-xs text-gray-500 mb-3">登録済みのメールアドレスにリセット用リンクを送信します。</p>
          <div v-if="resetMsg" class="mb-3 p-3 rounded-lg text-xs"
            :class="resetMsg.ok ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'">
            {{ resetMsg.text }}
          </div>
          <div class="flex gap-2">
            <input v-model="resetEmail" type="email" placeholder="メールアドレス"
              class="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            <button @click="handleReset" :disabled="resetLoading"
              class="px-4 py-2 bg-gray-700 text-white text-xs font-semibold rounded-lg hover:bg-gray-800 disabled:opacity-60 transition whitespace-nowrap">
              {{ resetLoading ? '送信中...' : '送信' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '~/plugins/firebase.client'
import MikanIcon from '~/components/icons/MikanIcon.vue'

definePageMeta({ layout: false })

const { login, isLoggedIn } = useAuth()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const showReset = ref(false)
const resetEmail = ref('')
const resetLoading = ref(false)
const resetMsg = ref<{ ok: boolean; text: string } | null>(null)

watchEffect(() => {
  if (isLoggedIn.value) navigateTo('/')
})

async function handleLogin() {
  errorMsg.value = ''
  loading.value = true
  try {
    await login(email.value, password.value)
    await navigateTo('/')
  } catch (err: unknown) {
    const code = (err as { code?: string })?.code
    if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
      errorMsg.value = 'メールアドレスまたはパスワードが正しくありません。'
    } else if (code === 'auth/too-many-requests') {
      errorMsg.value = 'ログイン試行が多すぎます。しばらく経ってからお試しください。'
    } else {
      errorMsg.value = 'ログインに失敗しました。もう一度お試しください。'
    }
  } finally {
    loading.value = false
  }
}

async function handleReset() {
  if (!resetEmail.value) return
  resetLoading.value = true
  resetMsg.value = null
  try {
    await sendPasswordResetEmail(auth, resetEmail.value)
    resetMsg.value = { ok: true, text: 'リセット用メールを送信しました。メールボックスをご確認ください。' }
  } catch {
    resetMsg.value = { ok: false, text: 'メールの送信に失敗しました。メールアドレスを確認してください。' }
  } finally {
    resetLoading.value = false
  }
}
</script>
