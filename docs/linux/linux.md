---
date: 2019-11-14
category: 后端
tag:
  - linux
---

# linux相关

## 操作工具

> [xshell](https://51.ruyo.net/test/download_xshell_xftp.html)

## sudo命令带密码执行

```sh
# sudo -S 是一个用于在命令行中以交互方式输入密码的选项。当使用 sudo 命令时，它会要求您输入密码以验证您的身份。然而，通过添加 -S 选项，sudo 命令将从标准输入（stdin）中读取密码，而不是直接与终端交互。
echo <password> | sudo -S <command>
```

## 系统管理

```shell
# 修改root账户的密码
passwd root

lsof -i :3306 //查看谁在占用该端口
ps -axjf|grep 3306 //搜索相关进程
ls -al /proc/3306 //查看进程详情
nohup node index.js & //不挂断地运行命令，即使终端ssh关闭了也一直运行
```

## 文件管理

```shell
mkdir newfile  //创建文件夹
rm -f blog.exe  //删除指定文件
touch test/a.txt //新建文件
rmdir filename  //删除空文件夹
rm -rf  fileName //递归删除文件夹下所有内容
mv A B  //将目录A重命名为B
mv /a ./b/c //将/a目录移动到/b下，并重命名为c
chmod 777 -R *  //文件权限改为:读 写 运行
```

## 实用软件包

### htop

htop 是一个流行的开源跨平台交互式进程管理器，也是我最喜欢的系统活动监控工具。htop 是对原版 top 工具的扩展。它最初只是用于 Linux 系统，后来开发者们不断为其添加对其它类 Unix 操作系统的支持，包括 FreeBSD 和 Mac OS。htop 还是一个自由开源软件，它基于 ncurses 并按照 GPLv2 发布。

## 实用博文

- <https://juejin.im/post/5dd292ef518825638b753975>
