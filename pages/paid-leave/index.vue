<template>
  <div class="space-y-6">
    <!-- Header actions -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <h2 class="text-base font-semibold text-gray-700">
        {{ isAdmin ? '有給申請一覧（全スタッフ）' : '自分の有給申請' }}
      </h2>
      <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
        <div class="flex gap-2">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            class="flex-1 sm:flex-none px-4 py-2 text-sm font-medium rounded-lg transition"
            :class="activeTab === tab.value
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'"
          >
            {{ tab.label }}
          </button>
        </div>
        <NuxtLink to="/paid-leave/new"
          class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          有給申請
        </NuxtLink>
      </div>
    </div>

    <!-- Stats row -->
    <div class="grid grid-cols-3 gap-4">
      <div v-for="stat in stats" :key="stat.label" class="bg-white rounded-xl border border-gray-200 p-4 sm:p-5">
        <p class="text-xs sm:text-sm text-gray-500">{{ stat.label }}</p>
        <p class="text-xl sm:text-3xl font-bold mt-1" :class="stat.color">{{ stat.value }}</p>
        <p class="text-xs text-gray-400 mt-1">{{ stat.sub }}</p>
      </div>
    </div>

    <!-- フィルター（申請一覧タブのみ） -->
    <div v-if="activeTab === 'applications'" class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2">
      <select v-model="filterYearMonth"
        class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
        <option value="">すべての月</option>
        <option v-for="ym in availableYearMonths" :key="ym" :value="ym">{{ ym.slice(0,4) }}年{{ ym.slice(5,7) }}月</option>
      </select>
      <select v-if="isAdmin" v-model="filterStaff"
        class="w-full sm:w-auto text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
        <option value="">すべてのスタッフ</option>
        <option v-for="name in leaveStaffNames" :key="name" :value="name">{{ name }}</option>
      </select>
      <select v-model="filterLeaveStatus"
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
        <button v-if="filterYearMonth || filterStaff || filterLeaveStatus"
          @click="filterYearMonth = ''; filterStaff = ''; filterLeaveStatus = ''"
          class="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 px-2 py-2 transition">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          絞込解除
        </button>
        <span class="text-xs text-gray-400 sm:ml-auto">{{ filteredLeaves.length }}件</span>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex items-center justify-center py-12">
      <svg class="animate-spin w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </div>

    <!-- Table card -->
    <div v-else class="bg-white rounded-xl border border-gray-200">
      <div class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">{{ activeTab === 'applications' ? '申請一覧' : 'スタッフ別有給残日数' }}</h2>
      </div>

      <!-- Applications: mobile cards -->
      <div v-if="activeTab === 'applications'" class="sm:hidden">
        <div v-if="filteredLeaves.length === 0" class="px-5 py-8 text-center text-sm text-gray-400">
          申請データがありません
        </div>
        <div v-else class="divide-y divide-gray-100">
          <div v-for="leave in filteredLeaves" :key="leave.id"
            class="p-4 space-y-2 cursor-pointer"
            @click="openDetail(leave)">
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-gray-800">{{ leave.staffName }}</span>
              <StatusBadge :status="leave.status" />
            </div>
            <div class="text-xs text-gray-500 space-y-0.5">
              <p><span class="text-gray-400">種別:</span> {{ leave.type }}</p>
              <p>
                <span class="text-gray-400">期間:</span>
                {{ leave.startDate }}<span v-if="leave.startDate !== leave.endDate"> 〜 {{ leave.endDate }}</span>
                <span class="ml-1 text-gray-600 font-medium">（{{ leave.days }}日）</span>
              </p>
              <p v-if="leave.reason" class="truncate"><span class="text-gray-400">理由:</span> {{ leave.reason }}</p>
              <p v-if="leave.rejectionReason" class="text-red-500 truncate">却下理由: {{ leave.rejectionReason }}</p>
            </div>
            <div v-if="isAdmin" class="flex gap-2 pt-1" @click.stop>
              <button @click="openDetail(leave)"
                class="text-xs px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
                詳細・編集
              </button>
              <template v-if="leave.status === 'pending'">
                <button @click="approve(leave)"
                  class="text-xs px-2.5 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition">承認</button>
                <button @click="startReject(leave)"
                  class="text-xs px-2.5 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition">却下</button>
              </template>
            </div>
          </div>
        </div>
      </div>

      <!-- Applications: desktop table -->
      <div v-if="activeTab === 'applications'" class="hidden sm:block overflow-x-auto">
        <table class="min-w-[900px] w-full">
          <thead>
            <tr class="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
              <th class="px-5 py-3 whitespace-nowrap">申請者</th>
              <th class="px-5 py-3 whitespace-nowrap">種別</th>
              <th class="px-5 py-3 whitespace-nowrap">期間</th>
              <th class="px-5 py-3 whitespace-nowrap">日数</th>
              <th class="px-5 py-3 whitespace-nowrap">理由</th>
              <th class="px-5 py-3 whitespace-nowrap">ステータス</th>
              <th v-if="isAdmin" class="px-5 py-3 whitespace-nowrap">操作</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr v-for="leave in filteredLeaves" :key="leave.id"
              class="hover:bg-gray-50 transition cursor-pointer"
              @click="openDetail(leave)">
              <td class="px-5 py-3 text-sm font-medium text-gray-800 whitespace-nowrap">{{ leave.staffName }}</td>
              <td class="px-5 py-3 text-sm text-gray-600 whitespace-nowrap">{{ leave.type }}</td>
              <td class="px-5 py-3 text-sm text-gray-600 whitespace-nowrap">
                {{ leave.startDate }}<span v-if="leave.startDate !== leave.endDate"> 〜 {{ leave.endDate }}</span>
              </td>
              <td class="px-5 py-3 text-sm text-gray-600 whitespace-nowrap">{{ leave.days }}日</td>
              <td class="px-5 py-3 text-sm text-gray-500 max-w-xs">
                <p class="truncate">{{ leave.reason }}</p>
                <p v-if="leave.rejectionReason" class="text-xs text-red-500 mt-0.5 truncate">
                  却下理由: {{ leave.rejectionReason }}
                </p>
              </td>
              <td class="px-5 py-3 whitespace-nowrap"><StatusBadge :status="leave.status" /></td>
              <td v-if="isAdmin" class="px-5 py-3 whitespace-nowrap">
                <div class="flex gap-2">
                  <button @click.stop="openDetail(leave)"
                    class="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
                    詳細・編集
                  </button>
                  <template v-if="leave.status === 'pending'">
                    <button @click.stop="approve(leave)"
                      class="text-xs px-2.5 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition">承認</button>
                    <button @click.stop="startReject(leave)"
                      class="text-xs px-2.5 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">却下</button>
                  </template>
                </div>
              </td>
            </tr>
            <tr v-if="filteredLeaves.length === 0">
              <td :colspan="isAdmin ? 7 : 6" class="px-5 py-8 text-center text-sm text-gray-400">
                申請データがありません
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Balance: mobile cards -->
      <div v-else class="sm:hidden">
        <div v-if="balanceLoading" class="py-8 text-center text-sm text-gray-400">読み込み中...</div>
        <div v-else-if="balanceUsers.length === 0" class="px-5 py-8 text-center text-sm text-gray-400">データがありません</div>
        <div v-else class="divide-y divide-gray-100">
          <div v-for="u in balanceUsers" :key="u.uid" class="p-4 space-y-3">
            <!-- Editing mode on mobile -->
            <div v-if="editingBalanceUid === u.uid" class="space-y-3">
              <p class="text-sm font-semibold text-gray-800">{{ u.staffName }}</p>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="text-xs text-gray-500 mb-1 block">付与日数</label>
                  <input v-model.number="balanceEditForm.leaveTotal" type="number" min="0" max="40"
                    class="w-full text-center form-input text-sm py-1.5" />
                  <p v-if="u.hireDate" class="text-xs text-gray-400 mt-0.5">法定: {{ calcLeaveTotal(u.hireDate) }}日</p>
                </div>
                <div>
                  <label class="text-xs text-gray-500 mb-1 block">使用済</label>
                  <input v-model.number="balanceEditForm.leaveUsed" type="number" min="0"
                    :max="balanceEditForm.leaveTotal" class="w-full text-center form-input text-sm py-1.5" />
                </div>
              </div>
              <div class="flex gap-2">
                <button @click="saveBalanceEdit" :disabled="balanceSaving"
                  class="flex-1 text-sm py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 transition">
                  {{ balanceSaving ? '...' : '保存' }}
                </button>
                <button @click="editingBalanceUid = null"
                  class="flex-1 text-sm py-2 bg-gray-100 text-gray-600 rounded-lg transition">
                  取消
                </button>
              </div>
            </div>
            <!-- Display mode on mobile -->
            <template v-else>
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-gray-800">{{ u.staffName }}</span>
                <button v-if="isAdmin" @click="startBalanceEdit(u)"
                  class="text-xs px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
                  編集
                </button>
              </div>
              <div class="grid grid-cols-3 gap-2 text-center">
                <div class="bg-gray-50 rounded-lg p-2">
                  <p class="text-xs text-gray-400">付与</p>
                  <p class="text-base font-bold text-gray-700">{{ effectiveLeaveTotal(u) }}<span class="text-xs font-normal">日</span></p>
                </div>
                <div class="bg-gray-50 rounded-lg p-2">
                  <p class="text-xs text-gray-400">使用済</p>
                  <p class="text-base font-bold text-gray-600">{{ u.leaveUsed ?? 0 }}<span class="text-xs font-normal">日</span></p>
                </div>
                <div class="bg-gray-50 rounded-lg p-2">
                  <p class="text-xs text-gray-400">残り</p>
                  <p class="text-base font-bold" :class="leaveRemaining(u) <= 3 ? 'text-red-600' : 'text-gray-800'">
                    {{ leaveRemaining(u) }}<span class="text-xs font-normal">日</span>
                  </p>
                </div>
              </div>
              <div v-if="effectiveLeaveTotal(u) > 0" class="flex items-center gap-2">
                <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-primary-500 rounded-full"
                    :style="{ width: Math.min(100, (u.leaveUsed ?? 0) / effectiveLeaveTotal(u) * 100) + '%' }"></div>
                </div>
                <span class="text-xs text-gray-500 whitespace-nowrap">
                  {{ Math.round((u.leaveUsed ?? 0) / effectiveLeaveTotal(u) * 100) }}%
                </span>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- Balance: desktop table -->
      <div v-if="activeTab !== 'applications'" class="hidden sm:block overflow-x-auto">
        <div v-if="balanceLoading" class="py-8 text-center text-sm text-gray-400">読み込み中...</div>
        <table v-else class="min-w-[700px] w-full">
          <thead>
            <tr class="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
              <th class="px-5 py-3 whitespace-nowrap">スタッフ名</th>
              <th class="px-5 py-3 whitespace-nowrap">入社日</th>
              <th class="px-5 py-3 whitespace-nowrap text-center">付与日数</th>
              <th class="px-5 py-3 whitespace-nowrap text-center">使用済</th>
              <th class="px-5 py-3 whitespace-nowrap text-center">残日数</th>
              <th class="px-5 py-3 whitespace-nowrap">取得率</th>
              <th v-if="isAdmin" class="px-5 py-3 whitespace-nowrap">操作</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <template v-for="u in balanceUsers" :key="u.uid">
              <!-- 編集中 -->
              <tr v-if="editingBalanceUid === u.uid" class="bg-blue-50">
                <td class="px-5 py-3 text-sm font-medium text-gray-800 whitespace-nowrap">{{ u.staffName }}</td>
                <td class="px-5 py-3 text-sm text-gray-500 whitespace-nowrap">{{ u.hireDate ?? '—' }}</td>
                <td class="px-5 py-2 text-center">
                  <input v-model.number="balanceEditForm.leaveTotal" type="number" min="0" max="40"
                    class="w-16 text-center form-input text-sm py-1" />
                  <p v-if="u.hireDate" class="text-xs text-gray-400 mt-0.5">法定: {{ calcLeaveTotal(u.hireDate) }}日</p>
                </td>
                <td class="px-5 py-2 text-center">
                  <input v-model.number="balanceEditForm.leaveUsed" type="number" min="0"
                    :max="balanceEditForm.leaveTotal" class="w-16 text-center form-input text-sm py-1" />
                </td>
                <td class="px-5 py-3 text-center text-sm font-semibold"
                  :class="(balanceEditForm.leaveTotal - balanceEditForm.leaveUsed) <= 3 ? 'text-red-600' : 'text-gray-800'">
                  {{ balanceEditForm.leaveTotal - balanceEditForm.leaveUsed }}日
                </td>
                <td class="px-5 py-3">—</td>
                <td class="px-5 py-2 whitespace-nowrap">
                  <div class="flex gap-2">
                    <button @click="saveBalanceEdit" :disabled="balanceSaving"
                      class="text-xs px-3 py-1.5 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 transition">
                      {{ balanceSaving ? '...' : '保存' }}
                    </button>
                    <button @click="editingBalanceUid = null"
                      class="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-md transition">
                      取消
                    </button>
                  </div>
                </td>
              </tr>
              <!-- 表示 -->
              <tr v-else class="hover:bg-gray-50 transition">
                <td class="px-5 py-3 text-sm font-medium text-gray-800 whitespace-nowrap">{{ u.staffName }}</td>
                <td class="px-5 py-3 text-sm text-gray-500 whitespace-nowrap">{{ u.hireDate ?? '—' }}</td>
                <td class="px-5 py-3 text-center text-sm text-gray-700 whitespace-nowrap">
                  {{ effectiveLeaveTotal(u) }}日
                  <span v-if="u.hireDate && u.leaveTotal == null" class="block text-xs text-gray-400">自動</span>
                </td>
                <td class="px-5 py-3 text-center text-sm text-gray-600 whitespace-nowrap">{{ u.leaveUsed ?? 0 }}日</td>
                <td class="px-5 py-3 text-center text-sm font-semibold whitespace-nowrap"
                  :class="leaveRemaining(u) <= 3 ? 'text-red-600' : 'text-gray-800'">
                  {{ leaveRemaining(u) }}日
                </td>
                <td class="px-5 py-3">
                  <div v-if="effectiveLeaveTotal(u) > 0" class="flex items-center gap-2">
                    <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden w-24">
                      <div class="h-full bg-primary-500 rounded-full"
                        :style="{ width: Math.min(100, (u.leaveUsed ?? 0) / effectiveLeaveTotal(u) * 100) + '%' }"></div>
                    </div>
                    <span class="text-xs text-gray-500 whitespace-nowrap">
                      {{ Math.round((u.leaveUsed ?? 0) / effectiveLeaveTotal(u) * 100) }}%
                    </span>
                  </div>
                  <span v-else class="text-xs text-gray-400">—</span>
                </td>
                <td v-if="isAdmin" class="px-5 py-3 whitespace-nowrap">
                  <button @click="startBalanceEdit(u)"
                    class="text-xs px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
                    編集
                  </button>
                </td>
              </tr>
            </template>
            <tr v-if="balanceUsers.length === 0 && !balanceLoading">
              <td :colspan="isAdmin ? 7 : 6" class="px-5 py-8 text-center text-sm text-gray-400">データがありません</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 詳細・編集モーダル -->
    <div v-if="detailTarget" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-lg max-h-[90dvh] overflow-y-auto">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h3 class="font-semibold text-gray-800">有給申請の詳細{{ canEdit ? '・編集' : '' }}</h3>
            <p class="text-xs text-gray-400 mt-0.5">申請日: {{ detailTarget.appliedAt }}</p>
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
          <div class="grid grid-cols-2 gap-4">
            <div v-if="isAdmin">
              <label class="block text-xs font-semibold text-gray-500 mb-1">申請者</label>
              <input v-model="editForm.staffName" class="form-input rounded-xl text-sm" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">休暇種別</label>
              <select v-model="editForm.type" :disabled="!canEdit"
                class="form-input rounded-xl text-sm disabled:bg-gray-50 disabled:text-gray-500">
                <option v-for="t in leaveTypes" :key="t" :value="t">{{ t }}</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">開始日</label>
              <input v-model="editForm.startDate" type="date" :disabled="!canEdit"
                class="form-input rounded-xl text-sm disabled:bg-gray-50 disabled:text-gray-500" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-500 mb-1">終了日</label>
              <input v-model="editForm.endDate" type="date" :disabled="!canEdit"
                class="form-input rounded-xl text-sm disabled:bg-gray-50 disabled:text-gray-500" />
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">申請理由</label>
            <textarea v-model="editForm.reason" rows="2" :disabled="!canEdit"
              class="form-input w-full rounded-xl resize-none text-sm disabled:bg-gray-50 disabled:text-gray-500" />
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

        <div class="px-6 pb-5 flex flex-wrap gap-2 border-t border-gray-50 pt-4">
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
        </div>
        <p v-if="editSaved" class="text-center text-sm text-green-600 pb-4">✓ 保存しました</p>
      </div>
    </div>

    <!-- 却下理由モーダル -->
    <RejectModal v-if="showReject"
      @confirm="confirmReject"
      @cancel="showReject = false" />
  </div>
