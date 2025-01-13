---
date: 2022-01-28
category: 开发者手册
tag:
  - husky
---
# husky + lint-staged + commitlint 规范 git 代码递交

> **相关内容：**  
> husky: 可在 git 操作时添加自定义钩子对代码或 git message 进行校验  
> lint-staged: 可对 git 缓存区代码进行 es-lint 检查

## 安装依赖

```bash
pnpm install husky lint-staged @commitlint/config-conventional @commitlint/cli -D
```

## [husky](https://husky.nodejs.cn/)初始化

### 自动初始化

```bash
npx husky init
```

### 手动初始化

package.json 添加 script

```bash
npm set-script prepare "husky install"
npm run prepare
```

或者 手动添加以 `"prepare": "husky install"` 到 package.json 的 scripts 中并执行 `npm run prepare` 命令

## lint-staged 配置

> **:heavy_exclamation_mark:注意：** lint-staged 从 v12.0.0 开始模块导出为 ESM module 所以 node 版本不能低于 12.20.0, 14.13.1, or 16.0.0 如需支持低版本需固定版本号。执行`npm install lint-staged@^11.2.6 -D`
>
> - ESM module 相关可参考 [node 文档](https://nodejs.org/api/esm.html#introduction)  

---

> **:heavy_exclamation_mark:提示：** prepare: 在两种情况前运行，一是 npm publish 命令前，二是不带参数的 npm install 命令；它会在 prepublish 之后、prepublishOnly 之前执行
>
> - 相关内容参考 [npm scripts 使用指南](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

### 创建 .lintstagedrc 文件

> 该文件为暂存区内所有符合对应后缀提供对应的规则命令

```JSON
{
  "**/*": "eslint --fix"
}
```

或

```JSON
{
  "*.{js,jsx,ts,tsx,vue}": ["eslint", "prettier --write"],
  "*.{less,scss}": "prettier --write",
  "*.{js,css,json,md}": ["prettier --write"]
}
```

### husky下配置lint-staged

> 规范git提交信息

在.husky 文件夹下新建 pre-commit 文件，并添加一下内容

```bash
echo "husky lint-staged start"
pnpm exec lint-staged
echo "husky lint-staged end"
```

## [commitlint](https://commitlint.js.org/)配置

创建`commitlint.config.cjs`文件

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build' // 打包
      ]
    ],
    'subject-case': [0]
  }
};
```

在.husky 文件夹下新建 commit-msg 文件，并添加一下内容

```bash
echo "commit-msg-lint start"
pnpm exec commitlint --config commitlint.config.cjs --edit "${1}"
echo "commit-msg-lint end"
```
