import { usePwa } from '~/composables/usePwa'

export default defineNuxtPlugin(() => {
  // Service Worker 登録
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .catch(err => console.warn('[SW]', err))
  }

  // beforeinstallprompt をできる限り早くキャプチャ
  const { init } = usePwa()
  init()
})
