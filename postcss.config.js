const path = require("path");
module.exports = ({ file }) => {
    // vant移动端UI组件库是以375设计稿做的。所以要和自己的作区分。
    const width = file.dirname.includes(path.join('node_modules',  'vant')) ? 375 : 375;
    return {
        plugins: {
            autoprefixer: {},
            "postcss-px-to-viewport": {
                "unitToConvert": "px",//需要转换的单位，默认为"px
                "viewportWidth": width,//视窗宽度，对应UI设计稿的宽度
                "unitPrecision": 5,//指定'px'转换为视窗单位值的小数位数
                "propList": ["*"],//能转化为vw的属性列表
                "viewportUnit": "vw",//指定需要转化成的视窗单位
                "fontViewportUnit": "vw",//字体使用的视口单位
                "selectorBlackList": [], //指定不需要转换的类 （如一些有固定前缀的UI库不希望做转化
                //如果传入的值为字符串的话，只要选择器中含有传入值就会被匹配
                //例如 selectorBlackList 为 ['van'] 的话， 那么 .van-xxx 就会被忽略
                //如果传入的值为正则表达式的话，那么就会依据CSS选择器是否匹配该正则
                //例如 selectorBlackList 为 [/^body$/] , 那么 body 会被忽略，而 .body 不会
                "minPixelValue": 1, //小于或等于'1px'不转换为视窗单位
                "mediaQuery": false,//允许在媒体查询中转换'px'
                "replace": true,//是否直接更换属性值
                "exclude": [],//忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件 /(\/|\\)(node_modules)(\/|\\)/
                //注意：在配置 postcss-loader 时，应避免 ignore node_modules 目录，否则将导致 Vant 样式无法被编译。
                //如果值是一个正则表达式，那么匹配这个正则的文件会被忽略
                //如果传入的值是一个数组，那么数组里的值必须为正则
                "landscape": false,//是否添加根据 landscapeWidth 生成的媒体查询条件 
                "landscapeUnit": "vw", // 横屏时使用的单位
                "landscapeWidth": 568 //横屏时使用的视口宽度
            }
        }
    }
}
//这个文件不建议在package.json里配置。