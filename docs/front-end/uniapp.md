---
date: 2026-02-02
category: 开发者手册
tag:
  - UniApp
---

# UniApp开发相关

## UniApp系统更新

### App更新配置设计

#### 配置文件

```JSON
{
  // 热更新包
  "wgtUrl": "xxx.wgt",
  "grayscaleWgtUrl": "xxx.wgt",

  // IOS APPStore 跳转链接
  "iosAppstore": "https://itunes.apple.com/cn/lookup?id=xxx",

  // 安卓Apk下载地址
  "apkUrl": "xxx.apk",
  "grayscaleApkUrl": "xxx.apk",
  "androidAppstorexiaomi": "market://details?id=xxx",

  // 对应渠道更新地址 
  "channelApkxiaomi": "xxx.apk",

  "grayscaleChannelApkxiaomi": "xxx.apk",

  "marketUpdateChannelWgt": ",xiaomi,",
  "marketUpdateChannelApk": ",xiaomi,",

  // 默认不要修改
  "androidFullPackage": 0,

  // 更新内容提示
  "message": "1.修复bug",

  // 标准更新版本
  "version": "1.0.2",

  // 最低版本
  "minVersion": "1.0.1",

  // 灰度更新版本
  "grayscaleVersion": "1.0.3",

  // 允许灰度更新版本的账号
  "grayscaleAccountAllowList": "",


  // 测试版本 
  "testVersion": ",1.0.4,1.0.5,",

  // 提审版本版本
  "reviewVersion": ",1.0.3,",

  // 正式版配置 
  "config": {
    "apiPath": ""
  },
  // 版本配置
  "testConfigExclude": "",
  "testConfig": {
    "apiPath": ""
  },
  // 版本配置
  "reviewConfigExclude": ",xiaomi,guanwang,",
  "reviewConfig": {
    "apiPath": ""
  }
}
```

#### 字段说明

##### 灰度发布相关

  1. `grayscaleVersion` 当前灰度版本号
  1. `grayscaleAccountAllowList` 支持灰度测试账号
  1. `grayscaleWgtUrl` 灰度热更新包地址

  > 首先调用后端接口根据用户IP判断当前用户时候在灰度名单中，其次根据`grayscaleAccountAllowList`判断,满足其中之一则进行灰度更新

##### 更新相关字段

  > 当主版本或此版本变更时为应用原生内容更新需要更新整个apk，等小版本变更可直接走wgt热更新

  1. `version` 当前最新版本号 `minVersion` 最低可用版本 、`grayscaleVersion` 当前灰度版本号
  1. `wgtUrl` 热更新包地址、 `grayscaleWgtUrl` 灰度热更新包地址
  1. `marketUpdateChannelWgt` 表示支持小版本是否支持应用商店更新，如无紧急情况配置全部渠道已节省流量资源
  1. `marketUpdateChannelApk` 表示支持大版本是否支持应用商店更新，如无紧急情况配置全部渠道已节省流量资源
  1. `apkUrl` apk更新包地址  `grayscaleApkUrl` 灰度apk更新包地址
  1. `channelApkxiaomi`(`channelApk`+渠道标签) 为对应渠道的apk更新地址，当该渠道不在`marketUpdateChannelApk`中时必须配置并更新该地址
  1. `androidAppstorexiaomi`(`androidAppstore`+渠道标签)为渠道应用商店更新
  1. `grayscaleChannelApkxiaomi`(``grayscaleChannelApk`+渠道标签)为渠道apk灰度发布下载地址

##### 配置环境相关字段

  1. `reviewVersion` 提审版本版本  `testVersion` 测试版本
  1. `config` 正式版配置  `testConfig` 测试版配置  `reviewConfig` 提审版配置
  1. `reviewConfigExclude` 提审配置需要排除的渠道渠道  `testConfigExclude` 测试配置需要排除的渠道渠道

  根据当前 `reviewVersion` 和 `testVersion` 判断读取的环境变量类型，并根据当前环境读取对应环境变量信息

### 相关代码

#### 系统启动首屏加载配置信息校验是否更新

```vue
<!-- @include: code/uniapp/launch.vue -->
```

#### 更新弹框

```vue
<!-- @include: code/uniapp/version-update.vue -->
```

#### 更新相关函数

```ts
<!-- @include: code/uniapp/update.ts -->
```

#### 更新弹框UI

::: playground#vue 使用自定义设置的 Vue 案例

@file App.vue

```vue
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
        <img class="content-top-bg" width="100%" height="100%" src="http://localhost:8080/blog/bg_top.png" />
      </view>
      <view class="content-header" />
      <view class="content-body">
        <view class="title">
          <text>更新内容</text>
        </view>
        <view class="body" style="color: #333">
          <div class="box-des-scroll" scroll-y="true">
            
            <div v-html="updateOption.message.replace(/\n/g, '<br>')" />
          </div>
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
      <svg v-if="cancelBtn" class="close-img icon" @click.stop="cancel" t="1772613089786" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5500" width="200" height="200">
        <path d="M512 42.666667a469.333333 469.333333 0 1 0 469.333333 469.333333A469.333333 469.333333 0 0 0 512 42.666667z m0 864a394.666667 394.666667 0 1 1 394.666667-394.666667 395.146667 395.146667 0 0 1-394.666667 394.666667z" p-id="5501"></path><path d="M670.4 300.8l-154.666667 154.666667a5.333333 5.333333 0 0 1-7.573333 0l-154.666667-154.666667a5.333333 5.333333 0 0 0-7.52 0l-45.173333 45.28a5.333333 5.333333 0 0 0 0 7.52l154.666667 154.666667a5.333333 5.333333 0 0 1 0 7.573333l-154.666667 154.666667a5.333333 5.333333 0 0 0 0 7.52l45.28 45.28a5.333333 5.333333 0 0 0 7.52 0l154.666667-154.666667a5.333333 5.333333 0 0 1 7.573333 0l154.666667 154.666667a5.333333 5.333333 0 0 0 7.52 0l45.28-45.28a5.333333 5.333333 0 0 0 0-7.52l-154.666667-154.666667a5.333333 5.333333 0 0 1 0-7.573333l154.666667-154.666667a5.333333 5.333333 0 0 0 0-7.52l-45.28-45.28a5.333333 5.333333 0 0 0-7.626667 0z" p-id="5502"></path>
      </svg>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, resolveComponent } from 'vue'

