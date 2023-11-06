---
date: 2022-07-28
category: 前端
tag:
  - ReactNative
  - APP
---

# MacOs 系统下搭建ReactNative环境

## 1. Xcode安装

Xcode版本需和MacOS版本匹配，对应关系及下载地址[参考](https://uovol.com/macos-xcode-version)

## 2. 安装watchman

```bash
# Homebrew设置国内镜像源
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

brew install watchman
```

如遇网络原因可用以下方式安装

```bash
unzip watchman-*-linux.zip
cd watchman-vYYYY.MM.DD.00-linux
sudo mkdir -p /usr/local/{bin,lib} /usr/local/var/run/watchman
sudo cp bin/* /usr/local/bin
sudo cp lib/* /usr/local/lib
sudo chmod 755 /usr/local/bin/watchman
sudo chmod 2777 /usr/local/var/run/watchman
```

[Homebrew国内镜像源文档参考](https://zhuanlan.zhihu.com/p/111014448)

## 3. CocoaPods安装

```bash
brew install cocoapods
# 或
sudo gem install cocoapods

pod --version
```

>如Ruby版本低则需要使用rvm更新版本
>
>安装rvm步骤如下
>
>```bash
>curl -L get.rvm.io | bash -s stable
>
>source ~/.bashrc
>
>source ~/.bash_profile
>```
>
>rvm使用
>
>```bash
># 查看rvm版本
>rvm -v
>
># 列出ruby可安装的版本信息
>rvm list known
>
># 下载对应版本
>rvm install 2.7.0
># 设置默认版本
>rvm use 2.7.0 --default
>```

## 4. 运行

运行时需注意 pods 中 Deployment Target中IOS版本与 Podfile 中保持一致

## 5. IOS打包

### 1. 生成ipa安装包

  1. 首先在 Xcode 中，将编译的目标机器设置成 “iOS Device”，然后点击”Product”–>“Archive”。

  1. Archive 成功之后，就可以在 Xcode 的 Organizer 中看到相应的文件。接下来点击 Archive Information 中的 “Distribute App”

  1. 在弹出界面中需要选择证书类型，选择方式如下：AdHoc(测试证书)选项

  1. 选择完成后点 Next，Xcode 会自动将测试设备的签名信息附加上，并将相应的 IPA 文件导出

  >打包配置过程[参考](https://blog.csdn.net/lizujun123/article/details/103937668)  
  >生成ipa文件[参考](https://www.pgyer.com/doc/view/build_ipa)

### 2. 签名(如未签名可能引起闪退)

  1. 在苹果开发者官网下载对应的 ***.Provisioning 文件

  1. 在Mac的钥匙串应用中选择我的证书导出对应的**p12证书文件**，并记住输入的密码

  1. 下载 **[爱思助手](https://www.i4.cn/)**

  1. 在依次点击**工具箱** -> **IPA签名** 按照要求上传对应文件即可

### 3. 安装测试

#### 使用Xcode安装

1. 打开**XCode**依次点击 Window -> Devices and Simulators。

1. 选择Devices > 点击下方 **+** ，选择IPA文件即可

> **其他方式**  
>
> 1. [风车签名管理](http://sign.fengchetech.cn/)  
> 1. 使用爱思助手安装

## 6. IOS应用发布

### AppStore（testflight）发布

#### 上传工具

[上传工具相关文档](https://help.apple.com/app-store-connect/#/devb1c185036)
[altool参数](https://help.apple.com/itc/apploader/#/apdATD1E53-D1E1A1303-D1E53A1126)

#### 证书问题

**报错：** `ITMS-90034: Missing or invalid signature - The bundle '...' at bundle path 'Payload/...' is not signed using an Apple submission certificate.`  
  
**分析：** 该报错为证书不受信任导致的  
 **解决方法：** 重新安装[AppleWWDRCA](https://developer.apple.com/cn/support/code-signing/)，下载[页面](https://www.apple.com/certificateauthority/)选择**Apple Intermediate Certificates**下的**Worldwide Developer Relations - G3**下载双击安装即可。  
**参考**： [解决iOS 证书不受信任的问题](https://cloud.tencent.com/developer/article/1958380)
