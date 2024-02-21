import{_ as e,o as s,c as i,e as n}from"./app-DG-nh626.js";const a={},l=n(`<h1 id="服务器添加密钥连接" tabindex="-1"><a class="header-anchor" href="#服务器添加密钥连接"><span>服务器添加密钥连接</span></a></h1><h2 id="本地生成密钥和公钥" tabindex="-1"><a class="header-anchor" href="#本地生成密钥和公钥"><span>本地生成密钥和公钥</span></a></h2><ol><li>执行<code>ssh-keygen -t rsa -C &quot;内容可随意输入&quot;</code>然后多次按回车</li></ol><blockquote><p>如需要管理多个密钥 ssh-keygen -t rsa -C &#39;xxxxx@youremail.com&#39; -f ~/.ssh/xxx_id_rsa 生成并配置config文件</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa

# github

Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><ol><li>在windows的用户目录下如<code>C:\\Users\\xxx\\.ssh</code>文件夹下查看相关文件</li></ol><blockquote><p>id_rsa.pub 为公钥文件<br> id_rsa 为私钥文件</p></blockquote><h2 id="将公钥上传至服务器" tabindex="-1"><a class="header-anchor" href="#将公钥上传至服务器"><span>将公钥上传至服务器</span></a></h2><ol><li><p>进入用户目录<code>cd ~</code>或<code>cd /root</code></p></li><li><p>执行<code>ls -a</code>可看到.ssh文件夹</p></li><li><p>将公钥文件id_rsa.pub上传至用户目录</p></li><li><p>依次执行一下命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mv</span> id_rsa.pub .ssh
<span class="token builtin class-name">cd</span> .ssh
<span class="token function">cat</span> id_rsa.pub <span class="token operator">&gt;&gt;</span> authorized_keys
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">600</span> authorized_keys
<span class="token function">service</span> sshd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="ssh支持密码连接" tabindex="-1"><a class="header-anchor" href="#ssh支持密码连接"><span>ssh支持密码连接</span></a></h2><ol><li><p>进入<code>/etc/ssh/sshd_config</code>目录配置</p><div class="language-ssh line-numbers-mode" data-ext="ssh" data-title="ssh"><pre class="language-ssh"><code># 允许root用户通过ssh登录
PermitRootLogin yes

# 允许使用ssh权限登录
RSAAuthentication yes
PubkeyAuthentication yes

# 使用密码登录 默认为yes
# PasswordAuthentication no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启ssh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">service</span> sshd restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="git支持ssh" tabindex="-1"><a class="header-anchor" href="#git支持ssh"><span>git支持SSH</span></a></h2><ol><li>将公钥文件上传到用户设置中的SSH keys管理中</li><li>将私钥文件上传到服务器上的用户目录并移动到<code>.ssh</code>文件夹中:<code>mv id_rsa .ssh</code></li><li>执行<code>chmod 0600 ~/.ssh/id_rsa</code>命令降低文件权限</li><li><code>ssh -T git@github.com</code>或<code>ssh -T git@gitee.com</code>测试密钥是否生效</li><li>修改git远程仓库地址<code>git remote set-url origin xxx</code></li></ol><h2 id="问题排查" tabindex="-1"><a class="header-anchor" href="#问题排查"><span>问题排查</span></a></h2><blockquote><p>在/var/log/secure可以看到登陆的情况</p></blockquote>`,14),d=[l];function t(c,o){return s(),i("div",null,d)}const h=e(a,[["render",t],["__file","ssh-keygen.html.vue"]]),u=JSON.parse('{"path":"/linux/ssh-keygen.html","title":"服务器添加密钥连接","lang":"zh-CN","frontmatter":{"date":"2023-04-18T00:00:00.000Z","category":"后端","tag":["ssh"]},"headers":[{"level":2,"title":"本地生成密钥和公钥","slug":"本地生成密钥和公钥","link":"#本地生成密钥和公钥","children":[]},{"level":2,"title":"将公钥上传至服务器","slug":"将公钥上传至服务器","link":"#将公钥上传至服务器","children":[]},{"level":2,"title":"ssh支持密码连接","slug":"ssh支持密码连接","link":"#ssh支持密码连接","children":[]},{"level":2,"title":"git支持SSH","slug":"git支持ssh","link":"#git支持ssh","children":[]},{"level":2,"title":"问题排查","slug":"问题排查","link":"#问题排查","children":[]}],"git":{"createdTime":1708520217000,"updatedTime":1708520217000},"readingTime":{"minutes":1.25,"words":375},"filePathRelative":"linux/ssh-keygen.md","localizedDate":"2023年4月18日"}');export{h as comp,u as data};
