<template>
  <div class="controller" style="position: relative;">
    <canvas ref="canvasRef" style="height: 100vh; width: 100vh" id="canvas"></canvas>
    <audio ref="audioRef"
      src="https://webfs.hw.kugou.com/202408101546/70167df956e7171cf7af6a23cfe33088/v3/0a335e9374392b72e5965d8f6165e564/yp/p_0_960129/ap1014_us0_mii0w1iw8z2ai2iphcu80ooo2ki81120_pi406_mx53768653_s83168549.mp3"
      preload="auto" autoplay></audio>
    <div style="position: absolute; bottom: 100px; display: flex;">
      <div>
        <button class="type type-1" @click="changeType(0)">Wave</button>
        <button class="type type-2" @click="changeType(1)">Circular</button>
        <button class="type type-3" @click="changeType(2)">Lighting</button>
        <button class="type type-4" @click="changeType(3)">Circular2</button>
      </div>
      <div>
        <button class="color color-1" @click="changeColor(0)"></button>
        <button class="color color-2" @click="changeColor(1)"></button>
        <button class="color color-3" @click="changeColor(2)"></button>
        <button class="color color-4" @click="changeColor(3)"></button>
        <button class="color color-5" @click="changeColor(4)"></button>
      </div>
      <div>
        <button class="pos-v" @click="changePosV('top')">Top</button>
        <button class="pos-v" @click="changePosV('middle')">Medium</button>
        <button class="pos-v" @click="changePosV('bottom')">Down</button>
      </div>
      <div>
        <button class="pos-h" @click="changePosH('left')">Left</button>
        <button class="pos-h" @click="changePosH('center')">Medium</button>
        <button class="pos-h" @click="changePosH('right')">Right</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import 'vudio'

const canvasRef = ref()
const audioRef = ref()

let vudio: any



const colors = [
  [
    [0, '#f00'],
    [0.3, '#f00'],
    [0.3, '#f90'],
    [0.7, '#f90'],
    [0.7, '#ff0'],
    [1, '#ff0']
  ],
  '#ff0',
  ['#06f', '#09f', ' #0Cf', '#0ff'],
  ['#fb6d6b', '#c10056', ' #a50053', '#51074b'],
  [
    [0, '#ff422d'],
    [0.5, '#ff422d'],
    [0.5, '#6072ff'],
    [1, '#6072ff']
  ]
];
const types = ['waveform', 'circlebar', 'lighting', 'circlewave'];
let prettify = false;




onMounted(() => {
  const Vudio = window.Vudio
  vudio = new Vudio(audioRef.value, canvasRef.value, {
    effect: 'waveform', // waveform, circlewave, circlebar, lighting (4 visual effect)
    accuracy: 128, // number of freqBar, must be pow of 2.
    width: 500, // canvas width
    height: 100, // canvas height
    waveform: {
      minHeight: 1, // min waveform bar height
      spacing: 1, // space between bars
      color: ['#06f', '#09f', ' #0Cf', '#0ff'],
      shadowBlur: 0, // blur of bars
      shadowColor: '#f00',
      fadeSide: true, // fading tail
      horizontalAlign: 'center', // left/center/right, only effective in 'waveform'/'lighting'
      verticalAlign: 'middle' // top/middle/bottom, only effective in 'waveform'/'lighting'
    }
  });
  vudio.dance()
})


function changeType(index) {
  vudio.setOption({
    effect: types[index]
  });
}
function changeColor(index) {
  vudio.setOption({
    waveform: {
      color: colors[index]
    },
    circlewave: {
      color: colors[index]
    },
    circlebar: {
      color: colors[index]
    },
    lighting: {
      color: colors[index]
    }
  });
}
function changePosV(type) {
  var option = {
    verticalAlign: type,
    fadeSide: true
  };
  vudio.setOption({
    waveform: option,
    lighting: option,
  });
}

function changePosH(type) {
  var option = {
    horizontalAlign: type,
    fadeSide: true
  };
  vudio.setOption({
    waveform: option,
    lighting: option,
  });
}
function prettifyWaveform() {
  vudio.setOption({
    waveform: {
      prettify: prettify
    },
    circlewave: {
      prettify: prettify
    },
    circlebar: {
      prettify: prettify
    },
  });
  prettify = !prettify;
}
</script>

<style>
html,
.github-corner {
  z-index: 99;
}

.label {
  position: absolute;
  text-align: center;
  height: 85px;
  width: 100%;
  color: #eee;
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 700;
  opacity: .3;
  border-radius: 8px;
  border: 1px dashed #ccc;
}

.controller {
  background: radial-gradient(#305670, #010609);
}

.controller div {
  display: inline-block;
  height: 40px;
  margin: 0 10px;
}

.controller button {
  display: block;
  float: left;
  height: 40px;
  margin: 0 1px;
  padding: 0 15px;
  color: #fff;
  background-color: rgba(255, 255, 255, .2);
  border-radius: 12px;
  border: none;
  outline: none;
}

.controller button:hover {
  opacity: .6;
}

.color-1 {
  background-image: linear-gradient(#f00 0%, #f00 30%, #f90 30%, #f90 70%, #ff0 70%, #ff0 100%);
}

button.color-2 {
  background-color: #ff0;
}

.color-3 {
  background-image: linear-gradient(#00f, #06f, #09f, #0ff);
}

.color-4 {
  background-image: linear-gradient(#fb6d6b, #c10056, #a50053, #51074b);
}

.color-5 {
  background-image: linear-gradient(#ff422d 0%, #ff422d 50%, #6072ff 50%, #6072ff 100%);
}
</style>
