<template>
  <div class="home-wrapper">
    <div class="view-wrapper">
      <div class="bg" />
      <div class="view-body-wrapper">
        <div class="view-body">
          <!-- <div class="tabs">
          <div v-for="categoryItem in webData" class="tab-item">
            {{categoryItem.category}}
          </div>
        </div> -->
          <div v-for="categoryItem in webData">
            <div class="title">{{ categoryItem.category }}</div>
            <div class="grid">
              <div v-for="web in categoryItem.list">
                <a class="item-wrapper" :href="web.link" target="_blank">
                  <a>{{ web.title }}</a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { webList, ICategary } from './data'
import { ref } from 'vue'

// 响应式状态
const webData = ref<ICategary[]>(webList)
</script>

<style lang="scss" scoped>
.home-wrapper {
  height: calc(100vh - 120px);
  margin-top: 60px;
  color: #fff;
  // color: #000;

  .view-wrapper {
    height: 100%;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('https://go.fuyeor.com/ran/pic') no-repeat;
      background-position: center;
      background-size: cover;
      // filter: blur(10px);
    }

    .view-body-wrapper {
      position: relative;
      width: 100%;
      height: 100%;

      z-index: 10;
      overflow: auto;

      .view-body {

        max-width: 1000px;
        margin: 10px auto 20px;

        .tabs {
          display: flex;
          border-bottom: solid 1px #fff;

          .tab-item {
            padding: 10px 20px;
            font-size: 20px;
          }
        }

        .title {
          font-size: 20px;
          line-height: 50px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 10px;

          .item-wrapper {
            display: flex;
            background: #fff;
            padding: 10px 10px;
            border-radius: 6px;
            justify-content: center;
            color: #000;

            &:hover {
              cursor: pointer;
              box-shadow: 0px 6px 6px rgba(51, 51, 51, 0.4);
            }
          }
        }
      }
    }
  }
}
</style>
