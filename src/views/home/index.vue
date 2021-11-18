<template>
  <div class="home">
    <NavBar>{{ $route.meta.title }}</NavBar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      @scrollevent="setBtShow"
      @loadMore="loadMore"
    >
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <FeatureView></FeatureView>
      <OptionBar
        :option="['流行', '新款', '精选']"
        @changeContent="tableClick"
      ></OptionBar>
      <ContBar :content="goods[currentType].list"></ContBar>
      <ul>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
      </ul>
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
export default {
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
      backtop_isShow: false,
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
      this.$refs.scroll.finishPullUp();
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
    },
    backClick() {
      this.$refs.scroll.goTop();
    },
    setBtShow(position) {
      this.backtop_isShow = -position.y > 1000;
    },
    loadMore() {
      this.getOptionContentData(this.currentType);
      //bs如果使用了@better-scroll/observe-image插件，则不需要再在图片异步加载进来后进行刷新。
      //否则你要手动去监听图片加载完成然后去调用bs的refresh()方法刷新。
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
</style>