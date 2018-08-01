module.exports = {
    /*
    ** Headers of the page
    */
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
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
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
        vendor: ['iview','element-ui']
    },
    plugins: [
        '~/plugins/iview',
        '~/plugins/element-ui'
    ],
    css: [
        '~/static/css/style.css',
        'element-ui/lib/theme-chalk/index.css',
        'iview/dist/styles/iview.css'

    ],
    
}

