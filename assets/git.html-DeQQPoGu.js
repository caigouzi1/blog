import{_ as s,c as a,a as n,o as l}from"./app-DGEpm61U.js";const e={};function t(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="git-使用" tabindex="-1"><a class="header-anchor" href="#git-使用"><span>Git 使用</span></a></h1><h2 id="相关博客" tabindex="-1"><a class="header-anchor" href="#相关博客"><span>相关博客</span></a></h2><p><a href="http://www.ruanyifeng.com/blog/2012/07/git.html" target="_blank" rel="noopener noreferrer">Git 分支管理策略</a></p><p><a href="http://www.ruanyifeng.com/blog/2014/06/git_remote.html" target="_blank" rel="noopener noreferrer">Git 远程操作详解</a></p><p><a href="http://www.ruanyifeng.com/blog/2015/08/git-use-process.html" target="_blank" rel="noopener noreferrer">Git 使用规范流程</a></p><p><a href="https://www.jianshu.com/p/420d38913578" target="_blank" rel="noopener noreferrer">Git 解决远程仓库文件大小写问题</a></p><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用"><span>基础使用</span></a></h2><ul><li>基础推送操作</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 把文件添加到暂存区</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 提交到版本库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;注释&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 推送</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分支操作基础命令</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 创建本地分支 dev</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 切换本地分支 dev</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 相当于以上两条命令：创建 dev</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 分支并切换</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Switched to a new branch &#39;dev&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=============================</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> //查看本地分支</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">* dev</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  master</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">=============================</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 备注：git branch 命令会列出所有分支，当前分支前面会标一个*号。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除本地分支 dev</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>查看分支：git branch</strong></li><li><strong>创建分支：git branch &lt;name&gt;</strong></li><li><strong>切换分支：git checkout &lt;name&gt;</strong></li><li><strong>创建+切换分支：git checkout -b &lt;name&gt;</strong></li><li><strong>合并某分支到当前分支：git merge &lt;name&gt;</strong></li><li><strong>删除分支：git branch -d &lt;name&gt;</strong></li></ul><h2 id="git-常用命令" tabindex="-1"><a class="header-anchor" href="#git-常用命令"><span>git 常用命令</span></a></h2><ul><li>eslint 报错 Delete <code>␍</code></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> core.autocrlf</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>查看远程仓库</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目"><span>初始化项目</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 初始.git文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加readme文档</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> README.md</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 递交</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;first commit&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 关联远程仓库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/caigouzi1/haha.git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 推送代码到master分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-分支管理" tabindex="-1"><a class="header-anchor" href="#git-分支管理"><span>Git 分支管理</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 列出本地分支基本命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 列出本地分支及远程分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 本地新建一个本地的分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 代码推送到远端dev分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> panda</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git删除分支" tabindex="-1"><a class="header-anchor" href="#git删除分支"><span>Git删除分支</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除本地分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">de</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">v&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除远程分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">remot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--delete</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">h&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">如：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --delete</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-推送-push" tabindex="-1"><a class="header-anchor" href="#git-推送-push"><span>Git 推送（push）</span></a></h2><blockquote><p>格式 : git push &lt;远程主机名&gt; &lt;本地分支名&gt; &lt;远程分支名&gt;</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果远程分支被省略，如上则表示将本地分支推送到与之存在追踪关系的远程分支（通常两者同名），如果该远程分支不存在，则会被新建</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支，等同于 git push origin --delete master</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin:refs/for/master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果当前分支与远程分支存在追踪关系，则本地分支和远程分支都可以省略，将当前分支推送到origin主机的对应分支</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 如果当前分支只有一个远程分支，那么主机名都可以省略，形如 git push，可以使用git branch -r ，查看远程的分支名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-合并相关" tabindex="-1"><a class="header-anchor" href="#git-合并相关"><span>Git 合并相关</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># git取消合并</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --abort</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-调整文件大小写" tabindex="-1"><a class="header-anchor" href="#git-调整文件大小写"><span>Git 调整文件大小写</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fileName</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 或</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –r</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fork-代码同步" tabindex="-1"><a class="header-anchor" href="#fork-代码同步"><span>Fork 代码同步</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upstream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [原仓库clone链接]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> fetch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upstream</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upstream/master</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实用案例" tabindex="-1"><a class="header-anchor" href="#实用案例"><span>实用案例</span></a></h2><ul><li><h3 id="git-如何把分支代码合并到-master-主分支上" tabindex="-1"><a class="header-anchor" href="#git-如何把分支代码合并到-master-主分支上"><span>git 如何把分支代码合并到 master 主分支上</span></a></h3></li></ul><ol><li><p>首先切换到分支：</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></blockquote></li><li><p>使用 git pull 把分支代码 pull 下来:</p><blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></blockquote></li><li><p>切换到主分支:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>把分支的代码 merge 到主分支:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>git push 推上去:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="git使用代理" tabindex="-1"><a class="header-anchor" href="#git使用代理"><span>git使用代理</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 具体端口号需查看本机配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http.proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://127.0.0.1:7890</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http.proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37)]))}const d=s(e,[["render",t],["__file","git.html.vue"]]),r=JSON.parse('{"path":"/manual/git.html","title":"Git 使用","lang":"zh-CN","frontmatter":{"date":"2019-11-14T00:00:00.000Z","category":"开发者手册","tag":["git"]},"headers":[{"level":2,"title":"相关博客","slug":"相关博客","link":"#相关博客","children":[]},{"level":2,"title":"基础使用","slug":"基础使用","link":"#基础使用","children":[]},{"level":2,"title":"git 常用命令","slug":"git-常用命令","link":"#git-常用命令","children":[]},{"level":2,"title":"初始化项目","slug":"初始化项目","link":"#初始化项目","children":[]},{"level":2,"title":"Git 分支管理","slug":"git-分支管理","link":"#git-分支管理","children":[]},{"level":2,"title":"Git删除分支","slug":"git删除分支","link":"#git删除分支","children":[]},{"level":2,"title":"Git 推送（push）","slug":"git-推送-push","link":"#git-推送-push","children":[]},{"level":2,"title":"Git 合并相关","slug":"git-合并相关","link":"#git-合并相关","children":[]},{"level":2,"title":"Git 调整文件大小写","slug":"git-调整文件大小写","link":"#git-调整文件大小写","children":[]},{"level":2,"title":"Fork 代码同步","slug":"fork-代码同步","link":"#fork-代码同步","children":[]},{"level":2,"title":"实用案例","slug":"实用案例","link":"#实用案例","children":[]},{"level":2,"title":"git使用代理","slug":"git使用代理","link":"#git使用代理","children":[]}],"git":{"createdTime":1732934976000,"updatedTime":1732934976000},"readingTime":{"minutes":2.79,"words":838},"filePathRelative":"manual/git.md","localizedDate":"2019年11月14日"}');export{d as comp,r as data};