---
date: 2019-11-14
category: 后端
tag:
  - linux
  - node
---
# Node后台常驻运行

## 情境

​ *linux开启程序当shell关闭后，进程丢失*

## 解决方法

* 安装forever

  ```bash
  yarn global add forever
  ```

* 用forever开启nodejs程序

  ```bash
  forever start xxx.js //运行node程序
  forever start -c “npm start”  path/xxx.js //用npm start来运行你的程序
  ```

* 停止运行nodejs程序

    ```bash
      forever stop xxx.js
    ```
