---
date: 2024-09-21
category: 前端
tag:
  - Node
---

# 使用Volta控制Node版本

> 项目内node版本自动切换工具

## Volta安装

### window安装

下载[volta安装包](https://github.com/volta-cli/volta/releases)进行安装

## Volta支持pnpm

对 pnpm 的支持目前是实验性的。要启用该功能，请确保环境变量 `VOLTA_FEATURE_PNPM` 设置为 1。在 Windows 上，这可以添加到系统设置中的用户或系统环境变量中。在 Linux/Mac 上，您可以在配置文件脚本中设置该值(例如.bash_profile、.zshrc 或类似的脚本)。

## 使用Volta的Hooks支持镜像设置

### `hooks.json`文件路径

#### 全局配置路径

Linux/MacOS中 `~/.volta/hooks.json`  
Windows中 `%LOCALAPPDATA%\Volta\hooks.json`

#### 项目配置

在项目的.volta 子目录中指定的钩子(`<PROJECT ROOT>/.volta/hooks.json`)将只在该项目中应用。这里的 `<PROJECT ROOT>` 被定义为 package.json 所在目录。

### `hooks.json`文件配置

```json
{
  "node": {
    "index": {
      "template": "https://mirrors.tencent.com/nodejs-release/index.json"
    },
    "distro": {
      "template": "https://mirrors.tencent.com/nodejs-release/v{{version}}/{{filename}}"
    }
  },
  "npm": {
    "index": {
      "prefix": "http://mirrors.tencent.com/npm/"
    },
    "latest": {
      "bin": "~/npm-latest"
    },
    "distro": {
      "template": "https://mirrors.tencent.com/npm/npm/-/npm-{{version}}.tgz"
    }
  },
  "pnpm": {
    "index": {
      "prefix": "http://mirrors.tencent.com/npm/"
    },
    "distro": {
      "template": "https://mirrors.tencent.com/npm/pnpm/-/pnpm-{{version}}.tgz"
    },
    "format": "npm"
  }
}
```

## Volta Node版本安装和控制

### Node及pnpm安装

```bash
volta install node@18.17.1
volta install pnpm
```

### 项目版本固定

```bash
volta pin node@18.17.1
```
