module.exports = {
    head: {
        title: 'w3c-前端社区',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        script: [
            { src: '//at.alicdn.com/t/font_772287_9du5p5vjgxt.js' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    loading: { color: '#3B8070' },
    router: {
        middleware: 'auth'
    },
    build: {
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        vendor: ['iview','element-ui','axios']
    },
    plugins: [
        '~/plugins/iview',
        '~/plugins/element-ui',
        '~/plugins/axios'
    ],
    css: [
        '~/static/css/style.css',
        'element-ui/lib/theme-chalk/index.css',
        'iview/dist/styles/iview.css'

    ],
    cache: {
        max: 1000,
        maxAge: 900000
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    axios: {
        baseURL:'http://localhost:3000',
        https:false,
        //代理设置
        proxy: false,
        debug:true,
        //设置请求次数
    },
    proxy: {
        // '/api/': 'https://github.com',
        '/login/': { target: 'https://github.com', pathRewrite: {'^/login/': 'authorize'} }
    }
    
}