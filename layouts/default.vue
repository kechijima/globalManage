<template>
  <div class="flex h-[100dvh] bg-gray-50 font-sans">
    <!-- Auth loading overlay -->
    <div v-if="authLoading" class="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div class="flex flex-col items-center gap-3">
        <svg class="animate-spin w-10 h-10 text-primary-700" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p class="text-sm text-gray-500">読み込み中...</p>
      </div>
    </div>

    <!-- Notification panel backdrop -->
    <div v-if="notifOpen" class="fixed inset-0 z-30" @click="notifOpen = false" />

    <!-- ======= DESKTOP SIDEBAR ======= -->
    <aside class="hidden lg:flex w-64 bg-primary-800 text-white flex-col flex-shrink-0">
      <!-- Logo -->
      <div class="px-6 py-5 border-b border-primary-700">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
            <MikanIcon class="w-6 h-6" />
          </div>
          <div>
            <p class="text-xs text-primary-300 leading-none">訪問看護ステーション</p>
            <p class="text-sm font-bold leading-tight mt-0.5">みかん管理システム</p>
          </div>
        </div>
      </div>
      <!-- Desktop Nav -->
      <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <template v-if="isAdmin">
          <NavItem to="/" icon="dashboard" label="ダッシュボード" />
          <NavItem to="/paid-leave" icon="calendar" label="有給管理" />
          <NavItem to="/expense" icon="receipt" label="経費管理" />
          <NavItem to="/card-expenses" icon="receipt" label="社用カード経費申請" />
          <NavItem to="/overtime" icon="clock" label="残業管理" />
          <NavItem to="/vehicle" icon="car" label="車両管理" />
          <NavItem to="/health-checkups" icon="document" label="健康診断管理" />
          <NavItem to="/users" icon="users" label="ユーザー管理" />
          <NavItem to="/announcements" icon="document" label="お知らせ管理" />
          <NavItem to="/notifications" icon="bell" label="通知一覧" />
        </template>
        <template v-else>
          <NavItem to="/paid-leave" icon="calendar" label="自分の申請（有給）" />
          <NavItem to="/expense" icon="receipt" label="自分の申請（経費）" />
          <NavItem to="/card-expenses" icon="receipt" label="社用カード経費申請" />
          <NavItem to="/overtime" icon="clock" label="自分の申請（残業）" />
          <NavItem to="/vehicle" icon="car" label="車両管理" />
          <NavItem to="/health-checkups" icon="document" label="健康診断" />
          <NavItem to="/announcements" icon="document" label="お知らせ" />
          <NavItem to="/notifications" icon="bell" label="通知" />
        </template>
      </nav>
      <!-- Desktop PWA install -->
      <div v-if="!isInstalled" class="px-3 pb-2">
        <button @click="pwaGuideOpen = true"
          class="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-primary-200 hover:bg-primary-700 hover:text-white transition text-sm">
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>アプリをインストール</span>
        </button>
      </div>
      <!-- Desktop user footer -->
      <div class="px-4 py-4 border-t border-primary-700">
        <div class="flex items-center gap-3">
          <NuxtLink to="/profile" class="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-sm font-bold flex-shrink-0 hover:bg-primary-500 transition" title="マイページ">
            {{ userInitial }}
          </NuxtLink>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium truncate">{{ displayName }}</p>
            <p class="text-xs text-primary-300 truncate">{{ userRole }}</p>
          </div>
          <button @click="handleLogout" title="ログアウト"
            class="p-1.5 rounded-md hover:bg-primary-700 transition text-primary-300 hover:text-white flex-shrink-0">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </aside>

    <!-- ======= MAIN AREA ======= -->
    <div class="flex-1 flex flex-col overflow-hidden min-w-0">

      <!-- Top bar -->
      <header class="bg-white border-b border-gray-200 px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between flex-shrink-0">
        <div class="flex items-center gap-2">
          <!-- Mobile: アカウントアバター（タップで下からメニュー） -->
          <button @click="accountOpen = true"
            class="lg:hidden w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
            {{ userInitial }}
          </button>
          <div>
            <h1 class="text-base lg:text-lg font-semibold text-gray-800">{{ pageTitle }}</h1>
            <p class="text-xs text-gray-500 mt-0.5 hidden sm:block">{{ currentDate }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 relative">
          <!-- Desktop: PWA install button -->
          <button v-if="isInstallable && !isInstalled" @click="installPwa"
            class="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-primary-600 text-white text-xs font-semibold rounded-lg hover:bg-primary-700 transition">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            インストール
          </button>
          <!-- Help -->
          <button @click="helpOpen = true" class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <!-- Notification bell -->
          <button @click="toggleNotif" class="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span v-if="unreadCount > 0"
              class="absolute top-1 right-1 min-w-[16px] h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-0.5">
              {{ unreadCount > 9 ? '9+' : unreadCount }}
            </span>
          </button>
          <!-- Notification dropdown -->
          <div v-if="notifOpen"
            class="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 z-40 overflow-hidden">
            <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <p class="text-sm font-semibold text-gray-800">通知</p>
              <button v-if="unreadCount > 0" @click="markAllRead" class="text-xs text-primary-600 hover:text-primary-700">すべて既読にする</button>
            </div>
            <div class="max-h-80 overflow-y-auto">
              <div v-if="unreadNotifications.length === 0" class="py-8 text-center text-sm text-gray-400">通知はありません</div>
              <div v-for="n in unreadNotifications" :key="n.id" @click="markRead(n.id); notifOpen = false; navigateTo(n.link || '/notifications')"
                class="flex gap-3 px-4 py-3 border-b border-gray-50 cursor-pointer transition bg-blue-50 hover:bg-blue-100">
                <div class="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-primary-500"></div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-800">{{ n.title }}</p>
                  <p class="text-xs text-gray-500 mt-0.5 truncate">{{ n.body }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">{{ formatDate(n.createdAt) }}</p>
                </div>
              </div>
            </div>
            <div class="border-t border-gray-100 py-2 px-4">
              <NuxtLink to="/notifications" @click="notifOpen = false"
                class="block text-center text-xs text-primary-600 hover:text-primary-800 py-1 font-medium">
                すべての通知を見る
              </NuxtLink>
            </div>
          </div>
        </div>
        <HelpModal v-model="helpOpen" />
        <PwaGuideModal v-model="pwaGuideOpen" />
        <FirstLoginGuideModal v-model="firstLoginGuideOpen" />
      </header>

      <!-- Content: モバイルはボトムナビ分だけ下にパディング -->
      <main class="flex-1 overflow-y-auto p-4 lg:p-8 pb-[calc(4rem+env(safe-area-inset-bottom,0px))] lg:pb-8">
        <slot />
      </main>
    </div>

    <!-- ======= MOBILE BOTTOM NAV ======= -->
    <nav class="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200"
      style="padding-bottom: env(safe-area-inset-bottom, 0px);">
      <div class="flex" :class="isAdmin ? 'justify-around' : 'justify-around'">
        <!-- Admin tabs -->
        <template v-if="isAdmin">
          <BottomNavItem to="/" :icon="'dashboard'" label="ホーム" :active="route.path === '/'" />
          <BottomNavItem to="/paid-leave" :icon="'calendar'" label="有給" :active="route.path.startsWith('/paid-leave')" />
          <BottomNavItem to="/expense" :icon="'receipt'" label="経費" :active="route.path.startsWith('/expense')" />
          <BottomNavItem to="/overtime" :icon="'clock'" label="残業" :active="route.path.startsWith('/overtime')" />
          <BottomNavItem to="/vehicle" :icon="'car'" label="車両" :active="route.path.startsWith('/vehicle')" />
          <BottomNavItem to="/users" :icon="'users'" label="スタッフ" :active="route.path.startsWith('/users')" />
        </template>
        <!-- Staff tabs -->
        <template v-else>
          <BottomNavItem to="/" :icon="'dashboard'" label="ホーム" :active="route.path === '/'" />
          <BottomNavItem to="/paid-leave" :icon="'calendar'" label="有給申請" :active="route.path.startsWith('/paid-leave')" />
          <BottomNavItem to="/expense" :icon="'receipt'" label="経費申請" :active="route.path.startsWith('/expense')" />
          <BottomNavItem to="/overtime" :icon="'clock'" label="残業申請" :active="route.path.startsWith('/overtime')" />
          <BottomNavItem to="/vehicle" :icon="'car'" label="車両管理" :active="route.path.startsWith('/vehicle')" />
        </template>
      </div>
    </nav>

    <!-- ======= MOBILE ACCOUNT DRAWER ======= -->
    <Teleport to="body">
      <div v-if="accountOpen" class="fixed inset-0 z-50 lg:hidden">
        <div class="absolute inset-0 bg-black/40" @click="accountOpen = false" />
        <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl"
          style="padding-bottom: env(safe-area-inset-bottom, 0px);">
          <!-- Handle -->
          <div class="flex justify-center pt-3 pb-2">
            <div class="w-10 h-1 bg-gray-200 rounded-full"></div>
          </div>
          <!-- Profile -->
          <div class="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <div class="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold">
              {{ userInitial }}
            </div>
            <div>
              <p class="font-semibold text-gray-800">{{ displayName }}</p>
              <p class="text-sm text-gray-400">{{ userRole }}</p>
            </div>
          </div>
          <!-- Menu items -->
          <div class="px-4 py-3 space-y-1">
            <button v-if="!isInstalled" @click="pwaGuideOpen = true; accountOpen = false"
              class="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gray-50 transition text-left">
              <div class="w-9 h-9 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-800">アプリをホーム画面に追加</p>
                <p class="text-xs text-gray-400 mt-0.5">スマホアプリのように使えます</p>
              </div>
            </button>
            <NuxtLink to="/profile" @click="accountOpen = false"
              class="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gray-50 transition text-left">
              <div class="w-9 h-9 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p class="text-sm font-semibold text-gray-800">マイページ</p>
            </NuxtLink>
            <NuxtLink to="/notifications" @click="accountOpen = false"
              class="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gray-50 transition text-left">
              <div class="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span v-if="unreadCount > 0" class="absolute -top-1 -right-1 min-w-[16px] h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-0.5">
                  {{ unreadCount > 9 ? '9+' : unreadCount }}
                </span>
              </div>
              <p class="text-sm font-semibold text-gray-800">通知一覧</p>
            </NuxtLink>
            <button @click="helpOpen = true; accountOpen = false"
              class="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-gray-50 transition text-left">
              <div class="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-sm font-semibold text-gray-800">操作マニュアル</p>
            </button>
            <button @click="handleLogout"
              class="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-red-50 transition text-left">
              <div class="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </div>
              <p class="text-sm font-semibold text-red-600">ログアウト</p>
            </button>
          </div>
          <div class="h-2"></div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import MikanIcon from '~/components/icons/MikanIcon.vue'
const route = useRoute()
const { isLoggedIn, isAdmin, authLoading, userProfile, currentUser, logout } = useAuth()
const { notifications, unreadCount, startListening: startNotifListening, markRead, markAllRead } = useNotifications()
const { registerFcmToken, permissionState, refreshPermissionState } = useFcm()
const { isInstallable, isInstalled, install: installPwa, init: initPwa } = usePwa()

// 既読済みの通知はドロップダウンにも表示しない
const unreadNotifications = computed(() => notifications.value.filter(n => !n.read))

const helpOpen = ref(false)
const notifOpen = ref(false)
const pwaGuideOpen = ref(false)
const firstLoginGuideOpen = ref(false)
const accountOpen = ref(false)

watch(() => route.path, () => { accountOpen.value = false })

watchEffect(() => {
  if (!authLoading.value && !isLoggedIn.value) navigateTo('/login')
})

watchEffect(() => {
  if (currentUser.value) {
    startNotifListening()
    registerFcmToken()
  }
})

// バックグラウンド通知をタップした際、既に開いているタブ側でリンク先へ遷移する
onMounted(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data?.type === 'notification-click' && event.data.link) {
        navigateTo(event.data.link)
      }
    })
  }
})