</template>

<script setup lang="ts">
import type { PaidLeaveDoc } from '~/composables/usePaidLeaveStore'
import type { UserRecord } from '~/composables/useUsers'
import { calcLeaveTotal } from '~/composables/useUsers'

definePageMeta({ middleware: 'auth' })

const { isAdmin, userProfile } = useAuth()
const { leaves, loading, startListening, updateLeave, approveLeave, rejectLeave, resetLeave } = usePaidLeaveStore()
const { users, loadUsers, updateUser } = useUsers()

const balanceLoading = ref(false)

onMounted(async () => {
  startListening()
  balanceLoading.value = true
  await loadUsers(true)
  balanceLoading.value = false
})

/** 実効付与日数（手動設定優先、なければ入社日から計算） */
function effectiveLeaveTotal(u: UserRecord): number {
  if (u.leaveTotal != null) return u.leaveTotal
  if (u.hireDate) return calcLeaveTotal(u.hireDate)
  return 0
}

function leaveRemaining(u: UserRecord): number {
  return effectiveLeaveTotal(u) - (u.leaveUsed ?? 0)
}

/**
 * バランスタブ用ユーザー一覧（管理者: 全スタッフ, ユーザー: 自分のみ）
 * 管理者が自分用に別途スタッフ権限アカウントを作成しているケースがあるため、
 * 管理者権限（role: 'admin'）のアカウントはここでは表示しない
 */
