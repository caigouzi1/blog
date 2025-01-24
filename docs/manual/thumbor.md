---
date: 2025-01-24
category: 开发者手册
tag:
  - Vue
---

# 使用thumbor优化网站图片

## 安装thumbor服务

> Thumbor 是一种智能图像服务。它可以按需裁剪、调整图像大小和翻转图像。它采用最先进的人脸和特征检测算法，能非常智能地检测图像中的重要点，以便更好地裁剪和调整大小（更多信息请参阅检测算法）。

[官网](https://www.thumbor.org/)
[文档](https://thumbor.readthedocs.io/en/latest/getting_started.html)

使用示例：  

http://127.0.0.1:8888/unsafe/100x0/https://avatars.githubusercontent.com/u/40171260

路径由三部分组成：
1. 其中`http://127.0.0.1:8888/unsafe/`为服务地址。
1. 其中`100x0`为目标图片的分辨率。100为宽度，0为高度，当值为0时表示保持宽高比自动计算。
1. 其中`https://avatars.githubusercontent.com/u/40171260`为原始图片的访问地址。


## 在Vue项目中使用

### 函数转换封装

```ts
export function getThumborPath(src: string, option?: number | { width: number; height: number }) {
  if (thumborPath && option && src) {
    const optionRes =
      typeof option === 'number'
        ? { width: option || 0, height: 0 }
        : { width: (option as unknown as any).width || 0, height: (option as any).height || 0 };

    if (src.startsWith(thumborServerPath)) {
      const after = src.replace(thumborServerPath, '');
      let other: string = '';
      const matchCount = after.indexOf('/', 1);
      if (matchCount > 0) {
        other = after.substring(matchCount);
      }

      return `${thumborServerPath}/${optionRes.width}x${optionRes.height}${other}`;
    }

    return `${thumborServerPath}/${optionRes.width}x${optionRes.height}/${src}`;
  }

  return src;
}
```

### Vue自定义指令

```ts
import { Directive, DirectiveBinding } from 'vue';

const setImageSrc = (imgElement: HTMLImageElement, value: any) => {
  if (imgElement) {
    const src = imgElement.getAttribute('src');
    if (src) {
      imgElement.setAttribute('src', getThumborPath(src, value));

      imgElement.onerror = function () {
        const img = new Image();
        img.src = src;
        img.onload = function () {
          imgElement.setAttribute('src', getThumborPath(src, value));
        };

        imgElement.onerror = null;

        img.onerror = function () {
          imgElement.onerror = null;
        };
      };
    }
  }
};

/**
 * 操作权限处理
 */
const thumbor: Directive = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;

    if (el.tagName === 'IMG') {
      setImageSrc(el as HTMLImageElement, value);
    } else {
      //  标签嵌套在el-image组件中
      nextTick(() => {
        const imgs = el.getElementsByTagName('img');
        if (imgs && imgs[0]) {
          const imgElement = imgs[0];
          if (imgElement) {
            setImageSrc(imgElement, value);
          }
        }
      });
    }
  },

  beforeUpdate(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding;

    if (el.tagName === 'IMG') {
      const src = el.getAttribute('src');
      const srcValue = getThumborPath(src, value);
      if (srcValue !== src) {
        setImageSrc(el as HTMLImageElement, value);
      }
    } else {
      //  标签嵌套在el-image组件中
      nextTick(() => {
        const imgs = el.getElementsByTagName('img');
        if (imgs && imgs[0]) {
          const imgElement = imgs[0];
          if (imgElement) {
            const src = imgElement.getAttribute('src');
            const srcValue = getThumborPath(src, value);

            if (srcValue !== src) {
              setImageSrc(imgElement, value);
            }
          }
        }
      });
    }
  }
};

export default thumbor;
```

## 在Vue中使用

> 具体注册自定义指令的方法，可以参考[Vue文档](https://cn.vuejs.org/api/application#app-directive)

```vue
<template>
  <!-- 这是图片宽度为400px -->
  <img v-thumbor="400" src="https://avatars.githubusercontent.com/u/40171260" alt="图片" />

  <!-- 这是图片高度为400px -->
  <img v-thumbor="{  height: 400 }" src="https://avatars.githubusercontent.com/u/40171260" alt="图片" />
</template>
```
