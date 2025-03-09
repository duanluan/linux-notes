import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'

export default defineUserConfig({
  base: '/deepin-notes/',
  lang: 'zh-CN',

  title: 'Deepin 使用笔记',
  description: '从系统安装到环境配置再到日常使用',

  theme: defaultTheme({
    logo: 'imgs/deepin-logo.svg',

    navbar: [{
      text: '笔记',
      children: [
        "/notes/deepin-installation.md",
        "/notes/system-configuration.md",
        "/notes/software-installation.md",
      ]
    },{
      text: 'GitHub',
      link: 'https://github.com/duanluan/deepin-notes',
    }],

    sidebar: {
      '/notes/': [
        {
          text: '笔记',
          children: [
            '/notes/device.md',
            '/notes/deepin-installation.md',
            "/notes/system-configuration.md",
            "/notes/software-installation.md",
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),

  plugins: [
    markdownImagePlugin({
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    }),
  ],
})
