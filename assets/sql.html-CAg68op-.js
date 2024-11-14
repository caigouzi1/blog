import{_ as i,c as a,a as l,o as n}from"./app-B26mVNhK.js";const e={};function h(t,s){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="sql使用" tabindex="-1"><a class="header-anchor" href="#sql使用"><span>SQL使用</span></a></h1><h2 id="导出mysql数据库中的表结构" tabindex="-1"><a class="header-anchor" href="#导出mysql数据库中的表结构"><span>导出MySQL数据库中的表结构</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> COLUMN_NAME 列名,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> COLUMN_TYPE 数据类型,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> DATA_TYPE 字段类型,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> IF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(IS_NULLABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;NO&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;否&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;是&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 是否为空,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> COLUMN_DEFAULT 默认值,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> COLUMN_COMMENT 备注,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> TABLE_NAME  表名</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  INFORMATION_SCHEMA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">COLUMNS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  TABLE_SCHEMA </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;数据库名称&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">AND</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> TABLE_NAME </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;您的表名称&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将查询结果导出即可。</p><blockquote><p>MySQL的INFORMATION_SCHEMA为系统默认库，存储数据库相关信息。<br> COLUMNS表： 存储设置的列的相关信息。</p></blockquote><h2 id="mysql数据备份和恢复" tabindex="-1"><a class="header-anchor" href="#mysql数据备份和恢复"><span>MySQL数据备份和恢复</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 备份</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysqldump</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 用户名</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 数据库名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">备份文件名.sql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysqldump</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 用户名</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 数据库名</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 表名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">备份文件名.sql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 恢复</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u用户名</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 数据库名</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">备份文件名.sql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const p=i(e,[["render",h],["__file","sql.html.vue"]]),d=JSON.parse('{"path":"/manual/sql.html","title":"SQL使用","lang":"zh-CN","frontmatter":{"date":"2023-08-15T00:00:00.000Z","category":"开发者手册","tag":["SQL"]},"headers":[{"level":2,"title":"导出MySQL数据库中的表结构","slug":"导出mysql数据库中的表结构","link":"#导出mysql数据库中的表结构","children":[]},{"level":2,"title":"MySQL数据备份和恢复","slug":"mysql数据备份和恢复","link":"#mysql数据备份和恢复","children":[]}],"git":{"createdTime":1731564567000,"updatedTime":1731564567000},"readingTime":{"minutes":0.6,"words":179},"filePathRelative":"manual/sql.md","localizedDate":"2023年8月15日"}');export{p as comp,d as data};