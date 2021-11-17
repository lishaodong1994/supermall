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
    }
}