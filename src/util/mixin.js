import { debounce } from "@/util/util.js";
//图片load事件
export const itemListenerMixin = {
    data() {
        return {
            imgListener: null
        }
    },
    mounted() {
        const de_refresh = debounce(this.$refs.scroll.refresh, 500);
        this.imgListener = () => {
            //this.$refs.scroll.refresh(); //图片加载完$emit一个事件，这就监听到触发刷新scroll
            //(问题：图片加载太多，事件触发太频繁，bs刷新太频繁没有必要。最好进行防抖debounce处理或节流throttle。)
            de_refresh(); //使用‘包装了防抖’的函数，优化最好是基本完成时再做性能优化。
        }
        //事件总线：开启事件，监听itemImageLoad事件的触发
        this.$bus1.$on("itemImageLoad", this.imgListener);
    },
    deactivated() {
        //取消全局事件总线监听
        this.$bus1.$off("itemImageLoad", this.imgListener)
    },
}

//backTop
export const backTopMixin = {
    data() {
        return {
            backtop_isShow: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.goTop();
        },
    }
}