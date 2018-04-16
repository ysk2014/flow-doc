const base = process.env.GH ? '/vuepress/' : '/'

module.exports = {
    title: '前端工作流文档',
    description: '基于 Webpack 零配置的前端工作流生态',
    base,
    themeConfig: {
        nav: [
            {
                text: '指南',
                link: '/guide/',
            },
            {
                text: '配置',
                link: '/config/',
            },
            {
                text: 'vue',
                link: '/vue/'
            },
            {
                text: 'vuessr',
                link: '/vuessr/'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '',
                        'getting-started',
                        'flow-build',
                        'config'
                    ]
                }
            ],
            '/config/': [
                '',
                'dev',
                'build',
                'loaders',
                'plugins',
                'hooks'
            ],
            '/vue/': [''],
            '/vuessr/': [
                '',
                'issue',
                'flow-vue-ssr-hook',
                'flow-vue-ssr-middleware'
            ]
        }
    }
}