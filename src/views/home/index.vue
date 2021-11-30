<template>
  <div class="home">
    <NavBar>{{ $route.meta.title }}</NavBar>
    <OptionBar
      :option="['流行', '新款', '精选']"
      @changeContent="tableClick"
      ref="OptionBar1"
      class="option_bar"
      v-show="optionbar_isfixed"
    ></OptionBar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      @scrollevent="setBtShow"
      @loadMore="loadMore"
    >
      <home-swiper
        :banner="banner"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <FeatureView></FeatureView>

      <!-- :class="{fixed:optionbar_isfixed}" -->
      <OptionBar
        :option="['流行', '新款', '精选']"
        @changeContent="tableClick"
        ref="OptionBar2"
      ></OptionBar>

      <ContBar :content="goods[currentType].list"></ContBar>
    </scroll>
    <!-- 不在内部监听点击事件，而直接在整个组件上监听点击事件了，
    可以监听自定义组件根元素的元素的原生事件,要加.native -->
    <BackTop @click.native="backClick" v-show="backtop_isShow"></BackTop>
  </div>
</template>
<script>
import HomeSwiper from "./childComponents/HomeSwiper";
import HomeRecommend from "./childComponents/HomeRecommend";
import FeatureView from "./childComponents/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import OptionBar from "@/components/content/optionbar/OptionBar";
import ContBar from "@/components/content/contbar/ContBar";
import BackTop from "@/components/content/backTop/BackTop";

import { getHomeMultidata, getContentData } from "API/home.js";
import Scroll from "@/components/common/scroll/Scroll.vue";
import {itemListenerMixin,backTopMixin} from '@/util/mixin.js'
export default {
  mixins:[itemListenerMixin,backTopMixin],
  data() {
    return {
      banner: [],
      recommend: [],
      keywords: [],
      dKeyword: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      top: 0,
      optionbar_isfixed: false,
      saveY: 0,
      
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    OptionBar,
    ContBar,
    Scroll,
    BackTop,
  },
  mounted() {
    this.getHomeData();
    this.getOptionContentData("pop");
    this.getOptionContentData("new");
    this.getOptionContentData("sell");

    

    //为了做optionbar吸顶效果,就到拿到它的offsetTop位置,但是：
    //我们发现拿到值并不正确：因为图片异步加载进来的缘故，取到的值是图片进来之前的。。。
    //this.top= this.$refs.OptionBar.$el.offsetTop
    //console.log(this.top); //314
    // 考虑监听图片(主要是轮播图)加载完成时再获取offsetTop
    //于是就在homeswiper里对图片进行监听，$emit出事件，触发swiperImageLoad()打印图片加载后的offsetTop
  },
  destroyed() {
    //切换路由时，我们发现组件被销毁了,我们在<router-view>外套一个<keep-ative>保证组件不被销毁！
    // 这样的好处就是我们能保持住原来组件浏览的位置。
    // 低版本的bs会有不能保持之前位置的情况。可以在离开时保存一个saveY位置值，在进入这个路由组件时将位置设置成
    //原来保存的位置saveY即可。
    console.log("组件销毁了");

  },
  // bs旧版本添加：activate组件激活时,deactivate组件离开时 keep-active下可以使用。
  activated() {
    this.$refs.scroll.scroll &&
      this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.scroll && this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
  methods: {
    async getHomeData() {
      const res = await getHomeMultidata();
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      this.keywords = res.data.keywords.list;
      this.dKeyword = res.data.dKeyword.list;
    },
    async getOptionContentData(type) {
      const page = this.goods[type].page + 1;
      const res = await getContentData(type, page);
      //console.log(res.data.list);
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page += 1;
      this.$refs.scroll.finishPullUp(); //消费完，重新开启PullUp事件
    },
    tableClick(i) {
      switch (i) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 让两个optionbar(optionbar1，optionbar2)各自点击后两者仍保持一致。
      this.$refs.OptionBar1.currentIndex = i;
      this.$refs.OptionBar2.currentIndex = i;
    },
   
    setBtShow(position) {
      //gotop按钮是否隐藏
      this.backtop_isShow = -position.y > 1000;

      // 决定optiontab是否吸顶,
      //[结果发现不行：因为受bs的影响,这个fiexd了的optionbar也会被滚动！fiexd就失去了意义]
      this.optionbar_isfixed = -position.y > this.top;
      //改变方案：复制一份optionbar让他在大于this.top的位置显示即可。
    },
    loadMore() {
      this.getOptionContentData(this.currentType);
      //bs如果使用了@better-scroll/observe-image插件，则不需要再在图片异步加载进来后进行刷新。
      //否则你要手动去监听图片加载完成然后去调用bs的refresh()方法刷新。(利用事件总线)
      // img.onload=function(){...}在vue里面封装了@load
    },

    swiperImageLoad() {
      this.top = this.$refs.OptionBar2.$el.offsetTop;
      //console.log(this.top);//601
    },
  },
};
</script>
<style scoped>
.home {
  position: relative;
  box-sizing: border-box;
  padding-top: 44px;
  padding-bottom: 49px;
  height: 100vh; /* 让高度为视口高度 */
  overflow: hidden;
}
.content {
  /* 确定content高度的技巧： */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* ---------------------- */
}
/* .fixed{
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
.option_bar {
  position: relative;
  z-index: 21;
}
</style>