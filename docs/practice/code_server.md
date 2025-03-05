---
date: 2023-09-01
category: 实践
tag:
  - docker
  - nginx
  - websocket
---

# 使用nginx及Docker部署Code Server

## Docker启动Code Server

### 创建目录挂载目录

以挂在目录为test目录为例

#### 创建及配置config文件

[config文件配置](https://coder.com/docs/code-server/latest/FAQ#how-does-the-config-file-work)

```yaml
# \test\.config\code-server\config.yaml

bind-addr: 127.0.0.1:8080
auth: none
cert: false
```

> 项目文件为地址为：\test\project

#### 启动docker

[参考文档](https://coder.com/docs/code-server/latest/install)

```bash
docker run -it --name code-server -p 127.0.0.1:8080:8080 -auth none \
  -v "/test:/home/coder/
  codercom/code-server:latest
```

> code-server默认需要密码访问可通过配置config文件`auth: none`去除登录校验  
> 或者在启动命令时添加`-auth none`

## 使用Nginx代理(同时代理http和websocket请求)

[nginx](https://coder.com/docs/code-server/latest/guide#using-lets-encrypt-with-nginx)
[websocket代理失败参考](https://github.com/coder/code-server/issues/6014)

```nginx
http {
  # 自定义变量 $connection_upgrade
  map $http_upgrade $connection_upgrade {
          default Upgrade;
          ''      close;
  }

  map $host $docker_host {
    default 192.168.50.230;
  }

  server {
    listen 10073;
    location / {
        proxy_http_version 1.1;  # 添加长连接支持
        proxy_pass http://$docker_host:10073;
        proxy_set_header HOST $host;
        proxy_set_header X-Forwarded-Host $host:$server_port;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection upgrade;
        proxy_set_header Accept-Encoding gzip;
    }
  }
}
```

### proxy_http_version 1.1 说明

nginx在反向代理HTTP协议的时候，默认使用的是HTTP1.0去向后端服务器获取响应的内容后在返回给客户端。  
HTTP1.0和HTTP1.1的一个不同之处就是，HTTP1.0不支持HTTP keep-alive。  
如果要转发Websocket请求，必须要指定 proxy_http_version 1.1 主要是为了长连接有效  
如果发现**websocket链接成功后又马上断开**则需要检查是否添加该配置。

### X-Forwarded-For 说明

如果websocket请求用户校验一直无法通过可以尝试添加该配置解决问题,为向服务器提供更有用的客户端 IP 地址  
具体作用可参考[X-Forwarded-For](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Forwarded-For)

## 两服务器目录文件的数据同步

SSHFS（SSH Filesystem）是一个基于FUSE的文件系统客户端，用于通过SSH连接远程目录。SSHFS使用的是SFTP协议，它是SSH的一个子系统，在大多数SSH服务器上默认启用

与其他网络文件系统（如NFS和Samba）相比，SSHFS的优势在于它不需要在服务器端进行任何额外的配置。要使用SSHFS，您只需要SSH访问远程服务器。

```bash
sshfs usr@host:/dir  /dir
```
