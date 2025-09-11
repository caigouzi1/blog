// .vuepress/theme/index.ts
import { defineUserConfig, Theme } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import {getDirname, path} from 'vuepress/utils'
import themeConfig from './themeConfig'
const __dirname = getDirname(import.meta.url);

const customTheme = (): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: themeConfig,
    alias: {
      '@theme-hope/modules/blog/components/BlogHome': path.resolve(__dirname, './components/HomePage')
    }
  }
}

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  base: '/blog/',
  lang: 'zh-CN',
  title: '工作学习记录',
  theme: themeConfig,
  alias: {
    '@theme-hope/components/home/HomePage': path.resolve(__dirname, './components/HomePage.vue')
  },
  shouldPrefetch: false,
})
