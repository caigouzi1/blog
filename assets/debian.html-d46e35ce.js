import{_ as e,o as n,c as a,e as i}from"./app-5b42f1b0.js";const s={},r=i(`<h1 id="debian常用命令" tabindex="-1"><a class="header-anchor" href="#debian常用命令" aria-hidden="true">#</a> debian常用命令</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看debian版本</span>
<span class="token function">cat</span> /etc/debian_version 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改文件镜像源" tabindex="-1"><a class="header-anchor" href="#修改文件镜像源" aria-hidden="true">#</a> 修改文件镜像源</h2><blockquote><p>打开 /etc/apt/sources.list</p></blockquote><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>deb http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb http://mirrors.aliyun.com/debian-security buster/updates main
deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib

deb-src http://mirrors.aliyun.com/debian-security buster/updates main
deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[r];function t(c,l){return n(),a("div",null,d)}const b=e(s,[["render",t],["__file","debian.html.vue"]]);export{b as default};
