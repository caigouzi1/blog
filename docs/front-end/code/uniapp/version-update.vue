<template>
  <view v-if="visible" class="update-mask flex-center">
    <view class="content botton-radius">
      <view class="content-top">
        <view class="content-top-text">
          <text class="">
            发现新版本 v{{ updateVersion }}
          </text>
          <text class="version">
            当前版本：{{ currentVersion }}
          </text>
        </view>
        <image class="content-top-bg" width="100%" height="100%" src="/static/version-update/bg_top.png" />
      </view>
      <view class="content-header" />
      <view class="content-body">
        <view class="title">
          <text>更新内容</text>
        </view>
        <view class="body" style="color: #333">
          <scroll-view class="box-des-scroll" scroll-y="true">
            <rich-text :nodes="updateOption.message.replace(/\n/g, '<br>')" />
          </scroll-view>
        </view>
        <view class="footer flex-center">
          <view v-if="!updateBtn" class="progress-box flex-column">
            <progress class="progress" border-radius="35" :percent="percent" activeColor="#3DA7FF" show-info stroke-width="10" />
            <view>
              <text class="fs24" style="color: #333">
                正在下载，请稍后 ({{ downloadedSize }}/{{ packageFileSize }}M)
              </text>
            </view>
          </view>
          <button v-if="updateBtn" class="content-button" style="border: none;color: #fff;" plain @click="confirm">
            立即升级
          </button>
        </view>
      </view>
      <image v-if="cancelBtn" class="close-img" src="/static/version-update/app_update_close.png" @click.stop="cancel" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { compareVersion, getUpdateResult, getUpdateVersion, UpdateType, VersionCompareResult } from './update.ts'
import type { AppUpdateConfig } from './update.ts'
import { computed, ref, resolveComponent } from 'vue'

const ScrollView = resolveComponent('scroll-view')

const props = withDefaults(defineProps<{
	currentVersion: string
	updateOption: AppUpdateConfig
	isGrayscale?: boolean
}>(), {
	isGrayscale: false,
})

const emits = defineEmits<{
	cancelClick: []
}>()

const updateVersion = computed(() => getUpdateVersion(props.updateOption, props.isGrayscale))

// 组件状态
const visible = ref(false)
const percent = ref(0)
const updateBtn = ref(true)
const downloadedSize = ref('0')
const packageFileSize = ref('0')

/**
 * 当前版本低于最低版本时显示不显示关闭按钮
 */
const cancelBtn = computed(() => compareVersion(props.currentVersion, props.updateOption.minVersion) === VersionCompareResult.SAME)

function cancel() {
	visible.value = false
	emits('cancelClick')
}

// 确认更新
function confirm() {
	const systemInfo = uni.getSystemInfoSync()

	const updateRes = getUpdateResult(props.updateOption, {
		isGrayscale: props.isGrayscale,
		currentVersion: props.currentVersion,
		// channel: getAppChannel(),
		platform: systemInfo.osName as any,
	})

	if (updateRes.updateType === UpdateType.WGT) {
		download(updateRes.url)
	} else if (updateRes.updateType === UpdateType.APK) {
		download(updateRes.url)
	} else if (updateRes.updateType === UpdateType.STORE) {
		plus.runtime.openURL(updateRes.url)
	}
}

// 下载更新包
function download(url: string) {
	uni.showToast({
		title: '开始下载',
		icon: 'none',
		duration: 2500,
	})
	updateBtn.value = false
	const downloadTask = uni.downloadFile({
		url,
		success: (res) => {
			if (res.statusCode === 200) {
				plus.runtime.install(
					res.tempFilePath,
					{
						force: true,
					},
					() => {
						console.log('安装成功')
						plus.runtime.restart()
					},
					(e) => {
						console.error('安装失败:', e)
						uni.showToast({
							title: e.message,
							icon: 'none',
							duration: 2500,
						})
					},
				)
			}
		},
	})

	// 监听下载进度
	downloadTask.onProgressUpdate((res) => {
		percent.value = res.progress
		downloadedSize.value = (res.totalBytesWritten / 1024 ** 2).toFixed(2)
		packageFileSize.value = (res.totalBytesExpectedToWrite / 1024 ** 2).toFixed(2)
	})
}

function showUpdateModal() {
	visible.value = true
}

// 暴露方法给父组件
defineExpose({
	showUpdateModal,
})
</script>

<style scoped>
page {
  background: transparent;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.update-mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 9999;
}

.botton-radius {
  border-bottom-left-radius: 30rpx;
  border-bottom-right-radius: 30rpx;
}

.content {
  position: relative;
  top: 0;
  width: 600rpx;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 50rpx;
  font-family: Source Han Sans CN;
}

.content-top {
  position: absolute;
  top: -195rpx;
  left: 0;
  width: 600rpx;
  height: 270rpx;
}

.content-top-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content-top-text {
  font-size: 40rpx;
  font-weight: bold;
  color: #f8f8fa;
  position: absolute;
  top: 120rpx;
  left: 50rpx;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.content-header {
  height: 70rpx;
}

.title {
  font-size: 33rpx;
  font-weight: bold;
  color: #3da7ff;
  line-height: 38px;
}

.footer {
  height: 150rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.box-des-scroll {
  box-sizing: border-box;
  padding: 0 40rpx;
  text-align: left;
  max-height: 200rpx;
}

.progress-box {
  width: 100%;
}

.progress {
  width: 83%;
  height: 40rpx;
  border-radius: 35px;
}

.close-img {
  width: 70rpx;
  height: 70rpx;
  z-index: 1000;
  position: absolute;
  bottom: -120rpx;
  left: calc(50% - 70rpx / 2);
}

.content-button {
  text-align: center;
  flex: 1;
  font-size: 30rpx;
  font-weight: 400;
  color: #ffffff;
  border-radius: 40rpx;
  margin: 0 18rpx;
  height: 80rpx;
  line-height: 80rpx;
  background: linear-gradient(to right, #1785ff, #3da7ff);
}

.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fs24 {
  font-size: 24rpx;
}

.version {
  font-size: 24rpx;
  margin-top: 10rpx;
  color: #eeeeee;
  text-decoration: underline;
}
</style>
