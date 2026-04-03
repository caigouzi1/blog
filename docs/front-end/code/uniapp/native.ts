/**
 * 安卓权限申请 检查相机权限
 * @param msgContent
 * @returns
 */
export function checkCameraPermission(msgContent) {
	return new Promise((resolve, reject) => {
		// #ifdef APP-PLUS
		const platform = uni.getSystemInfoSync().platform

		if (platform === 'android') {
			const main = plus.android.runtimeMainActivity()
			const permission = 'android.permission.CAMERA'

			// 检查权限
			const granted = plus.android.invoke(main, 'checkSelfPermission', permission) === 0
			if (granted) {
				resolve(true)
				return
			}

			uni.showModal({
				content: msgContent || `APP将申请"相机权限"`,
				success: (res) => {
					if (res.confirm) {
						// 请求权限
						plus.android.requestPermissions(
							[permission],
							(res) => {
								if (res.granted.length > 0) {
									resolve(true)
								}
								else if (res.deniedAlways && res.deniedAlways.length > 0) {
								// 用户拒绝并选择不再询问 → 引导去系统设置
									uni.showModal({
										title: '提示',
										content: '请前往设置打开相机权限',
										confirmText: '去设置',
										cancelText: '取消',
										success: (modalRes) => {
											if (modalRes.confirm) {
												const Intent = plus.android.importClass('android.content.Intent')
												const Settings = plus.android.importClass('android.provider.Settings')
												const Uri = plus.android.importClass('android.net.Uri')

												const intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS)
												const uri = Uri.parse(`package:${main.getPackageName()}`)
												intent.setData(uri)
												main.startActivity(intent)
											}
											resolve(false)
										},
									})
								}
								else {
									resolve(false)
								}
							},
							(err) => {
								console.error('申请摄像头权限失败', err)
								resolve(false)
							},
						)
					}
					else {
						resolve(false)
					}
				},
			})
		}
		else if (platform === 'ios') {
			const AVCaptureDevice = plus.ios.import('AVCaptureDevice')
			const status = AVCaptureDevice.authorizationStatusForMediaType('vide')
			plus.ios.deleteObject(AVCaptureDevice)

			if (status === 3) {
				resolve(true)
			} else if (status === 0) {
				// 系统未授权 → 弹窗
				resolve(true)
			} else {
				// 已拒绝或受限制 → 引导去设置
				uni.showModal({
					title: '提示',
					content: '请前往设置打开相机权限',
					confirmText: '去设置',
					cancelText: '取消',
					success: (modalRes) => {
						if (modalRes.confirm) {
							plus.runtime.openURL('app-settings://')
						}
						resolve(false)
					},
				})
			}
		}
		// #endif
	})
}

// 检查相册权限
export function checkAlbumPermission(msgContent) {
	return new Promise((resolve, reject) => {
		// #ifdef APP-PLUS
			const systemInfo = uni.getSystemInfoSync()
		const platform = systemInfo.platform

    if (platform === 'android') {
      const SDK_INT = systemInfo.osAndroidAPILevel
			const main = plus.android.runtimeMainActivity()

      let permission = SDK_INT >= 33
				? 'android.permission.READ_MEDIA_IMAGES'
				: 'android.permission.READ_EXTERNAL_STORAGE'

			if (SDK_INT >= 34) {
				permission = ['android.permission.READ_MEDIA_VISUAL_USER_SELECTED', 'android.permission.READ_MEDIA_IMAGES']
			}

			// 检查是否已授权
			const granted = plus.android.invoke(main, 'checkSelfPermission', permission) === 0
			if (granted) {
				resolve(true)
				return
			}

			uni.showModal({
				content: msgContent || `APP将申请"存储权限"`,
				success: (res) => {
					if (res.confirm) {
					// 请求权限
						plus.android.requestPermissions(
							Array.isArray(permission) ? permission : [permission],
							(res) => {
								if (res.granted.length > 0) {
									resolve(true)
								}
								else if (res.deniedAlways && res.deniedAlways.length > 0) {
								// 用户拒绝并“不再询问” → 引导去设置
									uni.showModal({
										title: '提示',
										content: '请前往设置打开相册权限',
										confirmText: '去设置',
										cancelText: '取消',
										success: (modalRes) => {
											if (modalRes.confirm) {
												const Intent = plus.android.importClass('android.content.Intent')
												const Settings = plus.android.importClass('android.provider.Settings')
												const Uri = plus.android.importClass('android.net.Uri')
												const intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS)
												const uri = Uri.parse(`package:${main.getPackageName()}`)
												intent.setData(uri)
												main.startActivity(intent)
											}
											resolve(false)
										},
									})
								}
								else {
									resolve(false)
								}
							},
							(err) => {
								console.error('申请相册权限失败', err)
								resolve(false)
							},
						)
					}
					else {
						resolve(false)
					}
				},
			})
		}
		else if (platform === 'ios') {
			// iOS 自动弹窗请求照片权限
			const PHPhotoLibrary = plus.ios.import('PHPhotoLibrary')
			const status = PHPhotoLibrary.authorizationStatus()
			plus.ios.deleteObject(PHPhotoLibrary)

			console.log(status)
			if (status === 3) {
				// 已授权
				resolve(true)
			} else if (status === 0) {
				// 系统未授权 → 弹窗
				resolve(true)
			} else {
				// 已拒绝或受限制 → 跳转设置
				uni.showModal({
					title: '提示',
					content: '请前往设置打开相册权限',
					confirmText: '去设置',
					cancelText: '取消',
					success: (modalRes) => {
						if (modalRes.confirm) {
							plus.runtime.openURL('app-settings://')
						}
						resolve(false)
					},
				})
			}
		}
		// #endif
	})
}

export function readAppMetadataString(field) {
	const context = plus.android.runtimeMainActivity()
	// 使用 plus.android.invoke 调用 getPackageManager
	const packageManager = plus.android.invoke(context, 'getPackageManager')
	const packageName = plus.android.invoke(context, 'getPackageName')

	// 导入 PackageManager 类以获取常量
	const pmPackageManager = plus.android.importClass('android.content.pm.PackageManager')
	const GET_META_DATA = pmPackageManager.GET_META_DATA // 值为 128

	// 使用 plus.android.invoke 调用 getApplicationInfo
	const applicationInfo = plus.android.invoke(packageManager, 'getApplicationInfo', packageName, GET_META_DATA)
	const metaData = plus.android.getAttribute(applicationInfo, 'metaData')

	const res = plus.android.invoke(metaData, 'getString', field)
	return res
}

export const AppChannel = {
	IOS: 'ios',
}

export function getAppChannel() {
	// #ifdef APP-PLUS
	const platform = uni.getSystemInfoSync().platform

	if (platform === 'android') {
		const channel = readAppMetadataString('channel')
		if (channel) {
			return channel
		}
	}
	else if (platform === 'ios') {
		return 'ios'
	}

	// #endif
	return null
}
