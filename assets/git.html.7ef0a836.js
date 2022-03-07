import{r as l,o as p,a as r,b as n,d as e,F as t,e as s,c}from"./app.8d1e645c.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const o={},b=n("h1",{id:"git-\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-\u4F7F\u7528","aria-hidden":"true"},"#"),s(" Git \u4F7F\u7528")],-1),u=n("h2",{id:"\u76F8\u5173\u535A\u5BA2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u76F8\u5173\u535A\u5BA2","aria-hidden":"true"},"#"),s(" \u76F8\u5173\u535A\u5BA2")],-1),m={href:"http://www.ruanyifeng.com/blog/2012/07/git.html",target:"_blank",rel:"noopener noreferrer"},d=s("Git \u5206\u652F\u7BA1\u7406\u7B56\u7565"),g={href:"http://www.ruanyifeng.com/blog/2014/06/git_remote.html",target:"_blank",rel:"noopener noreferrer"},h=s("Git \u8FDC\u7A0B\u64CD\u4F5C\u8BE6\u89E3"),k={href:"http://www.ruanyifeng.com/blog/2015/08/git-use-process.html",target:"_blank",rel:"noopener noreferrer"},v=s("Git \u4F7F\u7528\u89C4\u8303\u6D41\u7A0B"),f={href:"https://www.jianshu.com/p/420d38913578",target:"_blank",rel:"noopener noreferrer"},_=s("Git \u89E3\u51B3\u8FDC\u7A0B\u4ED3\u5E93\u6587\u4EF6\u5927\u5C0F\u5199\u95EE\u9898"),x=c(`<h2 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u7840\u4F7F\u7528</h2><ul><li>\u57FA\u7840\u63A8\u9001\u64CD\u4F5C</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u628A\u6587\u4EF6\u6DFB\u52A0\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># \u63D0\u4EA4\u5230\u7248\u672C\u5E93</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;\u6CE8\u91CA&#39;</span>

<span class="token comment"># \u63A8\u9001</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u5206\u652F\u64CD\u4F5C\u57FA\u7840\u547D\u4EE4</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u672C\u5730\u5206\u652F dev</span>
<span class="token function">git</span> branch dev

<span class="token comment"># \u5207\u6362\u672C\u5730\u5206\u652F dev</span>
<span class="token function">git</span> checkout dev


<span class="token comment"># \u76F8\u5F53\u4E8E\u4EE5\u4E0A\u4E24\u6761\u547D\u4EE4\uFF1A\u521B\u5EFA dev</span>
<span class="token function">git</span> checkout -b dev

<span class="token comment"># \u5206\u652F\u5E76\u5207\u6362</span>
<span class="token comment"># Switched to a new branch &#39;dev&#39;</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token function">git</span> branch //\u67E5\u770B\u672C\u5730\u5206\u652F
* dev
  master
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token comment"># \u5907\u6CE8\uFF1Agit branch \u547D\u4EE4\u4F1A\u5217\u51FA\u6240\u6709\u5206\u652F\uFF0C\u5F53\u524D\u5206\u652F\u524D\u9762\u4F1A\u6807\u4E00\u4E2A*\u53F7\u3002</span>

<span class="token comment"># \u5220\u9664\u672C\u5730\u5206\u652F dev</span>
<span class="token function">git</span> branch -d dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li><strong>\u67E5\u770B\u5206\u652F\uFF1Agit branch</strong></li><li><strong>\u521B\u5EFA\u5206\u652F\uFF1Agit branch &lt;name&gt;</strong></li><li><strong>\u5207\u6362\u5206\u652F\uFF1Agit checkout &lt;name&gt;</strong></li><li><strong>\u521B\u5EFA+\u5207\u6362\u5206\u652F\uFF1Agit checkout -b &lt;name&gt;</strong></li><li><strong>\u5408\u5E76\u67D0\u5206\u652F\u5230\u5F53\u524D\u5206\u652F\uFF1Agit merge &lt;name&gt;</strong></li><li><strong>\u5220\u9664\u5206\u652F\uFF1Agit branch -d &lt;name&gt;</strong></li></ul><h2 id="git-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> git \u5E38\u7528\u547D\u4EE4</h2><ul><li>eslint \u62A5\u9519 Delete <code>\u240D</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global core.autocrlf <span class="token boolean">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote show origin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a> \u521D\u59CB\u5316\u9879\u76EE</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521D\u59CB.git\u6587\u4EF6</span>
<span class="token function">git</span> init

<span class="token comment"># \u6DFB\u52A0readme\u6587\u6863</span>
<span class="token function">git</span> <span class="token function">add</span> README.md

<span class="token comment"># \u9012\u4EA4</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;first commit&quot;</span>

<span class="token comment"># \u5173\u8054\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/caigouzi1/haha.git

<span class="token comment"># \u63A8\u9001\u4EE3\u7801\u5230master\u5206\u652F</span>
<span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="git-\u5206\u652F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#git-\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a> Git \u5206\u652F\u7BA1\u7406</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u672C\u5730\u5206\u652F\u57FA\u672C\u547D\u4EE4</span>
<span class="token function">git</span> branch

<span class="token comment"># \u5217\u51FA\u672C\u5730\u5206\u652F\u53CA\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> branch -a

<span class="token comment"># \u5220\u9664\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch -d <span class="token operator">&lt;</span>dev<span class="token operator">&gt;</span>

<span class="token comment"># \u672C\u5730\u65B0\u5EFA\u4E00\u4E2A\u672C\u5730\u7684\u5206\u652F</span>
<span class="token function">git</span> checkout -b dev

