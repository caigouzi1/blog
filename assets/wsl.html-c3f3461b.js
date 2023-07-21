import{_ as l,r as i,o as r,c as t,a as s,b as e,d as n,e as o}from"./app-7c020676.js";const c={},d=s("h1",{id:"wsl开发",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#wsl开发","aria-hidden":"true"},"#"),e(" WSL开发")],-1),p=s("h2",{id:"相关博客",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#相关博客","aria-hidden":"true"},"#"),e(" 相关博客")],-1),u={href:"https://zhuanlan.zhihu.com/p/122214146",target:"_blank",rel:"noopener noreferrer"},m={href:"https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出可用的 Linux 发行版</span>
wsl <span class="token parameter variable">--list</span> <span class="token parameter variable">--online</span>

<span class="token comment"># 列出已安装的 Linux 发行版</span>
wsl <span class="token parameter variable">--list</span> <span class="token parameter variable">--verbose</span>

<span class="token comment"># 将 WSL 版本设置为 1 或 2</span>
wsl --set-version <span class="token operator">&lt;</span>distribution name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>versionNumber<span class="token operator">&gt;</span>

<span class="token comment"># 设置默认 WSL 版本</span>
wsl --set-default-version <span class="token operator">&lt;</span>Version<span class="token operator">&gt;</span>

<span class="token comment"># 设置默认 Linux 发行版</span>
wsl --set-default <span class="token operator">&lt;</span>Distribution Name<span class="token operator">&gt;</span>

<span class="token comment"># 注销或卸载 Linux 发行版</span>
wsl <span class="token parameter variable">--unregister</span> <span class="token operator">&lt;</span>DistributionName<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vscode的使用" tabindex="-1"><a class="header-anchor" href="#vscode的使用" aria-hidden="true">#</a> VsCode的使用</h2><ol><li><p>vim ~/.bashrc添加环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">code</span><span class="token operator">=</span><span class="token string">&quot;/mnt/d/code/Microsoft\\ VS\\ Code/Code.exe&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使设置生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,4);function b(h,k){const a=i("ExternalLinkIcon");return r(),t("div",null,[d,p,s("ol",null,[s("li",null,[s("a",u,[e("Linux系统各发行版换国内yum或apt源，加速软件下载更新"),n(a)])])]),s("blockquote",null,[s("p",null,[s("a",m,[e("微软官方文档"),n(a)])])]),v])}const g=l(c,[["render",b],["__file","wsl.html.vue"]]);export{g as default};
