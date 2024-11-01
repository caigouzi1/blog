export type IWebItem = {
  title: string
  link: string
  icon?: string
}

export type ICategary = {
  category: string
  list: IWebItem[]
}

export const webList: ICategary[] = [
  {
    category: 'React',
    list: [
      { title: 'Ant Design 文档', link: 'https://ant-design.antgroup.com/components/overview-cn/' },
      { title: 'Umi 文档', link: 'https://umijs.org/docs/tutorials/getting-started' },
    ],
  },
  {
    category: 'Vue',
    list: [
      { title: 'Vue2 文档', link: 'https://cn.vuejs.org/v2/guide' },
      { title: 'Vue3 文档', link: 'https://cn.vuejs.org/guide/introduction.html' },
      { title: 'Vite 文档', link: 'https://cn.vitejs.dev/guide/' },
      { title: 'Antd Vue 文档', link: 'https://1x.antdv.com/docs/vue/introduce-cn/' },
      { title: 'Element 文档', link: 'https://element.eleme.cn/#/zh-CN/component/installation' },
      { title: 'element-plus 文档', link: 'https://element-plus.gitee.io/zh-CN/component/button.html' },
      { title: 'VuePress 文档', link: 'https://vuepress.vuejs.org/zh/guide/' },
    ],
  },
  {
    category: '样式库',
    list: [
      {title: 'hyperui', link: 'https://www.hyperui.dev/'},
      {title: 'floatui', link: 'https://floatui.com/components'},
      {title: 'uiverse', link: 'https://uiverse.io/elements'},
      {title: 'flowbite', link: 'https://flowbite.com/docs/components/accordion/'},
    ]
  },
  {
    category: '跨平台',
    list: [
      { title: 'Taro 文档', link: 'https://docs.taro.zone/docs' },
      { title: 'NUT UI 文档', link: 'https://jdf2e.github.io/nutui/#/start' },
      { title: 'uniapp 文档', link: 'https://uniapp.dcloud.net.cn/' },
      { title: 'uView 文档', link: 'https://www.uviewui.com/components/tag.html' },
    ],
  },
  {
    category: '微信相关',
    list: [
      { title: '微信公众平台', link: 'https://mp.weixin.qq.com/' },
      { title: '微信小程序文档', link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/' },
    ],
  },
  {
    category: '技术文档',
    list: [
      { title: 'docker', link: 'https://docker.easydoc.net/doc/81170005/cCewZWoN/lTKfePfP' },
      { title: 'Kubenetes', link: 'https://k8s.easydoc.net/docs/dRiQjyTY/28366845/6GiNOzyZ/9EX8Cp45' },
    ],
  },
  {
    category: '新奇事物',
    list: [
      { title: 'ChatGPT 镜像站', link: 'https://chat9.yqcloud.top/' },
      { title: 'ChatGPT 镜像站合集', link: 'https://cc.ai55.cc/' },
      { title: 'Segment Anything图像分割' , link: 'https://github.com/facebookresearch/segment-anything'},
      { title: '丑丑头像生成器' , link: 'https://txstc55.github.io/ugly-avatar/'},
      { title: 'Ai图片库' , link: 'https://mj.u14.app/'},
      { title: 'Ai图片库' , link: 'https://www.ai-img-gen.com/'},
      { title: 'GitHub搜索' , link: 'https://exa.ai/search'},
    ],
  },
  {
    category: '杂项',
    list: [
      {title: '京吹学报', link: 'https://hibikilogy.github.io/'},
    ]
  }
]
