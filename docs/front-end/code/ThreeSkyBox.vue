<template>
  <TresCanvas ref="threeRef" clearColor="#c8e6f9">
    <TresPerspectiveCamera ref="cameraRef" :fov="45" :near="1" :far="1100" />
    <OrbitControls :enabled="true" :enableZoom="true" />
    <template v-if="type === 'Equirectangular'">
      <TresMesh v-if="isReady" :position="[0, 0, 0]">
        <TresSphereGeometry :args="[500, 60, 40]" :scale="[-1,1,1]" />
      </TresMesh>
    </template>
    <Suspense v-else>
      <Environment background :files="files" />
    </Suspense>
    <TresAmbientLight :intensity="2" />
  </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas, useTexture } from '@tresjs/core'
import { OrbitControls, Environment } from '@tresjs/cientos'
import { SRGBColorSpace } from 'three';
import * as Vue from 'vue'

const { ref, onMounted, defineOptions, resolveComponent } = Vue

const TresPerspectiveCamera = resolveComponent('TresPerspectiveCamera')
const TresAmbientLight = resolveComponent('TresAmbientLight')
const TresMesh = resolveComponent('TresMesh')
const TresSphereGeometry = resolveComponent('TresSphereGeometry')
// const TresMeshStandardMaterial = resolveComponent('TresMeshStandardMaterial')

defineOptions({
  compilerOptions: {
    isCustomElement: (e) => {
      return e.startsWith("Tres") || e === "primitive"
    }
  }
})




const type = ref<'Cube' | 'Equirectangular'>('Equirectangular')

const isReady = ref(false)

const negx = '/assets/skybox/negx.jpg'
const posy = '/assets/skybox/posy.jpg'
const posx = '/assets/skybox/posx.jpg'
const negy = '/assets/skybox/negy.jpg'
const posz = '/assets/skybox/posz.jpg'
const negz = '/assets/skybox/negz.jpg'
const files = [posx, negx, posy, negy, posz, negz]


console.log(posx)


const imgUrl = 'http://localhost:8080/blog/assets/skybox/2294472375_24a3b8ef46_o.jpg'

let texture:any

onMounted(async () => {
  texture = await useTexture([imgUrl])
  texture.colorSpace = SRGBColorSpace;
  isReady.value = true
})
</script>

<style>
* {
  margin: 0;
}
</style>

