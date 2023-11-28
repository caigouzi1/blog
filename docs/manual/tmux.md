---
date: 2023-11-28
category: 开发者手册
tag:
  - 终端
---


# 终端复用器

## 安装

```bash
# Debian/Ubuntu
sudo apt install tmux

# RHEL/CentOS
sudo yum install tmux
```

## 常用命令

```bash
# 创建一个名称为test的会话
tmux new -s test

# 列出当前所有会话
tmux ls
快捷键：Ctrl+b s

# 进入test会话
tmux attach -t test 
tmux a -t test

# 退出会话
tmux detach
快捷键：Ctrl+b d

# 关闭会话
exit 或者 Ctrl + b
tmux kill-session -t xxx
```
