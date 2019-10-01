module.exports = {
  title: 'Giraffe UI',
  description: 'Easy to use UI component library for Vue.js',
  plugins: ['@vuepress/active-header-links', '@vuepress/back-to-top'],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'Playground', link: '/play/' },
      { text: '大角落', link: 'http://www.aait-suse.cn/cai/' },
      { text: 'Github', link: 'https://github.com/Owen-Tsai/giraffe-ui/' },
    ],
    sidebar: {
      '/guide/': getGuideSidebar('指南', '组件')
    },
    sidebarDepth: 1
  }
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'installation',
        'getting-started',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'alert',
        'avatar',
        'button',
        'button-group',
        'card',
        'color',
        'checkbox',
        'dropdown',
        'icon',
        'input',
        'navbar',
        'radio',
        'tag',
        'textarea',
        'tooltip'
      ]
    }
  ]
}