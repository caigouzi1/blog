---
date: 2024-08-26
category: 前端
tag:
  - Canvas
---
# Canvas中绘制图片

::: playground#vue Canvas中绘制图片及四个方向旋转

@file App.vue

```vue
<!-- @include: code/canvas_rotate/index.vue -->
```

@file CanvasRender.vue

```vue
<!-- @include: code/canvas_rotate/CanvasRender.vue -->
```

@import

```json
{
  "imports": {
    "vue": "https://sfc.vuejs.org/vue.runtime.esm-browser.js"
  }
}
```

:::

## 旋转核心代码

```js
const ctx = canvasRef.value.getContext("2d");
const image = new Image();
image.src = props.imgPath
image.onload = () => {
  const originalWidth = image.width
  const originalHeight = image.height
  let width = originalWidth * (props.endX - props.startX) / 100
  let height = originalHeight * (props.endY - props.startY) / 100
  let canvasWidth = width
  let canvasHeight = height
  const startX = originalWidth *  props.startX / 100
  const startY = originalWidth *  props.startY / 100

  // 当旋转 90、270度时调换宽高
  if ([90, 270].includes(props.rotate)) {
    [canvasWidth, canvasHeight] = [height, width]
  }
  if (canvasRef.value) {
    canvasRef.value.width = canvasWidth
    canvasRef.value.height = canvasHeight
  }
  ctx?.clearRect(0, 0, width, height)

  // 根绝旋转角度调整画布原点坐标
  switch (props.rotate) {
    case 90:
      ctx?.translate(height, 0)
      break;
    case 270:
      ctx?.translate(0, width)
      break;
    case 180:
      ctx?.translate(width, height)
      break;
    default:
      break;
  }
  ctx?.rotate((props.rotate * Math.PI) / 180)

  // startX startY 为原始图片的起始位置
  // width height 为要绘制原始图片的宽高

  // 0 0 图片绘制到画布上的起始位置
  // width height 图片绘制到画布上的宽高
  ctx?.drawImage(image, startX, startY, width, height, 0, 0, width, height)
  ctx?.save()
}
```