<span class="token comment"># \u4EE3\u7801\u63A8\u9001\u5230\u8FDC\u7AEFdev\u5206\u652F</span>
<span class="token function">git</span> push origin panda
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="git-\u63A8\u9001-push" tabindex="-1"><a class="header-anchor" href="#git-\u63A8\u9001-push" aria-hidden="true">#</a> Git \u63A8\u9001\uFF08push\uFF09</h2><blockquote><p>\u683C\u5F0F : git push &lt;\u8FDC\u7A0B\u4E3B\u673A\u540D&gt; &lt;\u672C\u5730\u5206\u652F\u540D&gt; &lt;\u8FDC\u7A0B\u5206\u652F\u540D&gt;</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C\u8FDC\u7A0B\u5206\u652F\u88AB\u7701\u7565\uFF0C\u5982\u4E0A\u5219\u8868\u793A\u5C06\u672C\u5730\u5206\u652F\u63A8\u9001\u5230\u4E0E\u4E4B\u5B58\u5728\u8FFD\u8E2A\u5173\u7CFB\u7684\u8FDC\u7A0B\u5206\u652F\uFF08\u901A\u5E38\u4E24\u8005\u540C\u540D\uFF09\uFF0C\u5982\u679C\u8BE5\u8FDC\u7A0B\u5206\u652F\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u88AB\u65B0\u5EFA</span>
<span class="token function">git</span> push origin master

<span class="token comment"># \u5982\u679C\u7701\u7565\u672C\u5730\u5206\u652F\u540D\uFF0C\u5219\u8868\u793A\u5220\u9664\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\uFF0C\u56E0\u4E3A\u8FD9\u7B49\u540C\u4E8E\u63A8\u9001\u4E00\u4E2A\u7A7A\u7684\u672C\u5730\u5206\u652F\u5230\u8FDC\u7A0B\u5206\u652F\uFF0C\u7B49\u540C\u4E8E git push origin --delete master</span>
<span class="token function">git</span> push origin:refs/for/master

<span class="token comment"># \u5982\u679C\u5F53\u524D\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u5B58\u5728\u8FFD\u8E2A\u5173\u7CFB\uFF0C\u5219\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F\u90FD\u53EF\u4EE5\u7701\u7565\uFF0C\u5C06\u5F53\u524D\u5206\u652F\u63A8\u9001\u5230origin\u4E3B\u673A\u7684\u5BF9\u5E94\u5206\u652F</span>
<span class="token function">git</span> push origin

<span class="token comment"># \u5982\u679C\u5F53\u524D\u5206\u652F\u53EA\u6709\u4E00\u4E2A\u8FDC\u7A0B\u5206\u652F\uFF0C\u90A3\u4E48\u4E3B\u673A\u540D\u90FD\u53EF\u4EE5\u7701\u7565\uFF0C\u5F62\u5982 git push\uFF0C\u53EF\u4EE5\u4F7F\u7528git branch -r \uFF0C\u67E5\u770B\u8FDC\u7A0B\u7684\u5206\u652F\u540D</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="git-\u5408\u5E76\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#git-\u5408\u5E76\u76F8\u5173" aria-hidden="true">#</a> Git \u5408\u5E76\u76F8\u5173</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># git\u53D6\u6D88\u5408\u5E76</span>
<span class="token function">git</span> merge --abort
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="git-\u8C03\u6574\u6587\u4EF6\u5927\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#git-\u8C03\u6574\u6587\u4EF6\u5927\u5C0F\u5199" aria-hidden="true">#</a> Git \u8C03\u6574\u6587\u4EF6\u5927\u5C0F\u5199</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> fileName
<span class="token comment"># \u6216</span>
<span class="token function">git</span> <span class="token function">rm</span> \u2013r *
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5B9E\u7528\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u7528\u6848\u4F8B" aria-hidden="true">#</a> \u5B9E\u7528\u6848\u4F8B</h2><ul><li><h3 id="git-\u5982\u4F55\u628A\u5206\u652F\u4EE3\u7801\u5408\u5E76\u5230-master-\u4E3B\u5206\u652F\u4E0A" tabindex="-1"><a class="header-anchor" href="#git-\u5982\u4F55\u628A\u5206\u652F\u4EE3\u7801\u5408\u5E76\u5230-master-\u4E3B\u5206\u652F\u4E0A" aria-hidden="true">#</a> git \u5982\u4F55\u628A\u5206\u652F\u4EE3\u7801\u5408\u5E76\u5230 master \u4E3B\u5206\u652F\u4E0A</h3></li></ul><ol><li><p>\u9996\u5148\u5207\u6362\u5230\u5206\u652F\uFF1A</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote></li><li><p>\u4F7F\u7528 git pull \u628A\u5206\u652F\u4EE3\u7801 pull \u4E0B\u6765:</p><blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote></li><li><p>\u5207\u6362\u5230\u4E3B\u5206\u652F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u628A\u5206\u652F\u7684\u4EE3\u7801 merge \u5230\u4E3B\u5206\u652F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> merge dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>git push \u63A8\u4E0A\u53BB:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ol>`,25);function w(G,q){const a=l("ExternalLinkIcon");return p(),r(t,null,[b,u,n("p",null,[n("a",m,[d,e(a)])]),n("p",null,[n("a",g,[h,e(a)])]),n("p",null,[n("a",k,[v,e(a)])]),n("p",null,[n("a",f,[_,e(a)])]),x],64)}var V=i(o,[["render",w]]);export{V as default};
