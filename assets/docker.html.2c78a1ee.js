import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.1e1c0da4.js";const t={},i=e(`<h1 id="docker-nginx\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-nginx\u90E8\u7F72" aria-hidden="true">#</a> Docker Nginx\u90E8\u7F72</h1><h2 id="\u670D\u52A1\u5668\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u5730\u5740" aria-hidden="true">#</a> \u670D\u52A1\u5668\u5730\u5740</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vm@10.2.24.41 
P@ssw0rd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx\u6587\u4EF6\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#nginx\u6587\u4EF6\u4EE3\u7406" aria-hidden="true">#</a> nginx\u6587\u4EF6\u4EE3\u7406</h2><ul><li>docker-compose.yaml\u6DFB\u52A0\u8F6F\u8FDE\u63A5</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.5&#39;</span>
    <span class="token key atrule">services</span><span class="token punctuation">:</span>
      <span class="token key atrule">web</span><span class="token punctuation">:</span>
        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token number">1.13</span>
        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token datetime number">80:80</span>
          <span class="token punctuation">-</span> 443<span class="token punctuation">:</span><span class="token number">443</span>
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> ./nginx/conf.d<span class="token punctuation">:</span>/etc/nginx/conf.d<span class="token punctuation">:</span>ro
          <span class="token punctuation">-</span> ./nginx/ssl<span class="token punctuation">:</span>/etc/nginx/ssl<span class="token punctuation">:</span>ro
          <span class="token punctuation">-</span> ./nginx/static<span class="token punctuation">:</span>/etc/nginx/static<span class="token punctuation">:</span>ro
          <span class="token punctuation">-</span> ./nginx/nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf<span class="token punctuation">:</span>ro
          <span class="token punctuation">-</span> /home/vm/www/innet<span class="token punctuation">:</span>/var/www/html<span class="token punctuation">:</span>ro
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span>
        <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> appNet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  // \u91CD\u542Fdocker
  <span class="token function">docker-compose</span> restart
  // docker\u5217\u8868
  <span class="token function">docker</span> container <span class="token function">ls</span> \u6216 <span class="token punctuation">(</span>docker <span class="token function">ps</span><span class="token punctuation">)</span>
  //\u8FDB\u5165docker
  <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> e26420ec272c /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[i];function l(p,o){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","docker.html.vue"]]);export{d as default};
