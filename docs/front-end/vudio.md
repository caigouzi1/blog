---
date: 2024-08-10
category: 前端
tag:
  - 音频可视化
  - vudio
---

# 使用vudio实现音频可视化

## 使用siriwave

```vue
<script setup lang="ts">
import SiriWave from "siriwave";
const siriWave = new SiriWave({
  container: siriWaveRef.value,
  style: 'ios9',
  width: 640,
  height: 200,
  amplitude: 2,
  speed: 0.3
});

// 启动
siriWave?.start()
// 停止
siriWave.stop()
</script>
```

## 使用vudio

[文档](https://github.com/alex2wong/vudio)  
[效果预览](https://alex2wong.github.io/vudio/)

```vue
<script setup lang="ts">
import Vudio from 'vudio'

const vudio = new Vudio(audioPlayerRef.value.$refs.audio, canvasRef.value, {
  effect: 'waveform', // waveform, circlewave, circlebar, lighting (4 visual effect)
  accuracy: 128, // number of freqBar, must be pow of 2.
  width : 500, // canvas width
  height : 100, // canvas height
  waveform: {
    minHeight: 1, // min waveform bar height
    spacing: 1, // space between bars
    color: ['#06f', '#09f',' #0Cf', '#0ff'],
    // color: ['#fb6d6b', '#c10056',' #a50053', '#51074b'],
    shadowBlur: 0, // blur of bars
    shadowColor: '#f00',
    fadeSide: true, // fading tail
    horizontalAlign: 'center', // left/center/right, only effective in 'waveform'/'lighting'
    verticalAlign: 'middle' // top/middle/bottom, only effective in 'waveform'/'lighting'
  },
});
// 启动
vudio?.dance();
// 停止
vudio?.pause();
</script>
```

::: playground#vue vudio音频可视化

@file App.vue

```vue
<!-- @include: code/Vudio.vue -->
```

@import

```json
{
  "imports": {
    "vue": "https://sfc.vuejs.org/vue.runtime.esm-browser.js",
    "vudio": "https://unpkg.com/vudio@2.1.1/umd/vudio.js"
  }
}
```

:::
