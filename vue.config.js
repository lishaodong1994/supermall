module.exports = {
    lintOnSave:false,
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'API':'@/API',
                "views":'@/views'
            }
        }
    },
    // 配置 webpack-dev-server 行为。
        devServer: {
            // host: 'localhost',
            host:'192.168.43.118', //设置自定义IP地址（本机ip4地址）
            port: 8080,
            },
}