<template>
  <!-- 初回モバイル案内バナー（インストール済みでなく、かつ非表示設定でない場合） -->
  <div v-if="!isInstalled && showBanner && !open"
    class="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4">
    <div class="bg-primary-800 text-white rounded-2xl shadow-2xl px-4 py-4 max-w-sm mx-auto">
      <div class="flex items-start gap-3">
        <div class="w-11 h-11 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
          <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-bold leading-tight">アプリとして使えます</p>
          <p class="text-xs text-primary-200 mt-0.5 leading-relaxed">ホーム画面に追加すると、スマホアプリのようにすぐに起動できます</p>
        </div>
        <button @click="dismissBanner" class="p-1 text-primary-300 hover:text-white flex-shrink-0 -mt-0.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <!-- Android: beforeinstallprompt が使えるならワンタップボタン -->
      <button v-if="isInstallable" @click="doInstall"
        class="mt-3 w-full py-2.5 bg-white text-primary-700 text-sm font-bold rounded-xl hover:bg-primary-50 active:scale-95 transition">
        今すぐインストール
      </button>
      <button v-else @click="open = true; showBanner = false"
        class="mt-3 w-full py-2.5 bg-white text-primary-700 text-sm font-bold rounded-xl hover:bg-primary-50 active:scale-95 transition">
        追加方法を見る（簡単3ステップ）
      </button>
    </div>
  </div>

  <!-- インストールガイドモーダル -->
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 bg-black/60 flex items-end sm:items-center justify-center z-50">
      <div class="bg-white w-full sm:rounded-2xl sm:max-w-md shadow-2xl max-h-[92dvh] flex flex-col rounded-t-2xl">

        <!-- ハンドルバー（モバイル） -->
        <div class="flex justify-center pt-3 pb-1 sm:hidden flex-shrink-0">
          <div class="w-10 h-1 bg-gray-200 rounded-full"></div>
        </div>

        <!-- ヘッダー -->
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-100 flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 bg-primary-100 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div>
              <p class="font-bold text-gray-800 text-sm">ホーム画面に追加する</p>
              <p class="text-xs text-gray-400 mt-0.5">{{ tabs.find(t => t.key === activeTab)?.label }}</p>
            </div>
          </div>
          <button @click="open = false" class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- デバイス選択タブ -->
        <div class="flex border-b border-gray-100 overflow-x-auto flex-shrink-0">
          <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key"
            class="flex-1 py-2.5 text-xs font-medium transition border-b-2 whitespace-nowrap px-2"
            :class="activeTab === tab.key
              ? 'border-primary-600 text-primary-700 bg-primary-50'
              : 'border-transparent text-gray-400 hover:text-gray-600'">
            {{ tab.label }}
          </button>
        </div>

        <!-- 手順コンテンツ -->
        <div class="flex-1 overflow-y-auto px-5 py-5 space-y-5">

          <!-- iPhone / iPad -->
          <template v-if="activeTab === 'ios'">
            <div class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex gap-2">
              <span class="text-amber-500 text-lg flex-shrink-0">⚠️</span>
              <p class="text-xs text-amber-700 leading-relaxed">
                <span class="font-bold">Safari</span> で開いているときだけ追加できます。<br />
                ChromeやLINEブラウザで開いている場合は、まずSafariで開いてください。
              </p>
            </div>
            <Step :n="1" title="画面下の「共有」ボタンをタップ">
              <div class="mt-2 bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed">画面の<span class="font-bold text-gray-800">一番下の中央</span>にある四角に上矢印のボタン（共有）をタップします</p>
              </div>
            </Step>
            <Step :n="2" title="「ホーム画面に追加」をタップ">
              <div class="mt-2 bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                <div class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                  ＋
                </div>
                <p class="text-xs text-gray-600 leading-relaxed">メニューをスクロールして<span class="font-bold text-gray-800">「ホーム画面に追加」</span>をタップします</p>
              </div>
            </Step>
            <Step :n="3" title="右上の「追加」をタップ">
              <div class="mt-2 bg-gray-50 rounded-xl p-3">
                <p class="text-xs text-gray-600 leading-relaxed">画面右上に<span class="font-bold text-blue-600">「追加」</span>ボタンが出るのでタップします。<br />ホーム画面にアイコンが追加されます。</p>
              </div>
            </Step>
            <div class="bg-green-50 border border-green-200 rounded-xl p-3">
              <p class="text-xs text-green-700 leading-relaxed">✅ 追加後はホーム画面のアイコンから開くと、アドレスバーのないアプリ画面で起動します</p>
            </div>
          </template>

          <!-- Android -->
          <template v-else-if="activeTab === 'android'">

            <!-- 診断パネル -->
            <div class="border border-gray-200 rounded-xl overflow-hidden">
              <button @click="runDiag" class="w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 transition">
                <span class="text-xs font-medium text-gray-700">📋 PWA状態を確認する</span>
                <svg class="w-4 h-4 text-gray-400 transition-transform" :class="showDiag ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="showDiag" class="px-4 pb-4 border-t border-gray-100 space-y-1.5 pt-3">
                <div v-for="d in diagItems" :key="d.label" class="flex items-center gap-2 text-xs">
                  <span class="flex-shrink-0">{{ d.ok === null ? '⏳' : d.ok ? '✅' : '❌' }}</span>
                  <span class="text-gray-700">{{ d.label }}</span>
                  <span v-if="d.note" class="text-gray-400 ml-auto text-right">{{ d.note }}</span>
                </div>
                <p v-if="diagDone" class="text-[10px] text-gray-400 mt-2 leading-relaxed">
                  ❌ が表示されている項目が原因です。管理者にお知らせください。
                </p>
              </div>
            </div>

            <!-- 手動インストール手順 -->
            <div class="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex gap-2">
              <span class="text-blue-500 text-lg flex-shrink-0">ℹ️</span>
              <p class="text-xs text-blue-700 leading-relaxed">
                <span class="font-bold">Chrome</span> のメニューからインストールできます。<br />
                以下の手順に従ってください。
              </p>
            </div>

            <Step :n="1" title="Chromeの右上「⋮」をタップ">
              <div class="mt-2 bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                <div class="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-bold text-gray-800">画面右上の「⋮」をタップ</p>
                  <p class="text-xs text-gray-500 mt-0.5">Chromeのアドレスバーの右側にあります</p>
                </div>
              </div>
            </Step>

            <Step :n="2" title="「アプリをインストール」をタップ">
              <div class="mt-2 bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-bold text-gray-800">「アプリをインストール」をタップ</p>
                  <p class="text-xs text-gray-500 mt-0.5">表示されない場合は「ホーム画面に追加」でも可</p>
                </div>
              </div>
            </Step>

            <Step :n="3" title="「インストール」をタップして完了">
              <div class="mt-2 bg-gray-50 rounded-xl p-3">
                <p class="text-xs text-gray-600 leading-relaxed">確認ダイアログが表示されるので<span class="font-bold text-gray-800">「インストール」</span>をタップします。<br />ホーム画面にアイコンが追加されます。</p>
              </div>
            </Step>

            <!-- メニューに出ない場合の代替 -->
            <div class="border border-gray-200 rounded-xl overflow-hidden">
              <button @click="showAndroidAlt = !showAndroidAlt"
                class="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-500 hover:bg-gray-50 transition">
                <span class="text-xs">「アプリをインストール」が出ない場合</span>
                <svg class="w-4 h-4 transition-transform" :class="showAndroidAlt ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="showAndroidAlt" class="px-4 pb-4 border-t border-gray-100 space-y-3 pt-3">
                <p class="text-xs text-gray-600 leading-relaxed">
                  Chromeがアプリとして認識するには、サイトを<span class="font-bold">数回訪問</span>する必要があります。<br />
                  以下をお試しください：
                </p>
                <div class="space-y-2">
                  <div class="flex gap-2 text-xs text-gray-600">
                    <span class="font-bold text-primary-600 flex-shrink-0">①</span>
                    <span>このページを一度閉じて、再度 <span class="font-mono bg-gray-100 px-1 rounded">globalmanage-e324b.web.app</span> を開く</span>
                  </div>
                  <div class="flex gap-2 text-xs text-gray-600">
                    <span class="font-bold text-primary-600 flex-shrink-0">②</span>
                    <span>数分間アプリを操作する（ダッシュボード・各ページを閲覧する）</span>
                  </div>
                  <div class="flex gap-2 text-xs text-gray-600">
                    <span class="font-bold text-primary-600 flex-shrink-0">③</span>
                    <span>再度 ⋮ メニューを確認する</span>
                  </div>
                  <div class="flex gap-2 text-xs text-gray-600">
                    <span class="font-bold text-primary-600 flex-shrink-0">④</span>
                    <span>それでも出ない場合：Chrome の設定 → プライバシーとセキュリティ → 閲覧データを削除 → このサイトのデータを削除してから再試行</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-green-50 border border-green-200 rounded-xl p-3">
              <p class="text-xs text-green-700 leading-relaxed">✅ インストール後はホーム画面のアイコンをタップするとアドレスバーのないアプリ画面で起動します</p>
            </div>

            <!-- ワンタップボタン（beforeinstallprompt が使える場合のおまけ） -->
            <div v-if="isInstallable" class="border border-primary-200 rounded-xl p-4 text-center">
              <p class="text-xs text-gray-500 mb-2">または、このボタンからも追加できます</p>
              <button @click="doInstall"
                class="w-full py-3 bg-primary-600 text-white text-sm font-bold rounded-xl hover:bg-primary-700 active:scale-95 transition">
                今すぐインストール
              </button>
            </div>
          </template>

          <!-- PC Chrome -->
          <template v-else-if="activeTab === 'pc-chrome'">
            <div v-if="isInstallable" class="bg-primary-50 border border-primary-200 rounded-2xl p-5 text-center">
              <p class="text-sm font-bold text-primary-800 mb-1">ワンクリックでインストールできます</p>
              <button @click="doInstall"
                class="mt-2 w-full py-3 bg-primary-600 text-white text-sm font-bold rounded-xl hover:bg-primary-700 transition">
                今すぐインストール
              </button>
            </div>
            <template v-else>
              <Step :n="1" title="アドレスバー右端のアイコンをクリック">
                <div class="mt-2 bg-gray-50 rounded-xl p-3">
                  <p class="text-xs text-gray-600 leading-relaxed">URLバーの右側に<span class="font-bold text-gray-800 bg-gray-200 px-1 rounded">⊕</span>や<span class="font-bold text-gray-800 bg-gray-200 px-1 rounded">📥</span>のアイコンが表示されます（表示されない場合は次の手順）</p>
                </div>
              </Step>
              <Step :n="2" title="「インストール」をクリック">
                <div class="mt-2 bg-gray-50 rounded-xl p-3">
                  <p class="text-xs text-gray-600 leading-relaxed">ポップアップの<span class="font-bold text-gray-800">「インストール」</span>をクリックします</p>
                </div>
              </Step>
              <div class="border border-gray-200 rounded-xl overflow-hidden">
                <button @click="showChromeAlt = !showChromeAlt"
                  class="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-500 hover:bg-gray-50 transition">
                  <span class="text-xs">アイコンが出ない場合はこちら</span>
                  <svg class="w-4 h-4 transition-transform" :class="showChromeAlt ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-if="showChromeAlt" class="px-4 pb-4 space-y-3 border-t border-gray-100">
                  <Step :n="1" title="右上の「︙」をクリック" />
                  <Step :n="2" title="「キャスト、保存、共有」→「ショートカットを作成」">
                    <p class="text-xs text-gray-500 mt-1">「ウィンドウとして開く」にチェックを入れて「作成」をクリック</p>
                  </Step>
                </div>
              </div>
            </template>
          </template>

          <!-- PC Edge -->
          <template v-else-if="activeTab === 'pc-edge'">
            <Step :n="1" title="右上の「...」をクリック">
              <p class="text-xs text-gray-500 mt-1">Edgeの右上の3点ボタンをクリックします</p>
            </Step>
            <Step :n="2" title="「アプリ」→「このサイトをアプリとしてインストール」">
              <p class="text-xs text-gray-500 mt-1">「アプリ」にカーソルを合わせてサブメニューを開きます</p>
            </Step>
            <Step :n="3" title="「インストール」をクリック">
              <p class="text-xs text-gray-500 mt-1">確認ダイアログで「インストール」をクリックして完了です</p>
            </Step>
          </template>

        </div>

        <!-- フッター -->
        <div class="px-5 pb-6 pt-3 border-t border-gray-100 flex-shrink-0 space-y-2">
          <button @click="open = false"
            class="w-full py-3 bg-primary-600 text-white text-sm font-bold rounded-xl hover:bg-primary-700 transition">
            閉じる
          </button>
          <button @click="dismissForever"
            class="w-full py-2 text-xs text-gray-400 hover:text-gray-500 transition">
            今後このメッセージを表示しない
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { isInstallable, isInstalled, install } = usePwa()

