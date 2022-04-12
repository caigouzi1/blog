import{_ as e,e as a}from"./app.8425582e.js";const s={},n=a(`<h1 id="taro\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#taro\u5F00\u53D1" aria-hidden="true">#</a> Taro\u5F00\u53D1</h1><h3 id="taro-ui\u81EA\u5B9A\u4E49\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#taro-ui\u81EA\u5B9A\u4E49\u4E3B\u9898" aria-hidden="true">#</a> Taro-ui\u81EA\u5B9A\u4E49\u4E3B\u9898</h3><ol><li>\u521B\u5EFA custom-variables.scss \u6587\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$color-brand: #fa3e47;

@import &quot;~taro-ui/dist/style/index.scss&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>\u5165\u53E3\u6587\u4EF6\u4E2D\u5BFC\u5165\u6837\u5F0F\u6587\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &quot;./custom-variables.scss&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u522B\u540D\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u522B\u540D\u8DEF\u5F84" aria-hidden="true">#</a> \u522B\u540D\u8DEF\u5F84</h3><ol><li>config\u6587\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&quot;path&quot;);

  alias: {
    &quot;@&quot;: path.resolve(__dirname, &quot;../src&quot;)
  },
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>tsconfig.json</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    &quot;paths&quot;: {
      &quot;@/*&quot;: [&quot;./src/*&quot;]
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u96C6\u6210dva" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210dva" aria-hidden="true">#</a> \u96C6\u6210dva</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn add dva-core-ts dva-loading-ts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,13);function r(t,i){return n}var d=e(s,[["render",r]]);export{d as default};
