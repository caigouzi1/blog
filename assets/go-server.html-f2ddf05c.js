import{_ as n,o as s,c as a,e}from"./app-2f39ad23.js";const t={},i=e(`<h1 id="使用go打包代理前端代码" tabindex="-1"><a class="header-anchor" href="#使用go打包代理前端代码" aria-hidden="true">#</a> 使用Go打包代理前端代码</h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>近日有一前端项目需要写部署文档有甲方内网离线部署。考虑到nginx安装、配置复杂容易出错。遂想到之前使用GO可直接生成运行文件、简化部署流程。</p><h2 id="生成运行文件" tabindex="-1"><a class="header-anchor" href="#生成运行文件" aria-hidden="true">#</a> 生成运行文件</h2><h3 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># xxx为项目包名</span>
go mod init xxx

<span class="token comment"># 自动现在项目依赖</span>
go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;log&quot;</span>
 <span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 http<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span><span class="token function">FileServer</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">Dir</span><span class="token punctuation">(</span><span class="token string">&quot;static&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;访问 http://localhost:8000 查看&quot;</span><span class="token punctuation">)</span>
 err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
 log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;ListenAndServe: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;ListenAndServe: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h3><p>本机为windows系统遂需要交叉编译命令如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SET <span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span>
SET <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>linux
SET <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64
go build

<span class="token comment"># 或</span>
<span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>linux <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64 go build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如提示权限问题需要执行该命令</span>
<span class="token function">chmod</span> <span class="token number">777</span> main

<span class="token comment"># 进入文件</span>
 ./main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署前端项目" tabindex="-1"><a class="header-anchor" href="#部署前端项目" aria-hidden="true">#</a> 部署前端项目</h2><p>将前端项目放至同层static目录下即可</p>`,15),o=[i];function p(l,c){return s(),a("div",null,o)}const r=n(t,[["render",p],["__file","go-server.html.vue"]]);export{r as default};