const open = defineModel<boolean>({ default: false })

const STORAGE_KEY = 'pwa-guide-dismissed'

// バナー表示制御
// 初回ログイン時の誘導は FirstLoginGuideModal（layouts/default.vue）に一本化したため、
// ここでの自動表示は行わない（showBanner は今後 false のまま保持）
const showBanner = ref(false)

function dismissBanner() {
  showBanner.value = false
}

function dismissForever() {
  localStorage.setItem(STORAGE_KEY, '1')
  showBanner.value = false
  open.value = false
}

async function doInstall() {
  await install()
  if (isInstalled.value) {
    showBanner.value = false
    open.value = false
  }
}

// デバイス判定
const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
const isIOS = /iPhone|iPad|iPod/i.test(ua)
const isAndroid = /Android/i.test(ua)
const isEdge = /Edg\//i.test(ua)

type TabKey = 'ios' | 'android' | 'pc-chrome' | 'pc-edge'

const tabs = [
  { key: 'ios' as TabKey,       label: 'iPhone / iPad' },
  { key: 'android' as TabKey,   label: 'Android' },
  { key: 'pc-chrome' as TabKey, label: 'PC (Chrome)' },
  { key: 'pc-edge' as TabKey,   label: 'PC (Edge)' },
]

const defaultTab: TabKey = isIOS ? 'ios' : isAndroid ? 'android' : isEdge ? 'pc-edge' : 'pc-chrome'
const activeTab = ref<TabKey>(defaultTab)

