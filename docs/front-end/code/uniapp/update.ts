/**
 * API 配置接口
 */
export interface EnvConfig {
	apiPath: string
	homePageTab?: string []
	hiddenTabBer?: string[]
	type: 'product' | 'test' | 'review'
	ios: EnvConfig
}

// 定义枚举
export enum VersionCompareResult {
	/** 全量更新 */
	Full = 0,
	/** 修订版本小 */
	PATCH = 1,
	/** 版本不需要更新 */
	SAME = 2,
}

/** 更新类型 */
export enum UpdateType {
	/** 热更新 */
	WGT = 'wgt',
	/** 全量更新 */
	APK = 'apk',
	/** 应用商店更新 */
	STORE = 'store',
}

/**
 * 应用更新配置接口
 */
export interface AppUpdateConfig {
	// 热更新包配置
	wgtUrl: string
	grayscaleWgtUrl: string

	// 应用商店链接
	iosAppstore: string
	apkUrl: string
	grayscaleApkUrl: string

	// 渠道配置
	marketUpdateChannelWgt: string
	marketUpdateChannelApk: string
	channelApkxiaomi: string
	grayscaleChannelApkxiaomi: string
	androidAppstorexiaomi: string

	// 更新信息
	message: string
	version: string
	minVersion: string

	// 灰度配置
	grayscaleVersion: string
	grayscaleAccountAllowList: string

	// 版本管理
	testConfigExclude: string
	testVersion: string
	reviewConfigExclude: string
	reviewVersion: string

	// 环境配置
	config: EnvConfig
	testConfig: EnvConfig
	reviewConfig: EnvConfig
}

function isContentIncludes(str: string, content: string, defaultValue = false) {
	if (str) {
		return str.includes(`,${content},`)
	}
	return defaultValue
}

/**
 * 是否为灰度用户
 */
export function isGrayscaleAccount(config: AppUpdateConfig, userId: string) {
	return isContentIncludes(config.grayscaleAccountAllowList, userId)
}

/**
 *
 * @param appVer 当前版本 如：1.0.0
 * @param updateVer 最新本版 如：1.0.1
 */
export function compareVersion(appVer: string, updateVer: string): VersionCompareResult {
	const appArr = appVer.split('.').map(Number)
	const updateArr = updateVer.split('.').map(Number)

	// 主版本号比较
	if (appArr[0] < updateArr[0]) {
		return VersionCompareResult.Full
	}
	else if (appArr[0] > updateArr[0]) {
		return VersionCompareResult.SAME
	}

	// 次版本号比较
	if (appArr[1] < updateArr[1]) {
		return VersionCompareResult.Full
	}
	else if (appArr[1] > updateArr[1]) {
		return VersionCompareResult.SAME
	}

	// 修订版本号比较
	if (appArr[2] < updateArr[2]) {
		return VersionCompareResult.PATCH
	}
	else if (appArr[2] > updateArr[2]) {
		return VersionCompareResult.SAME
	}

	// 版本完全相同
	return VersionCompareResult.SAME
}

/**
 * 判断可升级版本
 * @param config 配型配置
 * @param isGrayscale 是否为灰度用户或IP
 */
export function getUpdateVersion(config: AppUpdateConfig, isGrayscale = false) {
	if (isGrayscale) {
		return config.grayscaleVersion
	}
	return config.version
}

export function transformConfig(config: EnvConfig, channel = '') {
	if (channel && config[channel]) {
		return Object.assign({}, config, config[channel])
	}

	return config
}

/**
 * 获取该版本对应的环境变量
 * @param config 配型配置
 * @param version 当前版本
 */
export function getVersionEnvConfig(config: AppUpdateConfig, version: string, channel = ''): EnvConfig {
	const isReview = isContentIncludes(config.reviewVersion, version)
	if (isReview) {
		if (channel) {
			if (!isContentIncludes(config.reviewConfigExclude || '', channel)) {
				return config.reviewConfig
			}
		} else {
			return config.reviewConfig
		}
	}
	const isTest = isContentIncludes(config.testVersion, version)
	if (isTest) {
		if (channel) {
			if (!isContentIncludes(config.testConfigExclude || '', channel)) {
				return config.testConfig
			}
		} else {
			return config.testConfig
		}
	}

	return config.config
}

export function getChannelMarket(config: AppUpdateConfig, channel: string) {
	const target = config?.[`androidAppstore${channel}`]
	return target
}

export function getChannelApkUrl(config: AppUpdateConfig, channel: string, isGrayscale: boolean) {
	if (isGrayscale) {
		if (channel) {
			return config?.[`grayscaleChannelApk${channel}`]
		}
		return config.grayscaleApkUrl
	} else {
		if (channel) {
			return config?.[`channelApk${channel}`]
		}
		return config.apkUrl
	}
}

/**
 * 获取更新结果
 * @param config
 * @param option
 */
export function getUpdateResult(config: AppUpdateConfig, option: {
	isGrayscale: boolean
	currentVersion: string
	channel: string
	platform: 'ios' | 'android'
}) {
	const isGrayscale = option?.isGrayscale ?? false
	const targetVersion = getUpdateVersion(config, isGrayscale)

	const compareRes = compareVersion(option.currentVersion, targetVersion)
	if (compareRes === VersionCompareResult.PATCH) {
		if (option.platform === 'ios') {
			if (isContentIncludes(config.marketUpdateChannelWgt, 'ios')) {
				return {
					updateType: UpdateType.STORE,
					url: config.iosAppstore,
				}
			}
			return {
				updateType: UpdateType.WGT,
				url: isGrayscale ? config.grayscaleWgtUrl : config.wgtUrl,
			}
		}

		const isStore = isContentIncludes(config.marketUpdateChannelWgt, option.channel)
		if (!isGrayscale && isStore) {
			// 走应用商店APK更新
			const channelMarket = getChannelMarket(config, option.channel)
			if (channelMarket) {
				return {
					updateType: UpdateType.STORE,
					url: channelMarket,
				}
			}
		}

		return {
			updateType: UpdateType.WGT,
			url: isGrayscale ? config.grayscaleWgtUrl : config.wgtUrl,
		}
	} else {
		if (option.platform === 'ios') {
			return {
				updateType: UpdateType.STORE,
				url: config.iosAppstore,
			}
		} else if (!isGrayscale) {
			const isStore = isContentIncludes(config.marketUpdateChannelApk, option.channel)
			if (isStore) {
				// 走应用商店APK更新
				const channelMarket = getChannelMarket(config, option.channel)
				if (channelMarket) {
					return {
						updateType: UpdateType.STORE,
						url: channelMarket,
					}
				}
			}
		}
		return {
			updateType: UpdateType.APK,
			url: getChannelApkUrl(config, option.channel, isGrayscale),
		}
	}
}
