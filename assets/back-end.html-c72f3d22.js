import{_ as t,O as d,P as c,Q as n,a3 as a,a4 as s,a5 as i,E as r}from"./framework-9b1ac325.js";const o={},l=n("h1",{id:"php常用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#php常用","aria-hidden":"true"},"#"),a(" php常用")],-1),p=n("h2",{id:"文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文档","aria-hidden":"true"},"#"),a(" 文档")],-1),u={href:"https://laravel-china.github.io/php-the-right-way/",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数" aria-hidden="true">#</a> 常用函数</h2><h3 id="时间函数" tabindex="-1"><a class="header-anchor" href="#时间函数" aria-hidden="true">#</a> 时间函数</h3><h4 id="strtotime" tabindex="-1"><a class="header-anchor" href="#strtotime" aria-hidden="true">#</a> strtotime()</h4><p>将任何字符串的日期时间描述解析为 Unix 时间戳</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;2018-01-18 08:08:08&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 将指定日期转成时间戳</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="php-misc-杂项函数" tabindex="-1"><a class="header-anchor" href="#php-misc-杂项函数" aria-hidden="true">#</a> PHP Misc. 杂项函数</h3><h4 id="uniqid" tabindex="-1"><a class="header-anchor" href="#uniqid" aria-hidden="true">#</a> uniqid()</h4><p>uniqid() 函数基于以微秒计的当前时间，生成一个唯一的 ID。</p>`,8),v={href:"https://www.runoob.com/php/func-string-md5.html",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"接口文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#接口文档","aria-hidden":"true"},"#"),a(" 接口文档")],-1),b=n("h3",{id:"apidoc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#apidoc","aria-hidden":"true"},"#"),a(" apidoc")],-1),k={href:"http://apidocjs.com/",target:"_blank",rel:"noopener noreferrer"},x=i(`<h4 id="安装apidoc" tabindex="-1"><a class="header-anchor" href="#安装apidoc" aria-hidden="true">#</a> 安装apiDoc</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install apidoc -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="文档示例" tabindex="-1"><a class="header-anchor" href="#文档示例" aria-hidden="true">#</a> 文档示例</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token doc-comment comment">/**
     * <span class="token keyword">@api</span>               <span class="token punctuation">{</span>post<span class="token punctuation">}</span> xx/xx/all 列表
     * <span class="token keyword">@apiName</span>           sort1
     * <span class="token keyword">@apiGroup</span>          xx
     * <span class="token keyword">@apiDescription</span>    xx
     *
     * <span class="token keyword">@apiSuccess</span> <span class="token punctuation">{</span>String<span class="token punctuation">}</span>  result 结果 suc-成功，error-失败
     * <span class="token keyword">@apiSuccess</span> <span class="token punctuation">{</span>String<span class="token punctuation">}</span>  msg 返回信息
     * <span class="token keyword">@apiSuccess</span> <span class="token punctuation">{</span>String<span class="token punctuation">}</span>  errorCode 错误编码
     * <span class="token keyword">@apiSuccess</span> <span class="token punctuation">{</span>Object[]<span class="token punctuation">}</span>  data 返回数据
     * <span class="token keyword">@apiSuccess</span> <span class="token punctuation">{</span>Number<span class="token punctuation">}</span>  data.id 编码
     * <span class="token keyword">@apiSuccess</span> <span class="token punctuation">{</span>String<span class="token punctuation">}</span>  data.xx xx
     *
     *
     * <span class="token keyword">@apiSuccessExample</span> 示例
     * <span class="token punctuation">{</span>
     *      result: &quot;suc&quot;,
     *      msg: &quot;操作成功&quot;,
     *      errorCode: 0,
     *      data: [
     *          <span class="token punctuation">{</span>
     *              id: 1,
     *              regular: &#39;XXX&#39;,
     *          <span class="token punctuation">}</span>,
     *          <span class="token punctuation">{</span>
     *              id: 2,
     *              regular: &#39;XXX&#39;,
     *          <span class="token punctuation">}</span>,
     *          ......
     *      ]
     * <span class="token punctuation">}</span>
     */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生成文档" tabindex="-1"><a class="header-anchor" href="#生成文档" aria-hidden="true">#</a> 生成文档</h4><p>cd到<strong>apidoc.json</strong>所在路径（即项目根目录）执行如下命令即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apidoc -i src/ -o apidoc/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function g(_,f){const e=r("ExternalLinkIcon");return d(),c("div",null,[l,p,n("p",null,[n("a",u,[a("https://laravel-china.github.io/php-the-right-way/"),s(e)])]),h,n("p",null,[a("**注释：**由于基于系统时间，通过该函数生成的 ID 不是最佳的。如需生成绝对唯一的 ID，请使用 "),n("a",v,[a("md5()"),s(e)]),a(" 函数。")]),m,b,n("p",null,[a("官方文档"),n("a",k,[a("http://apidocjs.com"),s(e)])]),x])}const y=t(o,[["render",g],["__file","back-end.html.vue"]]);export{y as default};