const balanceUsers = computed(() => {
  const staffOnly = users.value.filter(u => u.role !== 'admin')
  if (isAdmin.value) return staffOnly
  return staffOnly.filter(u => u.staffName === userProfile.value?.staffName)
})

// バランス編集状態
const editingBalanceUid = ref<string | null>(null)
const balanceSaving = ref(false)
const balanceEditForm = reactive({ leaveTotal: 0, leaveUsed: 0 })

function startBalanceEdit(u: UserRecord) {
  editingBalanceUid.value = u.uid
  balanceEditForm.leaveTotal = effectiveLeaveTotal(u)
  balanceEditForm.leaveUsed = u.leaveUsed ?? 0
}

async function saveBalanceEdit() {
  if (!editingBalanceUid.value) return
  balanceSaving.value = true
  try {
    await updateUser(editingBalanceUid.value, {
      leaveTotal: balanceEditForm.leaveTotal,
      leaveUsed: balanceEditForm.leaveUsed,
    })
    editingBalanceUid.value = null
  } finally {
    balanceSaving.value = false
  }
}

const activeTab = ref('applications')
const tabs = [
  { value: 'applications', label: '申請一覧' },
  { value: 'balance', label: '有給残日数' },
]

const leaveTypes = ['有給休暇', '半日休暇（午前）', '半日休暇（午後）', '特別休暇', '介護休暇', '代休']

