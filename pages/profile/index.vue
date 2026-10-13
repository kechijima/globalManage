<template>
  <div class="max-w-lg mx-auto space-y-4 pb-8">

    <!-- プロフィールカード -->
    <div class="bg-white rounded-2xl border border-gray-200 p-6">
      <div class="flex items-center gap-4 mb-5">
        <div class="w-16 h-16 rounded-2xl bg-primary-700 flex items-center justify-center flex-shrink-0">
          <span class="text-2xl font-bold text-white">{{ initials }}</span>
        </div>
        <div>
          <p class="text-lg font-bold text-gray-800">{{ userProfile?.staffName || userProfile?.name }}</p>
          <p class="text-sm text-gray-400">{{ currentUser?.email }}</p>
          <span class="inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-medium"
            :class="isAdmin ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'">
            {{ isAdmin ? '管理者' : 'スタッフ' }}
          </span>
        </div>
      </div>

      <div class="space-y-3">
        <div class="flex items-center gap-3 py-2 border-b border-gray-50">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">表示名</span>
          <span class="text-sm text-gray-700">{{ userProfile?.staffName }}</span>
        </div>
        <div class="flex items-center gap-3 py-2 border-b border-gray-50">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">氏名</span>
          <span class="text-sm text-gray-700">{{ userProfile?.name }}</span>
        </div>
        <div class="flex items-center gap-3 py-2">
          <span class="text-xs text-gray-400 w-20 flex-shrink-0">メール</span>
          <span class="text-sm text-gray-700 break-all">{{ currentUser?.email }}</span>
        </div>
      </div>
    </div>

    <!-- プッシュ通知 -->
    <div class="bg-white rounded-2xl border border-gray-200 p-5">
      <h2 class="text-sm font-semibold text-gray-700 mb-1">プッシュ通知</h2>
      <p class="text-xs text-gray-400 mb-4">申請の承認・却下や新規申請をこの端末に通知します。</p>

      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          :class="notifBadge.bg">
          <span class="text-lg">{{ notifBadge.emoji }}</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-gray-800">{{ notifBadge.label }}</p>
          <p class="text-xs text-gray-400 mt-0.5">{{ notifBadge.sub }}</p>
        </div>
      </div>

      <button v-if="permissionState !== 'granted' && permissionState !== 'unsupported'"
        @click="handleEnableNotif" :disabled="registering"
        class="w-full py-2.5 bg-primary-700 text-white text-sm font-semibold rounded-xl hover:bg-primary-800 disabled:opacity-50 transition">
        {{ registering ? '設定中...' : 'プッシュ通知を有効にする' }}
      </button>

      <div v-if="permissionState === 'denied'" class="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-xl text-xs text-yellow-800 leading-relaxed">
        ブラウザ側で通知がブロックされています。ブラウザまたは端末の設定アプリから、このサイト（またはホーム画面に追加したアプリ）の通知を「許可」に変更してから、もう一度お試しください。
      </div>

      <p v-if="notifMsg" class="mt-3 text-xs" :class="notifMsg.ok ? 'text-green-600' : 'text-red-600'">
        {{ notifMsg.text }}
      </p>

      <button v-if="permissionState === 'granted'" @click="handleSendTest" :disabled="testSending"
        class="mt-3 w-full py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-xl hover:bg-gray-50 disabled:opacity-50 transition">
        {{ testSending ? '送信中...' : 'テスト通知を送信' }}
      </button>
    </div>

    <!-- パスワード変更 -->
    <div class="bg-white rounded-2xl border border-gray-200 p-5">
      <h2 class="text-sm font-semibold text-gray-700 mb-4">パスワード変更</h2>

      <div v-if="pwMsg" class="mb-4 p-3 rounded-xl text-xs"
        :class="pwMsg.ok ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'">
        {{ pwMsg.text }}
      </div>

      <div class="space-y-3">
        <div>
          <label class="block text-xs text-gray-500 mb-1">現在のパスワード</label>
          <input v-model="currentPw" type="password" placeholder="現在のパスワード"
            class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1">新しいパスワード</label>
          <input v-model="newPw" type="password" placeholder="8文字以上"
            class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <div>
          <label class="block text-xs text-gray-500 mb-1">新しいパスワード（確認）</label>
          <input v-model="confirmPw" type="password" placeholder="もう一度入力"
            class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <button @click="handleChangePw" :disabled="pwLoading || !currentPw || !newPw || !confirmPw"
          class="w-full py-2.5 bg-primary-700 text-white text-sm font-semibold rounded-xl hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition">
          {{ pwLoading ? '変更中...' : 'パスワードを変更する' }}
        </button>
      </div>

      <div class="mt-4 pt-4 border-t border-gray-100">
        <p class="text-xs text-gray-400 mb-2">パスワードを忘れた場合はリセットメールを送信できます</p>
        <button @click="handleResetEmail" :disabled="resetLoading"
          class="text-xs text-primary-600 hover:text-primary-800 font-medium transition disabled:opacity-50">
          {{ resetLoading ? '送信中...' : 'パスワードリセットメールを送信' }}
        </button>
        <p v-if="resetMsg" class="mt-2 text-xs text-green-600">{{ resetMsg }}</p>
      </div>
    </div>

    <!-- ログアウト -->
    <button @click="handleLogout"
      class="w-full py-3 bg-white border border-red-200 text-red-600 text-sm font-semibold rounded-2xl hover:bg-red-50 transition">
      ログアウト
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '~/plugins/firebase.client'

