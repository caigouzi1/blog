---
date: 2023-07-31
category: 前端
tag:
  - Gulp
---

# 使用Gulp快速替换jar包并启动Tomcat

## gulp-shell

> Gulp运行shell命令需要需要使用[gulp-shell](https://github.com/sun-zheng-an/gulp-shell)插件。

## 安装依赖

```bash
  npm install --save-dev gulp gulp-shell
```

## 编写 gulpfile.js 文件

```js
const gulp = require("gulp");
const { dest, series, src } = require("gulp");
const shell = require("gulp-shell");
const { spawn } = require("child_process");

let sourceSrc = "C:/Users/75916/Desktop/test";
// const SourceDir = `C:/Users/75916/Desktop/test/qcadoo/qcadoo-view`
const BuildSrc = `${sourceSrc}/qcadoo/qcadoo-view`;

async function install(done) {
  const app = shell.task("mvn install -DskipTests", { cwd: BuildSrc });
  // await spawn("mvn install -DskipTests", null, {
  //   cwd: `${sourceSrc}/qcadoo/qcadoo-view`,//执行命令的路径
  //   stdio: 'inherit', //输出共享给父进程
  //   shell: true
  // })
  await app();
  done();
}

async function copy(done) {
  return  src(`${BuildSrc}/target/*.jar`)
    .pipe(dest(`${sourceSrc}/mes/mes-application/target/tomcat-archiver/mes-application/webapps/ROOT/WEB-INF/lib/`))
}

async function start(done) {
  const app = shell.task("startup", { cwd: `${sourceSrc}/mes/mes-application/target/tomcat-archiver/mes-application/bin` });
  await app();
  done();
}

exports.default = series(install, copy, start);
```
