import{_ as n,o as s,c as a,e}from"./app-CbZyqyqy.js";const i={},l=e(`<h1 id="终端复用器" tabindex="-1"><a class="header-anchor" href="#终端复用器"><span>终端复用器</span></a></h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Debian/Ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> tmux

<span class="token comment"># RHEL/CentOS</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> tmux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个名称为test的会话</span>
tmux new <span class="token parameter variable">-s</span> <span class="token builtin class-name">test</span>

<span class="token comment"># 列出当前所有会话</span>
tmux <span class="token function">ls</span>
快捷键：Ctrl+b s

<span class="token comment"># 进入test会话</span>
tmux attach <span class="token parameter variable">-t</span> <span class="token builtin class-name">test</span> 
tmux a <span class="token parameter variable">-t</span> <span class="token builtin class-name">test</span>

<span class="token comment"># 退出会话</span>
tmux detach
快捷键：Ctrl+b d

<span class="token comment"># 关闭会话</span>
<span class="token builtin class-name">exit</span> 或者 Ctrl + b
tmux kill-session <span class="token parameter variable">-t</span> xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[l];function c(d,r){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","tmux.html.vue"]]),o=JSON.parse('{"path":"/manual/tmux.html","title":"终端复用器","lang":"zh-CN","frontmatter":{"date":"2023-11-28T00:00:00.000Z","category":"开发者手册","tag":["终端"]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]}],"git":{"createdTime":1713428395000,"updatedTime":1713428395000},"readingTime":{"minutes":0.35,"words":106},"filePathRelative":"manual/tmux.md","localizedDate":"2023年11月28日"}');export{u as comp,o as data};
