---
date: 2023-11-06
category: 实践
tag:
  - linux
  - Java
  - Docker
---

# 记录Saas服务部署过程

## Java环境部署

### 复制java相关文件 

`/opt/moudle` 、 `/usr/share/java` 两个文件夹至新的服务器中

### 配置环境变量

1. 打开环境变量的配置文件

    ```bash
      sudo vim /etc/profile
    ```

1. 添加java相关的配置信息

    ```profile
    export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64

    export JRE_HOME=$JAVA_HOME/jre

    export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH

    export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
    ```

1. 刷新环境变量

    ```bash
     sudo source /etc/profile
    ```

***bash: /opt/moudle/jdk1.8.0_311/bin/java: Permission denied***

> 原因: 目录权限不足  
> 执行 chmod -R 777 /opt/moudle/jdk1.8.0_311  

## 使用apt-get安装Docker

1. 设置镜像源

    ```bash
    # Add Docker's official GPG key:
    sudo apt-get update
    sudo apt-get install ca-certificates curl gnupg
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg

    # Add the repository to Apt sources:
    echo \
      "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    ```

1. 安装Docker

    ```bash
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```

***[参考文档](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)***

## nginx安装

### 安装nginx

```bash
sudo apt install nginx
```

### 部署前端服务

进入`/var/www/html`目录将打包好的项目部署进该目录即可

## Nacos安装

1. 下载安装包

    访问[github releases](https://github.com/alibaba/nacos/releases)获取最新版的压缩包文件

1. 解压文件

    ```bash
    unzip nacos-server-$version.zip 
    # 或者
    tar -xvf nacos-server-$version.tar.gz
    ```

1. 启动服务器

    ```bash
    cd nacos/bin

    sh startup.sh -m standalone
    # 如果您使用的是ubuntu系统，或者运行脚本报错提示[[符号找不到，可尝试如下运行：
    bash startup.sh -m standalone
    ```

1. 关闭服务

    ```bash
    sh shutdown.sh
    ```

***[参考文档](https://nacos.io/zh-cn/docs/v2/quickstart/quick-start.html)***