// フィルター
const filterYearMonth = ref('')
const filterStaff = ref('')
const filterLeaveStatus = ref('')
const showRejected = ref(false)

const availableYearMonths = computed(() => {
  const months = new Set(leaves.value.map(l => l.startDate.slice(0, 7)))
  return Array.from(months).sort().reverse()
})

const leaveStaffNames = computed(() => {
  const names = new Set(leaves.value.map(l => l.staffName))
  return Array.from(names).sort()
})

const filteredLeaves = computed(() => {
  let list = isAdmin.value
    ? leaves.value
    : leaves.value.filter(l => l.staffName === userProfile.value?.staffName)
  if (filterYearMonth.value) list = list.filter(l => l.startDate.startsWith(filterYearMonth.value))
  if (filterStaff.value) list = list.filter(l => l.staffName === filterStaff.value)
  if (filterLeaveStatus.value) list = list.filter(l => l.status === filterLeaveStatus.value)
  if (!showRejected.value && filterLeaveStatus.value !== 'rejected') list = list.filter(l => l.status !== 'rejected')
  return list
})

// stats用の残日数サマリー（balanceUsersから算出）
const filteredBalance = computed(() =>
  balanceUsers.value.map(u => ({
    name: u.staffName,
    total: effectiveLeaveTotal(u),
    used: u.leaveUsed ?? 0,
    remaining: leaveRemaining(u),
  }))
)

