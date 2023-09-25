import{_ as d,r as i,o,c as t,a as e,b as n,d as s,e as r}from"./app-33e08406.js";const c={},l=r('<h1 id="使用nginx及docker部署code-server" tabindex="-1"><a class="header-anchor" href="#使用nginx及docker部署code-server" aria-hidden="true">#</a> 使用nginx及Docker部署Code Server</h1><h2 id="docker启动code-server" tabindex="-1"><a class="header-anchor" href="#docker启动code-server" aria-hidden="true">#</a> Docker启动Code Server</h2><h3 id="创建目录挂载目录" tabindex="-1"><a class="header-anchor" href="#创建目录挂载目录" aria-hidden="true">#</a> 创建目录挂载目录</h3><p>以挂在目录为test目录为例</p><h4 id="创建及配置config文件" tabindex="-1"><a class="header-anchor" href="#创建及配置config文件" aria-hidden="true">#</a> 创建及配置config文件</h4>',5),p={href:"https://coder.com/docs/code-server/latest/FAQ#how-does-the-config-file-work",target:"_blank",rel:"noopener noreferrer"},u=r(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># \\test\\.config\\code-server\\config.yaml</span>

<span class="token key atrule">bind-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8080</span>
<span class="token key atrule">auth</span><span class="token punctuation">:</span> none
<span class="token key atrule">cert</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>项目文件为地址为：\\test\\project</p></blockquote><h4 id="启动docker" tabindex="-1"><a class="header-anchor" href="#启动docker" aria-hidden="true">#</a> 启动docker</h4>`,3),v={href:"https://coder.com/docs/code-server/latest/install",target:"_blank",rel:"noopener noreferrer"},h=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> code-server <span class="token parameter variable">-p</span> <span class="token number">127.0</span>.0.1:8080:8080 <span class="token parameter variable">-auth</span> none <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> &quot;/test:/home/coder/
  codercom/code-server:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>code-server默认需要密码访问可通过配置config文件<code>auth: none</code>去除登录校验<br> 或者在启动命令时添加<code>-auth none</code></p></blockquote><h2 id="使用nginx代理-同时代理http和websocket请求" tabindex="-1"><a class="header-anchor" href="#使用nginx代理-同时代理http和websocket请求" aria-hidden="true">#</a> 使用Nginx代理(同时代理http和websocket请求)</h2>`,3),b={href:"https://coder.com/docs/code-server/latest/guide#using-lets-encrypt-with-nginx",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/coder/code-server/issues/6014",target:"_blank",rel:"noopener noreferrer"},_=r(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http {
  # 自定义变量 $connection_upgrade
  map $http_upgrade $connection_upgrade {
          default Upgrade;
          &#39;&#39;      close;
  }

  map $host $docker_host {
    default 192.168.50.230;
  }

  server {
    listen 10073;
    location / {
        proxy_pass http://$docker_host:10073;
        proxy_set_header HOST $host;
        proxy_set_header X-Forwarded-Host $host:$server_port;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection upgrade;
        proxy_set_header Accept-Encoding gzip;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k=e("br",null,null,-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Forwarded-For",target:"_blank",rel:"noopener noreferrer"},f=r(`<h2 id="两服务器目录文件的数据同步" tabindex="-1"><a class="header-anchor" href="#两服务器目录文件的数据同步" aria-hidden="true">#</a> 两服务器目录文件的数据同步</h2><p>SSHFS（SSH Filesystem）是一个基于FUSE的文件系统客户端，用于通过SSH连接远程目录。SSHFS使用的是SFTP协议，它是SSH的一个子系统，在大多数SSH服务器上默认启用</p><p>与其他网络文件系统（如NFS和Samba）相比，SSHFS的优势在于它不需要在服务器端进行任何额外的配置。要使用SSHFS，您只需要SSH访问远程服务器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sshfs usr@host:/dir  /dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function x(S,y){const a=i("ExternalLinkIcon");return o(),t("div",null,[l,e("p",null,[e("a",p,[n("config文件配置"),s(a)])]),u,e("p",null,[e("a",v,[n("参考文档"),s(a)])]),h,e("p",null,[e("a",b,[n("nginx"),s(a)]),e("a",m,[n("websocket代理失败参考"),s(a)])]),_,e("blockquote",null,[e("p",null,[n("如果websocket请求用户校验一直无法通过可以尝试添加该配置解决问题,为向服务器提供更有用的客户端 IP 地址"),k,n(" 具体作用可参考"),e("a",g,[n("X-Forwarded-For"),s(a)])])]),f])}const H=d(c,[["render",x],["__file","code_server.html.vue"]]);export{H as default};
