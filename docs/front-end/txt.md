---
date: 2025-01-24
category: 开发者手册
tag:
  - TypeScript chardet
---

# 获取Txt文件内容及编码问题处理

## 获取编码类型方案

Chardet 是一个纯 JavaScript（TypeScript）编写的字符检测模块。模块使用出现分析来确定最可能的编码。

## 代码实现

```ts
import chardet from 'chardet';

function getTxtContent(path: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(path);
      const buffer = await response.arrayBuffer();
      const uint8Array = new Uint8Array(buffer);
      const encoding = chardet.detect(uint8Array);
      let fileReader = new FileReader();
      const blob = new Blob([buffer]);
      fileReader.readAsText(blob, encoding);
      fileReader.onloadend = function (e) {
        resolve(e.target.result as string);
      };
    } catch (error) {
      reject(error);
    }
  });
}
```
