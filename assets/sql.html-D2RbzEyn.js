import{_ as s,o as a,c as n,e}from"./app-BkhB0rOW.js";const l={},t=e(`<h1 id="sql使用" tabindex="-1"><a class="header-anchor" href="#sql使用"><span>SQL使用</span></a></h1><h2 id="导出mysql数据库中的表结构" tabindex="-1"><a class="header-anchor" href="#导出mysql数据库中的表结构"><span>导出MySQL数据库中的表结构</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
 COLUMN_NAME 列名<span class="token punctuation">,</span>
 COLUMN_TYPE 数据类型<span class="token punctuation">,</span>
 DATA_TYPE 字段类型<span class="token punctuation">,</span>
 <span class="token keyword">IF</span><span class="token punctuation">(</span>IS_NULLABLE<span class="token operator">=</span><span class="token string">&#39;NO&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;否&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;是&#39;</span><span class="token punctuation">)</span> 是否为空<span class="token punctuation">,</span>
 COLUMN_DEFAULT 默认值<span class="token punctuation">,</span>
 COLUMN_COMMENT 备注<span class="token punctuation">,</span>
 TABLE_NAME  表名
<span class="token keyword">FROM</span>
  INFORMATION_SCHEMA<span class="token punctuation">.</span><span class="token keyword">COLUMNS</span> 
<span class="token keyword">WHERE</span> 
  TABLE_SCHEMA <span class="token operator">=</span> <span class="token string">&#39;数据库名称&#39;</span> 
<span class="token operator">AND</span> TABLE_NAME <span class="token operator">=</span> <span class="token string">&#39;您的表名称&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将查询结果导出即可。</p><blockquote><p>MySQL的INFORMATION_SCHEMA为系统默认库，存储数据库相关信息。<br> COLUMNS表： 存储设置的列的相关信息。</p></blockquote><h2 id="mysql数据备份和恢复" tabindex="-1"><a class="header-anchor" href="#mysql数据备份和恢复"><span>MySQL数据备份和恢复</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 备份</span>
mysqldump <span class="token parameter variable">-u</span> 用户名 <span class="token parameter variable">-p</span> 数据库名 <span class="token operator">&gt;</span> 备份文件名.sql
mysqldump <span class="token parameter variable">-u</span> 用户名 <span class="token parameter variable">-p</span> 数据库名 表名 <span class="token operator">&gt;</span> 备份文件名.sql

<span class="token comment"># 恢复</span>
mysql -u用户名 <span class="token parameter variable">-p</span> 数据库名 <span class="token operator">&lt;</span> 备份文件名.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[t];function p(c,o){return a(),n("div",null,i)}const d=s(l,[["render",p],["__file","sql.html.vue"]]),u=JSON.parse('{"path":"/manual/sql.html","title":"SQL使用","lang":"zh-CN","frontmatter":{"date":"2023-08-15T00:00:00.000Z","category":"开发者手册","tag":["SQL"]},"headers":[{"level":2,"title":"导出MySQL数据库中的表结构","slug":"导出mysql数据库中的表结构","link":"#导出mysql数据库中的表结构","children":[]},{"level":2,"title":"MySQL数据备份和恢复","slug":"mysql数据备份和恢复","link":"#mysql数据备份和恢复","children":[]}],"git":{"createdTime":1713519650000,"updatedTime":1713519650000},"readingTime":{"minutes":0.6,"words":179},"filePathRelative":"manual/sql.md","localizedDate":"2023年8月15日"}');export{d as comp,u as data};
