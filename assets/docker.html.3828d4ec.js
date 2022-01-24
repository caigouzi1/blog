import{d as n}from"./app.f0be45fb.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=n(`<h2 id="docker-nginx\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-nginx\u90E8\u7F72" aria-hidden="true">#</a> Docker Nginx\u90E8\u7F72</h2><h3 id="\u670D\u52A1\u5668\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u5730\u5740" aria-hidden="true">#</a> \u670D\u52A1\u5668\u5730\u5740</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vm@10.2.24.41 
P@ssw0rd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="nginx\u6587\u4EF6\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#nginx\u6587\u4EF6\u4EE3\u7406" aria-hidden="true">#</a> nginx\u6587\u4EF6\u4EE3\u7406</h3><ul><li>docker-compose.yaml\u6DFB\u52A0\u8F6F\u8FDE\u63A5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    version: &#39;3.5&#39;
    services:
      web:
        container_name: nginx
        image: nginx:1.13
        restart: always
        ports:
          - 80:80
          - 443:443
        volumes:
          - ./nginx/conf.d:/etc/nginx/conf.d:ro
          - ./nginx/ssl:/etc/nginx/ssl:ro
          - ./nginx/static:/etc/nginx/static:ro
          - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
          - /home/vm/www/innet:/var/www/html:ro
    networks:
      default:
        external: true
        name: appNet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  // \u91CD\u542Fdocker
  docker-compose restart
  // docker\u5217\u8868
  docker container ls \u6216 (docker ps)
  //\u8FDB\u5165docker
  docker exec -it e26420ec272c /bin/bash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,7);function r(l,i){return a}var b=e(s,[["render",r]]);export{b as default};
