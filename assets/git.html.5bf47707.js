import{_ as i,o as t,c as l,a as n,b as s,d as e,e as r,r as c}from"./app.f10df6e7.js";const o={},d=n("h1",{id:"git-使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-使用","aria-hidden":"true"},"#"),s(" Git 使用")],-1),p=n("h2",{id:"相关博客",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关博客","aria-hidden":"true"},"#"),s(" 相关博客")],-1),u={href:"http://www.ruanyifeng.com/blog/2012/07/git.html",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.ruanyifeng.com/blog/2014/06/git_remote.html",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.ruanyifeng.com/blog/2015/08/git-use-process.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.jianshu.com/p/420d38913578",target:"_blank",rel:"noopener noreferrer"},h=r(`<h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h2><ul><li>基础推送操作</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 把文件添加到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 提交到版本库</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;注释&#39;</span>

<span class="token comment"># 推送</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分支操作基础命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建本地分支 dev</span>
<span class="token function">git</span> branch dev

<span class="token comment"># 切换本地分支 dev</span>
<span class="token function">git</span> checkout dev


<span class="token comment"># 相当于以上两条命令：创建 dev</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev

<span class="token comment"># 分支并切换</span>
<span class="token comment"># Switched to a new branch &#39;dev&#39;</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token function">git</span> branch //查看本地分支
* dev
  master
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token comment"># 备注：git branch 命令会列出所有分支，当前分支前面会标一个*号。</span>

<span class="token comment"># 删除本地分支 dev</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>查看分支：git branch</strong></li><li><strong>创建分支：git branch &lt;name&gt;</strong></li><li><strong>切换分支：git checkout &lt;name&gt;</strong></li><li><strong>创建+切换分支：git checkout -b &lt;name&gt;</strong></li><li><strong>合并某分支到当前分支：git merge &lt;name&gt;</strong></li><li><strong>删除分支：git branch -d &lt;name&gt;</strong></li></ul><h2 id="git-常用命令" tabindex="-1"><a class="header-anchor" href="#git-常用命令" aria-hidden="true">#</a> git 常用命令</h2><ul><li>eslint 报错 Delete <code>␍</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.autocrlf <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看远程仓库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote show origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始.git文件</span>
<span class="token function">git</span> init

<span class="token comment"># 添加readme文档</span>
<span class="token function">git</span> <span class="token function">add</span> README.md

<span class="token comment"># 递交</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first commit&quot;</span>

<span class="token comment"># 关联远程仓库</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/caigouzi1/haha.git

<span class="token comment"># 推送代码到master分支</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-分支管理" tabindex="-1"><a class="header-anchor" href="#git-分支管理" aria-hidden="true">#</a> Git 分支管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出本地分支基本命令</span>
<span class="token function">git</span> branch

<span class="token comment"># 列出本地分支及远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>


<span class="token comment"># 本地新建一个本地的分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev

<span class="token comment"># 代码推送到远端dev分支</span>
<span class="token function">git</span> push origin panda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git删除分支" tabindex="-1"><a class="header-anchor" href="#git删除分支" aria-hidden="true">#</a> Git删除分支</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除本地分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>dev<span class="token operator">&gt;</span>

<span class="token comment"># 删除远程分支</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token parameter variable">--delete</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
如：
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> dev  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-推送-push" tabindex="-1"><a class="header-anchor" href="#git-推送-push" aria-hidden="true">#</a> Git 推送（push）</h2><blockquote><p>格式 : git push &lt;远程主机名&gt; &lt;本地分支名&gt; &lt;远程分支名&gt;</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果远程分支被省略，如上则表示将本地分支推送到与之存在追踪关系的远程分支（通常两者同名），如果该远程分支不存在，则会被新建</span>
<span class="token function">git</span> push origin master

<span class="token comment"># 如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支，等同于 git push origin --delete master</span>
<span class="token function">git</span> push origin:refs/for/master

<span class="token comment"># 如果当前分支与远程分支存在追踪关系，则本地分支和远程分支都可以省略，将当前分支推送到origin主机的对应分支</span>
<span class="token function">git</span> push origin

<span class="token comment"># 如果当前分支只有一个远程分支，那么主机名都可以省略，形如 git push，可以使用git branch -r ，查看远程的分支名</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-合并相关" tabindex="-1"><a class="header-anchor" href="#git-合并相关" aria-hidden="true">#</a> Git 合并相关</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git取消合并</span>
<span class="token function">git</span> merge <span class="token parameter variable">--abort</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-调整文件大小写" tabindex="-1"><a class="header-anchor" href="#git-调整文件大小写" aria-hidden="true">#</a> Git 调整文件大小写</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> fileName
<span class="token comment"># 或</span>
<span class="token function">git</span> <span class="token function">rm</span> –r *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fork-代码同步" tabindex="-1"><a class="header-anchor" href="#fork-代码同步" aria-hidden="true">#</a> Fork 代码同步</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token function">git</span> remote <span class="token function">add</span> upstream <span class="token punctuation">[</span>原仓库clone链接<span class="token punctuation">]</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token function">git</span> fetch upstream
<span class="token function">git</span> merge upstream/master
<span class="token function">git</span> push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实用案例" tabindex="-1"><a class="header-anchor" href="#实用案例" aria-hidden="true">#</a> 实用案例</h2><ul><li><h3 id="git-如何把分支代码合并到-master-主分支上" tabindex="-1"><a class="header-anchor" href="#git-如何把分支代码合并到-master-主分支上" aria-hidden="true">#</a> git 如何把分支代码合并到 master 主分支上</h3></li></ul><ol><li><p>首先切换到分支：</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote></li><li><p>使用 git pull 把分支代码 pull 下来:</p><blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote></li><li><p>切换到主分支:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>把分支的代码 merge 到主分支:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> merge dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>git push 推上去:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,29);function g(k,f){const a=c("ExternalLinkIcon");return t(),l("div",null,[d,p,n("p",null,[n("a",u,[s("Git 分支管理策略"),e(a)])]),n("p",null,[n("a",v,[s("Git 远程操作详解"),e(a)])]),n("p",null,[n("a",m,[s("Git 使用规范流程"),e(a)])]),n("p",null,[n("a",b,[s("Git 解决远程仓库文件大小写问题"),e(a)])]),h])}const _=i(o,[["render",g],["__file","git.html.vue"]]);export{_ as default};
