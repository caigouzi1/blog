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

## nginx相关网站

- <https://xuexb.github.io/learn-nginx/>
