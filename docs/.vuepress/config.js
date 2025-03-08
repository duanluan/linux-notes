import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'Deepin 使用笔记',
  description: '从系统安装到环境配置再到日常使用',

  theme: defaultTheme({
    logo: 'imgs/deepin-logo.svg',

    navbar: [{
      text: '笔记',
      children: [
        "/notes/deepin-installation.md",
      ]
    }],

    sidebar: {
      '/notes/': [
        {
          text: '笔记',
          children: [
            '/notes/device.md',
            '/notes/deepin-installation.md',
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
})
