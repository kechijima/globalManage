// beforeinstallprompt イベントを捕捉して PWA インストールを管理する
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

let _deferredPrompt: BeforeInstallPromptEvent | null = null

export const usePwa = () => {
  const isInstallable = useState<boolean>('pwa:installable', () => false)
  const isInstalled = useState<boolean>('pwa:installed', () => false)

  function init() {
    if (typeof window === 'undefined') return

    // すでにスタンドアロン（インストール済み）か確認
    if (window.matchMedia('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone) {
      isInstalled.value = true
      return
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      _deferredPrompt = e as BeforeInstallPromptEvent
      isInstallable.value = true
    })

    window.addEventListener('appinstalled', () => {
      _deferredPrompt = null
      isInstallable.value = false
      isInstalled.value = true
    })
  }

  async function install() {
    if (!_deferredPrompt) return
    await _deferredPrompt.prompt()
    const { outcome } = await _deferredPrompt.userChoice
    if (outcome === 'accepted') {
      isInstalled.value = true
    }
    _deferredPrompt = null
    isInstallable.value = false
  }

  return { isInstallable, isInstalled, init, install }
}
