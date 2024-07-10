---
date: 2024-06-17
category: 前端
tag:
  - threejs
---

# ThreeJs3D全景渲染

::: playground#vue 3D全景渲染

@file App.vue

```vue
<!-- @include: code/ThreeSkyBox.vue -->
```

@import

```json
{
  "imports": {
    "vue": "https://play.vuejs.org/vue.runtime.esm-browser.js",
    "@vue/compiler-sfc": "https://unpkg.com/@vue/compiler-sfc@3.4.29/dist/compiler-sfc.esm-browser.js",
    "@vue/shared": "https://unpkg.com/@vue/shared@3.4.29/dist/shared.esm-bundler.js",
    "vue-demi": "https://unpkg.com/vue-demi@0.14.8/lib/index.mjs",
    "three": "https://unpkg.com/three@0.151.3/build/three.module.js",
    "@tresjs/core": "https://unpkg.com/@tresjs/core@4.0.2/dist/tres.js",
    "@tresjs/cientos": "https://unpkg.com/@tresjs/cientos@3.9.0/dist/trescientos.js",
    "@vueuse/core": "https://unpkg.com/@vueuse/core@10.11.0/index.mjs",
    "@vueuse/shared": "https://unpkg.com/@vueuse/shared@10.11.0/index.mjs",
    "tweakpane": "https://unpkg.com/tweakpane@4.0.3/dist/tweakpane.js"
  }
}
```

@setting

```json
{
  "compilerOptions": {
    "isCustomElement": true
  }
}
```

:::
