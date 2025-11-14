import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Linux 使用笔记",
  description: "从系统安装到环境配置再到日常使用",
  lang: 'zh-CN',
  // 应使用仓库名：https://vitepress.dev/reference/site-config#base
  base: '/linux-notes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: '笔记',
        items: [
          { text: '系统安装', link: '/notes/system-installation.md' },
          { text: '系统配置（必看）', link: '/notes/system-configuration.md' },
          { text: '软件安装', items: [
              { text: '系统类（必看）', link: '/notes/software-installation/system' },
              { text: '工具类', link: '/notes/software-installation/tool' },
              { text: '普通类', link: '/notes/software-installation/standard' },
              { text: '图影音编辑类', link: '/notes/software-installation/img-video-audio-edit' },
              { text: '开发类', link: '/notes/software-installation/development' },
              { text:'游戏类', link: '/notes/software-installation/game' }
            ]
          },
          { text: '软件卸载', link: '/notes/software-uninstallation.md' },
          { text: '问题解决', link: '/notes/questions.md' },
          { text: '未解决 BUG', link: '/notes/bug.md' },
          { text: '使用技巧', link: '/notes/tips-tricks.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/duanluan/linux-notes' }
    ]
  },
  // 忽略死链接：https://vitepress.dev/reference/site-config#ignoredeadlinks
  ignoreDeadLinks: true
})
