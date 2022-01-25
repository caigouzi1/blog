import{c as n}from"./app.201ad49a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u524D\u7AEF\u5E38\u7528\u4EE3\u7801\u5757" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5E38\u7528\u4EE3\u7801\u5757" aria-hidden="true">#</a> \u524D\u7AEF\u5E38\u7528\u4EE3\u7801\u5757</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const currency = (money, needDecimal = true) =&gt; {
  // \u683C\u5F0F\u5316\u8D27\u5E01\u663E\u793A
  if (isNaN(money)) {
    return 0;
  }
  let value = (&#39;&#39; + money).split(&#39;.&#39;);

  let num = value[0].replace(/\\d{1,3}(?=(\\d{3})+(\\.\\d*)?$)/g, &#39;$&amp;,&#39;);
  if (needDecimal === true &amp;&amp; value.length === 2) {
    // \u4E0D\u5E26\u5C0F\u6570\u4F4D(\u9ED8\u8BA4\u662F\u6709\u5C0F\u6570\u4F4D)
    num = num + &#39;.&#39; + value[1];
  }
  return num;
};

const fixedDecimal = (value, fixCount = 2) =&gt; {
  // \u683C\u5F0F\u5316\u5C0F\u6570\u4F4D\u6570
  return value ? value.toFixed(fixCount) : 0;
};


// \u4FDD\u7559\u4E00\u4F4D\u5C0F\u6570
export function formatNumber(x) {

 return parseFloat(Number(x).toFixed(1));

}



// \u5904\u7406\u5927\u6570\u5B57\u7684\u663E\u793A
export function CutNumber(x) {

 if (x === &#39;-&#39; || (!x &amp;&amp; x !== 0)) {

  return &#39;-&#39;;

 }

 if (x &gt;= 10000000) {

  return \`\${parseFloat((x / 10000000).toFixed(1))}KW\`;

 } else if (x &gt;= 10000) {

  return \`\${parseFloat((x / 10000).toFixed(1))}W\`;

 } else if (x &gt;= 1000) {

  return \`\${parseFloat((x / 1000).toFixed(1))}K\`;

 }

 return parseFloat(x);

}


// \u751F\u6210\u5E26get\u53C2\u6570\u7684url
export function makeUrl(uri, params) {

 const paramsArray = [];

 Object.keys(params).forEach(key =&gt; params[key] &amp;&amp; paramsArray.push(\`\${key}=\${params[key]}\`));

 if (uri.search(/\\?/) === -1) {

  uri += \`?\${paramsArray.join(&#39;&amp;&#39;)}\`;

 } else {

  uri += \`&amp;\${paramsArray.join(&#39;&amp;&#39;)}\`;

 }

 return uri;

}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h2 id="\u52A9\u624B\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u52A9\u624B\u51FD\u6570" aria-hidden="true">#</a> \u52A9\u624B\u51FD\u6570</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { Component } from &quot;react&quot;;


/* 
    React\u7EC4\u4EF6\u4E2D\u9700\u8981\u987A\u5E8F\u6267\u884C setState \u65F6, \u5E94\u8BE5\u4F7F\u7528\u8FD9\u4E2A\u5C01\u88C5, \u5C06\u56DE\u8C03\u5C01\u88C5\u4E3A Promise
    \u65B9\u4FBF\u4F7F\u7528 await \u987A\u5E8F\u6267\u884C
*/

export function $(context: Component): { setState(state: any): Promise&lt;void&gt; } {
  return {
    setState(state: any): Promise&lt;void&gt; {
      return new Promise(resolve =&gt; {
        context.setState(state, () =&gt; {
          resolve();
        });
      });
    }
  };
}


/* 
    \u5EF6\u65F6\u6267\u884C, \u5C06 setTimeout \u5C01\u88C5\u4E3A Promise, \u65B9\u4FBF\u5728\u5FAA\u73AF\u4E2D\u5B9E\u73B0\u8F6E\u8BE2\u64CD\u4F5C
    \u4F7F\u7528 await sleep \u7C7B\u4F3C\u5176\u4ED6\u8BED\u8A00\u7684 sleep \u64CD\u4F5C
*/

export function sleep(seconds: number): Promise&lt;void&gt; {
  return new Promise(resolve =&gt; {
    setTimeout(resolve, seconds * 1000);
  });
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u52A8\u6001\u4FEE\u6539\u7F51\u7AD9\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u4FEE\u6539\u7F51\u7AD9\u56FE\u6807" aria-hidden="true">#</a> \u52A8\u6001\u4FEE\u6539\u7F51\u7AD9\u56FE\u6807</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const link = document.querySelector(&quot;link[rel*=&#39;icon&#39;]&quot;) || document.createElement(&#39;link&#39;);
    link.type = &#39;image/x-icon&#39;;
    link.rel = &#39;shortcut icon&#39;;
    link.href = data.systemFavicon;
    document.getElementsByTagName(&#39;head&#39;)[0].appendChild(link);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u95EE\u9898\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u5904\u7406" aria-hidden="true">#</a> \u95EE\u9898\u5904\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u56FE\u7247403
&lt;meta name=&quot;referrer&quot; content=&quot;no-referrer&quot; /&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><h2 id="\u57FA\u7840\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u51FD\u6570" aria-hidden="true">#</a> \u57FA\u7840\u51FD\u6570</h2><h3 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h3><h4 id="\u9F20\u6807\u53F3\u51FB-\u53F3\u952E" tabindex="-1"><a class="header-anchor" href="#\u9F20\u6807\u53F3\u51FB-\u53F3\u952E" aria-hidden="true">#</a> \u9F20\u6807\u53F3\u51FB\uFF08\u53F3\u952E\uFF09</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7ED1\u5B9A\u53F3\u51FB\u4E8B\u4EF6</span>
<span class="token function">bindEvent</span><span class="token punctuation">(</span>divChess<span class="token punctuation">,</span> <span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u7981\u6B62\u9F20\u6807\u53F3\u952E(\u53F3\u51FB)\u5F39\u51FA\u9009\u9879\u5361</span>
    divChess<span class="token punctuation">.</span><span class="token function-variable function">oncontextmenu</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
    <span class="token keyword">let</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target
    <span class="token comment">// \u5224\u65AD\u662F\u5426\u4E3A\u53F3\u51FB\u64CD\u4F5C</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>button<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;cell&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">toggleClass</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token string">&#39;flag&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u5DE5\u5177\u51FD\u6570\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177\u51FD\u6570\u96C6\u5408" aria-hidden="true">#</a> \u5DE5\u5177\u51FD\u6570\u96C6\u5408</h2><h3 id="dom\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#dom\u64CD\u4F5C" aria-hidden="true">#</a> DOM\u64CD\u4F5C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6\u9875\u9762\u5143\u7D20</span>
<span class="token keyword">var</span> <span class="token function-variable function">e</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ED9\u7236\u5143\u7D20\u7684\u5B50\u8282\u70B9\u6DFB\u52A0\u5185\u5BB9</span>
<span class="token keyword">var</span> <span class="token function-variable function">appendHtml</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">&#39;beforeend&#39;</span><span class="token punctuation">,</span> html<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ED1\u5B9A\u4E8B\u4EF6</span>
<span class="token keyword">var</span> <span class="token function-variable function">bindEvent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> eventName<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5F00\u5173\u67D0\u4E00\u4E2A\u7C7B</span>
<span class="token keyword">var</span> <span class="token function-variable function">toggleClass</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> className</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="javascript\u529F\u80FD\u5757" tabindex="-1"><a class="header-anchor" href="#javascript\u529F\u80FD\u5757" aria-hidden="true">#</a> JavaScript\u529F\u80FD\u5757</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6253\u5370\u663E\u793A\u7ED3\u679C</span>
<span class="token keyword">var</span> log <span class="token operator">=</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>console<span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE1 - num \u4E4B\u95F4\u7684\u6570\u5B57\uFF08 \u5305\u62EC num \uFF09</span>
<span class="token keyword">function</span> <span class="token function">getRandNum</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,18);function p(t,l){return e}var u=s(a,[["render",p]]);export{u as default};
