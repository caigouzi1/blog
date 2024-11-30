import{_ as i,c as a,a as e,o as n}from"./app-DGEpm61U.js";const l={};function t(h,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="可视化大屏" tabindex="-1"><a class="header-anchor" href="#可视化大屏"><span>可视化大屏</span></a></h1><ul><li><a href="https://www.pmdaniu.com/storages/123891/a6cfee2e80382b72a4c5ef27b35f99ec-70319/start.html?_d=Thu%20Dec%2001%202022%2009%3A19%3A18%20GMT%200800%20%28%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4%29%3F_d%3DThu%20Dec%2001%202022%2022%3A59%3A02%20GMT%200800%20%28%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4%29%3F_d%3DMon%20Dec%2012%202022%2010%3A58%3A01%20GMT%200800%20%28%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4%29?_d=Wed%20Jan%2004%202023%2010:07:22%20GMT+0800%20(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)#p=%E6%95%B0%E6%8D%AE%E5%85%B1%E4%BA%AB%E9%97%A8%E6%88%B7&amp;g=1" target="_blank" rel="noopener noreferrer">大屏原型图</a></li><li><a href="https://juejin.cn/post/7078932375127719966" target="_blank" rel="noopener noreferrer">ThreeJS 线相关</a></li><li><a href="https://juejin.cn/post/6844904016292347918" target="_blank" rel="noopener noreferrer">动画库</a></li><li><a href="https://wlada.github.io/vue-carousel-3d/guide/" target="_blank" rel="noopener noreferrer">3D轮播图</a></li><li><a href="http://www.dengguobi.com/?type=store" target="_blank" rel="noopener noreferrer">灯果可视化:可视化模板参考</a></li><li><a href="https://www.npmjs.com/package/@jiaminghi/data-view" target="_blank" rel="noopener noreferrer">DataV 可视化组件:边框、背景等</a></li></ul><h2 id="echarts图表" tabindex="-1"><a class="header-anchor" href="#echarts图表"><span>echarts图表</span></a></h2><p><a href="https://echarts.apache.org/zh/option.html#title" target="_blank" rel="noopener noreferrer">配置项</a><br><a href="https://echarts.apache.org/examples/zh/index.html" target="_blank" rel="noopener noreferrer">示例</a></p><h3 id="echarts配置渐变色" tabindex="-1"><a class="header-anchor" href="#echarts配置渐变色"><span>echarts配置渐变色</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;linear&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  x2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  y2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  colorStops</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    offset</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">color</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#FFD87580&#39;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 0% 处的颜色</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }, {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    offset</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">color</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#FFD87526&#39;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 100% 处的颜色</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  global</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 缺省为 false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考案例" tabindex="-1"><a class="header-anchor" href="#参考案例"><span>参考案例</span></a></h3><ul><li><a href="https://www.makeapie.cn/echarts" target="_blank" rel="noopener noreferrer">echarts社区</a></li><li><a href="https://www.isqqw.com/" target="_blank" rel="noopener noreferrer">echarts Demo集</a></li></ul>`,8)]))}const k=i(l,[["render",t],["__file","visualization.html.vue"]]),p=JSON.parse('{"path":"/front-end/visualization.html","title":"可视化大屏","lang":"zh-CN","frontmatter":{"date":"2023-01-04T00:00:00.000Z","category":"前端","tag":["大屏","echarts"]},"headers":[{"level":2,"title":"echarts图表","slug":"echarts图表","link":"#echarts图表","children":[{"level":3,"title":"echarts配置渐变色","slug":"echarts配置渐变色","link":"#echarts配置渐变色","children":[]},{"level":3,"title":"参考案例","slug":"参考案例","link":"#参考案例","children":[]}]}],"git":{"createdTime":1732934976000,"updatedTime":1732934976000},"readingTime":{"minutes":0.96,"words":289},"filePathRelative":"front-end/visualization.md","localizedDate":"2023年1月4日"}');export{k as comp,p as data};