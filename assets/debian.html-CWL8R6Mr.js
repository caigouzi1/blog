import{_ as e,o as n,c as a,e as i}from"./app-DG-nh626.js";const s={},t=i(`<h1 id="debian常用命令" tabindex="-1"><a class="header-anchor" href="#debian常用命令"><span>debian常用命令</span></a></h1><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看debian版本</span>
<span class="token function">cat</span> /etc/debian_version 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改文件镜像源" tabindex="-1"><a class="header-anchor" href="#修改文件镜像源"><span>修改文件镜像源</span></a></h2><blockquote><p>打开 /etc/apt/sources.list</p></blockquote><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>deb http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb http://mirrors.aliyun.com/debian-security buster/updates main
deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib

deb-src http://mirrors.aliyun.com/debian-security buster/updates main
deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 执行</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[t];function r(c,l){return n(),a("div",null,d)}const b=e(s,[["render",r],["__file","debian.html.vue"]]),u=JSON.parse('{"path":"/linux/debian.html","title":"debian常用命令","lang":"zh-CN","frontmatter":{"date":"2021-07-08T00:00:00.000Z","category":"后端","tag":["linux","debian"]},"headers":[{"level":2,"title":"修改文件镜像源","slug":"修改文件镜像源","link":"#修改文件镜像源","children":[]}],"git":{"createdTime":1708520217000,"updatedTime":1708520217000},"readingTime":{"minutes":0.36,"words":108},"filePathRelative":"linux/debian.md","localizedDate":"2021年7月8日"}');export{b as comp,u as data};
