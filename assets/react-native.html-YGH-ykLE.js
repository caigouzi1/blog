import{_ as t,r,o as l,c as d,a as n,b as e,d as a,e as i}from"./app-BlZa_cz2.js";const c={},o=n("h1",{id:"reactnative开发",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reactnative开发","aria-hidden":"true"},"#"),e(" ReactNative开发")],-1),u=n("ul",null,[n("li",null,[n("h2",{id:"网络文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网络文档","aria-hidden":"true"},"#"),e(" 网络文档")])])],-1),v={href:"https://juejin.im/post/5dc3c36ef265da4d0c175624",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.jianshu.com/p/29c54ecbba28",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jianshu.com/p/a3f65af6de7b",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/u011045726/article/details/76064048",target:"_blank",rel:"noopener noreferrer"},h={href:"https://shenbao.github.io/ishehui/html/RN%20%E5%9F%BA%E7%A1%80/React%20Native%20%E6%A0%B7%E5%BC%8F%E8%A1%A8%E6%8C%87%E5%8D%97.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.injdk.cn/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.androiddevtools.cn/index.html/",target:"_blank",rel:"noopener noreferrer"},f=n("ul",null,[n("li",null,[n("h2",{id:"第三方组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第三方组件","aria-hidden":"true"},"#"),e(" 第三方组件")])])],-1),_={href:"https://www.npmjs.com/package/@voximplant/react-native-foreground-service",target:"_blank",rel:"noopener noreferrer"},x=n("li",null,[n("a",{href:"react-native-shortcutmanager"},"图标长按操作"),e(" - 相关关键词Shortcut")],-1),w={href:"https://www.npmjs.com/package/react-native-sensors",target:"_blank",rel:"noopener noreferrer"},y=i(`<ul><li><h3 id="webview" tabindex="-1"><a class="header-anchor" href="#webview" aria-hidden="true">#</a> WebView</h3></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React, {PureComponent} from &#39;react&#39;;
import WebView from &#39;react-native-webview&#39;;
import {StackActions} from &#39;@react-navigation/native&#39;;
import * as WeChat from &#39;react-native-wechat&#39;;
import {navigationRef} from &#39;../utils/helper&#39;;

interface WebWrapperProps {
  url: string;
}
interface NativeMessage {
  uuid: string;
  action: &#39;fetchToken&#39; | &#39;wxAuth&#39; | &#39;share&#39; | &#39;push&#39; | &#39;back&#39;;
  params: any;
}

export default class WebWrapper extends PureComponent&lt;WebWrapperProps&gt; {
  instance?: WebView;

  async handleMessage(e: string) {
    const msg: NativeMessage = JSON.parse(e);
    if (msg.uuid) {
      switch (msg.action) {
        case &#39;fetchToken&#39;:
          this.inject(msg.uuid, {xToken: &#39;xToken&#39;});
          break;
        case &#39;wxAuth&#39;:
          try {
            const res = await WeChat.sendAuthRequest(&#39;snsapi_userinfo&#39;, &#39;lh&#39;);
            this.inject(msg.uuid, res);
          } catch (error) {
            this.inject(msg.uuid, error, true);
          }
          break;
        case &#39;share&#39;:
          try {
            if (msg.params &amp;&amp; msg.params.scene === &#39;session&#39;) {
              const res = await WeChat.shareToSession(msg.params);
              this.inject(msg.uuid, res);
            }
            if (msg.params &amp;&amp; msg.params.scene === &#39;timeline&#39;) {
              const res = await WeChat.shareToTimeline(msg.params);
              this.inject(msg.uuid, res);
            }
          } catch (error) {
            this.inject(msg.uuid, error, true);
          }
          break;
        case &#39;push&#39;:
          if (msg.params.url) {
            if (navigationRef.current) {
              const pushAction = StackActions.push(&#39;Display&#39;, msg.params);
              navigationRef.current.dispatch(pushAction);
            }
          }
          this.inject(msg.uuid);
          break;
        case &#39;back&#39;:
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
      const isErrorData: string = isError ? &#39;true&#39; : &#39;false&#39;;
      this.instance.injectJavaScript(\`
        if(window.nativeCallback) {
          window.nativeCallback(&#39;\${uuid}&#39;, \${payloadData}, \${isErrorData});
        }
      \`);
    }
  }

  render() {
    return (
      &lt;WebView
        ref={(r) =&gt; {
          if (r) {
            this.instance = r;
          }
        }}
        startInLoadingState
        source={{uri: this.props.url}}
        onMessage={(e) =&gt; this.handleMessage(e.nativeEvent.data)}
      /&gt;
    );
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),j=i(`<li><h2 id="安卓键盘遮挡" tabindex="-1"><a class="header-anchor" href="#安卓键盘遮挡" aria-hidden="true">#</a> 安卓键盘遮挡</h2><p>1.修改AndroidManifest.xml 中的activity</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    android:windowSoftInputMode=&quot;adjustPan&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.使用KeyboardAvoidingView组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>      <span class="token comment">// 使用ScrollView包裹当失去焦点是会自动收起键盘</span>
      <span class="token operator">&lt;</span>ScrollView contentContainerStyle<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>KeyboardAvoidingView behavior<span class="token operator">=</span><span class="token string">&quot;height&quot;</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>logo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>formBox<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Input
            placeholder<span class="token operator">=</span><span class="token string">&quot;登陆手机号&quot;</span>
            leftIcon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon name<span class="token operator">=</span><span class="token string">&quot;user&quot;</span> size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span> color<span class="token operator">=</span><span class="token string">&quot;black&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span>
            onChangeText<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">phone</span><span class="token operator">:</span> value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>KeyboardAvoidingView<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ScrollView<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><h2 id="支付宝转账" tabindex="-1"><a class="header-anchor" href="#支付宝转账" aria-hidden="true">#</a> 支付宝转账</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  const url =
      &#39;alipayqr://platformapi/startapp?saId=10000007&amp;qrcode=https://qr.alipay.com/fkx12485r1525kbnh21uwfd&#39;;
    Modal.alert(&#39;支付宝转账&#39;, &#39;支付宝转账开通外卖功能&#39;, [
      {
        text: &#39;取消&#39;,
        style: &#39;cancel&#39;,
      },
      {
        text: &#39;支付宝转账&#39;,
        onPress: () =&gt; {
          Linking.canOpenURL(url)
            .then((supported) =&gt; {
              if (!supported) {
                // if (this.qq) {
                //   Clipboard.setString(this.qq);
                //   Toast.info(&#39;打开QQ失败，客服QQ号已复制到粘贴板&#39;);
                // }
              } else {
                return Linking.openURL(url);
              }
            })
            .catch((error) =&gt; console.log(&#39;tel error&#39;, error));
        },
      },
    ]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><h2 id="模拟器连接开发" tabindex="-1"><a class="header-anchor" href="#模拟器连接开发" aria-hidden="true">#</a> 模拟器连接开发</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  adb connect 127.0.0.1:62001 (夜神模拟器)
  adb connect 127.0.0.1:6555  (天天模拟器)
  adb shell input keyevent 82 (debug菜单)   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><h2 id="react-navigation生命周期" tabindex="-1"><a class="header-anchor" href="#react-navigation生命周期" aria-hidden="true">#</a> react-navigation生命周期</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   &lt;NavigationEvents onDidFocus={() =&gt; this.refreshData()} /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,4),q=n("h2",{id:"图片选择器无法获取图片",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图片选择器无法获取图片","aria-hidden":"true"},"#"),e(" 图片选择器无法获取图片")],-1),A={href:"https://github.com/react-native-community/react-native-image-picker/issues/1259",target:"_blank",rel:"noopener noreferrer"},E=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;application
      ...
  android:requestLegacyExternalStorage=&quot;true&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S=n("h2",{id:"图片无法上传",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图片无法上传","aria-hidden":"true"},"#"),e(" 图片无法上传")],-1),V={href:"https://github.com/facebook/react-native/issues/28551",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/react-native-community/react-native-image-picker/issues/1344",target:"_blank",rel:"noopener noreferrer"},R=i(`<li><h2 id="卸载组件" tabindex="-1"><a class="header-anchor" href="#卸载组件" aria-hidden="true">#</a> 卸载组件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  react-native unlink xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1);function W(C,T){const s=r("ExternalLinkIcon");return l(),d("div",null,[o,u,n("ol",null,[n("li",null,[n("a",v,[e("ReactNativeWeb与RN项目整合"),a(s)])]),n("li",null,[n("a",p,[e("React Native 根据WebView内容自动设置高度"),a(s)])]),n("li",null,[n("a",m,[e("react-native-debugger中查看网络请求"),a(s)])]),n("li",null,[n("a",b,[e("Android7.0 和 Charles的抓包"),a(s)])]),n("li",null,[n("a",h,[e("react native 常用样式"),a(s)])]),n("li",null,[n("a",g,[e("jdk8 下载"),a(s)])]),n("li",null,[n("a",k,[e("安卓资源下载"),a(s)])])]),f,n("ol",null,[n("li",null,[n("a",_,[e("@voximplant/react-native-foreground-service"),a(s)])]),x,n("li",null,[n("a",w,[e("react-native-sensors"),a(s)]),e(" ：加速度计、陀螺仪、磁力计、气压计")])]),y,n("ul",null,[j,n("li",null,[q,n("p",null,[n("a",A,[e("https://github.com/react-native-community/react-native-image-picker/issues/1259"),a(s)]),e(" 需要额外添加权限")]),E]),n("li",null,[S,n("ul",null,[n("li",null,[n("a",V,[e("https://github.com/facebook/react-native/issues/28551"),a(s)])]),n("li",null,[n("a",N,[e("https://github.com/react-native-community/react-native-image-picker/issues/1344"),a(s)])])])]),R])])}const D=t(c,[["render",W],["__file","react-native.html.vue"]]);export{D as default};
