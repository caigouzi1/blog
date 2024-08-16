<template>
  <div>
    <CanvasRender :img-path="imgPath" />
    <CanvasRender :img-path="imgPath" :start-x="startX" :start-y="startY" :end-x="endX" :end-y="endY"  />
    <CanvasRender :img-path="imgPath" :start-x="startX" :start-y="startY" :end-x="endX" :end-y="endY" :rotate="90"  />
    <CanvasRender :img-path="imgPath" :start-x="startX" :start-y="startY" :end-x="endX" :end-y="endY" :rotate="180"  />
    <CanvasRender :img-path="imgPath" :start-x="startX" :start-y="startY" :end-x="endX" :end-y="endY" :rotate="270"  />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CanvasRender from './CanvasRender.vue';

const imgPath = ref('https://gips2.baidu.com/it/u=2055042668,1190219470&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280')
const startX = ref(15)
const startY = ref(25)
const endX = ref(95)
const endY = ref(75)

</script>

<style scoped>

</style>
