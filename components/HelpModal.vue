<template>
  <Teleport to="body">
    <Transition name="help">
      <div v-if="modelValue" class="fixed inset-0 z-50 flex justify-end">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/40" @click="close" />

        <!-- Panel -->
        <div class="relative bg-white w-full max-w-sm flex flex-col h-full shadow-2xl">

          <!-- Header -->
          <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
            <div class="flex items-center gap-2 min-w-0">
              <button v-if="selected" @click="selected = null"
                class="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition flex-shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 class="font-bold text-gray-800 text-sm truncate">
                {{ selected ? selected.title : '📖 操作マニュアル' }}
              </h2>
            </div>
            <button @click="close"
              class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Topic list -->
          <div v-if="!selected" class="flex-1 overflow-y-auto p-4 space-y-2">
            <p class="text-xs text-gray-400 px-1 mb-3">確認したい操作を選んでください</p>
            <button
              v-for="topic in visibleTopics" :key="topic.id"
              @click="selected = topic"
              class="w-full flex items-center gap-3 px-4 py-3.5 bg-gray-50 hover:bg-primary-50 rounded-xl border border-transparent hover:border-primary-200 text-left transition active:scale-98">
              <span class="text-2xl flex-shrink-0">{{ topic.icon }}</span>
              <div class="flex-1 min-w-0">
                <p class="font-semibold text-gray-800 text-sm">{{ topic.title }}</p>
                <p class="text-xs text-gray-500 mt-0.5">{{ topic.subtitle }}</p>
              </div>
              <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Detail view -->
          <div v-else class="flex-1 overflow-y-auto">
            <div class="p-5 space-y-1">
              <div v-for="(step, i) in selected.steps" :key="i"
                class="flex gap-3 pb-5 border-b border-gray-50 last:border-0 last:pb-0">
                <div class="flex-shrink-0 w-7 h-7 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  {{ i + 1 }}
                </div>
                <div class="flex-1">
                  <p class="font-semibold text-gray-800 text-sm mb-1">{{ step.title }}</p>
                  <p class="text-sm text-gray-600 leading-relaxed">{{ step.desc }}</p>
                  <div v-if="step.note"
                    class="mt-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800 leading-relaxed">
                    💡 {{ step.note }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [v: boolean] }>()

const { isAdmin } = useAuth()

function close() {
  selected.value = null
  emit('update:modelValue', false)
}

interface Step { title: string; desc: string; note?: string }
interface Topic { id: string; icon: string; title: string; subtitle: string; adminOnly: boolean; steps: Step[] }

const selected = ref<Topic | null>(null)