const showChromeAlt = ref(false)
const showAndroidAlt = ref(false)

// 診断
const showDiag = ref(false)
const diagDone = ref(false)
interface DiagItem { label: string; ok: boolean | null; note?: string }
const diagItems = ref<DiagItem[]>([])

async function runDiag() {
  showDiag.value = !showDiag.value
  if (!showDiag.value) return
  diagDone.value = false
  diagItems.value = [
    { label: 'HTTPS 接続', ok: null },
    { label: 'manifest.json 取得', ok: null },
    { label: 'Service Worker 登録済み', ok: null },
    { label: 'アプリ未インストール', ok: null },
  ]

  // HTTPS
  diagItems.value[0].ok = location.protocol === 'https:'
  diagItems.value[0].note = location.protocol === 'https:' ? 'OK' : location.protocol

  // manifest
  try {
    const res = await fetch('/manifest.json')
    const json = await res.json()
    const ok = !!json.name && !!json.start_url && Array.isArray(json.icons) && json.icons.length > 0
    diagItems.value[1].ok = ok
    diagItems.value[1].note = ok ? 'OK' : '不正'
  } catch {
    diagItems.value[1].ok = false
    diagItems.value[1].note = '取得失敗'
  }

  // SW
  if ('serviceWorker' in navigator) {
    try {
      const regs = await navigator.serviceWorker.getRegistrations()
      const hasFetch = regs.length > 0
      diagItems.value[2].ok = hasFetch
      diagItems.value[2].note = `${regs.length}件登録`
    } catch {
      diagItems.value[2].ok = false
      diagItems.value[2].note = '確認失敗'
    }
  } else {
    diagItems.value[2].ok = false
    diagItems.value[2].note = '非対応'
  }

  // Already installed
  const standalone = window.matchMedia('(display-mode: standalone)').matches
  diagItems.value[3].ok = !standalone
  diagItems.value[3].note = standalone ? 'インストール済み' : '未インストール'

  diagDone.value = true
}
</script>
