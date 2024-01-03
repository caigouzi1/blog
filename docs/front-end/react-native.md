---
date: 2020-07-28
category: 前端
tag:
  - ReactNative
  - APP
---
# ReactNative开发

* ## 网络文档

1. [ReactNativeWeb与RN项目整合](https://juejin.im/post/5dc3c36ef265da4d0c175624)
1. [React Native 根据WebView内容自动设置高度](https://www.jianshu.com/p/29c54ecbba28)
1. [react-native-debugger中查看网络请求](https://www.jianshu.com/p/a3f65af6de7b)
1. [Android7.0 和 Charles的抓包](https://blog.csdn.net/u011045726/article/details/76064048)
1. [react native 常用样式](https://shenbao.github.io/ishehui/html/RN%20%E5%9F%BA%E7%A1%80/React%20Native%20%E6%A0%B7%E5%BC%8F%E8%A1%A8%E6%8C%87%E5%8D%97.html)
1. [jdk8 下载](https://www.injdk.cn/)
1. [安卓资源下载](https://www.androiddevtools.cn/index.html/)

* ## 第三方组件

1. [@voximplant/react-native-foreground-service](https://www.npmjs.com/package/@voximplant/react-native-foreground-service)
1. [图标长按操作](react-native-shortcutmanager) - 相关关键词Shortcut  
1. [react-native-sensors](https://www.npmjs.com/package/react-native-sensors) ：加速度计、陀螺仪、磁力计、气压计
1. [react-native-size-matters](https://www.npmjs.com/package/react-native-size-matters): 屏幕宽度适配

* ### WebView

```js
import React, {PureComponent} from 'react';
import WebView from 'react-native-webview';
import {StackActions} from '@react-navigation/native';
import * as WeChat from 'react-native-wechat';
import {navigationRef} from '../utils/helper';

interface WebWrapperProps {
  url: string;
}
interface NativeMessage {
  uuid: string;
  action: 'fetchToken' | 'wxAuth' | 'share' | 'push' | 'back';
  params: any;
}

export default class WebWrapper extends PureComponent<WebWrapperProps> {
  instance?: WebView;

  async handleMessage(e: string) {
    const msg: NativeMessage = JSON.parse(e);
    if (msg.uuid) {
      switch (msg.action) {
        case 'fetchToken':
          this.inject(msg.uuid, {xToken: 'xToken'});
          break;
        case 'wxAuth':
          try {
            const res = await WeChat.sendAuthRequest('snsapi_userinfo', 'lh');
            this.inject(msg.uuid, res);
          } catch (error) {
            this.inject(msg.uuid, error, true);
          }
          break;
        case 'share':
          try {
            if (msg.params && msg.params.scene === 'session') {
              const res = await WeChat.shareToSession(msg.params);
              this.inject(msg.uuid, res);
            }
            if (msg.params && msg.params.scene === 'timeline') {
              const res = await WeChat.shareToTimeline(msg.params);
              this.inject(msg.uuid, res);
            }
          } catch (error) {
            this.inject(msg.uuid, error, true);
          }
          break;
        case 'push':
          if (msg.params.url) {
            if (navigationRef.current) {
              const pushAction = StackActions.push('Display', msg.params);
              navigationRef.current.dispatch(pushAction);
            }
          }
          this.inject(msg.uuid);
          break;
        case 'back':
          if (navigationRef.current) {
            if (navigationRef.current.canGoBack()) {
              navigationRef.current.goBack();
            }
          }
          this.inject(msg.uuid);
          break;
      }
    }
  }

  inject(uuid: string, payload: any = {}, isError: boolean = false) {
    if (this.instance) {
      const payloadData: string = JSON.stringify(payload);
      const isErrorData: string = isError ? 'true' : 'false';
      this.instance.injectJavaScript(`
        if(window.nativeCallback) {
          window.nativeCallback('${uuid}', ${payloadData}, ${isErrorData});
        }
      `);
    }
  }

  render() {
    return (
      <WebView
        ref={(r) => {
          if (r) {
            this.instance = r;
          }
        }}
        startInLoadingState
        source={{uri: this.props.url}}
        onMessage={(e) => this.handleMessage(e.nativeEvent.data)}
      />
    );
  }
}
```

* ## 安卓键盘遮挡

    1.修改AndroidManifest.xml 中的activity

    ```
        android:windowSoftInputMode="adjustPan"
    ```

    2.使用KeyboardAvoidingView组件

  ```javascript
        // 使用ScrollView包裹当失去焦点是会自动收起键盘
        <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView behavior="height" style={styles.container}>
          <View style={styles.logo} />
          <View style={styles.formBox}>
            <Input
              placeholder="登陆手机号"
              leftIcon={<Icon name="user" size={24} color="black" />}
              onChangeText={(value) => this.setState({phone: value})}
            />
        </KeyboardAvoidingView>
      </ScrollView>
  ```
  
* ## 支付宝转账

  ```
    const url =
        'alipayqr://platformapi/startapp?saId=10000007&qrcode=https://qr.alipay.com/fkx12485r1525kbnh21uwfd';
      Modal.alert('支付宝转账', '支付宝转账开通外卖功能', [
        {
          text: '取消',
          style: 'cancel',
        },
        {
          text: '支付宝转账',
          onPress: () => {
            Linking.canOpenURL(url)
              .then((supported) => {
                if (!supported) {
                  // if (this.qq) {
                  //   Clipboard.setString(this.qq);
                  //   Toast.info('打开QQ失败，客服QQ号已复制到粘贴板');
                  // }
                } else {
                  return Linking.openURL(url);
                }
              })
              .catch((error) => console.log('tel error', error));
          },
        },
      ]);
  ```

* ## 模拟器连接开发

  ```
    adb connect 127.0.0.1:62001 (夜神模拟器)
    adb connect 127.0.0.1:6555  (天天模拟器)
    adb shell input keyevent 82 (debug菜单)   
  ```

* ## react-navigation生命周期

  ```
     <NavigationEvents onDidFocus={() => this.refreshData()} />
  ```
  
* ## 图片选择器无法获取图片

    <https://github.com/react-native-community/react-native-image-picker/issues/1259>
    需要额外添加权限

  ```
    <application
        ...
    android:requestLegacyExternalStorage="true">
  ```
  
* ## 图片无法上传

  * <https://github.com/facebook/react-native/issues/28551>
  * <https://github.com/react-native-community/react-native-image-picker/issues/1344>

* ## 卸载组件

  ```
    react-native unlink xxx
  ```
