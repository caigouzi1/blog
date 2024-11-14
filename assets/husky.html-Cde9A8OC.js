import{_ as i,c as a,a as e,o as t}from"./app-B26mVNhK.js";const n={};function l(h,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="husky-lint-staged-规范-git-代码递交" tabindex="-1"><a class="header-anchor" href="#husky-lint-staged-规范-git-代码递交"><span>husky + lint-staged 规范 git 代码递交</span></a></h1><blockquote><p><strong>相关内容：</strong><br> husky: 可在 git 操作时添加自定义钩子对代码或 git message 进行校验<br> lint-staged: 可对 git 缓存区代码进行 es-lint 检查</p></blockquote><ol><li><p>安装依赖</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> husky</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lint-staged</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>❗注意：</strong> lint-staged 从 v12.0.0 开始模块导出为 ESM module 所以 node 版本不能低于 12.20.0, 14.13.1, or 16.0.0 如需支持低版本需固定版本号。执行<code>npm install lint-staged@^11.2.6 -D</code></p><ul><li>ESM module 相关可参考 <a href="https://nodejs.org/api/esm.html#introduction" target="_blank" rel="noopener noreferrer">node 文档</a></li></ul></blockquote></li><li><p>package.json 添加 script</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set-script</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prepare</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;husky install&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prepare</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者 手动添加以 <code>&quot;prepare&quot;: &quot;husky install&quot;</code> 到 package.json 的 scripts 中并执行 <code>npm run prepare</code> 命令</p><blockquote><p><strong>❗提示：</strong> prepare: 在两种情况前运行，一是 npm publish 命令前，二是不带参数的 npm install 命令；它会在 prepublish 之后、prepublishOnly 之前执行</p><ul><li>相关内容参考 <a href="https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html" target="_blank" rel="noopener noreferrer">npm scripts 使用指南</a></li></ul></blockquote></li><li><p>创建 .lintstagedrc 文件</p><blockquote><p>该文件为暂存区内所有符合对应后缀提供对应的规则命令</p></blockquote><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;*.{js,jsx,ts,tsx,vue}&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;eslint&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;prettier --write&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;*.{less,scss}&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;prettier --write&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> &quot;*.{js,css,json,md}&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;prettier --write&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在.husky 文件夹下新建 pre-commit.sh 文件，并添加一下内容</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#!/bin/sh</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dirname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">$0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;)/_/husky.sh&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 这里就是唤醒 lint-staged</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> npx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lint-staged</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,3)]))}const k=i(n,[["render",l],["__file","husky.html.vue"]]),p=JSON.parse('{"path":"/manual/husky.html","title":"husky + lint-staged 规范 git 代码递交","lang":"zh-CN","frontmatter":{"date":"2022-01-28T00:00:00.000Z","category":"开发者手册","tag":["husky"]},"headers":[],"git":{"createdTime":1731564567000,"updatedTime":1731564567000},"readingTime":{"minutes":1.08,"words":324},"filePathRelative":"manual/husky.md","localizedDate":"2022年1月28日"}');export{k as comp,p as data};