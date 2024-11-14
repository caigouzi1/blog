import{_ as s,c as a,a as e,o as n}from"./app-B26mVNhK.js";const l={};function d(r,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="react-native开发android应用" tabindex="-1"><a class="header-anchor" href="#react-native开发android应用"><span>React Native开发Android应用</span></a></h1><h2 id="gradle加速相关" tabindex="-1"><a class="header-anchor" href="#gradle加速相关"><span>Gradle加速相关</span></a></h2><h3 id="解决gradle工具下载太慢" tabindex="-1"><a class="header-anchor" href="#解决gradle工具下载太慢"><span>解决Gradle工具下载太慢</span></a></h3><p>进入<code>android/gradle/wrapper/gradle-wrapper.properties</code>文件修改Gradle工具下载网址</p><div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" data-title="diff" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">- distributionUrl=https\\://services.gradle.org/distributions/gradle-8.3-all.zip</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+ distributionUrl=https\\://mirrors.cloud.tencent.com/gradle/gradle-8.3-all.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改react-native项目依赖" tabindex="-1"><a class="header-anchor" href="#修改react-native项目依赖"><span>修改React Native项目依赖</span></a></h3><p>进入<code>node_modules\\@react-native\\gradle-plugin\\settings.gradle.kts</code>文件</p><div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" data-title="diff" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">pluginManagement {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  repositories {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-   mavenCentral()</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-   google()</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+   maven { setUrl(&quot;https://maven.aliyun.com/repository/gradle-plugin&quot;) }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+   maven { setUrl(&quot;https://maven.aliyun.com/repository/public&quot;) }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    gradlePluginPortal()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入<code>node_modules\\@react-native\\gradle-plugin\\build.gradle.kts</code>文件</p><div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" data-title="diff" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">repositories {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+ maven { setUrl(&quot;https://maven.aliyun.com/repository/public&quot;) }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+ maven { setUrl(&quot;https://mirrors.cloud.tencent.com/nexus/repository/maven-public&quot;) }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-  google()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  mavenCentral()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改gradle依赖的镜像源" tabindex="-1"><a class="header-anchor" href="#修改gradle依赖的镜像源"><span>修改Gradle依赖的镜像源</span></a></h3><p>进入<code>android/build.gradle</code></p><div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" data-title="diff" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">repositories {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+   maven { url &#39;https://maven.aliyun.com/repository/public&#39; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+   maven { url &#39;https://mirrors.cloud.tencent.com/nexus/repository/maven-public&#39; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+   maven { url &#39;https://maven.aliyun.com/repository/central&#39; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+   maven { url &#39;https://maven.aliyun.com/repository/gradle-plugin&#39; }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    mavenLocal()</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">-   google()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    mavenCentral()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入<code>android/app/build.gradle</code>文件</p><div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" data-title="diff" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  android {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+ repositories {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+     maven { url &#39;https://maven.aliyun.com/repository/public&#39; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+     maven { url &#39;https://mirrors.cloud.tencent.com/nexus/repository/maven-public&#39; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+     maven { url &#39;https://maven.aliyun.com/repository/central&#39; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+     maven { url &#39;https://maven.aliyun.com/repository/gradle-plugin&#39; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+     mavenLocal()</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+     google()</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+     mavenCentral()</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">+ }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  dependencies {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const p=s(l,[["render",d],["__file","android_rn.html.vue"]]),h=JSON.parse('{"path":"/front-end/android_rn.html","title":"React Native开发Android应用","lang":"zh-CN","frontmatter":{"date":"2023-12-22T00:00:00.000Z","category":"前端","tag":["ReactNative","APP"]},"headers":[{"level":2,"title":"Gradle加速相关","slug":"gradle加速相关","link":"#gradle加速相关","children":[{"level":3,"title":"解决Gradle工具下载太慢","slug":"解决gradle工具下载太慢","link":"#解决gradle工具下载太慢","children":[]},{"level":3,"title":"修改React Native项目依赖","slug":"修改react-native项目依赖","link":"#修改react-native项目依赖","children":[]},{"level":3,"title":"修改Gradle依赖的镜像源","slug":"修改gradle依赖的镜像源","link":"#修改gradle依赖的镜像源","children":[]}]}],"git":{"createdTime":1731564567000,"updatedTime":1731564567000},"readingTime":{"minutes":0.6,"words":180},"filePathRelative":"front-end/android_rn.md","localizedDate":"2023年12月22日"}');export{p as comp,h as data};