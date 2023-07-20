import{_ as n,o as s,c as a,e}from"./app-e04fbb69.js";const t={},i=e(`<h1 id="docker-nginx部署" tabindex="-1"><a class="header-anchor" href="#docker-nginx部署" aria-hidden="true">#</a> Docker Nginx部署</h1><h2 id="服务器地址" tabindex="-1"><a class="header-anchor" href="#服务器地址" aria-hidden="true">#</a> 服务器地址</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vm@10.2.24.41 
P@ssw0rd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx文件代理" tabindex="-1"><a class="header-anchor" href="#nginx文件代理" aria-hidden="true">#</a> nginx文件代理</h2><ul><li>docker-compose.yaml添加软连接</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.5&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  // 重启docker
  <span class="token function">docker-compose</span> restart
  // docker列表
  <span class="token function">docker</span> container <span class="token function">ls</span> 或 <span class="token punctuation">(</span>docker <span class="token function">ps</span><span class="token punctuation">)</span>
  //进入docker
  <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> e26420ec272c /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[i];function l(p,o){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","docker.html.vue"]]);export{r as default};
