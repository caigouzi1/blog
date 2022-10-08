import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,e as a}from"./app.1e1c0da4.js";const s={},r=a(`<h1 id="debian\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#debian\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> debian\u5E38\u7528\u547D\u4EE4</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Bdebian\u7248\u672C</span>
<span class="token function">cat</span> /etc/debian_version 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u6587\u4EF6\u955C\u50CF\u6E90" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u6587\u4EF6\u955C\u50CF\u6E90" aria-hidden="true">#</a> \u4FEE\u6539\u6587\u4EF6\u955C\u50CF\u6E90</h2><blockquote><p>\u6253\u5F00 /etc/apt/sources.list</p></blockquote><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>deb http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb http://mirrors.aliyun.com/debian-security buster/updates main
deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib

deb-src http://mirrors.aliyun.com/debian-security buster/updates main
deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6267\u884C</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[r];function t(c,o){return n(),i("div",null,d)}const u=e(s,[["render",t],["__file","debian.html.vue"]]);export{u as default};
