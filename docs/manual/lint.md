---
date: 2022-11-04
category: 开发者手册
tag:
  - eslint
---
# Vue项目相关代码格式化配置

> 该配置以Vue为例

## 配置流程

> 参考文档 [eslint-plugin-vue](https://eslint.vuejs.org/user-guide/#usage)

### 安装依赖

  ```bash
    npm install --save-dev eslint eslint-plugin-vue eslint-define-config

    # 如果使用 typescript
    npm install --save-dev typescript @typescript-eslint/parser
  ```

> 注意
> 当`package.json`文件中配置`"type": "module"`项时要将对应的`.js`配置文件改为`.cjs`

### ESLint配置

`.eslintrc.js`文件

```js
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  // typescript
  // parserOptions: {
  //   parser: '@typescript-eslint/parser',
  // },
  plugins:['vue'],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'semi': ['error', 'never'],  // 禁止行尾分号
    'vue/multi-word-component-names': 0,  // 关闭组件名必须为驼峰
    'indent': ['error', 'tab'], // 使用tab缩进
    'quotes': [2, 'single'],  // 使用单引号
    'vue/max-attributes-per-line': ['error', {
      singleline: 5 //标签超出5个属性就会换行
    }],
  },
  globals: {
    uni: 'readonly', 
  }
})
```

**globals配置说明：**  
当项目中的全集变量报 no-undef 错误时可配置该属性  

*相关属性*  
readonly 表示变量只可读不可写；（旧版本中会使用false/readable，与readonly等价）  
writable 表示变量可读可写；（旧版本中会使用true/writeable，与writable等价）  
off 表示禁用全局变量  

### 编辑器配置

`.editorconfig`文件

```ini
[*]
charset=utf-8
end_of_line=lf
indent_size=2
```

`jsconfig.json`文件

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "types": ["@dcloudio/types", "miniprogram-api-typings", "mini-types"]
  },
  "vueCompilerOptions": {
    "target": 2
  },
  "exclude": ["node_modules", "dist"]
}
```

#### typeRoots 和 types相关

默认所有可见的"@types"包会在编译过程中被包含进来。 node_modules/@types文件夹下以及它们子文件夹下的所有包都是可见的； 也就是说， ./node_modules/@types/，../node_modules/@types/和../../node_modules/@types/等等。  

typeRoots: 用来指定默认的类型声明文件查找路径，默认为node_modules/@types, 指定typeRoots后，TypeScript 编译器会从指定的路径去引入声明文件，而不是node_modules/@types  

types: TypeScript 编译器会默认引入typeRoot下所有的声明文件，但是有时候我们并**不希望全局引入所有定义**，而是仅引入部分模块。这种情景下可以通过types指定模块名只引入我们想要的模块  

### prettier相关配置

`.prettierrc.js`文件

```js
module.exports = {
  singleQuote: true,
  printWidth: 120 //防止频繁换行
};
```
