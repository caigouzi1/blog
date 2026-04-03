import { defineVuePlaygroundConfig } from "vuepress-plugin-md-enhance/client";

defineVuePlaygroundConfig({
  // 在此设置 @vue/repl 选项
  autoResize: true,
  editorOptions: {
    autoSaveText: false
  }
});
