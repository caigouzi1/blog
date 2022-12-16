import{_ as n,o as s,c as a,e}from"./app.312b74ab.js";const i={},t=e(`<h1 id="windows相关" tabindex="-1"><a class="header-anchor" href="#windows相关" aria-hidden="true">#</a> Windows相关</h1><h2 id="查看端口被占用情况并停止服务" tabindex="-1"><a class="header-anchor" href="#查看端口被占用情况并停止服务" aria-hidden="true">#</a> 查看端口被占用情况并停止服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看占用端口的进程</span>
<span class="token function">netstat</span> <span class="token parameter variable">-ano</span>

<span class="token function">netstat</span> -aon<span class="token operator">|</span>findstr <span class="token string">&quot;8080&quot;</span>

<span class="token comment"># 查看是哪个进程或者程序占用了 8081 端口</span>
tasklist<span class="token operator">|</span>findstr <span class="token string">&quot;4912&quot;</span>

<span class="token comment"># 结束进程（强制（/F参数）杀死 pid 为 4912 的所有进程包括子进程（/T参数）</span>
taskkill /T /F /PID <span class="token number">4912</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[t];function l(c,o){return s(),a("div",null,d)}const p=n(i,[["render",l],["__file","windows.html.vue"]]);export{p as default};
