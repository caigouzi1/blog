---
date: 2023-07-20
category: 前端
tag:
  - Gulp
---

# 使用 Gulp 完成打包脚本

## Gulp简介

> [Gulp](https://www.gulpjs.com.cn/) 是基于内存实现的构建工具，其构建速度比 Grunt 快，而且，Gulp 的生态也很完善，插件质量很高。目前最为流行。

## 创建gulpfile.js文件

- 运行gulp命令时会自动寻找项目根目录下的`gulpfile.js`文件。如需运行多个任务（task），可以执行 `gulp <task> <othertask>`。

```js
var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var path = require("path");
var del = require("del");
const { program } = require('commander');

program
  .option('-e, --env <type>', 'build env type' ,'prod')
program.parse(process.argv);
var options = program.opts();

var distPath = path.resolve("./dist");
var version = ""; // 版本号
var versionPath = ""; // 版本号路径
var env = "prod"; // 打包环境


// 创建版本号(年月日时分)
(function () {
  env = options.env
  var d = new Date();
  var yy = d.getFullYear();
  var MM = d.getMonth() + 1 >= 10 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
  var DD = d.getDate() >= 10 ? d.getDate() : "0" + d.getDate();
  var h = d.getHours() >= 10 ? d.getHours() : "0" + d.getHours();
  var mm = d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes();
  version = yy + MM + DD + h + mm;
  versionPath = distPath + "/" + version;
  console.log('*********************')
  console.log('当前打包环境为' +  env)
  console.log('*********************')
})();

// 编译
gulp.task("build", $.shell.task(["node build/build.js"]));

// 创建版本号目录
gulp.task("create:versionCatalog", function() {
  return gulp
    .src(`${distPath}/static/**/*`)
    .pipe(gulp.dest(`${versionPath}/static/`));
});

// 替换${versionPath}/static/js/manifest.js window.SITE_CONFIG.cdnUrl占位变量
gulp.task("replace:cdnUrl", function() {
  return gulp
    .src(`${versionPath}/static/js/manifest.js`)
    .pipe(
      $.replace(
        new RegExp(`"${require("./config").build.assetsPublicPath}"`, "g"),
        'window.SITE_CONFIG.cdnUrl + "/"'
      )
    )
    .pipe(gulp.dest(`${versionPath}/static/js/`));
});

// 替换${versionPath}/static/config/index-${env}.js window.SITE_CONFIG['version']配置变量
gulp.task("replace:version", function() {
  return gulp
    .src(`${versionPath}/static/config/index-${env}.js`)
    .pipe(
      $.replace(
        `window.SITE_CONFIG['version'] = ""`,
        `window.SITE_CONFIG['version'] = '${version}'`
      )
    )
    .pipe(gulp.dest(`${versionPath}/static/config/`));
});

// 合并${versionPath}/static/config/[index-${env}, init].js 至 ${distPath}/config/index.js
gulp.task("concat:config", function() {
  return gulp
    .src([
      `${versionPath}/static/config/index-${env}.js`,
      `${versionPath}/static/config/init.js`
    ])
    .pipe($.concat("index.js"))
    .pipe(gulp.dest(`${distPath}/config/`));
});

//清除, 编译 / 处理项目中产生的文件
gulp.task("cleanBuild", function() {
  return del([`${distPath}/static`, `${versionPath}/static/config`]);
});
// 清空
gulp.task("clean", function() {
  return del([distPath]);
});

//gulp.series|4.0 依赖
//gulp.parallel|4.0 多个依赖嵌套
gulp.task(
  "default",
  gulp.series(
    gulp.series(
      "clean",
      "build",
      "create:versionCatalog",
      "replace:cdnUrl",
      "replace:version",
      "concat:config",
      "cleanBuild"
    )
  )
);
```

## 获取运行参数

1. 使用[minimist](minimist)

    ```js
    // npm install --save-dev gulp gulp-if gulp-uglify minimist

    var gulp = require('gulp');
    var gulpif = require('gulp-if');
    var uglify = require('gulp-uglify');

    var minimist = require('minimist');

    var knownOptions = {
      string: 'env',
      default: { env: process.env.NODE_ENV || 'production' }
    };

    var options = minimist(process.argv.slice(2), knownOptions);

    gulp.task('scripts', function() {
      return gulp.src('**/*.js')
        .pipe(gulpif(options.env === 'production', uglify())) // 仅在生产环境时候进行压缩
        .pipe(gulp.dest('dist'));
    });
    ```

1. 使用[commander](https://www.npmjs.com/package/commander)

    ```js
    const { program } = require('commander');

    program
      .option('-e, --env <type>', 'build env type' ,'prod')
    program.parse(process.argv);
    var options = program.opts();
    console.log(options.env)
    ```
