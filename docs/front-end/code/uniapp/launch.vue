<template>
  <div>
    <!-- 版本更新组件 -->
    <VersionUpdate
      v-if="updateData"
      ref="versionUpdateRef"
      :current-version="currentVersion"
      :is-grayscale="isGrayscale"
      :update-option="updateData"
      @cancel-click="onCancelClick"
    />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { compareVersion, getUpdateVersion, getVersionEnvConfig, isGrayscaleAccount, transformConfig, VersionCompareResult } from './update'
import type { AppUpdateConfig } from './update'
import VersionUpdate from './version-update.vue'

const versionUpdateRef = ref<InstanceType<typeof VersionUpdate>>()

const YxqUpdateFileUrl = 'https://caigouzi1.github.io/blog/app_update.json'
const currentVersion = ref('1.0.0')

/* 是否灰度更新 */
const isGrayscale = ref(false)
const channel = 'xiaomi'
// const channel =  getAppChannel()()

const updateData = ref<null | AppUpdateConfig>(null)

  const uni = {
  request: (option:any) => {
    new Promise((resolve, reject) => {
      fetch(option.url, {
        method: option.method || 'GET'
      }).then((response) => response.json())
      .then((data) => {
        resolve(data)
        console.log(data)
      }).catch(e => {
        reject(e)
      })
    })
  }
}

onMounted(() => {
	const systemInfo = uni.getSystemInfoSync()
	currentVersion.value = systemInfo.appWgtVersion || systemInfo.version
	if (networkStore.isOffline) {
		uni.onNetworkStatusChange((res) => {
			if (res.isConnected) {
				init()
			}
		})
	} else {
		init()
  }
})



function init() {
	Promise.allSettled(
		[
			uni.request({
        url: '',
				method: 'POST',
			}),
			uni.request({
				url: YxqUpdateFileUrl,
				method: 'GET',
			}),
		],
	).then((results) => {
		if (results[0].status === 'fulfilled') {
			const apiRes = results[0].value
			if (apiRes.statusCode === 200) {
				const queryHttpData = apiRes.data as any
        // 相关逻辑
			}
		}
		if (results[1].status === 'fulfilled') {
			const fileRes = results[1].value
			if (fileRes.statusCode === 200) {
				updateData.value = fileRes.data as AppUpdateConfig
				const config = transformConfig(getVersionEnvConfig(updateData.value, currentVersion.value, channel), channel)

				console.log('=======api env===========')
				console.log(config.type)

				if (config.apiPath) {
					uni.$apiUrl = config.apiPath
				}


				uni.$envConfig = config
				updateConfig()

				if (!isGrayscale.value && updateData.value) {
					const userInfo = userStore.getUserInfo()
					isGrayscale.value = isGrayscaleAccount(updateData.value, userInfo.userId)
				}

				// #ifdef APP-PLUS
				const updateVersion = getUpdateVersion(updateData.value, isGrayscale.value)
				const res = compareVersion(currentVersion.value, updateVersion)
				if (res !== VersionCompareResult.SAME) {
					nextTick(() => {
						versionUpdateRef.value?.showUpdateModal()
					})
					return
				}
				// #endif
			}
		}

		// 跳转首页
	}).catch(() => {
		// 跳转首页
	})
}

function onCancelClick() {
	// 跳转首页
}
</script>

<style scoped>
.tip-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400rpx;
  background-color: #fff;
  padding: 40rpx;
  border-radius: 18rpx;
}
</style>