// PWAインストール状態・通知許可状態を検知する
onMounted(() => {
  initPwa()
  refreshPermissionState()
})

// 初回ログイン時、ブラウザから開いている場合のみ「ホーム画面に追加」「通知を有効にする」へ誘導する
// （PWAアプリとして既に開いている場合は誘導不要）
const FIRST_LOGIN_GUIDE_KEY = 'first-login-guide-shown'

onMounted(() => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    || (navigator as Navigator & { standalone?: boolean }).standalone
  if (isStandalone) return
  if (localStorage.getItem(FIRST_LOGIN_GUIDE_KEY)) return

  const stop = watchEffect(() => {
    if (!currentUser.value || !userProfile.value) return
    localStorage.setItem(FIRST_LOGIN_GUIDE_KEY, '1')
    if (!isInstalled.value || permissionState.value !== 'granted') {
      firstLoginGuideOpen.value = true
    }
    stop()
  })
})

function toggleNotif() { notifOpen.value = !notifOpen.value }

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch { return iso }
}

const displayName = computed(() => userProfile.value?.name ?? '読み込み中...')
const userInitial = computed(() => (userProfile.value?.name ?? '').charAt(0) || '?')
const userRole = computed(() => userProfile.value?.role === 'admin' ? '管理者' : 'スタッフ')

async function handleLogout() {
  accountOpen.value = false
  await logout()
  navigateTo('/login')
}

const pageTitles: Record<string, string> = {
  '/': 'ダッシュボード',
  '/paid-leave': '有給管理',
  '/paid-leave/new': '有給申請',
  '/expense': '経費管理',
  '/expense/new': '経費申請',
  '/card-expenses': '社用カード経費申請',
  '/overtime': '残業管理',
  '/overtime/new': '残業申請',
  '/vehicle': '車両管理',
  '/users': 'ユーザー管理',
  '/notifications': '通知一覧',
  '/profile': 'マイページ',
  '/announcements': 'お知らせ',
  '/health-checkups': '健康診断',
}
const pageTitle = computed(() => pageTitles[route.path] ?? 'ページ')
const currentDate = computed(() =>
  new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })
)
</script>
