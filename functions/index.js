const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

/**
 * notifications コレクションに新規ドキュメントが作成されたとき、FCM プッシュを送信する。
 * - userId が指定されている場合: そのユーザーに送信
 * - targetRole: 'admin' が指定されている場合: 管理者全員に送信
 */
exports.sendPushNotification = functions
  .region('asia-northeast1')
  .firestore.document('notifications/{notifId}')
  .onCreate(async (snap) => {
    const data = snap.data()
    if (!data) return null

    const { userId, targetRole, title, body, link, actorUid } = data
    if (!title) return null

    // 1ユーザーが複数端末（PC・スマホなど）を使う場合に備え、
    // fcmTokens（配列・新方式）と fcmToken（単一・旧方式）の両方から集める
    function collectTokens(userDoc) {
      const d = userDoc.data() || {}
      const set = new Set()
      if (Array.isArray(d.fcmTokens)) d.fcmTokens.forEach(t => t && set.add(t))
      if (d.fcmToken) set.add(d.fcmToken)
      return Array.from(set)
    }

    // token -> 所有ユーザーID（無効トークンをそのユーザーのドキュメントから削除するため）
    const tokenOwners = new Map()

    if (targetRole === 'admin') {
      // 管理者全員へのブロードキャスト（自分の操作については本人には送らない）
      const adminsSnap = await admin.firestore()
        .collection('users')
        .where('role', '==', 'admin')
        .get()
      for (const d of adminsSnap.docs) {
        if (d.id === actorUid) continue
        for (const token of collectTokens(d)) tokenOwners.set(token, d.id)
      }
      console.log(`Broadcasting to ${tokenOwners.size} admin device(s)`)
    } else if (userId) {
      // 特定ユーザーへの送信（全端末）
      const userSnap = await admin.firestore().collection('users').doc(userId).get()
      for (const token of collectTokens(userSnap)) tokenOwners.set(token, userId)
    }

    if (tokenOwners.size === 0) {
      console.log('No FCM tokens found, skipping push')
      return null
    }

    const targetLink = link ?? '/'

    for (const [token, ownerUid] of tokenOwners) {
      try {
        // データメッセージとして送信し、Service Worker (onBackgroundMessage) 側で
        // 確実にタイトル・本文を表示する。notification フィールドを使うと
        // ブラウザが自動表示を試みて汎用文言（「サイトが更新されました」等）に
        // 化けることがあるため、あえて含めない。
        const messageId = await admin.messaging().send({
          token,
          data: {
            title,
            body: body ?? '',
            link: targetLink,
          },
          webpush: {
            headers: { Urgency: 'high' },
          },
        })
        console.log(`Push sent: ${messageId}`)
      } catch (err) {
        if (err.code === 'messaging/registration-token-not-registered') {
          // 無効なトークンをそのユーザーのドキュメントから削除
          const userRef = admin.firestore().collection('users').doc(ownerUid)
          await userRef.update({
            fcmTokens: admin.firestore.FieldValue.arrayRemove(token),
          })
          const userDoc = await userRef.get()
          if (userDoc.data()?.fcmToken === token) {
            await userRef.update({ fcmToken: null })
          }
          console.log(`Removed invalid FCM token for user ${ownerUid}`)
        } else {
          console.error('FCM send error:', err)
        }
      }
    }

    return null
  })
