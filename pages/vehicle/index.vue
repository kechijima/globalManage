<template>
  <div class="space-y-6">
    <!-- 管理者向けアラートバナー（日付自動判定） -->
    <div v-if="isAdmin && hasAnyAlert" class="rounded-xl p-4 flex items-start gap-3"
      :class="dangerCount > 0 ? 'bg-red-50 border border-red-200' : 'bg-yellow-50 border border-yellow-200'">
      <svg class="w-5 h-5 flex-shrink-0 mt-0.5" :class="dangerCount > 0 ? 'text-red-500' : 'text-yellow-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <div class="flex-1">
        <p class="text-sm font-semibold" :class="dangerCount > 0 ? 'text-red-700' : 'text-yellow-700'">
          <span v-if="dangerCount > 0">緊急対応が必要な車両が {{ dangerCount }} 台あります</span>
          <span v-else>注意が必要な車両が {{ warningCount }} 台あります</span>
        </p>
        <p class="text-xs mt-0.5" :class="dangerCount > 0 ? 'text-red-600' : 'text-yellow-600'">
          下表の「通知」をONにするとスタッフにアラートが表示されます。
        </p>
      </div>
    </div>

    <!-- ユーザー向けアラートバナー（管理者がONにした場合のみ） -->
    <div v-if="!isAdmin && myVehicle?.alertActive" class="rounded-xl p-4 flex items-start gap-3 bg-red-50 border border-red-200">
      <svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <div>
        <p class="text-sm font-semibold text-red-700">担当車両の対応が必要です</p>
        <p class="text-xs text-red-600 mt-0.5">管理者からの通知です。速やかに確認してください。</p>
      </div>
    </div>

    <!-- ===== ADMIN VIEW ===== -->
    <template v-if="isAdmin">
      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 class="font-semibold text-gray-800">車両一覧（全スタッフ）</h2>
          <div class="flex items-center gap-3">
            <p class="text-xs text-gray-400">{{ vehiclesWithAlert.length }} 台</p>
            <button @click="openAddVehicleModal"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-600 text-white text-xs font-medium rounded-lg hover:bg-primary-700 transition">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              車両を追加
            </button>
          </div>
        </div>

        <!-- Mobile cards (sm未満) -->
        <div class="sm:hidden">
          <div v-if="vehiclesWithAlert.length === 0" class="px-5 py-8 text-center text-sm text-gray-400">車両がありません</div>
          <div v-else class="divide-y divide-gray-100">
            <div v-for="v in vehiclesWithAlert" :key="v.id" class="p-4 space-y-3">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <p class="text-sm font-semibold text-gray-800">{{ v.vehicleName }}</p>
                  <p class="text-xs text-gray-400 font-mono">{{ v.plate }}</p>
                  <p class="text-xs text-gray-500 mt-0.5">担当: {{ v.staffName }}</p>
                </div>
                <div class="flex flex-col items-end gap-1.5">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                    :class="{
                      'bg-red-100 text-red-700': v.alertInfo.level === 'danger',
                      'bg-yellow-100 text-yellow-700': v.alertInfo.level === 'warning',
                      'bg-green-100 text-green-700': v.alertInfo.level === 'ok',
                    }">
                    <span class="w-1.5 h-1.5 rounded-full"
                      :class="{
                        'bg-red-500': v.alertInfo.level === 'danger',
                        'bg-yellow-500': v.alertInfo.level === 'warning',
                        'bg-green-500': v.alertInfo.level === 'ok',
                      }"></span>
                    {{ v.alertInfo.level === 'danger' ? '緊急' : v.alertInfo.level === 'warning' ? '注意' : '正常' }}
                  </span>
                  <div class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span>通知</span>
                    <button @click="toggleAlert(v.id, !v.alertActive)"
                      class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none"
                      :class="v.alertActive ? 'bg-red-500' : 'bg-gray-200'">
                      <span class="inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform"
                        :class="v.alertActive ? 'translate-x-4.5' : 'translate-x-0.5'"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div class="bg-gray-50 rounded-lg p-2">
                  <p class="text-gray-400 mb-0.5">車検期限</p>
                  <p class="font-semibold" :class="daysToExpiry(v.inspectionExpiry) <= 30 ? 'text-red-600' : daysToExpiry(v.inspectionExpiry) <= 90 ? 'text-yellow-600' : 'text-gray-700'">
                    {{ v.inspectionExpiry }}
                    <span class="font-normal text-gray-400 ml-1">残{{ daysToExpiry(v.inspectionExpiry) }}日</span>
                  </p>
                </div>
                <div class="bg-gray-50 rounded-lg p-2">
                  <p class="text-gray-400 mb-0.5">走行距離</p>
                  <p class="font-semibold text-gray-700">{{ v.currentMileage.toLocaleString() }} km</p>
                </div>
                <div class="bg-gray-50 rounded-lg p-2 col-span-2">
                  <p class="text-gray-400 mb-0.5">オイル交換</p>
                  <p class="font-semibold"
                    :class="v.alertInfo.oilRemainingKm <= 0 ? 'text-red-600' : v.alertInfo.oilRemainingKm <= v.oilChangeIntervalKm * 0.25 ? 'text-yellow-600' : 'text-gray-700'">
                    <span v-if="v.alertInfo.oilRemainingKm <= 0">交換時期を超過（{{ Math.abs(v.alertInfo.oilRemainingKm).toLocaleString() }} km超過）</span>
                    <span v-else>残{{ v.alertInfo.oilRemainingKm.toLocaleString() }} km</span>
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <button @click="openDetailModal(v)" class="text-xs px-2.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-md hover:bg-blue-100 transition">
                  詳細
                </button>
                <button @click="openOilModal(v)" class="text-xs px-2.5 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
                  オイル
                </button>
                <button @click="openEditVehicleModal(v)" class="text-xs px-2.5 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
                  編集
                </button>
                <button @click="startEditMileage(v)" class="text-xs px-2.5 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
                  距離更新
                </button>
                <button @click="confirmDeleteVehicle(v)" class="text-xs px-2.5 py-1.5 bg-white border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition">
                  削除
                </button>
              </div>
              <!-- Mobile inline mileage edit -->
              <div v-if="editingMileageId === v.id" class="flex items-center gap-2 pt-1">
                <input v-model.number="newMileageValue" type="number" inputmode="numeric"
                  class="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500" />
                <button @click="saveMileage(v.id)" class="text-xs px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">保存</button>
                <button @click="editingMileageId = null" class="text-xs px-3 py-2 bg-gray-200 text-gray-700 rounded-lg transition">×</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop table (sm以上) -->
        <div class="hidden sm:block overflow-x-auto">
          <table class="min-w-[1150px] w-full">
            <thead>
              <tr class="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wide border-b border-gray-100">
                <th class="px-4 py-3 whitespace-nowrap">状態</th>
                <th class="px-4 py-3 whitespace-nowrap">通知</th>
                <th class="px-4 py-3 whitespace-nowrap">担当者</th>
                <th class="px-4 py-3 whitespace-nowrap">車両</th>
                <th class="px-4 py-3 whitespace-nowrap">ナンバー</th>
                <th class="px-4 py-3 whitespace-nowrap">車検期限</th>
                <th class="px-4 py-3 whitespace-nowrap">走行距離</th>
                <th class="px-4 py-3 whitespace-nowrap">オイル交換</th>
                <th class="px-4 py-3 whitespace-nowrap">操作</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="v in vehiclesWithAlert" :key="v.id" class="hover:bg-gray-50 transition">
                <td class="px-4 py-3 whitespace-nowrap">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                    :class="{
                      'bg-red-100 text-red-700': v.alertInfo.level === 'danger',
                      'bg-yellow-100 text-yellow-700': v.alertInfo.level === 'warning',
                      'bg-green-100 text-green-700': v.alertInfo.level === 'ok',
                    }">
                    <span class="w-1.5 h-1.5 rounded-full"
                      :class="{
                        'bg-red-500': v.alertInfo.level === 'danger',
                        'bg-yellow-500': v.alertInfo.level === 'warning',
                        'bg-green-500': v.alertInfo.level === 'ok',
                      }"></span>
                    {{ v.alertInfo.level === 'danger' ? '緊急' : v.alertInfo.level === 'warning' ? '注意' : '正常' }}
                  </span>
                </td>
                <!-- スタッフ通知ON/OFFトグル -->
                <td class="px-4 py-3 whitespace-nowrap">
                  <button @click="toggleAlert(v.id, !v.alertActive)"
                    class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none"
                    :class="v.alertActive ? 'bg-red-500' : 'bg-gray-200'"
                    :title="v.alertActive ? 'スタッフへの通知をOFF' : 'スタッフへ通知ON'">
                    <span class="inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform"
                      :class="v.alertActive ? 'translate-x-4.5' : 'translate-x-0.5'"></span>
                  </button>
                </td>
                <td class="px-4 py-3 text-sm font-medium text-gray-800 whitespace-nowrap">{{ v.staffName }}</td>
                <td class="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{{ v.vehicleName }}</td>
                <td class="px-4 py-3 text-sm text-gray-500 font-mono whitespace-nowrap">{{ v.plate }}</td>
                <td class="px-4 py-3 text-sm whitespace-nowrap"
                  :class="daysToExpiry(v.inspectionExpiry) <= 30 ? 'text-red-600 font-semibold' : daysToExpiry(v.inspectionExpiry) <= 90 ? 'text-yellow-600 font-medium' : 'text-gray-600'">
                  {{ v.inspectionExpiry }}
                  <span class="text-xs ml-1">(残{{ daysToExpiry(v.inspectionExpiry) }}日)</span>
                </td>
                <td class="px-4 py-3 whitespace-nowrap">
                  <div v-if="editingMileageId === v.id" class="flex items-center gap-2">
                    <input v-model.number="newMileageValue" type="number"
                      class="w-24 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500" />
                    <button @click="saveMileage(v.id)" class="text-xs px-2 py-1 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition">保存</button>
                    <button @click="editingMileageId = null" class="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-md transition">×</button>
                  </div>
                  <div v-else class="flex items-center gap-2">
                    <span class="text-sm text-gray-700">{{ v.currentMileage.toLocaleString() }} km</span>
                    <button @click="startEditMileage(v)" class="text-xs text-primary-600 hover:underline">更新</button>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm whitespace-nowrap"
                  :class="v.alertInfo.oilRemainingKm <= 0 ? 'text-red-600 font-semibold' : v.alertInfo.oilRemainingKm <= v.oilChangeIntervalKm * 0.25 ? 'text-yellow-600 font-medium' : 'text-gray-600'">
                  <span v-if="v.alertInfo.oilRemainingKm <= 0">{{ Math.abs(v.alertInfo.oilRemainingKm).toLocaleString() }} km超過</span>
                  <span v-else>残{{ v.alertInfo.oilRemainingKm.toLocaleString() }} km</span>
                </td>
                <td class="px-4 py-3 whitespace-nowrap">
                  <div class="flex items-center gap-1.5">
                    <button @click="openDetailModal(v)" class="text-xs px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-md hover:bg-blue-100 transition">
                      詳細
                    </button>
                    <button @click="openOilModal(v)" class="text-xs px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
                      オイル
                    </button>
                    <button @click="openEditVehicleModal(v)" class="text-xs px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition">
                      編集
                    </button>
                    <button @click="confirmDeleteVehicle(v)" class="text-xs px-2.5 py-1 bg-white border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition">
                      削除
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>

    <!-- ===== USER VIEW ===== -->
    <template v-else>
      <div v-if="myVehicle" class="max-w-lg mx-auto space-y-4 pb-8">

        <!-- 車両ステータスカード -->
        <div class="bg-white rounded-2xl border border-gray-200 p-5">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h2 class="text-xl font-bold text-gray-800">{{ myVehicle.vehicleName }}</h2>
              <p class="text-sm text-gray-400 mt-0.5 font-mono">{{ myVehicle.plate }}</p>
            </div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold"
              :class="{
                'bg-red-100 text-red-700': myVehicle.alertInfo.level === 'danger',
                'bg-yellow-100 text-yellow-700': myVehicle.alertInfo.level === 'warning',
                'bg-green-100 text-green-700': myVehicle.alertInfo.level === 'ok',
              }">
              <span class="w-2 h-2 rounded-full flex-shrink-0"
                :class="{ 'bg-red-500': myVehicle.alertInfo.level === 'danger', 'bg-yellow-500': myVehicle.alertInfo.level === 'warning', 'bg-green-500': myVehicle.alertInfo.level === 'ok' }"></span>
              {{ myVehicle.alertInfo.level === 'danger' ? '緊急' : myVehicle.alertInfo.level === 'warning' ? '要注意' : '正常' }}
            </span>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="bg-gray-50 rounded-xl p-3">
              <p class="text-xs text-gray-500 mb-1">走行距離</p>
              <p class="text-lg font-bold text-gray-800">{{ myVehicle.currentMileage.toLocaleString() }}<span class="text-xs font-normal text-gray-500 ml-1">km</span></p>
            </div>
            <div class="bg-gray-50 rounded-xl p-3">
              <p class="text-xs text-gray-500 mb-1">車検期限</p>
              <p class="text-base font-bold" :class="daysToExpiry(myVehicle.inspectionExpiry) <= 30 ? 'text-red-600' : daysToExpiry(myVehicle.inspectionExpiry) <= 90 ? 'text-yellow-600' : 'text-gray-800'">
                {{ myVehicle.inspectionExpiry }}
              </p>
              <p class="text-xs text-gray-400">残{{ daysToExpiry(myVehicle.inspectionExpiry) }}日</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-3">
              <p class="text-xs text-gray-500 mb-1">最終オイル交換</p>
              <p class="text-sm font-bold text-gray-800">{{ myVehicle.lastOilChangeDate }}</p>
              <p class="text-xs text-gray-400">{{ myVehicle.currentMileage - myVehicle.lastOilChangeMileage }}km走行</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-3">
              <p class="text-xs text-gray-500 mb-1">任意保険期限</p>
              <p v-if="myVehicle.insuranceExpiry" class="text-sm font-bold"
                :class="daysToExpiry(myVehicle.insuranceExpiry) <= 30 ? 'text-red-600' : daysToExpiry(myVehicle.insuranceExpiry) <= 90 ? 'text-yellow-600' : 'text-gray-800'">
                {{ myVehicle.insuranceExpiry }}
                <span class="text-xs font-normal text-gray-400 ml-1">残{{ daysToExpiry(myVehicle.insuranceExpiry) }}日</span>
              </p>
              <p v-else class="text-sm text-gray-400">未設定</p>
            </div>
          </div>

          <div v-if="myVehicle.alertInfo.messages.length > 0" class="mt-3 space-y-2">
            <div v-for="msg in myVehicle.alertInfo.messages" :key="msg"
              class="flex items-center gap-2 p-3 rounded-xl text-sm"
              :class="myVehicle.alertInfo.level === 'danger' ? 'bg-red-50 text-red-700' : 'bg-yellow-50 text-yellow-700'">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {{ msg }}
            </div>
          </div>
        </div>

        <!-- 車両基本情報の編集 -->
        <div class="bg-white rounded-2xl border border-gray-200 p-5">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-semibold text-gray-700">🚗 車両基本情報</h3>
            <button @click="userEditOpen = !userEditOpen"
              class="text-xs text-primary-600 hover:underline">
              {{ userEditOpen ? '閉じる' : '編集する' }}
            </button>
          </div>
          <div v-if="!userEditOpen" class="space-y-2 text-sm text-gray-600">
            <div class="flex justify-between"><span class="text-gray-400">車両名</span><span class="font-medium">{{ myVehicle.vehicleName }}</span></div>
            <div class="flex justify-between"><span class="text-gray-400">ナンバー</span><span class="font-mono">{{ myVehicle.plate }}</span></div>
            <div class="flex justify-between"><span class="text-gray-400">車検期限</span><span>{{ myVehicle.inspectionExpiry }}</span></div>
          </div>
          <div v-else class="space-y-3">
            <div>
              <label class="text-xs text-gray-500 mb-1 block">車両名</label>
              <input v-model="userVehicleForm.vehicleName" class="form-input rounded-xl" />
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">ナンバープレート</label>
              <input v-model="userVehicleForm.plate" class="form-input rounded-xl font-mono" />
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">車検期限</label>
              <input v-model="userVehicleForm.inspectionExpiry" type="date" class="form-input rounded-xl" />
            </div>
            <button @click="saveUserVehicle" :disabled="userVehicleSaving"
              class="w-full py-3 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 disabled:opacity-50 transition">
              {{ userVehicleSaving ? '保存中...' : '保存する' }}
            </button>
            <p v-if="userVehicleSaved" class="text-sm text-green-600 text-center">✓ 保存しました</p>
          </div>
        </div>

        <!-- 走行距離更新 -->
        <div class="bg-white rounded-2xl border border-gray-200 p-5">
          <h3 class="font-semibold text-gray-700 mb-3">🛣 走行距離を更新</h3>
          <div class="flex gap-3">
            <div class="flex-1">
              <div class="flex items-center gap-2 bg-gray-50 border-2 rounded-xl px-4 py-3" :class="userNewMileage ? 'border-primary-400' : 'border-gray-200'">
                <input v-model.number="userNewMileage" type="number" inputmode="numeric"
                  :placeholder="String(myVehicle.currentMileage)"
                  class="flex-1 bg-transparent border-none outline-none text-lg font-bold text-gray-800 min-w-0" />
                <span class="text-sm text-gray-400 flex-shrink-0">km</span>
              </div>
            </div>
            <button @click="saveUserMileage" :disabled="!userNewMileage || userNewMileage <= myVehicle.currentMileage"
              class="px-4 py-3 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 disabled:opacity-40 transition">
              更新
            </button>
          </div>
          <p v-if="mileageSaved" class="text-sm text-green-600 mt-2">✓ 走行距離を更新しました</p>
        </div>

        <!-- オイル交換記録 -->
        <div class="bg-white rounded-2xl border border-gray-200 p-5">
          <h3 class="font-semibold text-gray-700 mb-3">🔧 オイル交換を記録</h3>
          <div class="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label class="text-xs text-gray-500 mb-1 block">交換日</label>
              <input v-model="userOilDate" type="date" class="form-input rounded-xl py-3" />
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">走行距離 (km)</label>
              <input v-model.number="userOilMileage" type="number" inputmode="numeric"
                :placeholder="String(myVehicle.currentMileage)" class="form-input rounded-xl py-3" />
            </div>
          </div>
          <button @click="saveUserOilChange" :disabled="!userOilDate || !userOilMileage"
            class="w-full py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 disabled:opacity-40 transition">
            記録する
          </button>
          <p v-if="oilSaved" class="text-sm text-green-600 mt-2">✓ オイル交換を記録しました</p>
        </div>

        <!-- 任意保険情報 -->
        <div class="bg-white rounded-2xl border border-gray-200 p-5">
          <h3 class="font-semibold text-gray-700 mb-4">🛡 任意保険情報</h3>
          <div class="space-y-3">
            <div>
              <label class="text-xs text-gray-500 mb-1 block">保険会社名</label>
              <input v-model="insuranceForm.company" type="text" class="form-input rounded-xl" placeholder="〇〇損保" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-xs text-gray-500 mb-1 block">証券番号</label>
                <input v-model="insuranceForm.policyNumber" type="text" class="form-input rounded-xl" placeholder="AB-123456" />
              </div>
              <div>
                <label class="text-xs text-gray-500 mb-1 block">保険期限</label>
                <input v-model="insuranceForm.expiry" type="date" class="form-input rounded-xl" />
              </div>
            </div>
          </div>
          <button @click="saveInsurance"
            class="mt-4 w-full py-3 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition">
            保存する
          </button>
          <p v-if="insuranceSaved" class="text-sm text-green-600 mt-2">✓ 保険情報を保存しました</p>
        </div>

        <!-- 書類添付（Firebase Storage） -->
        <div class="bg-white rounded-2xl border border-gray-200 p-5">
          <h3 class="font-semibold text-gray-700 mb-4">📎 書類添付</h3>
          <div class="space-y-4">
            <div v-for="doc in docFields" :key="doc.key">
              <p class="text-sm font-medium text-gray-600 mb-1.5">{{ doc.label }}</p>
              <div v-if="myVehicle.docUrls?.[doc.key]" class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                <svg class="w-8 h-8 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-700 truncate">{{ doc.label }}</p>
                  <p class="text-xs text-gray-400">アップロード済み</p>
                </div>
                <div class="flex gap-2 flex-shrink-0">
                  <a :href="myVehicle.docUrls[doc.key]" target="_blank"
                    class="text-xs px-2.5 py-1 bg-primary-50 text-primary-700 rounded-md hover:bg-primary-100 transition">
                    開く
                  </a>
                  <label class="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition cursor-pointer">
                    更新
                    <input type="file" class="hidden" accept="image/*,.pdf" @change="e => handleDocUpload(doc.key, e)" />
                  </label>
                </div>
              </div>
              <label v-else
                class="flex items-center gap-3 w-full px-4 py-3.5 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-primary-400 hover:bg-primary-50 transition"
                :class="docUploading === doc.key ? 'opacity-50 pointer-events-none' : ''">
                <svg v-if="docUploading === doc.key" class="animate-spin w-5 h-5 text-primary-600 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <svg v-else class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <span class="text-sm text-gray-600">{{ docUploading === doc.key ? 'アップロード中...' : doc.label + 'を添付' }}</span>
                <input type="file" class="hidden" accept="image/*,.pdf" @change="e => handleDocUpload(doc.key, e)" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="bg-white rounded-2xl border border-gray-200 p-12 text-center">
        <p class="text-gray-500 text-sm">担当車両が見つかりません。管理者にお問い合わせください。</p>
      </div>
    </template>

    <!-- Add Vehicle Modal -->
    <div v-if="showAddVehicle" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-lg p-6 max-h-[90dvh] overflow-y-auto">
        <h3 class="font-semibold text-gray-800 mb-5">車両を追加</h3>
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">担当スタッフ <span class="text-red-400">*</span></label>
              <select v-model="addForm.staffName" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                <option value="">選択してください</option>
                <option v-for="name in staffNames" :key="name" :value="name">{{ name }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">車両名 <span class="text-red-400">*</span></label>
              <input v-model="addForm.vehicleName" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="プリウス（白）" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ナンバープレート <span class="text-red-400">*</span></label>
            <input v-model="addForm.plate" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="横浜300あ1234" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">車検期限 <span class="text-red-400">*</span></label>
              <input v-model="addForm.inspectionExpiry" type="date" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">現在の走行距離 (km) <span class="text-red-400">*</span></label>
              <input v-model.number="addForm.currentMileage" type="number" min="0" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="0" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">最終オイル交換日</label>
              <input v-model="addForm.lastOilChangeDate" type="date" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">交換時走行距離 (km)</label>
              <input v-model.number="addForm.lastOilChangeMileage" type="number" min="0" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="0" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">交換インターバル (km)</label>
              <input v-model.number="addForm.oilChangeIntervalKm" type="number" min="0" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">交換インターバル (月)</label>
              <input v-model.number="addForm.oilChangeIntervalMonths" type="number" min="1" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>
          <p v-if="addVehicleError" class="text-sm text-red-600">{{ addVehicleError }}</p>
        </div>
        <div class="flex gap-3 mt-6">
          <button @click="showAddVehicle = false" class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">キャンセル</button>
          <button @click="submitAddVehicle" :disabled="!addVehicleValid || addVehicleLoading"
            class="flex-1 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 disabled:opacity-50 transition">
            {{ addVehicleLoading ? '追加中...' : '追加する' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Edit Vehicle Modal (admin) -->
    <div v-if="showEditVehicle" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-lg p-6 max-h-[90dvh] overflow-y-auto">
        <h3 class="font-semibold text-gray-800 mb-5">車両を編集</h3>
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">担当スタッフ <span class="text-red-400">*</span></label>
              <select v-model="editVehicleForm.staffName" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                <option value="">選択してください</option>
                <option v-for="name in staffNames" :key="name" :value="name">{{ name }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">車両名 <span class="text-red-400">*</span></label>
              <input v-model="editVehicleForm.vehicleName" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ナンバープレート <span class="text-red-400">*</span></label>
            <input v-model="editVehicleForm.plate" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">車検期限 <span class="text-red-400">*</span></label>
              <input v-model="editVehicleForm.inspectionExpiry" type="date" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">現在の走行距離 (km)</label>
              <input v-model.number="editVehicleForm.currentMileage" type="number" min="0" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">最終オイル交換日</label>
              <input v-model="editVehicleForm.lastOilChangeDate" type="date" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">交換時走行距離 (km)</label>
              <input v-model.number="editVehicleForm.lastOilChangeMileage" type="number" min="0" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">交換インターバル (km)</label>
              <input v-model.number="editVehicleForm.oilChangeIntervalKm" type="number" min="0" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">交換インターバル (月)</label>
              <input v-model.number="editVehicleForm.oilChangeIntervalMonths" type="number" min="1" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">保険会社名</label>
              <input v-model="editVehicleForm.insuranceCompany" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">任意保険期限</label>
              <input v-model="editVehicleForm.insuranceExpiry" type="date" class="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>
          <p v-if="editVehicleError" class="text-sm text-red-600">{{ editVehicleError }}</p>
        </div>
        <div class="flex gap-3 mt-6">
          <button @click="showEditVehicle = false" class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">キャンセル</button>
          <button @click="submitEditVehicle" :disabled="!editVehicleValid || editVehicleLoading"
            class="flex-1 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 disabled:opacity-50 transition">
            {{ editVehicleLoading ? '保存中...' : '保存する' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Vehicle Detail Modal (admin) -->
    <div v-if="detailVehicle" class="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-md p-6 max-h-[90dvh] overflow-y-auto">
        <div class="flex items-start justify-between mb-5">
          <div>
            <h3 class="font-semibold text-gray-800">{{ detailVehicle.vehicleName }}</h3>
            <p class="text-xs text-gray-400 mt-0.5 font-mono">{{ detailVehicle.plate }} ／ {{ detailVehicle.staffName }}</p>
          </div>
          <button @click="detailVehicle = null" class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- アラート理由 -->
        <div v-if="detailVehicle.alertInfo.level !== 'ok'" class="mb-5 rounded-xl p-3 border"
          :class="detailVehicle.alertInfo.level === 'danger' ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'">
          <p class="text-xs font-semibold mb-1.5"
            :class="detailVehicle.alertInfo.level === 'danger' ? 'text-red-700' : 'text-yellow-700'">
            {{ detailVehicle.alertInfo.level === 'danger' ? '⚠️ 緊急対応が必要な理由' : '注意が必要な理由' }}
          </p>
          <ul class="space-y-0.5">
            <li v-for="(msg, i) in detailVehicle.alertInfo.messages" :key="i" class="text-xs"
              :class="detailVehicle.alertInfo.level === 'danger' ? 'text-red-600' : 'text-yellow-600'">
              ・{{ msg }}
            </li>
          </ul>
        </div>

        <!-- 任意保険情報（編集可） -->
        <div class="mb-5">
          <p class="text-xs font-semibold text-gray-500 uppercase mb-3">任意保険情報</p>
          <div class="space-y-2">
            <input v-model="adminInsuranceForm.company" placeholder="保険会社"
              class="form-input text-sm w-full" />
            <input v-model="adminInsuranceForm.policyNumber" placeholder="証券番号"
              class="form-input text-sm w-full" />
            <div>
              <label class="text-xs text-gray-400 mb-1 block">保険期限</label>
              <input v-model="adminInsuranceForm.expiry" type="date" class="form-input text-sm w-full" />
            </div>
            <button @click="saveAdminInsurance"
              class="w-full py-2 bg-primary-600 text-white text-xs font-semibold rounded-lg hover:bg-primary-700 transition">
              保存する
            </button>
            <p v-if="adminInsuranceSaved" class="text-xs text-green-600 text-center">✓ 保存しました</p>
          </div>
        </div>

        <!-- 書類（アップロード可） -->
        <div>
          <p class="text-xs font-semibold text-gray-500 uppercase mb-3">書類</p>
          <div class="space-y-2">
            <div v-for="doc in docFields" :key="doc.key" class="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0 gap-2">
              <span class="text-sm text-gray-500 flex-shrink-0">{{ doc.label }}</span>
              <div class="flex items-center gap-2">
                <a v-if="detailVehicle.docUrls?.[doc.key]"
                  :href="detailVehicle.docUrls[doc.key]" target="_blank"
                  class="text-xs px-2.5 py-1 bg-primary-50 text-primary-700 rounded-md hover:bg-primary-100 transition whitespace-nowrap">
                  開く
                </a>
                <span v-else class="text-xs text-gray-300 whitespace-nowrap">未添付</span>
                <label class="text-xs px-2.5 py-1 bg-white border border-gray-200 text-gray-600 rounded-md hover:bg-gray-50 transition cursor-pointer whitespace-nowrap"
                  :class="adminDocUploading === doc.key ? 'opacity-50 pointer-events-none' : ''">
                  {{ adminDocUploading === doc.key ? '中...' : (detailVehicle.docUrls?.[doc.key] ? '差替' : 'アップロード') }}
                  <input type="file" class="hidden" accept="image/*,.pdf" @change="e => handleAdminDocUpload(doc.key, e)" />
                </label>
              </div>
            </div>
          </div>
        </div>

        <button @click="detailVehicle = null"
          class="mt-6 w-full py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">
          閉じる
        </button>
      </div>
    </div>

    <!-- Delete Vehicle Confirm (admin) -->
    <div v-if="deletingVehicle" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        <h3 class="font-semibold text-gray-800 mb-2">車両を削除</h3>
        <p class="text-sm text-gray-500 mb-6">
          <span class="font-medium text-gray-800">{{ deletingVehicle.vehicleName }}</span>（{{ deletingVehicle.plate }}）を削除しますか？<br />
          この操作は取り消せません。
        </p>
        <div class="flex gap-3">
          <button @click="deletingVehicle = null" class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">キャンセル</button>
          <button @click="executeDeleteVehicle" class="flex-1 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition">削除する</button>
        </div>
      </div>
    </div>

    <!-- Oil change modal (admin) -->
    <div v-if="oilModalVehicle" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h3 class="font-semibold text-gray-800 mb-1">オイル交換記録</h3>
        <p class="text-sm text-gray-500 mb-5">{{ oilModalVehicle.vehicleName }} ({{ oilModalVehicle.staffName }})</p>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">交換日</label>
            <input v-model="oilDate" type="date" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">交換時走行距離 (km)</label>
            <input v-model.number="oilMileage" type="number" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
        </div>
        <div class="flex gap-3 mt-6">
          <button @click="oilModalVehicle = null" class="flex-1 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">キャンセル</button>
          <button @click="saveOilChange" :disabled="!oilDate || !oilMileage" class="flex-1 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition">記録する</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '~/plugins/firebase.client'

definePageMeta({ middleware: 'auth' })

const { isAdmin, userProfile } = useAuth()
const {
  vehiclesWithAlert, hasAnyAlert, dangerCount, warningCount,
  loadVehicles, addVehicle, updateVehicle, deleteVehicle,
  toggleAlert, saveDocUrl, updateMileage, updateInsurance, recordOilChange,
} = useVehicleManagement()
const { staffNames, loadUsers } = useUsers()

onMounted(() => { loadVehicles(); loadUsers() })

const docFields = [
  { key: 'jibaisha' as const, label: '自賠責保険' },
  { key: 'ninin' as const,    label: '任意保険証券' },
  { key: 'shaken' as const,   label: '車検証' },
]

// ===== ADMIN =====

// Add vehicle modal
const showAddVehicle = ref(false)
const addVehicleLoading = ref(false)
const addVehicleError = ref('')

function today() { return new Date().toISOString().slice(0, 10) }

const addForm = reactive({
  staffName: '', vehicleName: '', plate: '', inspectionExpiry: '',
  currentMileage: 0, lastOilChangeDate: today(), lastOilChangeMileage: 0,
  oilChangeIntervalKm: 5000, oilChangeIntervalMonths: 6,
})

const addVehicleValid = computed(() =>
  addForm.staffName && addForm.vehicleName && addForm.plate && addForm.inspectionExpiry
)

function openAddVehicleModal() {
  Object.assign(addForm, {
    staffName: '', vehicleName: '', plate: '', inspectionExpiry: '',
    currentMileage: 0, lastOilChangeDate: today(), lastOilChangeMileage: 0,
    oilChangeIntervalKm: 5000, oilChangeIntervalMonths: 6,
  })
  addVehicleError.value = ''
  showAddVehicle.value = true
}

async function submitAddVehicle() {
  addVehicleLoading.value = true
  addVehicleError.value = ''
  try {
    await addVehicle({ ...addForm })
    showAddVehicle.value = false
  } catch (e: unknown) {
    addVehicleError.value = e instanceof Error ? e.message : 'エラーが発生しました'
  } finally {
    addVehicleLoading.value = false
  }
}

// Edit vehicle modal
const showEditVehicle = ref(false)
const editVehicleLoading = ref(false)
const editVehicleError = ref('')
const editingVehicleId = ref<string | null>(null)
const editVehicleForm = reactive({
  staffName: '', vehicleName: '', plate: '', inspectionExpiry: '',
  currentMileage: 0, lastOilChangeDate: '', lastOilChangeMileage: 0,
  oilChangeIntervalKm: 5000, oilChangeIntervalMonths: 6,
  insuranceCompany: '', insuranceExpiry: '',
})

const editVehicleValid = computed(() =>
  editVehicleForm.staffName && editVehicleForm.vehicleName && editVehicleForm.plate && editVehicleForm.inspectionExpiry
)

function openEditVehicleModal(v: typeof vehiclesWithAlert.value[0]) {
  editingVehicleId.value = v.id
  Object.assign(editVehicleForm, {
    staffName: v.staffName, vehicleName: v.vehicleName, plate: v.plate,
    inspectionExpiry: v.inspectionExpiry, currentMileage: v.currentMileage,
    lastOilChangeDate: v.lastOilChangeDate, lastOilChangeMileage: v.lastOilChangeMileage,
    oilChangeIntervalKm: v.oilChangeIntervalKm, oilChangeIntervalMonths: v.oilChangeIntervalMonths,
    insuranceCompany: v.insuranceCompany ?? '', insuranceExpiry: v.insuranceExpiry ?? '',
  })
  editVehicleError.value = ''
  showEditVehicle.value = true
}

async function submitEditVehicle() {
  if (!editingVehicleId.value) return
  editVehicleLoading.value = true
  editVehicleError.value = ''
  try {
    await updateVehicle(editingVehicleId.value, { ...editVehicleForm })
    showEditVehicle.value = false
  } catch (e: unknown) {
    editVehicleError.value = e instanceof Error ? e.message : 'エラーが発生しました'
  } finally {
    editVehicleLoading.value = false
  }
}

// Detail modal
const detailVehicle = ref<typeof vehiclesWithAlert.value[0] | null>(null)
const adminInsuranceForm = reactive({ company: '', policyNumber: '', expiry: '' })
const adminInsuranceSaved = ref(false)
const adminDocUploading = ref<string | null>(null)

function openDetailModal(v: typeof vehiclesWithAlert.value[0]) {
  detailVehicle.value = v
  adminInsuranceForm.company = v.insuranceCompany ?? ''
  adminInsuranceForm.policyNumber = v.insurancePolicyNumber ?? ''
  adminInsuranceForm.expiry = v.insuranceExpiry ?? ''
  adminInsuranceSaved.value = false
}

function refreshDetailVehicle(id: string) {
  detailVehicle.value = vehiclesWithAlert.value.find(x => x.id === id) ?? null
}

async function saveAdminInsurance() {
  if (!detailVehicle.value) return
  const id = detailVehicle.value.id
  await updateInsurance(id, {
    insuranceCompany: adminInsuranceForm.company,
    insurancePolicyNumber: adminInsuranceForm.policyNumber,
    insuranceExpiry: adminInsuranceForm.expiry,
  })
  refreshDetailVehicle(id)
  adminInsuranceSaved.value = true
  setTimeout(() => { adminInsuranceSaved.value = false }, 3000)
}

async function handleAdminDocUpload(docType: 'jibaisha' | 'ninin' | 'shaken', e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file || !detailVehicle.value) return
  const id = detailVehicle.value.id
  adminDocUploading.value = docType
  try {
    const fileRef = storageRef(storage, `vehicles/${id}/${docType}`)
    await uploadBytes(fileRef, file)
    const url = await getDownloadURL(fileRef)
    await saveDocUrl(id, docType, url)
    refreshDetailVehicle(id)
  } finally {
    adminDocUploading.value = null
    ;(e.target as HTMLInputElement).value = ''
  }
}

// Delete vehicle
const deletingVehicle = ref<typeof vehiclesWithAlert.value[0] | null>(null)
function confirmDeleteVehicle(v: typeof vehiclesWithAlert.value[0]) { deletingVehicle.value = v }
async function executeDeleteVehicle() {
  if (!deletingVehicle.value) return
  await deleteVehicle(deletingVehicle.value.id)
  deletingVehicle.value = null
}

// Inline mileage editing
const editingMileageId = ref<string | null>(null)
const newMileageValue = ref(0)

function startEditMileage(v: { id: string; currentMileage: number }) {
  editingMileageId.value = v.id
  newMileageValue.value = v.currentMileage
}

function saveMileage(id: string) {
  updateMileage(id, newMileageValue.value)
  editingMileageId.value = null
}

// Oil change modal
const oilModalVehicle = ref<typeof vehiclesWithAlert.value[0] | null>(null)
const oilDate = ref('')
const oilMileage = ref(0)

function openOilModal(v: typeof vehiclesWithAlert.value[0]) {
  oilModalVehicle.value = v
  oilDate.value = today()
  oilMileage.value = v.currentMileage
}

function saveOilChange() {
  if (!oilModalVehicle.value || !oilDate.value || !oilMileage.value) return
  recordOilChange(oilModalVehicle.value.id, oilDate.value, oilMileage.value)
  oilModalVehicle.value = null
}

// ===== USER =====

const myVehicle = computed(() =>
  vehiclesWithAlert.value.find(v => v.staffName === userProfile.value?.staffName) ?? null
)

function daysToExpiry(dateStr: string): number {
  return Math.ceil((new Date(dateStr).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
}

// 車両基本情報編集
const userEditOpen = ref(false)
const userVehicleSaving = ref(false)
const userVehicleSaved = ref(false)
const userVehicleForm = reactive({ vehicleName: '', plate: '', inspectionExpiry: '' })

watch(myVehicle, (v) => {
  if (v) {
    userVehicleForm.vehicleName = v.vehicleName
    userVehicleForm.plate = v.plate
    userVehicleForm.inspectionExpiry = v.inspectionExpiry
  }
}, { immediate: true })

async function saveUserVehicle() {
  if (!myVehicle.value) return
  userVehicleSaving.value = true
  try {
    await updateVehicle(myVehicle.value.id, { ...userVehicleForm })
    userEditOpen.value = false
    userVehicleSaved.value = true
    setTimeout(() => { userVehicleSaved.value = false }, 3000)
  } finally {
    userVehicleSaving.value = false
  }
}

// 走行距離
const userNewMileage = ref<number | null>(null)
const mileageSaved = ref(false)

function saveUserMileage() {
  if (!myVehicle.value || !userNewMileage.value) return
  updateMileage(myVehicle.value.id, userNewMileage.value)
  mileageSaved.value = true
  userNewMileage.value = null
  setTimeout(() => { mileageSaved.value = false }, 3000)
}

// オイル交換
const userOilDate = ref('')
const userOilMileage = ref<number | null>(null)
const oilSaved = ref(false)

function saveUserOilChange() {
  if (!myVehicle.value || !userOilDate.value || !userOilMileage.value) return
  recordOilChange(myVehicle.value.id, userOilDate.value, userOilMileage.value)
  oilSaved.value = true
  userOilDate.value = ''
  userOilMileage.value = null
  setTimeout(() => { oilSaved.value = false }, 3000)
}

// 任意保険情報
const insuranceForm = reactive({ company: '', policyNumber: '', expiry: '' })
const insuranceSaved = ref(false)

watch(myVehicle, (v) => {
  if (v) {
    insuranceForm.company = v.insuranceCompany ?? ''
    insuranceForm.policyNumber = v.insurancePolicyNumber ?? ''
    insuranceForm.expiry = v.insuranceExpiry ?? ''
  }
}, { immediate: true })

async function saveInsurance() {
  if (!myVehicle.value) return
  await updateInsurance(myVehicle.value.id, {
    insuranceCompany: insuranceForm.company,
    insurancePolicyNumber: insuranceForm.policyNumber,
    insuranceExpiry: insuranceForm.expiry,
  })
  insuranceSaved.value = true
  setTimeout(() => { insuranceSaved.value = false }, 3000)
}

// 書類アップロード（Firebase Storage）
const docUploading = ref<string | null>(null)

async function handleDocUpload(docType: 'jibaisha' | 'ninin' | 'shaken', e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file || !myVehicle.value) return
  docUploading.value = docType
  try {
    const fileRef = storageRef(storage, `vehicles/${myVehicle.value.id}/${docType}`)
    await uploadBytes(fileRef, file)
    const url = await getDownloadURL(fileRef)
    await saveDocUrl(myVehicle.value.id, docType, url)
  } finally {
    docUploading.value = null
    ;(e.target as HTMLInputElement).value = ''
  }
}
</script>
