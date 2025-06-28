import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Linux 使用笔记",
  description: "从系统安装到环境配置再到日常使用",
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
          { text: '安装 Xubuntu', link: '/notes/xubuntu-installation.md' },
          { text: '系统配置', link: '/notes/system-configuration.md' },
          { text: '软件安装', items: [
              { text: '系统类', link: '/notes/software-installation/system' },
              { text: '工具类', link: '/notes/software-installation/tool' },
              { text: '普通类', link: '/notes/software-installation/standard' },
              { text: '图影音类', link: '/notes/software-installation/img-video-audio-edit' },
              { text: '开发类', link: '/notes/software-installation/development' }
            ]
          },
          { text: '软件卸载', link: '/notes/software-uninstallation.md' },
          { text: '已解决 BUG', link: '/notes/resolved-bug.md' },
          { text: '未解决 BUG', link: '/notes/bug.md' },
          { text: '备份旧系统 Deepin 23', link: '/notes/backup-deepin.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/duanluan/linux-notes' }
    ]
  }
})
