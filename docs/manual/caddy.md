---
date: 2025-12-01
category: 开发者手册
---
# 使用caddy自动部署https

## 配置

```conf
:80, :443, www.xxx.xyz:80, www.xxx.xyz:443 {
  root * /data/wwwroot/benan
  try_files {path} /index.html
  file_server
}

xxx.xyz:80, xxx.xyz:443 {
 root * /data/wwwroot/benan
  try_files {path} /index.html
  file_server
}


wxh5.xxx.xyz:80,  wxh5.xxx.xyz:443 {
  handle /h5/* {
    reverse_proxy 127.0.0.1:8080
  }
  
  handle {
    root * /data/wwwroot/order/h5
    try_files {path} /index.html
    file_server
  }
}

:8001 {
  handle_path /api/* {
    reverse_proxy 127.0.0.1:8080
  }

  handle {
    root * /data/wwwroot/order/admin
    try_files {path} /index.html
    file_server
  }
}


static.xxx.xyz:443 {
  reverse_proxy 127.0.0.1:9000
}
```
