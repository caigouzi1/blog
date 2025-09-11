---
date: 2021-07-09
category: 前端
tag:
  - npm
---
# npm 相关

## 切换镜像源

```bash
# 全局切换
npm config set registry https://registry.npmjs.org

# 临时切换
npm install express --registry https://registry.npmjs.org
```

## 可用镜像源

> npm -------- `https://registry.npmjs.org/` \
> yarn ------- `https://registry.yarnpkg.com/` \
> cnpm ------- `http://r.cnpmjs.org/` \
> ~~taobao ----- `https://registry.npm.taobao.org/`~~ \
> taobao ----- `https://registry.npmmirror.com/` \
> nj --------- `https://registry.nodejitsu.com/` \
> npmMirror -- `https://skimdb.npmjs.com/registry/` \
> edunpm ----- `http://registry.enpmjs.org/`

## 提高node模块安装速度

### 配置.npmrc文件

```ini
registry=https://registry.npmmirror.com/
sass_binary_site=https://npmmirror.com/mirrors/node-sass/
```

### 使用`mirror-config-china`(不推荐)

```bash
npm install -g mirror-config-china
```

>出现 sass 相关的安装错误时可解决该问题

## npm scripts相关

### pre和post两个钩子

>npm会先查看有没有定义prelint和postlint两个钩子，如果有的话，就会先执行npm run prelint，然后执行npm run lint，最后执行npm run postlint

## 常用命令

- 列出软件包所有的以前的版本

```bash
npm view vue versions
```

- 查看所有已安装的 npm 软件包

```bash
npm list

# 仅获取顶层的软件包
npm list --depth=0

# 通过指定名称来获取特定软件包的版本
npm list cowsay
```

- 查看软件包在 npm 仓库上最新的可用版本

```bash
  npm view cowsay version
```

### 私有镜像npm登陆问题

```bash
npm set registry http://nvwa.jiuqi.com.cn/nexus/repository/npm-nvware-group/  
npm config set //nvwa.jiuqi.com.cn/nexus/repository/npm-nvware-group/:_authToken=NpmToken.3bb085e0-a9b5-36e1-be9f-311bb5630c2b  
```

- 获取authToken

>打开用户目录的 .npmrc，Linux在 ~/.npmrc， Windows在 C:/Users/<用户名>/.npmrc中，找到 \<registry-url\> 对应仓库地址

## 使用node自带的pnpm或yarn

> Node.js 默认提供 npm 包管理器，Corepack 为您提供 Yarn 和 pnpm，而无需安装它们。  
> Corepack 默认与 Node.js 14.19.0 和 16.9.0 一起分发，所以保证 Node.js 版本大于等于 16.9.0。

```bash
corepack enable
corepack prepare pnpm@7.14.0 --activate
```
