---
date: 2023-06-13
category: 前端
tag:
  - Vue
  - vue-devtool
---

# 在生产环境中使用 vue-devtools 工具

1. 打开控制台

1. 运行一下

    ```javascript
    // Vue2的代码
    let Vue, walker, node;

    walker = document.createTreeWalker(document.body, 1);
    while ((node = walker.nextNode())) {
      if (node.__vue__) {
        Vue = node.__vue__.$options._base;
        if (!Vue.config.devtools) {
        Vue.config.devtools = true;
          if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init", Vue);
          }
        }
        break;
      }
    }
    ```

    ```javascript
    // Vue3的代码

    let vue, node, walker;

    walker = document.createTreeWalker(document.body, 1);
    while ((node = walker.nextNode())) {
      if (node.__vue_app__) {
        vue = node.__vue_app__;
        if (!vue.config.devtools) {
        vue.config.devtools = true;
          if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init", vue);
          }
        }
        break;
      }
    }
    ```

1. 关闭控制台，然后重新打开

  > **注意：** 不要刷新页面
