import{r,o as t,a as p,b as n,d as e,F as l,e as s,c as i}from"./app.0575061e.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const o={},u=n("h1",{id:"reactnative\u5F00\u53D1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reactnative\u5F00\u53D1","aria-hidden":"true"},"#"),s(" ReactNative\u5F00\u53D1")],-1),b=n("ul",null,[n("li",null,[n("h3",{id:"\u7F51\u7EDC\u6587\u6863",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7F51\u7EDC\u6587\u6863","aria-hidden":"true"},"#"),s(" \u7F51\u7EDC\u6587\u6863")])])],-1),m={href:"https://juejin.im/post/5dc3c36ef265da4d0c175624",target:"_blank",rel:"noopener noreferrer"},d=s("ReactNativeWeb\u4E0ERN\u9879\u76EE\u6574\u5408"),h={href:"https://www.jianshu.com/p/29c54ecbba28",target:"_blank",rel:"noopener noreferrer"},g=s("React Native \u6839\u636EWebView\u5185\u5BB9\u81EA\u52A8\u8BBE\u7F6E\u9AD8\u5EA6"),k={href:"https://www.jianshu.com/p/a3f65af6de7b",target:"_blank",rel:"noopener noreferrer"},v=s("react-native-debugger\u4E2D\u67E5\u770B\u7F51\u7EDC\u8BF7\u6C42"),f={href:"https://blog.csdn.net/u011045726/article/details/76064048",target:"_blank",rel:"noopener noreferrer"},x=s("Android7.0 \u548C Charles\u7684\u6293\u5305"),_={href:"https://shenbao.github.io/ishehui/html/RN%20%E5%9F%BA%E7%A1%80/React%20Native%20%E6%A0%B7%E5%BC%8F%E8%A1%A8%E6%8C%87%E5%8D%97.html",target:"_blank",rel:"noopener noreferrer"},w=s("react native \u5E38\u7528\u6837\u5F0F"),y={href:"https://www.injdk.cn/",target:"_blank",rel:"noopener noreferrer"},j=s("jdk8 \u4E0B\u8F7D"),q={href:"https://www.androiddevtools.cn/index.html/",target:"_blank",rel:"noopener noreferrer"},A=s("\u5B89\u5353\u8D44\u6E90\u4E0B\u8F7D"),E=n("ul",null,[n("li",null,[n("h3",{id:"\u7B2C\u4E09\u65B9\u7EC4\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B2C\u4E09\u65B9\u7EC4\u4EF6","aria-hidden":"true"},"#"),s(" \u7B2C\u4E09\u65B9\u7EC4\u4EF6")])])],-1),S={href:"https://www.npmjs.com/package/@voximplant/react-native-foreground-service",target:"_blank",rel:"noopener noreferrer"},V=s("@voximplant/react-native-foreground-service"),N=n("li",null,[n("a",{href:"react-native-shortcutmanager"},"\u56FE\u6807\u957F\u6309\u64CD\u4F5C"),s(" - \u76F8\u5173\u5173\u952E\u8BCDShortcut")],-1),R=i(`<ul><li><h3 id="webview" tabindex="-1"><a class="header-anchor" href="#webview" aria-hidden="true">#</a> WebView</h3></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import React, {PureComponent} from &#39;react&#39;;
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br></div></div><ul><li><h3 id="\u5B89\u5353\u952E\u76D8\u906E\u6321" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5353\u952E\u76D8\u906E\u6321" aria-hidden="true">#</a> \u5B89\u5353\u952E\u76D8\u906E\u6321</h3><p>1.\u4FEE\u6539AndroidManifest.xml \u4E2D\u7684activity</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    android:windowSoftInputMode=&quot;adjustPan&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2.\u4F7F\u7528KeyboardAvoidingView\u7EC4\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>      <span class="token comment">// \u4F7F\u7528ScrollView\u5305\u88F9\u5F53\u5931\u53BB\u7126\u70B9\u662F\u4F1A\u81EA\u52A8\u6536\u8D77\u952E\u76D8</span>
      <span class="token operator">&lt;</span>ScrollView contentContainerStyle<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>KeyboardAvoidingView behavior<span class="token operator">=</span><span class="token string">&quot;height&quot;</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>logo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>formBox<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Input
            placeholder<span class="token operator">=</span><span class="token string">&quot;\u767B\u9646\u624B\u673A\u53F7&quot;</span>
            leftIcon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon name<span class="token operator">=</span><span class="token string">&quot;user&quot;</span> size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span> color<span class="token operator">=</span><span class="token string">&quot;black&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span>
            onChangeText<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">phone</span><span class="token operator">:</span> value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>KeyboardAvoidingView<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ScrollView<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li><h3 id="\u652F\u4ED8\u5B9D\u8F6C\u8D26" tabindex="-1"><a class="header-anchor" href="#\u652F\u4ED8\u5B9D\u8F6C\u8D26" aria-hidden="true">#</a> \u652F\u4ED8\u5B9D\u8F6C\u8D26</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  const url =
      &#39;alipayqr://platformapi/startapp?saId=10000007&amp;qrcode=https://qr.alipay.com/fkx12485r1525kbnh21uwfd&#39;;
    Modal.alert(&#39;\u652F\u4ED8\u5B9D\u8F6C\u8D26&#39;, &#39;\u652F\u4ED8\u5B9D\u8F6C\u8D26\u5F00\u901A\u5916\u5356\u529F\u80FD&#39;, [
      {
        text: &#39;\u53D6\u6D88&#39;,
        style: &#39;cancel&#39;,
      },
      {
        text: &#39;\u652F\u4ED8\u5B9D\u8F6C\u8D26&#39;,
        onPress: () =&gt; {
          Linking.canOpenURL(url)
            .then((supported) =&gt; {
              if (!supported) {
                // if (this.qq) {
                //   Clipboard.setString(this.qq);
                //   Toast.info(&#39;\u6253\u5F00QQ\u5931\u8D25\uFF0C\u5BA2\u670DQQ\u53F7\u5DF2\u590D\u5236\u5230\u7C98\u8D34\u677F&#39;);
                // }
              } else {
                return Linking.openURL(url);
              }
            })
            .catch((error) =&gt; console.log(&#39;tel error&#39;, error));
        },
      },
    ]);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></li><li><h3 id="\u6A21\u62DF\u5668\u8FDE\u63A5\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u5668\u8FDE\u63A5\u5F00\u53D1" aria-hidden="true">#</a> \u6A21\u62DF\u5668\u8FDE\u63A5\u5F00\u53D1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  adb connect 127.0.0.1:62001 (\u591C\u795E\u6A21\u62DF\u5668)
  adb connect 127.0.0.1:6555  (\u5929\u5929\u6A21\u62DF\u5668)
  adb shell input keyevent 82 (debug\u83DC\u5355)   
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><h3 id="react-navigation\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#react-navigation\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> react-navigation\u751F\u547D\u5468\u671F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   &lt;NavigationEvents onDidFocus={() =&gt; this.refreshData()} /&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><h3 id="\u56FE\u7247\u9009\u62E9\u5668\u65E0\u6CD5\u83B7\u53D6\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u9009\u62E9\u5668\u65E0\u6CD5\u83B7\u53D6\u56FE\u7247" aria-hidden="true">#</a> \u56FE\u7247\u9009\u62E9\u5668\u65E0\u6CD5\u83B7\u53D6\u56FE\u7247</h3><p>https://github.com/react-native-community/react-native-image-picker/issues/1259 \u9700\u8981\u989D\u5916\u6DFB\u52A0\u6743\u9650</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;application
      ...
  android:requestLegacyExternalStorage=&quot;true&quot;&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><h3 id="\u56FE\u7247\u65E0\u6CD5\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u65E0\u6CD5\u4E0A\u4F20" aria-hidden="true">#</a> \u56FE\u7247\u65E0\u6CD5\u4E0A\u4F20</h3><ul><li>https://github.com/facebook/react-native/issues/28551</li><li>https://github.com/react-native-community/react-native-image-picker/issues/1344</li></ul></li><li><h3 id="\u5378\u8F7D\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D\u7EC4\u4EF6" aria-hidden="true">#</a> \u5378\u8F7D\u7EC4\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  react-native unlink xxx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul>`,3);function W(C,T){const a=r("ExternalLinkIcon");return t(),p(l,null,[u,b,n("ol",null,[n("li",null,[n("a",m,[d,e(a)])]),n("li",null,[n("a",h,[g,e(a)])]),n("li",null,[n("a",k,[v,e(a)])]),n("li",null,[n("a",f,[x,e(a)])]),n("li",null,[n("a",_,[w,e(a)])]),n("li",null,[n("a",y,[j,e(a)])]),n("li",null,[n("a",q,[A,e(a)])])]),E,n("ol",null,[n("li",null,[n("a",S,[V,e(a)])]),N]),R],64)}var I=c(o,[["render",W]]);export{I as default};