const visible = ref(true)
const updateVersion = ref('1.0.2')
const currentVersion = ref('1.0.0')

const updateBtn = ref(true)
const cancelBtn = ref(true)

const updateOption = {
  "message": "1.修复bug",
}
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
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.content {
  position: relative;
  top: 0;
  width: 600px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 100px 50px 10px;
  font-family: Source Han Sans CN;
}

.content-top {
  position: absolute;
  top: -195px;
  left: 0;
  width: 600px;
  height: 270px;
}

.content-top-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content-top-text {
  font-size: 40px;
  font-weight: bold;
  color: #f8f8fa;
  position: absolute;
  top: 120px;
  left: 50px;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.content-header {
  height: 70px;
}

.title {
  font-size: 33px;
  font-weight: bold;
  color: #3da7ff;
  line-height: 38px;
}

.footer {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.box-des-scroll {
  box-sizing: border-box;
  padding: 0 40px;
  text-align: left;
  max-height: 200px;
}

.progress-box {
  width: 100%;
}

.progress {
  width: 83%;
  height: 40px;
  border-radius: 35px;
}

.close-img {
  width: 70px;
  height: 70px;
  z-index: 1000;
  position: absolute;
  bottom: -120px;
  left: calc(50% - 70px / 2);
}

.content-button {
  text-align: center;
  flex: 1;
  font-size: 30px;
  font-weight: 400;
  color: #ffffff;
  border-radius: 40px;
  margin: 0 18px;
  height: 80px;
  line-height: 80px;
  background: linear-gradient(to right, #1785ff, #3da7ff);
}

.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fs24 {
  font-size: 24px;
}

.version {
  font-size: 24px;
  margin-top: 10px;
  color: #eeeeee;
  text-decoration: underline;
}
</style>
```

@setting

```json
{
  "dev": true
}
```

:::

## UniApp 常用函数

### 平台调用方法[NJS](https://uniapp.dcloud.net.cn/tutorial/native-js.html)

```ts
  <!-- @include: code/uniapp/native.ts -->
```

## Android支持多渠道打包

```groovy
apply plugin: 'com.android.application'

android {
    compileSdkVersion 35
    buildToolsVersion '35.0.0'
    namespace 'xxxx'
    defaultConfig {
        applicationId "xxxx"
        minSdkVersion 21
        targetSdkVersion 33
        versionCode 3
        versionName "1.0.4"
        manifestPlaceholders = [
            appName: "@string/app_name",
            CHANNEL_VALUE: 'guanwang'
        ]
        multiDexEnabled true
        compileOptions {
            sourceCompatibility JavaVersion.VERSION_1_8
            targetCompatibility JavaVersion.VERSION_1_8
        }

        ndk {
            abiFilters 'armeabi-v7a', 'arm64-v8a'

//            abiFilters 'x86', 'armeabi-v7a', 'arm64-v8a'
            // 只支持64位架构
//            abiFilters 'arm64-v8a'
//            abiFilters 'armeabi-v7a'
        }
    }
    signingConfigs {
        config {
          ...
        }
    }

    buildTypes {
        debug {
            applicationIdSuffix ".debug"
            signingConfig signingConfigs.config
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'

            manifestPlaceholders = [
                    APP_NAME : "@string/app_name_debug",
            ]
        }
        release {
            signingConfig signingConfigs.config
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }


    productFlavors {
        flavorDimensions = ["channel"]

        guanwang {
            manifestPlaceholders = [
                    CHANNEL_VALUE: 'guanwang'
            ]
        }
        huawei {
            manifestPlaceholders = [
                    CHANNEL_VALUE: 'huawei'
            ]
        }
        oppo {
            manifestPlaceholders = [
                    CHANNEL_VALUE: 'oppo'
            ]
        }
        vivo {
            manifestPlaceholders = [
                    CHANNEL_VALUE: 'vivo'
            ]
        }
        xiaomi {
            manifestPlaceholders = [
                CHANNEL_VALUE: 'xiaomi'
            ]
        }
        jiuyou {
            manifestPlaceholders = [
                CHANNEL_VALUE: 'jiuyou'
            ]
        }
        tencent {
            manifestPlaceholders = [
                CHANNEL_VALUE: 'tencent'
            ]
        }
        sanliuling {
            manifestPlaceholders = [
                CHANNEL_VALUE: 'sanliuling'
            ]
        }
        rongyao {
            manifestPlaceholders = [
                CHANNEL_VALUE: 'rongyao'
            ]
        }
        baidu {
            manifestPlaceholders = [
                CHANNEL_VALUE: 'baidu'
            ]
        }
    }

    // 打包路径配置
    applicationVariants.all { variant ->
        println("===buildConfig: [${variant.flavorName}_${variant.buildType.name}_${variant.versionName}]")
        variant.outputs.all { output ->
            def outputFile = output.outputFile
            if (outputFile != null && outputFile.name.endsWith('.apk')) {
                outputFileName = "yxq_${variant.flavorName}_${variant.buildType.name}_${variant.versionName}_${new Date().format("yyyy-MM-dd")}.apk"
                println("===newOutputFile: ${outputFileName}")
            }
        }
        
        // 配置输出目录 - 将APK复制到release目录
        variant.assembleProvider.configure { assembleTask ->
            assembleTask.doLast {
                def releaseDir = new File(projectDir, "release")
                if (!releaseDir.exists()) {
                    releaseDir.mkdirs()
                }
                
                variant.outputs.all { output ->
                    // 获取输出APK文件
                    def apkFile = output.outputFile
                    if (apkFile != null && apkFile.exists() && apkFile.name.endsWith('.apk')) {
                        def targetFile = new File(releaseDir, apkFile.name)
                        
                        copy {
                            from apkFile
                            into releaseDir
                            rename { fileName ->
                                fileName
                            }
                        }
                        println("===APK已复制到: ${releaseDir.absolutePath}")
                    }
                }
            }
        }
    }

    aaptOptions {
        additionalParameters '--auto-add-overlay'
        ignoreAssetsPattern "!.svn:!.git:.*:!CVS:!thumbs.db:!picasa.ini:!*.scc:*~"
    }
}

// 创建统一的清理任务，在打包前清空输出文件夹
afterEvaluate {
    // 创建清理release目录的任务
    task cleanReleaseDir {
        doLast {
            def releaseDir = new File(projectDir, "release")
            if (releaseDir.exists()) {
                def deletedCount = 0
                releaseDir.listFiles().each { file ->
                    if (file.isFile() && file.name.endsWith('.apk')) {
                        file.delete()
                        deletedCount++
                        println("===已删除旧文件: ${file.name}")
                    }
                }
                if (deletedCount > 0) {
                    println("===已清空release目录，共删除 ${deletedCount} 个APK文件")
                } else {
                    println("===release目录已为空")
                }
            } else {
                releaseDir.mkdirs()
                println("===创建release目录")
            }
        }
    }
    
    // 让所有assemble任务依赖清理任务，确保打包前统一清空
    tasks.matching { task ->
        task.name.startsWith('assemble') && (task.name.contains('Release') || task.name.contains('Debug'))
    }.all { task ->
        task.dependsOn cleanReleaseDir
    }
}

dependencies {
    implementation fileTree(dir: 'libs', include: ['*.aar', '*.jar'], exclude: [])
    implementation 'net.lingala.zip4j:zip4j:2.11.5'
    implementation 'androidx.appcompat:appcompat:1.1.0'
    implementation 'androidx.localbroadcastmanager:localbroadcastmanager:1.0.0'
    implementation 'androidx.core:core:1.1.0'
    implementation "androidx.fragment:fragment:1.1.0"
    implementation 'androidx.recyclerview:recyclerview:1.1.0'
    implementation 'com.facebook.fresco:fresco:2.5.0'
    implementation "com.facebook.fresco:animated-gif:2.5.0"
    implementation 'com.github.bumptech.glide:glide:4.9.0'
    implementation 'com.alibaba:fastjson:1.2.83'
    implementation 'androidx.webkit:webkit:1.5.0'
}
```