const topics: Topic[] = [
  {
    id: 'paid-leave',
    icon: '📅',
    title: '有給申請の方法',
    subtitle: '有給・半日休・特別休暇など',
    adminOnly: false,
    steps: [
      {
        title: '申請画面を開く',
        desc: 'サイドメニューの「自分の申請（有給）」をタップし、右上の「有給申請」ボタンをタップします。',
      },
      {
        title: '休暇の種類を選ぶ',
        desc: '有給休暇・午前休・午後休・特別休暇・介護休暇・代休から該当するカードをタップして選択します。',
        note: '午前休・午後休を選ぶと日付入力が1日のみになります。',
      },
      {
        title: '日程を入力する',
        desc: '開始日と終了日を入力します。複数日の場合は日数が自動で計算されて表示されます。',
      },
      {
        title: '申請理由を入力する（任意）',
        desc: '理由がある場合は入力します。入力しなくても申請できます。',
      },
      {
        title: '申請内容を確認して送信',
        desc: '画面下部に申請内容のプレビューが表示されます。内容を確認して「申請する」ボタンをタップします。',
      },
    ],
  },
  {
    id: 'expense',
    icon: '💴',
    title: '経費申請の方法',
    subtitle: '交通費・消耗品・駐車場など',
    adminOnly: false,
    steps: [
      {
        title: '申請画面を開く',
        desc: 'サイドメニューの「自分の申請（経費）」をタップし、「経費申請」ボタンをタップします。',
      },
      {
        title: '金額を入力する',
        desc: '大きな「¥」マークの横の枠に金額を数字で入力します。',
        note: 'スマートフォンでは数字キーパッドが自動で開きます。',
      },
      {
        title: 'カテゴリを選ぶ',
        desc: '交通費・消耗品・研修費・通信費・駐車場・その他から該当するカードをタップします。',
      },
      {
        title: '利用日を選ぶ',
        desc: '経費が発生した日付を選択します。今日の日付が自動でセットされています。',
      },
      {
        title: '内容を入力する',
        desc: 'よく使う内容がボタンで表示されます。タップすると自動入力されます。それ以外は直接入力してください。',
      },
      {
        title: '領収書を添付する（任意）',
        desc: '「領収書を添付」エリアをタップして、写真またはPDFを選択します。',
      },
      {
        title: '複数の経費をまとめて申請する',
        desc: '「明細を追加する」ボタンをタップすると、2件目以降の経費を同じ申請にまとめられます。合計金額が自動計算されます。',
        note: '1日分の経費をまとめて1回で申請できます。',
      },
      {
        title: '申請する',
        desc: '「〇件・¥〇〇〇 を申請する」ボタンをタップして送信します。',
      },
    ],
  },
  {
    id: 'vehicle',
    icon: '🚗',
    title: '車両管理の使い方',
    subtitle: '走行距離・オイル交換の記録',
    adminOnly: false,
    steps: [
      {
        title: '車両管理を開く',
        desc: 'サイドメニューの「車両管理」をタップします。自分の担当車両の情報が表示されます。',
      },
      {
        title: 'アラートを確認する',
        desc: '画面上部に赤（緊急）または黄（注意）のアラートが表示されている場合は、車検期限やオイル交換の対応が必要です。',
        note: '赤は30日以内、黄は90日以内に車検期限が迫っている状態です。',
      },
      {
        title: '走行距離を更新する',
        desc: '「走行距離を更新」欄に現在のメーター値（km）を入力し、「更新する」ボタンをタップします。',
      },
      {
        title: 'オイル交換を記録する',
        desc: '「オイル交換を記録」欄に交換日と交換時の走行距離を入力し、「記録する」ボタンをタップします。',
      },
      {
        title: '任意保険情報・書類を登録する',
        desc: '保険会社・証券番号・期限を入力して保存できます。自賠責保険証・任意保険証券・車検証は写真またはPDFで添付できます。',
      },
    ],
  },
  {
    id: 'overtime',
    icon: '🕐',
    title: '残業申請の方法',
    subtitle: '日付・時間・理由を入力して申請',
    adminOnly: false,
    steps: [
      {
        title: '申請画面を開く',
        desc: 'サイドメニューの「自分の申請（残業）」をタップし、「新規申請」ボタンをタップします。',
      },
      {
        title: '日付と時間帯を入力する',
        desc: '残業した日付、開始時間、終了時間を入力します。時間は15分単位で選択できます。',
      },
      {
        title: '深夜手当を確認する',
        desc: '22:00〜翌5:00にかかる時間は自動で「深夜手当対象」として計算され、画面に表示されます。',
      },
      {
        title: '理由を入力して申請する',
        desc: '残業した理由を簡単に入力し、「申請する」ボタンをタップします。',
      },
      {
        title: '承認待ちの申請を編集・取り消しする',
        desc: '「承認待ち」の間は、一覧の該当行から内容の編集や取り消しができます。承認・却下後は編集できません。',
      },
    ],
  },
  {
    id: 'check-status',
    icon: '📋',
    title: '申請の状況を確認する',
    subtitle: '承認・却下のステータス確認・再申請',
    adminOnly: false,
    steps: [
      {
        title: '申請一覧を開く',
        desc: '「自分の申請（有給）」「自分の申請（経費）」「自分の申請（残業）」のいずれかをタップします。',
      },
      {
        title: 'ステータスを確認する',
        desc: '申請一覧の「ステータス」列に現在の状況が表示されます。',
      },
      {
        title: 'ステータスの種類',
        desc: '「承認待ち」は管理者が確認中です。「承認済み」は申請が通りました。「却下」は再申請が必要です。',
      },
      {
        title: '却下された申請を再申請する',
        desc: '却下された申請をタップして詳細を開くと「コピーして再申請」ボタンがあります。タップすると同じ内容が入力された状態で新規申請画面が開くので、内容を修正して送信できます。',
      },
      {
        title: '却下された申請の表示・非表示を切り替える',
        desc: '一覧画面の「却下を表示」チェックボックスで、却下済みの申請を表示するかどうかを切り替えられます（初期状態では非表示です）。',
      },
    ],
  },
  {
    id: 'notifications',
    icon: '🔔',
    title: '通知を確認する・受け取る',
    subtitle: '通知一覧の見方とプッシュ通知の設定',
    adminOnly: false,
    steps: [
      {
        title: '通知一覧を開く',
        desc: '画面右上のベルのアイコン、またはサイドメニューの「通知」をタップします。承認・却下の結果や、新しい申請の連絡が表示されます。',
        note: '既読にした通知は一覧から自動的に消えます。',
      },
      {
        title: 'スマホにプッシュ通知を届ける',
        desc: 'マイページを開き、「プッシュ通知」欄の「プッシュ通知を有効にする」をタップします。ブラウザの許可ダイアログが出たら「許可」を選んでください。',
      },
      {
        title: 'ちゃんと届くかテストする',
        desc: 'マイページの「テスト通知を送信」ボタンで、実際にこの端末に通知が届くか確認できます。',
      },
      {
        title: '届かない場合',
        desc: 'iPhoneの場合はホーム画面に追加してアプリとして開いていないと通知が届きません。ブラウザの通知設定がブロックになっていないかも確認してください。',
      },
    ],
  },
  {
    id: 'announcements-view',
    icon: '📢',
    title: 'お知らせを確認する',
    subtitle: '会社からのお知らせ・掲示板',
    adminOnly: false,
    steps: [
      {
        title: 'お知らせを開く',
        desc: 'ホーム画面の「お知らせ」欄、またはサイドメニューの「お知らせ」をタップします。',
      },
      {
        title: '内容を確認する',
        desc: 'タイトルをタップすると詳細が開き、自動的に既読になります。未読のものには青い丸が付いています。',
        note: '既読になっても一覧からは消えません。管理者が非表示にするまで確認できます。',
      },
    ],
  },
  {
    id: 'health-checkup-staff',
    icon: '🩺',
    title: '健康診断の予約・結果を入力する',
    subtitle: '受診予約日・受診日・結果の提出',
    adminOnly: false,
    steps: [
      {
        title: '健康診断画面を開く',
        desc: 'ホーム画面の「健康診断」、またはサイドメニューの「健康診断」をタップします。対象のイベントが表示されます。',
      },
      {
        title: '予約日・受診日を入力する',
        desc: '「受診予約日」に予約した日付を、受診が終わったら「受診日」に実際に受けた日付を入力します。入力すると自動で保存されます。',
      },
      {
        title: '結果を添付する',
        desc: '「結果を添付」から結果票の写真またはPDFをアップロードします。事務所に紙で提出する必要はありません。',
      },
      {
        title: '状況の見方',
        desc: '「未予約」「予約済」「受診済」「結果提出済」の順に状況が変わっていきます。バッジで現在の状況が確認できます。',
      },
    ],
  },
  {
    id: 'profile',
    icon: '👤',
    title: 'マイページの使い方',
    subtitle: 'ログイン情報・パスワード変更',
    adminOnly: false,
    steps: [
      {
        title: 'マイページを開く',
        desc: '画面左下（PC）またはアカウントアイコン（スマホ）から「マイページ」をタップします。',
      },
      {
        title: '登録情報を確認する',
        desc: '表示名・氏名・メールアドレスなど、現在登録されている情報を確認できます。',
      },
      {
        title: 'パスワードを変更する',
        desc: '現在のパスワードと新しいパスワードを入力し、「パスワードを変更する」をタップします。',
      },
      {
        title: 'パスワードを忘れた場合',
        desc: 'マイページまたはログイン画面の「パスワードを忘れた方はこちら」からリセット用メールを送信できます。',
      },
    ],
  },
  {
    id: 'admin-approve',
    icon: '✅',
    title: '申請を承認・却下する',
    subtitle: '管理者向け：有給・経費・残業の審査',
    adminOnly: true,
    steps: [
      {
        title: '管理画面を開く',
        desc: '「有給管理」「経費管理」「残業管理」のいずれかをタップします。全スタッフの申請一覧が表示されます。',
      },
      {
        title: '申請内容を確認する',
        desc: '申請一覧の各行で申請者・種別・日程・金額などを確認します。残業申請は深夜手当（22:00〜翌5:00）に該当する時間があると紫色のバッジで表示されます。',
      },
      {
        title: '承認または却下する',
        desc: 'ステータスが「承認待ち」の行に「承認」「却下」ボタンが表示されます。該当するボタンをタップします。',
      },
      {
        title: '却下データの表示・非表示を切り替える',
        desc: '一覧上部の「却下を表示」チェックボックスで、却下済みの申請を表示するかどうかを切り替えられます。',
      },
    ],
  },
  {
    id: 'admin-vehicle',
    icon: '🚙',
    title: '車両を追加・管理する',
    subtitle: '管理者向け：車両データ・保険書類の管理',
    adminOnly: true,
    steps: [
      {
        title: '車両管理を開く',
        desc: '「車両管理」をタップします。全スタッフの車両一覧が表示されます。',
      },
      {
        title: '車両を追加する',
        desc: '右上の「車両を追加」ボタンをタップし、担当者名・車両名・ナンバー・車検期限・走行距離を入力して「追加する」をタップします。',
      },
      {
        title: '走行距離を更新する',
        desc: '一覧の「走行距離」列の「更新」をタップすると入力欄が開きます。新しい距離を入力して「保存」をタップします。',
      },
      {
        title: 'オイル交換を記録する',
        desc: '一覧の「オイル交換記録」ボタンをタップし、交換日と走行距離を入力します。',
      },
      {
        title: '緊急・注意の理由を確認する',
        desc: '車両詳細を開くと、「緊急」「注意」バッジが出ている理由（車検期限・オイル交換時期・任意保険期限のどれに該当するか）が一覧で表示されます。',
      },
      {
        title: '任意保険情報・書類を登録する',
        desc: '車両詳細から保険会社・証券番号・期限を編集して保存できます。自賠責保険証・任意保険証券・車検証の画像やPDFも、管理者側からアップロード（差し替え）できます。',
      },
    ],
  },
  {
    id: 'admin-announcements',
    icon: '📢',
    title: 'お知らせを作成する',
    subtitle: '管理者向け：全社・スタッフへの一斉連絡',
    adminOnly: true,
    steps: [
      {
        title: 'お知らせ管理を開く',
        desc: 'サイドメニューの「お知らせ管理」をタップし、「お知らせを作成」ボタンをタップします。',
      },
      {
        title: 'タイトルと本文を入力する',
        desc: 'タイトルを入力し、本文はリッチエディターで見出し・太字・箇条書き・リンク・画像を使って作成できます。',
      },
      {
        title: '掲載範囲を選ぶ',
        desc: '「全員」「管理者のみ」「スタッフのみ」「個別スタッフ指定」から選べます。個別指定の場合は対象者を一人ずつ選択します。',
      },
      {
        title: '表示・非表示を切り替える',
        desc: '作成後も一覧の「表示する」「非表示にする」ボタンでいつでも掲載を止めたり再開したりできます。削除しなくても一時的に隠せます。',
      },
      {
        title: '内容を編集する',
        desc: '一覧の「編集」ボタンから内容や掲載範囲をあとから変更できます。',
      },
    ],
  },
  {
    id: 'admin-health-checkup',
    icon: '🩺',
    title: '健康診断イベントを管理する',
    subtitle: '管理者向け：健康診断の設定・状況確認',
    adminOnly: true,
    steps: [
      {
        title: '健康診断管理を開く',
        desc: 'サイドメニューの「健康診断管理」をタップし、「イベントを作成」ボタンをタップします。',
      },
      {
        title: 'イベントを作成する',
        desc: 'タイトル（例：2026年秋 健康診断）・説明・受診期限・対象者（全員または個別指定）を入力して作成します。',
      },
      {
        title: 'スタッフごとの状況を確認する',
        desc: 'イベントのカードには「未予約」「予約済」「受診済」「結果提出済」の件数が表示されます。カードをタップするとスタッフ一人ずつの状況・結果ファイルを確認できます。',
      },
      {
        title: '編集・コピーして作成・削除する',
        desc: '「編集」で内容を修正、「コピーして作成」で同じ内容の新しいイベントを作成（次回の健康診断などに便利です）、「削除」でイベントを削除できます。',
      },
    ],
  },
  {
    id: 'admin-users',
    icon: '👤',
    title: 'ユーザーを管理する',
    subtitle: '管理者向け：スタッフの追加・編集',
    adminOnly: true,
    steps: [
      {
        title: 'ユーザー管理を開く',
        desc: 'サイドメニューの「ユーザー管理」をタップします。',
      },
      {
        title: 'スタッフを追加する',
        desc: '「ユーザー追加」ボタンをタップし、メールアドレス・初期パスワード・名前・スタッフ名・ロールを入力して「追加する」をタップします。',
        note: '初期パスワードはスタッフ本人に共有してください。',
      },
      {
        title: '情報を編集する',
        desc: '各行の「編集」をタップすると名前・スタッフ名・ロールを変更できます。「保存」で確定します。',
      },
      {
        title: 'ユーザーを削除する',
        desc: '「削除」ボタンをタップすると確認ダイアログが表示されます。「削除する」で確定します。',
        note: 'Firestoreのデータのみ削除されます。Firebase Authのアカウントは残ります。',
      },
    ],
  },
]

const visibleTopics = computed(() =>
  topics.filter(t => !t.adminOnly || isAdmin.value)
)
</script>

<style scoped>
.help-enter-active,
.help-leave-active {
  transition: opacity 0.2s;
}
.help-enter-active .relative,
.help-leave-active .relative {
  transition: transform 0.25s ease;
}
.help-enter-from,
.help-leave-to {
  opacity: 0;
}
.help-enter-from .relative {
  transform: translateX(100%);
}
.help-leave-to .relative {
  transform: translateX(100%);
}
</style>
