<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="space-y-2 sm:space-y-0">
      <div class="flex items-center justify-between gap-3">
        <h2 class="text-base font-semibold text-gray-700">
          {{ isAdmin ? '経費申請一覧（全スタッフ）' : '自分の経費申請' }}
        </h2>
        <NuxtLink to="/expense/new"
          class="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition flex-shrink-0">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          経費申請
        </NuxtLink>
      </div>
      <div class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2">
        <select v-model="filterYearMonth"
          class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
          <option value="">すべての対象月</option>
          <option v-for="ym in availableYearMonths" :key="ym" :value="ym">{{ ym.slice(0,4) }}年{{ ym.slice(5,7) }}月分</option>
        </select>
        <select v-if="isAdmin" v-model="filterStaff"
          class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
          <option value="">すべてのスタッフ</option>
          <option v-for="name in expenseStaffNames" :key="name" :value="name">{{ name }}</option>
        </select>
        <select v-model="filterStatus" class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700">
          <option value="">すべての状態</option>
          <option value="pending">申請中</option>
          <option value="approved">承認済</option>
          <option value="rejected">却下</option>
        </select>
        <label class="flex items-center gap-1.5 text-sm text-gray-600 px-1 py-2 cursor-pointer select-none">
          <input v-model="showRejected" type="checkbox"
            class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-400" />
          却下を表示
        </label>
        <button v-if="filterYearMonth || filterStaff || filterStatus"
          @click="filterYearMonth = ''; filterStaff = ''; filterStatus = ''"
          class="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 px-2 py-2 transition">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          絞込解除
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-xl border border-gray-200 p-4">
        <p class="text-xs text-gray-500">{{ stat.label }}</p>
        <p class="text-xl font-bold text-gray-800 mt-1">{{ stat.value }}</p>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex items-center justify-center py-12">
      <svg class="animate-spin w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </div>

    <!-- テーブル -->
    <div v-else class="bg-white rounded-xl border border-gray-200 overflow-hidden">

      <!-- Mobile cards (sm未満) -->
      <div class="sm:hidden">
        <div v-if="filteredExpenses.length === 0" class="px-5 py-8 text-center text-sm text-gray-400">
          経費データがありません
        </div>
        <div v-else class="divide-y divide-gray-100">
          <div v-for="expense in filteredExpenses" :key="expense.id"
            class="p-4 space-y-2 cursor-pointer"
            @click="openDetail(expense)">
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-gray-800">{{ expense.staffName }}</span>
              <StatusBadge :status="expense.status" />
            </div>
            <p class="text-xs text-gray-400">
              {{ expense.appliedAt }}
              <span class="ml-1.5 px-1.5 py-0.5 rounded bg-primary-50 text-primary-700 font-medium">{{ monthLabel(expense) }}</span>
            </p>
            <div class="space-y-1">
              <div v-for="(item, i) in expense.items" :key="i" class="text-xs text-gray-600 flex items-center gap-1.5 flex-wrap">
                <span class="px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 whitespace-nowrap">{{ item.accountItem || '未分類' }}</span>
                <span class="flex-1 min-w-0 truncate">{{ item.memo }}</span>
                <span class="font-semibold tabular-nums whitespace-nowrap">¥{{ item.amount.toLocaleString() }}</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-base font-bold text-gray-800">¥{{ expense.totalAmount.toLocaleString() }}</span>
              <span v-if="expense.hasReceipt" class="text-green-600 text-xs flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                領収書あり
              </span>
              <span v-else class="text-xs text-red-400">領収書なし</span>
            </div>
            <p v-if="expense.rejectionReason" class="text-xs text-red-500">却下理由: {{ expense.rejectionReason }}</p>
            <div v-if="isAdmin" class="flex gap-2 pt-1" @click.stop>
              <button @click="openDetail(expense)"
                class="text-xs px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
                詳細・編集
              </button>
              <template v-if="expense.status === 'pending'">
                <button @click="approve(expense)"
                  class="text-xs px-2.5 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition">承認</button>
                <button @click="startReject(expense)"
                  class="text-xs px-2.5 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition">却下</button>
              </template>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop table (sm以上) -->
      <div class="hidden sm:block overflow-x-auto">
        <table class="min-w-[820px] w-full">
          <thead>
            <tr class="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wide border-b border-gray-100">
              <th class="px-5 py-3 whitespace-nowrap">申請者</th>
              <th class="px-5 py-3 whitespace-nowrap">申請日</th>
              <th class="px-4 py-3">明細内容</th>
              <th class="px-5 py-3 whitespace-nowrap text-right">合計金額</th>
              <th class="px-5 py-3 whitespace-nowrap">領収書</th>
              <th class="px-5 py-3 whitespace-nowrap">ステータス</th>
              <th v-if="isAdmin" class="px-5 py-3 whitespace-nowrap">操作</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="expense in filteredExpenses" :key="expense.id">
              <tr class="border-b border-gray-50 hover:bg-gray-50 transition cursor-pointer"
                @click="openDetail(expense)">
                <td class="px-5 py-3 text-sm font-semibold text-gray-800 whitespace-nowrap align-top">
                  {{ expense.staffName }}
                </td>
                <td class="px-5 py-3 text-sm text-gray-500 whitespace-nowrap align-top">
                  {{ expense.appliedAt }}
                  <span class="block mt-1 text-xs px-1.5 py-0.5 rounded bg-primary-50 text-primary-700 font-medium w-fit">{{ monthLabel(expense) }}</span>
                </td>
                <td class="px-4 py-3">
                  <div class="space-y-1">
                    <div v-for="(item, i) in expense.items" :key="i"
                      class="flex items-center gap-2 text-sm flex-wrap">
                      <span class="text-xs text-gray-400 whitespace-nowrap flex-shrink-0">{{ item.receiptDate }}</span>
                      <span class="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 whitespace-nowrap flex-shrink-0">
                        {{ item.accountItem || '未分類' }}
                      </span>
                      <span class="text-gray-700 min-w-0 flex-1">{{ item.memo }}</span>
                      <span class="text-gray-600 font-semibold tabular-nums whitespace-nowrap">
                        ¥{{ item.amount.toLocaleString() }}
                      </span>
                    </div>
                    <p v-if="expense.note" class="text-xs text-gray-400 mt-1">📌 {{ expense.note }}</p>
                    <p v-if="expense.rejectionReason" class="text-xs text-red-500 mt-1">
                      却下理由: {{ expense.rejectionReason }}
                    </p>
                  </div>
                </td>
                <td class="px-5 py-3 text-right align-top whitespace-nowrap">
                  <span class="text-base font-bold text-gray-800">
                    ¥{{ expense.totalAmount.toLocaleString() }}
                  </span>
                  <span v-if="expense.items.length > 1" class="block text-xs text-gray-400">
                    {{ expense.items.length }}件
                  </span>
                </td>
                <td class="px-5 py-3 whitespace-nowrap align-top">
                  <span v-if="expense.hasReceipt" class="text-green-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span v-else class="text-xs text-red-400">なし</span>
                  <span class="block text-xs mt-1" :class="checkedCount(expense) === expense.items.length && expense.items.length > 0 ? 'text-green-600 font-semibold' : 'text-gray-400'">
                    確認 {{ checkedCount(expense) }}/{{ expense.items.length }}
                  </span>
                </td>
                <td class="px-5 py-3 whitespace-nowrap align-top">
                  <StatusBadge :status="expense.status" />
                </td>
                <td v-if="isAdmin" class="px-5 py-3 whitespace-nowrap align-top">
                  <div class="flex flex-col gap-1.5">
                    <button @click.stop="openDetail(expense)"
                      class="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
                      詳細・編集
                    </button>
                    <template v-if="expense.status === 'pending'">
                      <button @click.stop="approve(expense)"
                        class="text-xs px-2.5 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition">承認</button>
                      <button @click.stop="startReject(expense)"
                        class="text-xs px-2.5 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">却下</button>
                    </template>
                  </div>
                </td>
              </tr>
            </template>
            <tr v-if="filteredExpenses.length === 0">
              <td :colspan="isAdmin ? 7 : 6" class="px-5 py-8 text-center text-sm text-gray-400">
                経費データがありません
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="px-5 py-3 bg-gray-50 border-t border-gray-100 flex justify-end gap-6">
        <span class="text-sm text-gray-500">
          表示件数: {{ filteredExpenses.length }}件
        </span>
        <span class="text-sm text-gray-600">
          合計: <span class="font-bold text-gray-800">
            ¥{{ filteredExpenses.reduce((s, e) => s + e.totalAmount, 0).toLocaleString() }}
          </span>
        </span>
      </div>
    </div>

    <!-- 詳細・編集モーダル -->
    <div v-if="detailTarget" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full flex flex-col"
        :class="hasReceipts ? 'sm:max-w-6xl h-[94dvh] sm:h-[90dvh]' : 'sm:max-w-lg max-h-[90dvh]'">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <div>
            <h3 class="font-semibold text-gray-800">経費申請の詳細{{ canEdit ? '・編集' : '' }}</h3>
            <p class="text-xs text-gray-400 mt-0.5">{{ detailTarget.staffName }} ／ 申請日: {{ detailTarget.appliedAt }}</p>
          </div>
          <div class="flex items-center gap-2">
            <StatusBadge :status="detailTarget.status" />
            <button @click="closeDetail" class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- 本体：左=入力内容（スクロール） / 右=領収書の写真（常に表示・ズーム可） -->
        <div class="flex-1 min-h-0 flex flex-col sm:flex-row">
          <div class="px-6 py-5 space-y-5 flex-1 min-h-0 min-w-0 overflow-y-auto">
            <div v-if="isAdmin">
              <label class="block text-xs font-semibold text-gray-500 mb-1">申請者</label>
              <input v-model="editForm.staffName" class="form-input rounded-xl text-sm" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">対象月（何月分）</label>
              <input v-model="editForm.targetMonth" type="month" :disabled="!canEdit"
                class="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-400 disabled:bg-gray-50 disabled:text-gray-500" />
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-2">
                明細内容
                <span class="ml-1 font-normal text-gray-400">確認 {{ editForm.items.filter(i => i.checked).length }}/{{ editForm.items.length }}</span>
              </label>
              <div class="space-y-2">
                <div v-for="(item, i) in editForm.items" :key="i"
                  class="flex items-center gap-2 p-3 rounded-xl transition"
                  :class="item.checked ? 'bg-green-50 ring-1 ring-green-200' : 'bg-gray-50'">
                  <div class="flex-1 space-y-2 min-w-0">
                    <div class="flex gap-2 flex-wrap">
                      <input v-model="item.receiptDate" type="date" :disabled="!canEdit"
                        class="flex-shrink-0 text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-400 disabled:bg-gray-50 disabled:text-gray-500" />
                      <select v-model="item.accountItem" :disabled="!canEdit"
                        class="flex-shrink-0 text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white disabled:bg-gray-50 disabled:text-gray-500">
                        <option value="">未分類</option>
                        <option v-for="c in expenseCategories" :key="c" :value="c">{{ c }}</option>
                      </select>
                      <div class="relative flex-shrink-0 w-28">
                        <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">¥</span>
                        <input v-model.number="item.amount" type="number" :disabled="!canEdit"
                          class="w-full text-sm border border-gray-200 rounded-lg pl-5 pr-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary-400 disabled:bg-gray-50 disabled:text-gray-500" />
                      </div>
                    </div>
                    <input v-model="item.memo" type="text" placeholder="内容" :disabled="!canEdit"
                      class="w-full text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary-400 disabled:bg-gray-50 disabled:text-gray-500" />
                    <label v-if="isAdmin" class="inline-flex items-center gap-1.5 text-xs cursor-pointer select-none"
                      :class="item.checked ? 'text-green-700 font-semibold' : 'text-gray-500'">
                      <input type="checkbox" :checked="!!item.checked" @change="toggleChecked(i, $event)"
                        class="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-400" />
                      確認済み
                      <span v-if="item.checked && item.checkedBy" class="font-normal text-gray-400">（{{ item.checkedBy }}）</span>
                    </label>
                    <span v-else-if="item.checked" class="text-xs text-green-700 font-semibold">✓ 確認済み</span>
                  </div>
                  <button v-if="canEdit" @click="editForm.items.splice(i, 1)" type="button"
                    class="p-1.5 text-gray-300 hover:text-red-400 flex-shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <button v-if="canEdit" @click="editForm.items.push({ receiptDate: '', accountItem: '旅費交通費', amount: 0, memo: '' })"
                type="button"
                class="mt-2 text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                明細を追加
              </button>
              <div class="text-right mt-2 text-sm font-bold text-primary-700">
                合計: ¥{{ editForm.items.reduce((s, i) => s + (i.amount || 0), 0).toLocaleString() }}
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">備考</label>
              <textarea v-model="editForm.note" rows="2" :disabled="!canEdit"
                class="form-input w-full rounded-xl resize-none text-sm disabled:bg-gray-50 disabled:text-gray-500"
                placeholder="補足事項" />
            </div>

            <div v-if="isAdmin">
              <label class="block text-xs font-semibold text-gray-500 mb-1">管理者メモ（内部用）</label>
              <textarea v-model="editForm.adminNote" rows="2" class="form-input w-full rounded-xl resize-none text-sm"
                placeholder="申請者には表示されません" />
            </div>

            <div v-if="detailTarget.handledBy" class="text-xs text-gray-400">
              処理者: {{ detailTarget.handledBy }}
            </div>

            <div v-if="detailTarget.rejectionReason" class="bg-red-50 border border-red-200 rounded-xl p-3">
              <p class="text-xs font-semibold text-red-600 mb-1">却下理由</p>
              <p class="text-sm text-red-700">{{ detailTarget.rejectionReason }}</p>
            </div>
          </div>

          <!-- 領収書ビューア（スクロールしても常に表示される） -->
          <div v-if="hasReceipts"
            class="order-first sm:order-last sm:w-[46%] h-[36dvh] sm:h-auto flex-shrink-0 min-h-0 flex flex-col bg-gray-50 border-b sm:border-b-0 sm:border-l border-gray-100">
            <div class="flex items-center gap-1.5 px-3 py-2 border-b border-gray-100 bg-white flex-shrink-0 flex-wrap">
              <p class="text-xs font-semibold text-gray-500 mr-auto">📷 領収書（{{ photoIndex + 1 }}/{{ receiptUrls.length }}）</p>
              <button type="button" @click="zoomBy(-0.25)" class="w-7 h-7 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 text-base leading-none">－</button>
              <span class="text-xs text-gray-500 w-10 text-center tabular-nums">{{ Math.round(zoom * 100) }}%</span>
              <button type="button" @click="zoomBy(0.25)" class="w-7 h-7 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 text-base leading-none">＋</button>
              <button type="button" @click="zoom = 1" class="px-2 h-7 rounded-lg border border-gray-200 text-xs text-gray-600 hover:bg-gray-100">元に戻す</button>
              <a :href="currentPhoto" target="_blank" rel="noopener" class="px-2 h-7 inline-flex items-center rounded-lg border border-gray-200 text-xs text-gray-600 hover:bg-gray-100">別タブ</a>
            </div>
            <div v-if="receiptUrls.length > 1" class="flex gap-2 px-3 py-2 overflow-x-auto flex-shrink-0 bg-white border-b border-gray-100">
              <button v-for="(url, i) in receiptUrls" :key="i" type="button" @click="selectPhoto(i)"
                class="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition"
                :class="i === photoIndex ? 'border-primary-500' : 'border-transparent opacity-70 hover:opacity-100'">
                <img :src="url" class="w-full h-full object-cover" />
              </button>
            </div>
            <div class="flex-1 min-h-0 overflow-auto p-2" @wheel="onPhotoWheel">
              <img :src="currentPhoto" :style="{ width: zoom * 100 + '%' }" class="max-w-none rounded-lg block" />
            </div>
          </div>
        </div>

        <div class="px-6 pb-5 pt-4 flex flex-wrap gap-2 border-t border-gray-100 flex-shrink-0">
          <button v-if="canEdit" @click="saveEdit" :disabled="editSaving"
            class="flex-1 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 disabled:opacity-50 transition">
            {{ editSaving ? '保存中...' : '変更を保存' }}
          </button>
          <button v-if="detailTarget.status === 'rejected'" @click="copyAndResubmit(detailTarget)"
            class="flex-1 py-2.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-xl hover:bg-primary-100 transition flex items-center justify-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            コピーして再申請
          </button>
          <template v-if="isAdmin && detailTarget.status === 'pending'">
            <button @click="approveAndClose"
              class="py-2.5 px-4 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition">
              承認
            </button>
            <button @click="showReject = true"
              class="py-2.5 px-4 bg-red-500 text-white text-sm font-semibold rounded-xl hover:bg-red-600 transition">
              却下
            </button>
          </template>
          <template v-else-if="isAdmin">
            <button @click="resetStatus"
              class="py-2.5 px-4 bg-yellow-500 text-white text-sm font-semibold rounded-xl hover:bg-yellow-600 transition">
              申請中に戻す
            </button>
          </template>
          <p v-if="editSaved" class="w-full text-center text-sm text-green-600">✓ 保存しました</p>
        </div>
      </div>
    </div>

    <!-- 却下理由モーダル -->
    <RejectModal v-if="showReject" @confirm="confirmReject" @cancel="showReject = false" />
  </div>
</template>


<script setup lang="ts">
import type { ExpenseDoc } from '~/composables/useExpenseStore'
import type { ExpenseLineItem } from '~/composables/useMockData'

definePageMeta({ middleware: 'auth' })

const { isAdmin, userProfile } = useAuth()
const { expenses, loading, startListening, updateExpense, approveExpense, rejectExpense, resetExpense } = useExpenseStore()

onMounted(() => startListening())

const filterStatus = ref('')
const filterYearMonth = ref('')
const filterStaff = ref('')
const showRejected = ref(false)

const expenseCategories = ['旅費交通費', '車両費', '消耗品費', '通信費', '研修費', '会議費', '接待費', '福利厚生費', '雑費', 'その他']

/** 対象月（何月分）。未設定の過去データは申請日の月で代用する */
function targetMonthOf(e: ExpenseDoc): string {
  return e.targetMonth || e.appliedAt.slice(0, 7)
}

function monthLabel(e: ExpenseDoc): string {
  const ym = targetMo