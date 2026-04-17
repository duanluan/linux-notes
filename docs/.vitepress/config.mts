import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Linux Notes (Arch / Manjaro KDE)',
  description: 'From installation and system setup to daily use',
  lang: 'en-US',
  // Use the repository name here: https://vitepress.dev/reference/site-config#base
  base: '/linux-notes/',
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Linux Notes (Arch / Manjaro KDE)',
      description: 'From installation and system setup to daily use'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'Linux 使用笔记（Arch Manjaro KDE）',
      description: '从系统安装到环境配置再到日常使用',
      themeConfig: {
        nav: [
          { text: '文档', link: '/zh/notes/system-installation.md' }
        ],
        sidebar: [
          {
            text: '目录',
            items: [
              { text: '系统安装', link: '/zh/notes/system-installation.md' },
              { text: '系统配置（必看）', link: '/zh/notes/system-configuration.md' },
              {
                text: '软件安装',
                items: [
                  { text: '系统类（必看）', link: '/zh/notes/apps/system' },
                  { text: 'AI 类', link: '/zh/notes/apps/ai' },
                  { text: '工具类', link: '/zh/notes/apps/tool' },
                  { text: '普通类', link: '/zh/notes/apps/standard' },
                  { text: '图影音编辑类', link: '/zh/notes/apps/img-video-audio-edit' },
                  { text: '开发类', link: '/zh/notes/apps/development' },
                  { text: '游戏类', link: '/zh/notes/apps/game' }
                ]
              },
              { text: '软件卸载', link: '/zh/notes/software-uninstallation.md' },
              { text: '问题解决', link: '/zh/notes/questions.md' },
              { text: '未解决 BUG', link: '/zh/notes/bug.md' },
              { text: '使用技巧', link: '/zh/notes/tips-tricks.md' }
            ]
          }
        ],
        outline: {
          label: '本页目录'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        langMenuLabel: '语言',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '外观'
      }
    }
  },
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/notes/system-installation.md' }
    ],
    sidebar: [
      {
        text: 'Contents',
        items: [
          { text: 'System Installation', link: '/notes/system-installation.md' },
          { text: 'System Configuration (Must Read)', link: '/notes/system-configuration.md' },
          {
            text: 'Software Installation',
            items: [
              { text: 'System (Must Read)', link: '/notes/apps/system' },
              { text: 'AI', link: '/notes/apps/ai' },
              { text: 'Tools', link: '/notes/apps/tool' },
              { text: 'General', link: '/notes/apps/standard' },
              { text: 'Image / Video / Audio Editing', link: '/notes/apps/img-video-audio-edit' },
              { text: 'Development', link: '/notes/apps/development' },
              { text: 'Games', link: '/notes/apps/game' }
            ]
          },
          { text: 'Software Uninstallation', link: '/notes/software-uninstallation.md' },
          { text: 'Troubleshooting', link: '/notes/questions.md' },
          { text: 'Known Bugs', link: '/notes/bug.md' },
          { text: 'Tips & Tricks', link: '/notes/tips-tricks.md' }
        ]
      }
    ],
    outline: {
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    langMenuLabel: 'Languages',
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/duanluan/linux-notes' }
    ]
  },
  // Ignore dead links: https://vitepress.dev/reference/site-config#ignoredeadlinks
  ignoreDeadLinks: true
})