const { currentUser, userProfile, isAdmin, logout } = useAuth()
const { permissionState, registering, lastError, refreshPermissionState, enableNotifications } = useFcm()

const initials = computed(() => {
  const name = userProfile.value?.staffName || userProfile.value?.name || ''
  return name.slice(0, 1) || '?'
})

onMounted(() => refreshPermissionState())

const notifBadge = computed(() => {
  switch (permissionState.value) {
    case 'granted':
      return { emoji: '✅', label: '通知は有効です', sub: 'この端末に通知が届きます', bg: 'bg-green-50' }
    case 'denied':
      return { emoji: '🚫', label: '通知がブロックされています', sub: '設定から許可に変更してください', bg: 'bg-red-50' }
    case 'unsupported':
      return { emoji: '⚠️', label: 'この端末は非対応です', sub: 'ブラウザがプッシュ通知に対応していません', bg: 'bg-gray-100' }
    default:
      return { emoji: '🔔', label: '通知は未設定です', sub: 'ボタンから通知を有効にできます', bg: 'bg-gray-100' }
  }
})

const notifMsg = ref<{ ok: boolean; text: string } | null>(null)

async function handleEnableNotif() {
  notifMsg.value = null
  const ok = await enableNotifications()
  notifMsg.value = ok
    ? { ok: true, text: '通知を有効にしました。' }
    : { ok: false, text: lastError.value || '通知を有効にできませんでした。' }
}

const testSending = ref(false)
async function handleSendTest() {
  if (!currentUser.value) return
  testSending.value = true
  notifMsg.value = null
  try {
    // 送信前に必ずこの端末のトークンを再登録しておく
    // （アプリの再インストールなどで古いトークンが無効化されている場合があるため）
    await enableNotifications()
    await addDoc(collection(db, 'notifications'), {
      userId: currentUser.value.uid,
      type: 'test',
      title: 'テスト通知',
      body: 'この通知が届けばプッシュ通知は正常に動作しています。',
      read: false,
      createdAt: new Date().toISOString(),
      link: '/profile',
    })
    notifMsg.value = { ok: true, text: 'テスト通知を送信しました。数秒待っても届かない場合は端末の通知設定をご確認ください。' }
  } catch {
    notifMsg.value = { ok: false, text: 'テスト通知の送信に失敗しました。' }
  } finally {
    testSending.value = false
  }
}

// パスワード変更
const currentPw = ref('')
const newPw = ref('')
const confirmPw = ref('')
const pwLoading = ref(false)
const pwMsg = ref<{ ok: boolean; text: string } | null>(null)

async function handleChangePw() {
  pwMsg.value = null
  if (newPw.value !== confirmPw.value) {
    pwMsg.value = { ok: false, text: '新しいパスワードが一致しません。' }
    return
  }
  if (newPw.value.length < 8) {
    pwMsg.value = { ok: false, text: 'パスワードは8文字以上にしてください。' }
    return
  }
  if (!currentUser.value?.email) return
  pwLoading.value = true
  try {
    const cred = EmailAuthProvider.credential(currentUser.value.email, currentPw.value)
    await reauthenticateWithCredential(currentUser.value, cred)
    await updatePassword(currentUser.value, newPw.value)
    pwMsg.value = { ok: true, text: 'パスワードを変更しました。' }
    currentPw.value = ''
    newPw.value = ''
    confirmPw.value = ''
  } catch (err: unknown) {
    const code = (err as { code?: string })?.code
    if (code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
      pwMsg.value = { ok: false, text: '現在のパスワードが正しくありません。' }
    } else {
      pwMsg.value = { ok: false, text: 'パスワードの変更に失敗しました。' }
    }
  } finally {
    pwLoading.value = false
  }
}

// パスワードリセットメール
const resetLoading = ref(false)
const resetMsg = ref('')

async function handleResetEmail() {
  if (!currentUser.value?.email) return
  resetLoading.value = true
  try {
    await sendPasswordResetEmail(auth, currentUser.value.email)
    resetMsg.value = 'リセット用メールを送信しました。'
  } catch {
    resetMsg.value = '送信に失敗しました。'
  } finally {
    resetLoading.value = false
  }
}

async function handleLogout() {
  await logout()
  navigateTo('/login')
}
</script>
