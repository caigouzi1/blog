import{_ as n,o as s,c as a,e}from"./app.2086975c.js";const i={},t=e(`<h1 id="windows\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#windows\u76F8\u5173" aria-hidden="true">#</a> Windows\u76F8\u5173</h1><h2 id="\u67E5\u770B\u7AEF\u53E3\u88AB\u5360\u7528\u60C5\u51B5\u5E76\u505C\u6B62\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u7AEF\u53E3\u88AB\u5360\u7528\u60C5\u51B5\u5E76\u505C\u6B62\u670D\u52A1" aria-hidden="true">#</a> \u67E5\u770B\u7AEF\u53E3\u88AB\u5360\u7528\u60C5\u51B5\u5E76\u505C\u6B62\u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5360\u7528\u7AEF\u53E3\u7684\u8FDB\u7A0B</span>
<span class="token function">netstat</span> <span class="token parameter variable">-ano</span>

<span class="token function">netstat</span> -aon<span class="token operator">|</span>findstr <span class="token string">&quot;8080&quot;</span>

<span class="token comment"># \u67E5\u770B\u662F\u54EA\u4E2A\u8FDB\u7A0B\u6216\u8005\u7A0B\u5E8F\u5360\u7528\u4E86 8081 \u7AEF\u53E3</span>
tasklist<span class="token operator">|</span>findstr <span class="token string">&quot;4912&quot;</span>

<span class="token comment"># \u7ED3\u675F\u8FDB\u7A0B\uFF08\u5F3A\u5236\uFF08/F\u53C2\u6570\uFF09\u6740\u6B7B pid \u4E3A 4912 \u7684\u6240\u6709\u8FDB\u7A0B\u5305\u62EC\u5B50\u8FDB\u7A0B\uFF08/T\u53C2\u6570\uFF09</span>
taskkill /T /F /PID <span class="token number">4912</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[t];function l(c,o){return s(),a("div",null,d)}const p=n(i,[["render",l],["__file","windows.html.vue"]]);export{p as default};
