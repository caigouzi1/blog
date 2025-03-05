---
date: 2022-05-16
category: 实践
tag:
  - git
---

# 处理项目Git记录过大的问题

> 之前在代码推送记录中提交记录中包含很多地图变动信息，每次变动包含5千左右的png变动信息导致git超过1G无法clone

## Git永久删除文件和历史记录

参考<https://www.cnblogs.com/shines77/p/3460274.html>

### 使用filter-branch命令

```bash
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA' \
--prune-empty --tag-name-filter cat -- --all
```

其中, PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA 就是你要删除的文件的相对路径(相对于git仓库的根目录), 替换成你要删除的文件路径即可. 注意一点，这里的文件或文件夹，如果以 '/' 开头，则文件或文件夹会被认为是从 git 的安装目录开始。

如果你要删除的目标不是文件，而是文件夹，那么请在 git rm --cached 命令后面添加 -r 命令，表示递归的删除（子）文件夹和文件夹下的文件，类似于 rm -rf 命令。

例如：

```bash
git filter-branch --force --index-filter 'git rm --cached -r --ignore-unmatch ./public/img/map/' --prune-empty --tag-name-filter cat -- --all
```

- 注意： 输入命令前需要将所有分支代码拉取到本地

```bash
git fetch --all
# 追踪所有分支
git branch -r | grep -v '\->' | while read remote; do git branch --track
git pull --all
```

如果显示 xxxxx unchanged, 说明repo里没有找到该文件, 需检查路径和文件名是否正确.

### 推送修改后的代码

```bash
git push origin master --force --all --tags
```

### 清理和回收空间

```bash
rm -rf .git/refs/original/
git reflog expire --expire=now --all
git gc --prune=now
git gc --aggressive --prune=now
```

## 优化Git

### 将地图打包成zip文件

将地图图片打包成zip文件，使用每次构建时自动解压文件

1. 安装extract-zip-relative-path

    ```bash
    npm i --save-dev extract-zip-relative-path
    ```

1. 每次启动或打包前先解压文件
    修改package.json文件中的脚本部分

    ```json
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "preserve": "extract-zip ./maptool/map.zip ./public/img", // [!code ++]
    "prebuild": "extract-zip ./maptool/map.zip ./public/img"  // [!code ++]
    ```

### 编辑.gitignore

```diff
node_modules
/dist
+ public/img/map/
```
