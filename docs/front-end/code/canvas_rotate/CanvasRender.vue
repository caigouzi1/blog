<template>
  <canvas ref="canvasRef" />
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';

const props = withDefaults(defineProps<{ imgPath: string, startX: number, startY: number, endX: number, endY: number, rotate: 0 | 90 | 180 | 270 }>(), {
  startX: 0,
  startY: 0,
  endX: 100,
  endY: 100,
  rotate: 0
})

const canvasRef = ref<HTMLCanvasElement>()

watch(() => props, () => {
  nextTick(() => {
    if (canvasRef.value && props.imgPath) {
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

        if ([90, 270].includes(props.rotate)) {
          [canvasWidth, canvasHeight] = [height, width]
        }
        if (canvasRef.value) {
          canvasRef.value.width = canvasWidth
          canvasRef.value.height = canvasHeight
        }
        ctx?.clearRect(0, 0, width, height)
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
        ctx?.drawImage(image, startX, startY, width, height, 0, 0, width, height)
        ctx?.save()
      }
    }
  })
}, { deep: true, immediate: true })


</script>

<style scoped></style>