const stats = computed(() => {
  const list = filteredLeaves.value
  const balance = filteredBalance.value
  return [
    { label: '承認待ち', value: list.filter(l => l.status === 'pending').length + '件', color: 'text-yellow-600', sub: '対応が必要です' },
    { label: '今月の承認数', value: list.filter(l => l.status === 'approved').length + '件', color: 'text-green-600', sub: '今月分' },
    {
      label: isAdmin.value ? '平均残有給' : '残有給',
      value: balance.length
        ? Math.round(balance.reduce((s, st) => s + st.remaining, 0) / balance.length) + '日'
        : '—',
      color: 'text-primary-700',
      sub: isAdmin.value ? 'スタッフ平均' : '残り日数',
    },
  ]
})

// 詳細・編集
const detailTarget = ref<PaidLeaveDoc | null>(null)
const editForm = reactive({ staffName: '', type: '', startDate: '', endDate: '', reason: '', adminNote: '' })
const editSaved = ref(false)
const editSaving = ref(false)
const showReject = ref(false)
const rejectTarget = ref<PaidLeaveDoc | null>(null)

const canEdit = computed(() =>
  !!detailTarget.value && (isAdmin.value || detailTarget.value.status === 'pending')
)

function openDetail(leave: PaidLeaveDoc) {
  detailTarget.value = leave
  editForm.staffName = leave.staffName
  editForm.type = leave.type
  editForm.startDate = leave.startDate
  editForm.endDate = leave.endDate
  editForm.reason = leave.reason
  editForm.adminNote = leave.adminNote ?? ''
  editSaved.value = false
}

