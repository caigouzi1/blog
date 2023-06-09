---
date: 2023-06-09
category: 开发者手册
tag:

- markdown
---

# markdown生成带左侧目录的Html

## 背景

近日工作中要开发一个用户帮助文档的页面，文档内容由其他同事使用markdown编写，然后使用iframe嵌套。为了页面清晰展示所有希望在左侧生成目录。

## 实现方式

1. 在markdown文件顶部引入下面的css

    > 由于我的编辑器配置 markdownlint 会自动处理链接地址，所以使用`markdownlint-disable-next-line`禁止校验

    ```md
    <!-- markdownlint-disable-next-line -->
    `@import "https://haogeshuohuanihaohaoting.github.io/static/mdCreateMenu.js"`
    <script src="https://haogeshuohuanihaohaoting.github.io/static/mdCreateMenu.js"></script>
    ```

1. 使用 VSCode中的`Markdown Preview Enhanced`插件导出成 html

## 使用markdown编辑器的预览模式实现

  该方案可随便找一个markdown编辑器组件实现，之前在其他项目中使用过`wlt-mavon-editor`组件。可是使用该组件的预览模式将`navigation`设置为`true`即刻。如对其目录样式不满意可自行调整样式。
  