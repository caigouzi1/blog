---
date: 2023-04-18
category: 后端
tag:
  - ssh
---

# 服务器添加密钥连接

## 本地生成密钥和公钥

1. 执行`ssh-keygen -t rsa -C "内容可随意输入"`然后多次按回车

  > 如需要管理多个密钥
  > ssh-keygen -t rsa -C 'xxxxx@youremail.com' -f ~/.ssh/xxx_id_rsa
  > 生成并配置config文件
  >
  > ```ssh-config
  > # gitee
  > Host gitee.com
  > HostName gitee.com
  > PreferredAuthentications publickey
  > IdentityFile ~/.ssh/gitee_id_rsa
  > 
  > # github
  > 
  > Host github.com
  > HostName github.com
  > PreferredAuthentications publickey
  > IdentityFile ~/.ssh/id_rsa
  > ```

1. 在windows的用户目录下如`C:\Users\xxx\.ssh`文件夹下查看相关文件  

  >id_rsa.pub 为公钥文件  
  >id_rsa 为私钥文件

## 将公钥上传至服务器

1. 进入用户目录`cd ~`或`cd /root`
1. 执行`ls -a`可看到.ssh文件夹
1. 将公钥文件id_rsa.pub上传至用户目录
1. 依次执行一下命令

    ```bash
    mv id_rsa.pub .ssh
    cd .ssh
    cat id_rsa.pub >> authorized_keys
    sudo chmod 600 authorized_keys
    service sshd restart
    ```

## ssh支持密码连接

1. 进入`/etc/ssh/sshd_config`目录配置

    ```ssh-config
    # 允许root用户通过ssh登录
    PermitRootLogin yes

    # 允许使用ssh权限登录
    RSAAuthentication yes
    PubkeyAuthentication yes

    # 使用密码登录 默认为yes
    # PasswordAuthentication no
    ```

1. 重启ssh

    ```bash
    service sshd restart
    ```

## git支持SSH

1. 将公钥文件上传到用户设置中的SSH keys管理中
1. 将私钥文件上传到服务器上的用户目录并移动到`.ssh`文件夹中:`mv id_rsa .ssh`
1. 执行`chmod 0600 ~/.ssh/id_rsa`命令降低文件权限
1. `ssh -T git@github.com`或`ssh -T git@gitee.com`测试密钥是否生效
1. 修改git远程仓库地址`git remote set-url origin xxx`

## 问题排查

>在/var/log/secure可以看到登陆的情况
