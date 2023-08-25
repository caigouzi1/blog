---
date: 2021-04-03
category: 后端
tag:
  - linux
  - docker
---
# Docker 使用

<!-- ## 服务器地址

```bash
vm@10.2.24.41 
P@ssw0rd
``` -->

## Docker环境安装

### Docker安装

```bash
# CenterOS 安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

### Docker支持远程2375端口访问

```bash
# 可查看docker启动服务配置文件的路径
systemctl status docker.service

vim /lib/systemd/system/docker.service

# docker.service 文件启动命令添加 -H tcp://0.0.0.0:2375
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375  -H fd:// --containerd=/run/containerd/containerd.sock

# 重新载入服务信息
systemctl daemon-reload

# 重启docker服务
systemctl restart docker.service

# 查看端口是否启动成功
lsof -i:2375
```

### Docker可视化工具

```bash
docker run -p 9000:9000 -p 8000:8000 --name portainer \
--restart=always \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /mydata/portainer/data:/data \
-d portainer/portainer
```

### 常见问题

1. 执行docker ps 等命令时出现：`Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?`提示

    该问题为docker没有正常启动，重新启动即可：

    ```bash
    systemctl daemon-reload
    systemctl restart docker.service
    ```

## 构建并启动docker镜像

以下以构建一个flask服务为例

### flask服务文件

```py
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'
```

### 创建`Dockerfile`文件

```Dockerfile
FROM python:latest

COPY ./app/  /app/

RUN pip install Flask

ENV FLASK_APP="/app/app.py"

EXPOSE 9000

# CMD ["python", "-m flask run"]
CMD flask run --host=0.0.0.0 --port=9000
```

### 创建Docker Image

```bash
# docker build  -t ImageName:Tag .
docker build  -t test:v3 .
```

### 运行该Image

```bash
docker run -d -p 5000:5000 test:v3
```

## nginx文件代理

- docker-compose.yaml添加软连接

```yaml
    version: '3.5'
    services:
      web:
        container_name: nginx
        image: nginx:1.13
        restart: always
        ports:
          - 80:80
          - 443:443
        volumes:
          - ./nginx/conf.d:/etc/nginx/conf.d:ro
          - ./nginx/ssl:/etc/nginx/ssl:ro
          - ./nginx/static:/etc/nginx/static:ro
          - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
          - /home/vm/www/innet:/var/www/html:ro
    networks:
      default:
        external: true
        name: appNet
```

```bash
  // 重启docker
  docker-compose restart
  // docker列表
  docker container ls 或 (docker ps)
  //进入docker
  docker exec -it e26420ec272c /bin/bash
```
