import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url);


export default hopeTheme({
  hostname: 'https://caigouzi1.github.io/blog/',

  author: {
    name: '爵爵爵',
    url: 'https://github.com/caigouzi1',
  },

  logo: '/avatar.png',

  repo: 'https://github.com/caigouzi1/blog',

  docsBranch: 'master',

  docsDir: '/docs',

  navbar: navbar,

  sidebar: false,
  // sidebar: sidebar,
  blog: {
    description: '一个前端开发者',
    // intro: '/intro.html',
    medias: {
      GitHub: 'https://github.com/caigouzi1',
    },
  },

  footer: '船到桥头自然直',

  displayFooter: true,

  pageInfo: ['Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  lastUpdated: true,

  editLink: true,

  // locales: {
  //   '/': {
  //     navbar: false,

  //     sidebar: false
  //   }
  // },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['woshicaigouzi'],
    },
  },
  markdown: {
    // enableAll: true,
      highlighter: {
        type: 'shiki',
        notationDiff: true
      },
      mermaid: true,
      demo: true,  // 代码演示
      vuePlayground: true,  // Vue 交互演示
      playground: {
        // 添加预设
        presets: [
          "ts",
          "vue",
        ],
        // 设置内置预设 (可选)
        config: {
          ts: {
            // ...
          },
          vue: {
            // ...
          },
        },
      },
      include: true,
      revealjs: {
        themes: ['auto'],
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      },
    },
  plugins: {
    icon: {
      prefix: 'iconfont icon-',
    },

    catalog: false,
    blog: {
      excerpt: false,
      excerptLength: 0,
      article: '/',
    },
    seo: false,
    pwa: {
      favicon: '/blog/logo.ico',
    },
    git: {
      updatedTime: true,
      contributors: false
    },

    // 评论插件配置
    comment: {
      provider: 'Giscus',
      comment: true,
      repo:"caigouzi1/blog",
      repoId:"R_kgDOGubgfg",
      category:"General",
      categoryId:"DIC_kwDOGubgfs4CW2aa",
    },

  },
}, {custom: true, check: true})
