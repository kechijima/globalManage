<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <h2 class="text-base font-semibold text-gray-700">
        {{ isAdmin ? '残業申請一覧（全スタッフ）' : '自分の残業申請' }}
      </h2>
      <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
        <div v-if="isAdmin" class="flex gap-2">
          <button v-for="tab in tabs" :key="tab.value" @click="activeTab = tab.value"
            class="flex-1 sm:flex-none px-4 py-2 text-sm font-medium rounded-lg transition"
            :class="activeTab === tab.value
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'">
            {{ tab.label }}
          </button>
        </div>
        <button @click="openNewModal"
          class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          新規申請
        </button>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-xl border border-gray-200 p-4">
        <p class="text-xs text-gray-500">{{ stat.label }}</p>
        <p class="text-xl font-bold mt-1" :class="stat.color">{{ stat.value }}</p>
        <p class="text-xs text-gray-400 mt-1">{{ stat.sub }}</p>
      </div>
    </div>

    <div v-if="activeTab === 'list'" class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2">
      <select v-model="filterYearMonth"
        class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
        <option value="">すべての月</option>
        <option v-for="ym in availableYearMonths" :key="ym" :value="ym">{{ ym.slice(0, 4) }}年{{ ym.slice(5, 7) }}月</option>
      </select>
      <select v-if="isAdmin" v-model="filterStaff"
        class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
        <option value="">すべてのスタッフ</option>
        <option v-for="name in overtimeStaffNames" :key="name" :value="name">{{ name }}</option>
      </select>
      <select v-model="filterStatus"
        class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
        <option value="">すべての状態</option>
        <option value="pending">承認待ち</option>
        <option value="approved">承認済</option>
        <option value="rejected">却下</option>
      </select>
      <label class="flex items-center gap-1.5 text-sm text-gray-600 px-1 py-2 cursor-pointer select-none">
        <input v-model="showRejected" type="checkbox"
          class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-400" />
        却下を表示
      </label>
      <div class="flex items-center gap-2">
        <button v-if="filterYearMonth || filterStaff || filterStatus"
          @click="filterYearMonth = ''; filterStaff = ''; filterStatus = ''"
          class="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 px-2 py-2 transition">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          絞込解除
        </button>
        <span class="text-xs text-gray-400 sm:ml-auto">{{ filteredList.length }}件</span>
      </div>
    </div>

    <div v-if="loading" class="flex items-center justify-center py-12">
      <svg class="animate-spin w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </div>

    <div v-else class="bg-white rounded-xl border border-gray-200">
      <div class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">{{ activeTab === 'list' ? '申請一覧' : '月別・スタッフ別サマリー' }}</h2>
      </div>

      <template v-if="activeTab === 'list'">
        <div class="sm:hidden">
          <div v-if="filteredList.length === 0" class="px-5 py-8 text-center text-sm text-gray-400">
            残業申請データがありません
          </div>
          <div v-else class="divide-y divide-gray-100">
            <div v-for="ot in filteredList" :key="ot.id" class="p-4 space-y-2"
              @click="openDetail(ot)">
              <div class="flex items-center justify-between">
                <span v-if="isAdmin" class="text-sm font-semibold text-gray-800">{{ ot.staffName }}</span>
                <span v-else class="text-sm font-semibold text-gray-800">{{ ot.date }}</span>
                <div class="flex items-center gap-1.5">
                  <span v-if="ot.nightMinutes > 0"
                    class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                    深夜手当あり
                  </span>
                  <StatusBadge :status="ot.status" />
                </div>
              </div>
              <div class="text-xs text-gray-500 space-y-0.5">
                <p v-if="isAdmin"><span class="text-gray-400">日付:</span> {{ ot.date }}</p>
                <p><span class="text-gray-400">時間帯:</span> {{ ot.startTime }}〜{{ ot.endTime }}</p>
                <p>
                  <span class="text-gray-400">残業時間:</span>
                  <span class="font-medium text-gray-700 ml-1">{{ fmtMin(ot.totalMinutes) }}</span>
                  <span v-if="ot.nightMinutes > 0" class="text-purple-600 ml-1">（深夜 {{ fmtMin(ot.nightMinutes) }}）</span>
                </p>
                <p v-if="ot.reason" class="truncate"><span class="text-gray-400">理由:</span> {{ ot.reason }}</p>
                <p v-if="ot.rejectionReason" class="text-red-500 truncate">却下理由: {{ ot.rejectionReason }}</p>
              </div>
              <div class="flex gap-2 pt-1" @click.stop>
                <template v-if="isAdmin">
                  <button @click="openDetail(ot)"
                    class="text-xs px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
                    詳細・編集
                  </button>
                  <template v-if="ot.status === 'pending'">
                    <button @click="approve(ot)"
                      class="text-xs px-2.5 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition">承認</button>
                    <button @click="startReject(ot)"
                      class="text-xs px-2.5 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition">却下</button>
                  </template>
                </template>
                <template v-else-if="ot.status === 'pending'">
                  <button @click="openEdit(ot)"
                    class="text-xs px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">編集</button>
                  <button @click="cancelOvertime(ot)"
                    class="text-xs px-2.5 py-1.5 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition">取り消し</button>
                </template>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden sm:block overflow-x-auto">
          <table class="min-w-[900px] w-full">
            <thead>
              <tr class="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
                <th v-if="isAdmin" class="px-5 py-3 whitespace-nowrap">申請者</th>
                <th class="px-5 py-3 whitespace-nowrap">残業日</th>
                <th class="px-5 py-3 whitespace-nowrap">時間帯</th>
                <th class="px-5 py-3 whitespace-nowrap">残業時間</th>
                <th class="px-5 py-3 whitespace-nowrap">深夜手当</th>
                <th class="px-5 py-3 whitespace-nowrap">理由</th>
                <th class="px-5 py-3 whitespace-nowrap">ステータス</th>
                <th class="px-5 py-3 whitespace-nowrap">操作</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="ot in filteredList" :key="ot.id"
                class="hover:bg-gray-50 transition cursor-pointer"
                @click="openDetail(ot)">
                <td v-if="isAdmin" class="px-5 py-3 text-sm font-medium text-gray-800 whitespace-nowrap">{{ ot.staffName }}</td>
                <td class="px-5 py-3 text-sm text-gray-700 whitespace-nowrap">{{ ot.date }}</td>
                <td class="px-5 py-3 text-sm text-gray-600 whitespace-nowrap">{{ ot.startTime }}〜{{ ot.endTime }}</td>
                <td class="px-5 py-3 text-sm font-medium text-gray-700 whitespace-nowrap">{{ fmtMin(ot.totalMinutes) }}</td>
                <td class="px-5 py-3 whitespace-nowrap">
                  <span v-if="ot.nightMinutes > 0"
                    class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                    {{ fmtMin(ot.nightMinutes) }}
                  </span>
                  <span v-else class="text-xs text-gray-400">—</span>
                </td>
                <td class="px-5 py-3 text-sm text-gray-500 max-w-[200px]">
                  <p class="truncate">{{ ot.reason }}</p>
                  <p v-if="ot.rejectionReason" class="text-xs text-red-500 mt-0.5 truncate">却下理由: {{ ot.rejectionReason }}</p>
                </td>
                <td class="px-5 py-3 whitespace-nowrap">
                  <div class="flex flex-col gap-1">
                    <StatusBadge :status="ot.status" />
                    <span v-if="ot.nightMinutes > 0"
                      class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700 w-fit">
                      深夜手当あり
                    </span>
                  </div>
                </td>
                <td class="px-5 py-3 whitespace-nowrap" @click.stop>
                  <div class="flex gap-2">
                    <template v-if="isAdmin">
                      <button @click="openDetail(ot)"
                        class="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
                        詳細・編集
                      </button>
                      <template v-if="ot.status === 'pending'">
                        <button @click="approve(ot)"
                          class="text-xs px-2.5 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition">承認</button>
                        <button @click="startReject(ot)"
                          class="text-xs px-2.5 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">却下</button>
                      </template>
                    </template>
                    <template v-else-if="ot.status === 'pending'">
                      <button @click="openEdit(ot)"
                        class="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">編集</button>
                      <button @click="cancelOvertime(ot)"
                        class="text-xs px-2.5 py-1 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition">取り消し</button>
                    </template>
                  </div>
                </td>
              </tr>
              <tr v-if="filteredList.length === 0">
                <td :colspan="isAdmin ? 8 : 7" class="px-5 py-8 text-center text-sm text-gray-400">
                  残業申請データがありません
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <template v-else-if="isAdmin && activeTab === 'summary'">
        <div class="overflow-x-auto">
          <table class="min-w-[700px] w-full">
            <thead>
              <tr class="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
                <th class="px-5 py-3 whitespace-nowrap">スタッフ名</th>
                <th class="px-5 py-3 whitespace-nowrap">月</th>
                <th class="px-5 py-3 whitespace-nowrap text-right">件数</th>
                <th class="px-5 py-3 whitespace-nowrap text-right">合計残業時間</th>
                <th class="px-5 py-3 whitespace-nowrap text-right">深夜手当時間</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="row in summaryRows" :key="`${row.staffName}-${row.month}`"
                class="hover:bg-gray-50 transition">
                <td class="px-5 py-3 text-sm font-medium text-gray-800 whitespace-nowrap">{{ row.staffName }}</td>
                <td class="px-5 py-3 text-sm text-gray-600 whitespace-nowrap">{{ row.month.slice(0, 4) }}年{{ row.month.slice(5, 7) }}月</td>
                <td class="px-5 py-3 text-sm text-gray-600 whitespace-nowrap text-right">{{ row.count }}件</td>
                <td class="px-5 py-3 text-sm font-medium text-gray-700 whitespace-nowrap text-right">{{ fmtMin(row.totalMinutes) }}</td>
                <td class="px-5 py-3 whitespace-nowrap text-right">
                  <span v-if="row.nightMinutes > 0"
                    class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                    {{ fmtMin(row.nightMinutes) }}
                  </span>
                  <span v-else class="text-xs text-gray-400">—</span>
                </td>
              </tr>
              <tr v-if="summaryRows.length === 0">
                <td colspan="5" class="px-5 py-8 text-center text-sm text-gray-400">データがありません</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </div>

    <div v-if="showNewModal" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-lg max-h-[90dvh] overflow-y-auto">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 class="font-semibold text-gray-800">残業申請</h3>
          <button @click="showNewModal = false"
            class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="px-6 py-5 space-y-4">
          <div v-if="isAdmin">
            <label class="block text-xs font-semibold text-gray-500 mb-1">申請者 <span class="text-red-400">*</span></label>
            <select v-model="newForm.staffName"
              class="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary-400">
              <option value="">選択してください</option>
              <option v-for="s in staffNames" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">残業日 <span class="text-red-400">*</span></label>
            <input v-model="newForm.date" type="date"
              class="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary-400" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">開始時間 <span class="text-red-400">*</span></label>
              <input v-model="newForm.startTime" type="time" step="900"
                class="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary-400" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">終了時間 <span class="text-red-400">*</span></label>
              <input v-model="newForm.endTime" type="time" step="900"
                class="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary-400" />
            </div>
          </div>

          <div v-if="newForm.startTime && newForm.endTime && newTotalMinutes > 0"
            class="bg-primary-50 border border-primary-100 rounded-lg px-4 py-3 space-y-1">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600">合計残業時間</span>
              <span class="font-semibold text-primary-700">{{ fmtMin(newTotalMinutes) }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600">深夜手当対象（22:00〜05:00）</span>
              <span class="font-semibold" :class="newNightMinutes > 0 ? 'text-purple-700' : 'text-gray-400'">
                {{ newNightMinutes > 0 ? fmtMin(newNightMinutes) : 'なし' }}
              </span>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">残業理由 <span class="text-red-400">*</span></label>
            <textarea v-model="newForm.reason" rows="3"
              class="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full resize-none focus:outline-none focus:ring-2 focus:ring-primary-400"
              placeholder="業務内容や残業が必要な理由を入力してください" />
          </div>

          <p v-if="newError" class="text-sm text-red-600">{{ newError }}</p>
        </div>

        <div class="px-6 pb-5 flex gap-3 border-t border-gray-100 pt-4">
          <button @click="showNewModal = false"
            class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition">
            キャンセル
          </button>
          <button @click="submitNew" :disabled="!newCanSubmit || newSaving"
            class="flex-1 py-2.5 bg-primary-700 text-white text-sm font-semibold rounded-xl hover:bg-primary-800 disabled:opacity-40 transition">
            {{ newSaving ? '送信中...' : '申請する' }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="detailTarget" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-lg max-h-[90dvh] overflow-y-auto">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h3 class="font-semibold text-gray-800">残業申請の詳細{{ isAdmin ? '・編集' : '' }}</h3>
            <p class="text-xs text-gray-400 mt-0.5">申請日: {{ new Date(detailTarget.appliedAt).toLocaleDateString('ja-JP') }}</p>
          </div>
          <div class="flex items-center gap-2">
            <StatusBadge :status="detailTarget.status" />
            <button @click="closeDetail"
              class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div class="px-6 py-5 space-y-4">
          <div v-if="isAdmin">
            <label class="block text-xs font-semibold text-gray-500 mb-1">申請者</label>
            <input v-model="editForm.staffName"
              class="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary-400" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">残業日</label>
            <input v-model="editForm.date" type="date"
              :readonly="!isAdmin && detailTarget.status !== 'pending'"
              class="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary-400"
              :class="(!isAdmin && detailTarget.status !== 'pending') ? 'bg-gray-50 text-gray-600' : ''" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">開始時間</label>
              <input v-model="editForm.startTime" type="time" step="900"
                :readonly="!isAdmin && detailTarget.status !== 'pending'"
                class="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary-400"
                :class="(!isAdmin && detailTarget.status !== 'pending') ? 'bg-gray-50 text-gray-600' : ''" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">終了時間</label>
              <input v-model="editForm.endTime" type="time" step="900"
                :readonly="!isAdmin && detailTarget.status !== 'pending'"
                class="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary-400"
                :class="(!isAdmin && detailTarget.status !== 'pending') ? 'bg-gray-50 text-gray-600' : ''" />
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg px-4 py-3 space-y-1">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600">合計残業時間</span>
              <span class="font-semibold text-gray-700">{{ fmtMin(editTotalMinutes) }}</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600">深夜手当対象</span>
              <span class="font-semibold" :class="editNightMinutes > 0 ? 'text-purple-700' : 'text-gray-400'">
                {{ editNightMinutes > 0 ? fmtMin(editNightMinutes) : 'なし' }}
              </span>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">残業理由</label>
            <textarea v-model="editForm.reason" rows="3"
              :readonly="!isAdmin && detailTarget.status !== 'pending'"
              class="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-full resize-none focus:outline-none focus:ring-2 focus:ring-primary-400"
              :class="(!isAdmin && detailTarget.status !== 'pending') ? 'bg-gray-50 text-gray-600' : ''" />
          </div>

          <div v-if="detailTarget.handledBy" class="text-xs text-gray-400">
            処理者: {{ detailTarget.handledBy }}
          </div>

          <div v-if="detailTarget.rejectionReason" class="bg-red-50 border border-red-200 rounded-xl p-3">
            <p class="text-xs font-semibold text-red-600 mb-1">却下理由</p>
            <p class="text-sm text-red-700">{{ detailTarget.rejectionReason }}</p>
          </div>
        </div>

        <div class="px-6 pb-5 flex flex-wrap gap-2 border-t border-gray-50 pt-4">
          <template v-if="isAdmin">
            <button @click="saveEdit" :disabled="editSaving"
              class="flex-1 py-2.5 bg-primary-700 text-white text-sm font-semibold rounded-xl hover:bg-primary-800 disabled:opacity-50 transition">
              {{ editSaving ? '保存中...' : '変更を保存' }}
            </button>
            <template v-if="detailTarget.status === 'pending'">
              <button @click="approveAndClose"
                class="py-2.5 px-4 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition">承認</button>
              <button @click="showReject = true"
                class="py-2.5 px-4 bg-red-500 text-white text-sm font-semibold rounded-xl hover:bg-red-600 transition">却下</button>
            </template>
            <template v-else>
              <button @click="resetToAdmin"
                class="py-2.5 px-4 bg-yellow-500 text-white text-sm font-semibold rounded-xl hover:bg-yellow-600 transition">
                申請中に戻す
              </button>
            </template>
          </template>
          <template v-else-if="detailTarget.status === 'pending'">
            <button @click="saveUserEdit" :disabled="editSaving"
              class="flex-1 py-2.5 bg-primary-700 text-white text-sm font-semibold rounded-xl hover:bg-primary-800 disabled:opacity-50 transition">
              {{ editSaving ? '保存中...' : '変更を保存' }}
            </button>
            <button @click="cancelOvertime(detailTarget)"
              class="py-2.5 px-4 bg-red-50 text-red-600 text-sm font-semibold rounded-xl hover:bg-red-100 transition">
              取り消し
            </button>
          </template>
          <template v-else-if="detailTarget.status === 'rejected'">
            <button @click="copyAndResubmit(detailTarget)"
              class="flex-1 py-2.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-xl hover:bg-primary-100 transition flex items-center justify-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              コピーして再申請
            </button>
          </template>
        </div>
        <p v-if="editSaved" class="text-center text-sm text-green-600 pb-4">✓ 保存しました</p>
      </div>
    </div>

    <RejectModal v-if="showReject" @confirm="confirmReject" @cancel="showReject = false" />

    <div v-if="cancelConfirmTarget" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        <h3 class="font-semibold text-gray-800 mb-2">申請を取り消しますか？</h3>
        <p class="text-sm text-gray-500 mb-5">{{ cancelConfirmTarget.date }}の残業申請を削除します。この操作は元に戻せません。</p>
        <div class="flex gap-3">
          <button @click="cancelConfirmTarget = null"
            class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition">
            キャンセル
          </button>
          <button @click="confirmCancel" :disabled="cancelDeleting"
            class="flex-1 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-xl hover:bg-red-700 disabled:opacity-40 transition">
            {{ cancelDeleting ? '削除中...' : '取り消す' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OvertimeDoc } from '~/composables/useOvertimeStore'
import { calcTotalMinutes, calcNightMinutes, formatMinutes } from '~/composables/useOvertimeStore'

const { isAdmin, userProfile, currentUser } = useAuth()
const { staffNames, loadUsers } = useUsers()
const {
  overtimes, loading,
  startListening,
  createOvertime,
  approveOvertime,
  rejectOvertime,
  updateOvertime,
  deleteOvertime,
} = useOvertimeStore()

onMounted(async () => {
  startListening()
  if (isAdmin.value) await loadUsers()
})

function fmtMin(minutes: number): string {
  return formatMinutes(minutes)
}

const activeTab = ref('list')
const tabs = [
  { value: 'list', label: '申請一覧' },
  { value: 'summary', label: 'サマリー' },
]

const filterYearMonth = ref('')
const filterStaff = ref('')
const filterStatus = ref('')
const showRejected = ref(false)

const thisYearMonth = computed(() => new Date().toISOString().slice(0, 7))

const myList = computed(() =>
  isAdmin.value
    ? overtimes.value
    : overtimes.value.filter(o => o.staffName === userProfile.value?.staffName)
)

const availableYearMonths = computed(() => {
  const months = new Set(myList.value.map(o => o.date.slice(0, 7)))
  return Array.from(months).sort().reverse()
})

const overtimeStaffNames = computed(() => {
  const names = new Set(overtimes.value.map(o => o.staffName))
  return Array.from(names).sort()
})

const filteredList = computed(() => {
  let list = myList.value
  if (filterYearMonth.value) list = list.filter(o => o.date.startsWith(filterYearMonth.value))
  if (filterStaff.value) list = list.filter(o => o.staffName === filterStaff.value)
  if (filterStatus.value) list = list.filter(o => o.status === filterStatus.value)
  if (!showRejected.value && filterStatus.value !== 'rejected') list = list.filter(o => o.status !== 'rejected')
  return list
})

const currentMonthList = computed(() =>
  myList.value.filter(o => o.date.startsWith(thisYearMonth.value) && o.status === 'approved')
)

const stats = computed(() => {
  const list = myList.value
  const approved = currentMonthList.value
  if (isAdmin.value) {
    return [
      {
        label: '承認待ち',
        value: list.filter(o => o.status === 'pending').length + '件',
        color: 'text-yellow-600',
        sub: '対応が必要です',
      },
      {
        label: '当月承認',
        value: approved.length + '件',
        color: 'text-green-600',
        sub: thisYearMonth.value.slice(0, 4) + '年' + thisYearMonth.value.slice(5, 7) + '月',
      },
      {
        label: '深夜手当あり',
        value: list.filter(o => o.nightMinutes > 0 && o.status === 'approved').length + '件',
        color: 'text-purple-700',
        sub: '承認済のみ',
      },
    ]
  }
  return [
    {
      label: '承認待ち',
      value: list.filter(o => o.status === 'pending').length + '件',
      color: 'text-yellow-600',
      sub: '対応待ち',
    },
    {
      label: '当月残業時間',
      value: approved.length ? fmtMin(approved.reduce((s, o) => s + o.totalMinutes, 0)) : '—',
      color: 'text-primary-700',
      sub: '承認済合計',
    },
    {
      label: '当月深夜手当',
      value: approved.some(o => o.nightMinutes > 0)
        ? fmtMin(approved.reduce((s, o) => s + o.nightMinutes, 0))
        : '—',
      color: 'text-purple-700',
      sub: '22:00〜05:00',
    },
  ]
})

const summaryRows = computed(() => {
  const map = new Map<string, { staffName: string; month: string; count: number; totalMinutes: number; nightMinutes: number }>()
  for (const o of overtimes.value) {
    if (o.status !== 'approved') continue
    const month = o.date.slice(0, 7)
    const key = `${o.staffName}::${month}`
    const row = map.get(key) ?? { staffName: o.staffName, month, count: 0, totalMinutes: 0, nightMinutes: 0 }
    row.count++
    row.totalMinutes += o.totalMinutes
    row.nightMinutes += o.nightMinutes
    map.set(key, row)
  }
  return Array.from(map.values()).sort((a, b) =>
    b.month.localeCompare(a.month) || a.staffName.localeCompare(b.staffName)
  )
})

const showNewModal = ref(false)
const newForm = reactive({ staffName: '', date: '', startTime: '', endTime: '', reason: '' })
const newSaving = ref(false)
const newError = ref('')

function openNewModal() {
  newForm.staffName = isAdmin.value ? '' : (userProfile.value?.staffName ?? '')
  newForm.date = new Date().toISOString().slice(0, 10)
  newForm.startTime = ''
  newForm.endTime = ''
  newForm.reason = ''
  newError.value = ''
  showNewModal.value = true
}

function copyAndResubmit(ot: OvertimeDoc) {
  closeDetail()
  newForm.staffName = isAdmin.value ? ot.staffName : (userProfile.value?.staffName ?? '')
  newForm.date = ot.date
  newForm.startTime = ot.startTime
  newForm.endTime = ot.endTime
  newForm.reason = ot.reason
  newError.value = ''
  showNewModal.value = true
}

const newTotalMinutes = computed(() => {
  if (!newForm.startTime || !newForm.endTime) return 0
  return calcTotalMinutes(newForm.startTime, newForm.endTime)
})

const newNightMinutes = computed(() => {
  if (!newForm.startTime || !newForm.endTime) return 0
  return calcNightMinutes(newForm.date, newForm.startTime, newForm.endTime)
})

const newCanSubmit = computed(() =>
  !!newForm.staffName && !!newForm.date && !!newForm.startTime && !!newForm.endTime &&
  !!newForm.reason.trim() && newTotalMinutes.value > 0
)

async function submitNew() {
  if (!newCanSubmit.value || newSaving.value) return
  newSaving.value = true
  newError.value = ''
  try {
    await createOvertime({
      userId: currentUser.value!.uid,
      staffName: newForm.staffName,
      date: newForm.date,
      startTime: newForm.startTime,
      endTime: newForm.endTime,
      totalMinutes: newTotalMinutes.value,
      nightMinutes: newNightMinutes.value,
      reason: newForm.reason,
      status: 'pending',
      appliedAt: new Date().toISOString(),
    })
    showNewModal.value = false
  } catch (e: unknown) {
    newError.value = '申請の送信に失敗しました。もう一度お試しください。'
    console.error(e)
  } finally {
    newSaving.value = false
  }
}

const detailTarget = ref<OvertimeDoc | null>(null)
const editForm = reactive({ staffName: '', date: '', startTime: '', endTime: '', reason: '' })
const editSaving = ref(false)
const editSaved = ref(false)
const showReject = ref(false)
const rejectTarget = ref<OvertimeDoc | null>(null)

const editTotalMinutes = computed(() => {
  if (!editForm.startTime || !editForm.endTime) return 0
  return calcTotalMinutes(editForm.startTime, editForm.endTime)
})

const editNightMinutes = computed(() => {
  if (!editForm.startTime || !editForm.endTime) return 0
  return calcNightMinutes(editForm.date, editForm.startTime, editForm.endTime)
})

function openDetail(ot: OvertimeDoc) {
  detailTarget.value = ot
  editForm.staffName = ot.staffName
  editForm.date = ot.date
  editForm.startTime = ot.startTime
  editForm.endTime = ot.endTime
  editForm.reason = ot.reason
  editSaved.value = false
}

function openEdit(ot: OvertimeDoc) {
  openDetail(ot)
}

function closeDetail() {
  detailTarget.value = null
  showReject.value = false
}

async function saveEdit() {
  if (!detailTarget.value) return
  editSaving.value = true
  try {
    await updateOvertime(detailTarget.value.id, {
      staffName: editForm.staffName,
      date: editForm.date,
      startTime: editForm.startTime,
      endTime: editForm.endTime,
      totalMinutes: editTotalMinutes.value,
      nightMinutes: editNightMinutes.value,
      reason: editForm.reason,
    })
    editSaved.value = true
    setTimeout(() => { editSaved.value = false }, 2000)
  } finally {
    editSaving.value = false
  }
}

async function saveUserEdit() {
  if (!detailTarget.value || detailTarget.value.status !== 'pending') return
  await saveEdit()
}

async function approve(ot: OvertimeDoc) {
  await approveOvertime(ot.id, ot.userId, ot.staffName, userProfile.value?.staffName ?? '')
}

async function approveAndClose() {
  if (!detailTarget.value) return
  await approveOvertime(
    detailTarget.value.id,
    detailTarget.value.userId,
    detailTarget.value.staffName,
    userProfile.value?.staffName ?? '',
  )
  closeDetail()
}

function startReject(ot: OvertimeDoc) {
  rejectTarget.value = ot
  showReject.value = true
}

async function confirmReject(reason: string) {
  const target = detailTarget.value ?? rejectTarget.value
  if (!target) return
  await rejectOvertime(
    target.id,
    reason,
    target.userId,
    target.staffName,
    userProfile.value?.staffName ?? '',
  )
  showReject.value = false
  rejectTarget.value = null
  if (detailTarget.value) closeDetail()
}

async function resetToAdmin() {
  if (!detailTarget.value) return
  await updateOvertime(detailTarget.value.id, {
    status: 'pending',
    rejectionReason: null,
    handledBy: null,
  })
  closeDetail()
}

const cancelConfirmTarget = ref<OvertimeDoc | null>(null)
const cancelDeleting = ref(false)

function cancelOvertime(ot: OvertimeDoc) {
  if (detailTarget.value) closeDetail()
  cancelConfirmTarget.value = ot
}

async function confirmCancel() {
  if (!cancelConfirmTarget.value) return
  cancelDeleting.value = true
  try {
    await deleteOvertime(cancelConfirmTarget.value.id)
    cancelConfirmTarget.value = null
  } finally {
    cancelDeleting.value = false
  }
}
</script>