function closeDetail() {
  detailTarget.value = null
  showReject.value = false
}

async function saveEdit() {
  if (!detailTarget.value) return
  editSaving.value = true
  try {
    await updateLeave(detailTarget.value.id, {
      staffName: editForm.staffName,
      type: editForm.type,
      startDate: editForm.startDate,
      endDate: editForm.endDate,
      reason: editForm.reason,
      adminNote: editForm.adminNote,
    })
    editSaved.value = true
    setTimeout(() => { editSaved.value = false }, 2000)
  } finally {
    editSaving.value = false
  }
}

async function approve(leave: PaidLeaveDoc) {
  await approveLeave(leave.id, leave.userId, leave.staffName)
}

async function approveAndClose() {
  if (!detailTarget.value) return
  await approveLeave(detailTarget.value.id, detailTarget.value.userId, detailTarget.value.staffName)
  closeDetail()
}

function startReject(leave: PaidLeaveDoc) {
  rejectTarget.value = leave
  showReject.value = true
}

async function confirmReject(reason: string) {
  const target = detailTarget.value ?? rejectTarget.value
  if (!target) return
  await rejectLeave(target.id, reason, target.userId, target.staffName)
  showReject.value = false
  rejectTarget.value = null
  if (detailTarget.value) closeDetail()
}

async function resetStatus() {
  if (!detailTarget.value) return
  await resetLeave(detailTarget.value.id)
  closeDetail()
}

function copyAndResubmit(leave: PaidLeaveDoc) {
  const payload = {
    type: leave.type,
    startDate: leave.startDate,
    endDate: leave.endDate,
    reason: leave.reason,
  }
  navigateTo(`/paid-leave/new?copy=${encodeURIComponent(JSON.stringify(payload))}`)
}
</script>
