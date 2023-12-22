import{_ as n,o as e,c as s,e as a}from"./app-BlZa_cz2.js";const i={},l=a(`<h1 id="react-native开发android应用" tabindex="-1"><a class="header-anchor" href="#react-native开发android应用" aria-hidden="true">#</a> React Native开发Android应用</h1><h2 id="gradle加速相关" tabindex="-1"><a class="header-anchor" href="#gradle加速相关" aria-hidden="true">#</a> Gradle加速相关</h2><h3 id="解决gradle工具下载太慢" tabindex="-1"><a class="header-anchor" href="#解决gradle工具下载太慢" aria-hidden="true">#</a> 解决Gradle工具下载太慢</h3><p>进入<code>android/gradle/wrapper/gradle-wrapper.properties</code>文件修改Gradle工具下载网址</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> distributionUrl=https\\://services.gradle.org/distributions/gradle-8.3-all.zip
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> distributionUrl=https\\://mirrors.cloud.tencent.com/gradle/gradle-8.3-all.zip
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改react-native项目依赖" tabindex="-1"><a class="header-anchor" href="#修改react-native项目依赖" aria-hidden="true">#</a> 修改React Native项目依赖</h3><p>进入<code>node_modules\\@react-native\\gradle-plugin\\settings.gradle.kts</code>文件</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code>pluginManagement {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> repositories {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   mavenCentral()
</span><span class="token prefix deleted">-</span><span class="token line">   google()
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   maven { setUrl(&quot;https://maven.aliyun.com/repository/gradle-plugin&quot;) }
</span><span class="token prefix inserted">+</span><span class="token line">   maven { setUrl(&quot;https://maven.aliyun.com/repository/public&quot;) }
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   gradlePluginPortal()
</span><span class="token prefix unchanged"> </span><span class="token line"> }
</span></span>}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入<code>node_modules\\@react-native\\gradle-plugin\\build.gradle.kts</code>文件</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code>repositories {
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> maven { setUrl(&quot;https://maven.aliyun.com/repository/public&quot;) }
</span><span class="token prefix inserted">+</span><span class="token line"> maven { setUrl(&quot;https://mirrors.cloud.tencent.com/nexus/repository/maven-public&quot;) }
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  google()
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> mavenCentral()
</span></span>}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改gradle依赖的镜像源" tabindex="-1"><a class="header-anchor" href="#修改gradle依赖的镜像源" aria-hidden="true">#</a> 修改Gradle依赖的镜像源</h3><p>进入<code>android/build.gradle</code></p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code>repositories {
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   maven { url &#39;https://maven.aliyun.com/repository/public&#39; }
</span><span class="token prefix inserted">+</span><span class="token line">   maven { url &#39;https://mirrors.cloud.tencent.com/nexus/repository/maven-public&#39; }
</span><span class="token prefix inserted">+</span><span class="token line">   maven { url &#39;https://maven.aliyun.com/repository/central&#39; }
</span><span class="token prefix inserted">+</span><span class="token line">   maven { url &#39;https://maven.aliyun.com/repository/gradle-plugin&#39; }
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   mavenLocal()
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   google()
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   mavenCentral()
</span></span>}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入<code>android/app/build.gradle</code>文件</p><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> android {
</span><span class="token prefix unchanged"> </span><span class="token line">   ...
</span><span class="token prefix unchanged"> </span><span class="token line"> }
</span></span>
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> repositories {
</span><span class="token prefix inserted">+</span><span class="token line">     maven { url &#39;https://maven.aliyun.com/repository/public&#39; }
</span><span class="token prefix inserted">+</span><span class="token line">     maven { url &#39;https://mirrors.cloud.tencent.com/nexus/repository/maven-public&#39; }
</span><span class="token prefix inserted">+</span><span class="token line">     maven { url &#39;https://maven.aliyun.com/repository/central&#39; }
</span><span class="token prefix inserted">+</span><span class="token line">     maven { url &#39;https://maven.aliyun.com/repository/gradle-plugin&#39; }
</span><span class="token prefix inserted">+</span><span class="token line">     mavenLocal()
</span><span class="token prefix inserted">+</span><span class="token line">     google()
</span><span class="token prefix inserted">+</span><span class="token line">     mavenCentral()
</span><span class="token prefix inserted">+</span><span class="token line"> }
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> dependencies {
</span><span class="token prefix unchanged"> </span><span class="token line">   ...
</span><span class="token prefix unchanged"> </span><span class="token line"> }
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),d=[l];function r(p,t){return e(),s("div",null,d)}const o=n(i,[["render",r],["__file","android_rn.html.vue"]]);export{o as default};
