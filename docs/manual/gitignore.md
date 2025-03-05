---
date: 2022-09-13
category: 开发者手册
tag:
  - git
---
# Git 文件忽略

## 情境

​ *git文件上传之后修改gitignore上传文件无法忽略*

## 解决方法

* 修改 .gitignore 文件

```text
node_modules
package-lock.json
```

* 清除对应文件

```bash
git rm -r --cached .
```
