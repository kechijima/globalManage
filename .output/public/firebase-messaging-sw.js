// Firebase Messaging Service Worker
// アプリがバックグラウンドのときにFCMプッシュ通知を受信・表示する

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: 'AIzaSyAjczSlMbbtUk4-fqNwFCglTAr8DHHSseA',
  authDomain: 'globalmanage-e324b.firebaseapp.com',
  projectId: 'globalmanage-e324b',
  storageBucket: 'globalmanage-e324b.firebasestorage.app',
  messagingSenderId: '345729592199',
  appId: '1:345729592199:web:c11c85bd5e0775fb374122',
})

const messaging = firebase.messaging()

// 新しいバージョンが公開されたら即座に有効化する（デフォルトだと全タブを閉じるまで
// 古いバージョンが使われ続け、修正内容が反映されないため）
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()))

// バックグラウンド受信時の処理（データメッセージとして送られてくるため payload.data を使う）
messaging.onBackgroundMessage(function (payload) {
  const title = payload.data?.title ?? payload.notification?.title ?? 'みかん管理システム'
  const body = payload.data?.body ?? payload.notification?.body ?? ''

  return self.registration.showNotification(title, {
    body,
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    requireInteraction: true,
    data: payload.data ?? {},
  })
})

// 通知クリック時にアプリを開く（通知に紐づくリンク先へ遷移）
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const targetPath = event.notification.data?.link || '/'
  const targetUrl = new URL(targetPath, self.location.origin).href

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if ('focus' in client) {
          client.postMessage({ type: 'notification-click', link: targetPath })
          return client.focus()
        }
      }
      return self.clients.openWindow(targetUrl)
    })
  )
})
