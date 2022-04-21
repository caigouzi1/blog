import{d as n}from"./app.d43b7911.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="docker-nginx\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-nginx\u90E8\u7F72" aria-hidden="true">#</a> Docker Nginx\u90E8\u7F72</h1><h2 id="\u670D\u52A1\u5668\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u5730\u5740" aria-hidden="true">#</a> \u670D\u52A1\u5668\u5730\u5740</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vm@10.2.24.41 
P@ssw0rd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="nginx\u6587\u4EF6\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#nginx\u6587\u4EF6\u4EE3\u7406" aria-hidden="true">#</a> nginx\u6587\u4EF6\u4EE3\u7406</h2><ul><li>docker-compose.yaml\u6DFB\u52A0\u8F6F\u8FDE\u63A5</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.5&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  // \u91CD\u542Fdocker
  <span class="token function">docker-compose</span> restart
  // docker\u5217\u8868
  <span class="token function">docker</span> container <span class="token function">ls</span> \u6216 <span class="token punctuation">(</span>docker <span class="token function">ps</span><span class="token punctuation">)</span>
  //\u8FDB\u5165docker
  <span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it e26420ec272c /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,7);function p(t,c){return e}var r=s(a,[["render",p],["__file","docker.html.vue"]]);export{r as default};
