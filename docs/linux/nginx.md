---
date: 2022-01-25
category: 后端
tag:
  - linux
  - nginx
---
# nginx相关

## 漏洞扫描

```nginx
  location ~ ^/(wp|think-php|phpmyadmin)/.*\.php$ {
    access_log off;
    log_not_found off;
    return 444;
  }
```

> 444 状态码表示不返回内容就直接断开连接，省流量。如果用到这些路径，需配置重写，放到子目录

## 错误日志查看

```bash
  cd /var/log/nginx
  tail -100f error.log
```

## 常用配置

```nginx
  server {
    listen       80;
    server_name  localhost;
    try_files $uri $uri/ /index.html;
    location /api/ {
      rewrite  ^/api/(.*) /$1 break; #过滤url中的api前缀
      proxy_pass http://localhost:8090;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
  }
```

## proxy_pass代理时超时的问题(504 Gateway Time-out)

```nginx
http {
  ...
  proxy_connect_timeout 9000;
  proxy_send_timeout 9000;
  proxy_read_timeout 9000;
  proxy_buffer_size 4k;
  proxy_buffers 32 4k;
  proxy_busy_buffers_size 64k;
}
```

## proxy_pass url反向代理的注意事项

### url只是host

```nginx
# 访问：   /                               后端：   /
# 访问：   /api/xx                         后端：   /api/xx
# 访问：   /api/xx?aa                      后端：   /api/xx?aa
location / {
    proxy_pass http://node:8080;
}

# 访问：   /api/                           后端：   /api/
# 访问：   /api/xx                         后端：   /api/xx
# 访问：   /api/xx?aa                      后端：   /api/xx?aa
# 访问：   /api-xx?aa                      后端：
location /api/ {
    proxy_pass http://node:8080;
}

# 访问：   /api/                           后端：   /api/
# 访问：   /api/xx                         后端：   /api/xx
# 访问：   /api/xx?aa                      后端：   /api/xx?aa
# 访问：   /api-xx?aa                      后端：   /api-xx?aa
location /api {
    proxy_pass http://node:8080;
}
```

### url包含路径

当 `proxy_pass url` 的 `url` 包含路径时，匹配时会根据 `location` 的匹配后的链接透传给 `url` ，注意匹配后就是这样：

| `location` 规则 | 访问的原始链接 | 匹配之后的路径 |
| --- | --- | --- |
| `location /` | `/` | `` |
| `location /` | `/a` | `a` |
| `location /` | `/a/b/c?d` | `a/b/c?d` |
| `location /a/` | `/a/` | `` |
| `location /a/` | `/a/b/c?d` | `b/c?d` |

明白匹配之后的路径后，在 `proxy_pass url` 包含路径时，将会把匹配之后的路径透传给 `url` ，如：

```nginx
# 访问：   /                               后端：   /
# 访问：   /api/xx                         后端：   /api/xx
# 访问：   /api/xx?aa                      后端：   /api/xx?aa
location / {
    proxy_pass http://node:8080/;
}

# 访问：   /api/                           后端：   /
# 访问：   /api/xx                         后端：   /xx
# 访问：   /api/xx?aa                      后端：   /xx?aa
# 访问：   /api-xx?aa                      未匹配
location /api/ {
    proxy_pass http://node:8080/;
}

# 访问：   /api                            后端：   /
# 访问：   /api/                           后端：   //
# 访问：   /api/xx                         后端：   //xx
# 访问：   /api/xx?aa                      后端：   //xx?aa
# 访问：   /api-xx?aa                      后端：   /-xx?aa
location /api {
    proxy_pass http://node:8080/;
}

# 访问：   /api/                           后端：   /v1
# 访问：   /api/xx                         后端：   /v1xx
# 访问：   /api/xx?aa                      后端：   /v1xx
# 访问：   /api-xx?aa                      未匹配
location /api/ {
    proxy_pass http://node:8080/v1;
}

# 访问：   /api/                           后端：   /v1/
# 访问：   /api/xx                         后端：   /v1/xx
# 访问：   /api/xx?aa                      后端：   /v1/xx
# 访问：   /api-xx?aa                      未匹配
location /api/ {
    proxy_pass http://node:8080/v1/;
}
```

## nginx相关网站

- <https://xuexb.github.io/learn-nginx/>
