---
date: 2023-12-22
category: 前端
tag:
  - ReactNative
  - APP
---

# React Native开发Android应用

## Gradle加速相关

### 解决Gradle工具下载太慢

进入`android/gradle/wrapper/gradle-wrapper.properties`文件修改Gradle工具下载网址

  ```properties
  distributionUrl=https\://services.gradle.org/distributions/gradle-8.3-all.zip  # [!code --]
  distributionUrl=https\://mirrors.cloud.tencent.com/gradle/gradle-8.3-all.zip  # [!code ++]
  ```

### 修改React Native项目依赖

进入`node_modules\@react-native\gradle-plugin\settings.gradle.kts`文件

```diff
pluginManagement {
  repositories {
-   mavenCentral()
-   google()
+   maven { setUrl("https://maven.aliyun.com/repository/gradle-plugin") }
+   maven { setUrl("https://maven.aliyun.com/repository/public") }
    gradlePluginPortal()
  }
}
```

进入`node_modules\@react-native\gradle-plugin\build.gradle.kts`文件

```diff
repositories {
+ maven { setUrl("https://maven.aliyun.com/repository/public") }
+ maven { setUrl("https://mirrors.cloud.tencent.com/nexus/repository/maven-public") }
-  google()
  mavenCentral()
}
```

### 修改Gradle依赖的镜像源

进入`android/build.gradle`

```diff
repositories {
+   maven { url 'https://maven.aliyun.com/repository/public' }
+   maven { url 'https://mirrors.cloud.tencent.com/nexus/repository/maven-public' }
+   maven { url 'https://maven.aliyun.com/repository/central' }
+   maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
    mavenLocal()
-   google()
    mavenCentral()
}
```

进入`android/app/build.gradle`文件

```diff
  android {
    ...
  }

+ repositories {
+     maven { url 'https://maven.aliyun.com/repository/public' }
+     maven { url 'https://mirrors.cloud.tencent.com/nexus/repository/maven-public' }
+     maven { url 'https://maven.aliyun.com/repository/central' }
+     maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
+     mavenLocal()
+     google()
+     mavenCentral()
+ }
  dependencies {
    ...
  }
```

## 其他

### Android Studio查看签名文件信息MD5,SHA1

  1. 点击 Android Studio 右上角 `Gradle`
  1. 点击 `Execute Gradle Task`
  1. 输入`gradle signingReport`命令
