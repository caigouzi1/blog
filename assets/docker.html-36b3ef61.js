import{_ as a,o as s,c as e,f as i,a as n,b as c,e as t}from"./app-33e08406.js";const l={},r=n("h1",{id:"docker-使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-使用","aria-hidden":"true"},"#"),c(" Docker 使用")],-1),d=t(`<h2 id="docker环境安装" tabindex="-1"><a class="header-anchor" href="#docker环境安装" aria-hidden="true">#</a> Docker环境安装</h2><h3 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装" aria-hidden="true">#</a> Docker安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># CenterOS 安装</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">docker</span> <span class="token parameter variable">--mirror</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker支持远程2375端口访问" tabindex="-1"><a class="header-anchor" href="#docker支持远程2375端口访问" aria-hidden="true">#</a> Docker支持远程2375端口访问</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可查看docker启动服务配置文件的路径</span>
systemctl status docker.service

<span class="token function">vim</span> /lib/systemd/system/docker.service

<span class="token comment"># docker.service 文件启动命令添加 -H tcp://0.0.0.0:2375</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/dockerd <span class="token parameter variable">-H</span> tcp://0.0.0.0:2375  <span class="token parameter variable">-H</span> fd:// <span class="token parameter variable">--containerd</span><span class="token operator">=</span>/run/containerd/containerd.sock

<span class="token comment"># 重新载入服务信息</span>
systemctl daemon-reload

<span class="token comment"># 重启docker服务</span>
systemctl restart docker.service

<span class="token comment"># 查看端口是否启动成功</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i:2375</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker可视化工具" tabindex="-1"><a class="header-anchor" href="#docker可视化工具" aria-hidden="true">#</a> Docker可视化工具</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token parameter variable">-p</span> <span class="token number">8000</span>:8000 <span class="token parameter variable">--name</span> portainer <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/portainer/data:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h3><ol><li><p>执行docker ps 等命令时出现：<code>Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?</code>提示</p><p>该问题为docker没有正常启动，重新启动即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl restart docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="构建并启动docker镜像" tabindex="-1"><a class="header-anchor" href="#构建并启动docker镜像" aria-hidden="true">#</a> 构建并启动docker镜像</h2><p>以下以构建一个flask服务为例</p><h3 id="flask服务文件" tabindex="-1"><a class="header-anchor" href="#flask服务文件" aria-hidden="true">#</a> flask服务文件</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask
app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello, World!&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建dockerfile文件" tabindex="-1"><a class="header-anchor" href="#创建dockerfile文件" aria-hidden="true">#</a> 创建<code>Dockerfile</code>文件</h3><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>FROM python:latest

COPY ./app/  /app/

RUN pip install Flask

ENV FLASK_APP=&quot;/app/app.py&quot;

EXPOSE 9000

# CMD [&quot;python&quot;, &quot;-m flask run&quot;]
CMD flask run --host=0.0.0.0 --port=9000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建docker-image" tabindex="-1"><a class="header-anchor" href="#创建docker-image" aria-hidden="true">#</a> 创建Docker Image</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker build  -t ImageName:Tag .</span>
<span class="token function">docker</span> build  <span class="token parameter variable">-t</span> test:v3 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行该image" tabindex="-1"><a class="header-anchor" href="#运行该image" aria-hidden="true">#</a> 运行该Image</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 test:v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nginx文件代理" tabindex="-1"><a class="header-anchor" href="#nginx文件代理" aria-hidden="true">#</a> nginx文件代理</h2><ul><li>docker-compose.yaml添加软连接</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.5&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function o(p,u){return s(),e("div",null,[r,i(" ## 服务器地址\n\n```bash\nvm@10.2.24.41 \nP@ssw0rd\n``` "),d])}const k=a(l,[["render",o],["__file","docker.html.vue"]]);export{k as default};
