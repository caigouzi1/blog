import{_ as e,o as n,c as i,e as s}from"./app-33e08406.js";const a={},r=s(`<h1 id="自动部署" tabindex="-1"><a class="header-anchor" href="#自动部署" aria-hidden="true">#</a> 自动部署</h1><h2 id="jenkins相关" tabindex="-1"><a class="header-anchor" href="#jenkins相关" aria-hidden="true">#</a> Jenkins相关</h2><h3 id="私有镜像npm登陆问题" tabindex="-1"><a class="header-anchor" href="#私有镜像npm登陆问题" aria-hidden="true">#</a> 私有镜像npm登陆问题</h3><div class="language-Jenkins line-numbers-mode" data-ext="Jenkins"><pre class="language-Jenkins"><code>steps {
    sh &quot;npm set registry http://nvwa.jiuqi.com.cn/nexus/repository/npm-nvware-group/&quot;
    sh &quot;npm config set //nvwa.jiuqi.com.cn/nexus/repository/npm-nvware-group/:_authToken=NpmToken.3bb085e0-a9b5-36e1-be9f-311bb5630c2b&quot;
    sh &quot;npm install&quot;
    sh &quot;npm run build&quot;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>获取authToken</li></ul><blockquote><p>打开用户目录的 .npmrc，Linux在 ~/.npmrc， Windows在 C:/Users/&lt;用户名&gt;/.npmrc中，找到 &lt;registry-url&gt; 对应仓库地址</p></blockquote>`,6),t=[r];function o(d,c){return n(),i("div",null,t)}const u=e(a,[["render",o],["__file","deploy.html.vue"]]);export{u as default};
