---
date: 2022-01-24
category: 开发者手册
tag:
  - 部署
---
# 自动部署

## Jenkins相关

### 私有镜像npm登陆问题

在项目的根目录下寻找`Jenkinsfile`文件

```groovy
steps {
    sh "npm set registry http://nvwa.jiuqi.com.cn/nexus/repository/npm-nvware-group/"
    sh "npm config set //nvwa.jiuqi.com.cn/nexus/repository/npm-nvware-group/:_authToken=NpmToken.3bb085e0-a9b5-36e1-be9f-311bb5630c2b"
    sh "npm install"
    sh "npm run build"
  }
```

- 获取authToken

>打开用户目录的 .npmrc，Linux在 ~/.npmrc， Windows在 C:/Users/<用户名>/.npmrc中，找到 \<registry-url\> 对应仓库地址
