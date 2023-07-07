---
date: 2019-11-14
category: 开发者手册
tag:
  - git
---
# Git 使用

## 相关博客

[Git 分支管理策略](http://www.ruanyifeng.com/blog/2012/07/git.html)

[Git 远程操作详解](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)

[Git 使用规范流程](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)

[Git 解决远程仓库文件大小写问题](https://www.jianshu.com/p/420d38913578)

## 基础使用

- 基础推送操作

```bash
# 把文件添加到暂存区
git add .

# 提交到版本库
git commit -m '注释'

# 推送
git push
```

- 分支操作基础命令

```bash
# 创建本地分支 dev
git branch dev

# 切换本地分支 dev
git checkout dev


# 相当于以上两条命令：创建 dev
git checkout -b dev

# 分支并切换
# Switched to a new branch 'dev'
=============================
git branch //查看本地分支
* dev
  master
=============================
# 备注：git branch 命令会列出所有分支，当前分支前面会标一个*号。

# 删除本地分支 dev
git branch -d dev
```

- **查看分支：git branch**
- **创建分支：git branch \<name\>**
- **切换分支：git checkout \<name\>**
- **创建+切换分支：git checkout -b \<name\>**
- **合并某分支到当前分支：git merge \<name\>**
- **删除分支：git branch -d \<name\>**

## git 常用命令

- eslint 报错 Delete `␍`

```bash
git config --global core.autocrlf false
```

- 查看远程仓库

```bash
git remote show origin
```

## 初始化项目

```bash
# 初始.git文件
git init

# 添加readme文档
git add README.md

# 递交
git commit -m "first commit"

# 关联远程仓库
git remote add origin https://github.com/caigouzi1/haha.git

# 推送代码到master分支
git push -u origin master
```

## Git 分支管理

```bash
# 列出本地分支基本命令
git branch

# 列出本地分支及远程分支
git branch -a


# 本地新建一个本地的分支
git checkout -b dev

# 代码推送到远端dev分支
git push origin panda
```

## Git删除分支

```bash
# 删除本地分支
git branch -d <dev>

# 删除远程分支
git push <remote> --delete <branch>
如：
git push origin --delete dev  
```

## Git 推送（push）

> 格式 : git push <远程主机名> <本地分支名> <远程分支名>

```bash
# 如果远程分支被省略，如上则表示将本地分支推送到与之存在追踪关系的远程分支（通常两者同名），如果该远程分支不存在，则会被新建
git push origin master

# 如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支，等同于 git push origin --delete master
git push origin:refs/for/master

# 如果当前分支与远程分支存在追踪关系，则本地分支和远程分支都可以省略，将当前分支推送到origin主机的对应分支
git push origin

# 如果当前分支只有一个远程分支，那么主机名都可以省略，形如 git push，可以使用git branch -r ，查看远程的分支名
git push
```

## Git 合并相关

```bash
# git取消合并
git merge --abort
```

## Git 调整文件大小写

```bash
git rm fileName
# 或
git rm –r *
```

## Fork 代码同步

```bash
git remote -v
git remote add upstream [原仓库clone链接]
git remote -v
git fetch upstream
git merge upstream/master
git push origin master
```

## 实用案例

- ### git 如何把分支代码合并到 master 主分支上

1. 首先切换到分支：

   > ```bash
   > git checkout dev
   > ```

1. 使用 git pull 把分支代码 pull 下来:

   > ```bash
   > git pull
   > ```

1. 切换到主分支:

   ```bash
   git checkout master
   ```

1. 把分支的代码 merge 到主分支:

   ```bash
   git merge dev
   ```

1. git push 推上去:

   ```bash
   git push
   ```

## git使用代理  

```bash
# 具体端口号需查看本机配置
git config --global http.proxy http://127.0.0.1:7890
git config --global --unset http.proxy
```
