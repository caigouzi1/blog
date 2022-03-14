import{c as n}from"./app.31e3b25e.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=n(`<h1 id="debian\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#debian\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> debian\u5E38\u7528\u547D\u4EE4</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Bdebian\u7248\u672C</span>
<span class="token function">cat</span> /etc/debian_version 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4FEE\u6539\u6587\u4EF6\u955C\u50CF\u6E90" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u6587\u4EF6\u955C\u50CF\u6E90" aria-hidden="true">#</a> \u4FEE\u6539\u6587\u4EF6\u955C\u50CF\u6E90</h3><blockquote><p>\u6253\u5F00 /etc/apt/sources.list</p></blockquote><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>deb http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb http://mirrors.aliyun.com/debian-security buster/updates main
deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib

deb-src http://mirrors.aliyun.com/debian-security buster/updates main
deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6267\u884C</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6);function r(i,t){return a}var o=e(s,[["render",r]]);export{o as default};
