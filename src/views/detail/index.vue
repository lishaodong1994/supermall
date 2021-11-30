<template>
  <div class="detail">
    <detail-nav-bar
      :titleMessage="['商品', '参数', '评论', '推荐']"
      @changeTop="changeTop"
      ref="detailNavBar"
    ></detail-nav-bar>

    <Scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scrollevent="scrollevent"
    >
      <DetaiSwiper :banner="banner"></DetaiSwiper>
      <GoodsInfo :goods="goods"></GoodsInfo>
      <ShopInfo :shop="shop" ref="ShopInfo"></ShopInfo>
      <DetailInfo
        :detailInfo="detailInfo"
        @getOffsetY="getOffsetY"
      ></DetailInfo>
      <DetailParams :detailParams="detailParams"></DetailParams>
      <DetailRate :rate="rate" ref="DetailRate"></DetailRate>
      <ContBar :content="list" ref="ContBar"></ContBar>
    </Scroll>
      <DetailBottomBar @showPopup="showPopup"></DetailBottomBar>
      <DetailPopup ref="detailPopup"></DetailPopup>
      <BackTop @click.native="backClick" v-show="backtop_isShow"></BackTop>
  </div>
</template>
<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetaiSwiper from "./childComponents/DetailSwiper.vue";
import GoodsInfo from "./childComponents/GoodsInfo.vue";
import ShopInfo from "./childComponents/ShopInfo.vue";
import DetailInfo from "./childComponents/DetailInfo.vue";
import DetailParams from "./childComponents/DetailParams.vue";
import DetailRate from "./childComponents/DetailRate.vue";
import ContBar from "@/components/content/contbar/ContBar.vue";
import DetailBottomBar from './childComponents/DetailBottomBar';
import BackTop from '@/components/content/backTop/BackTop.vue'
import DetailPopup from './childComponents/DetailPopup.vue'

import Scroll from "components/common/scroll/Scroll.vue";
import { debounce } from "@/util/util.js";
import {backTopMixin} from '@/util/mixin.js'

import { getDetail, Goods, getRecommend } from "@/API/detail.js"; //注意导入和导出方式要对应！
export default {
  name: "Detail",
  mixins:[backTopMixin],
  data() {
    return {
      banner: [],
      goods: {},
      shop: {},
      detailInfo: {},
      detailParams: {},
      rate: [],
      list: [],
      elOffsetY: [],
      debounce_F_getOffsetY: null,
      currentIndex: "",
      eventLock: true,
    };
  },
  components: {
    DetailNavBar,
    DetaiSwiper,
    GoodsInfo,
    ShopInfo,
    DetailInfo,
    DetailParams,
    DetailRate,
    ContBar,
    DetailBottomBar,
    BackTop,
    DetailPopup,
    Scroll,
  },
  created() {
    this.debounce_F_getOffsetY = debounce(() => {
      let offsetY = [0];
      offsetY.push(this.$refs.ShopInfo.$el.offsetTop);
      offsetY.push(this.$refs.DetailRate.$el.offsetTop);
      offsetY.push(this.$refs.ContBar.$el.offsetTop);
      //console.log(offsetY);
      this.elOffsetY = offsetY;
    });
  },
  async mounted() {
    //console.log(this.$route.fullPath);///detail?iid=1lyp2vg
    // 数据请求：
    const res = await getDetail(this.$route.query.iid);
    const data = res.result;
    this.banner = res.result.itemInfo.topImages;
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
    this.shop = data.shopInfo;
    this.detailInfo = data.detailInfo;
    this.detailParams = data.itemParams;
    data.rate.cRate !== 0 && (this.rate = data.rate.list);

    const { data: res2 } = await getRecommend();
    //console.log(res2.list);
    this.list = res2.list;

    // 获取各个元素的offset高度用于位置位置
    // this.$nextTick(()=>{
    //   // 注意：这里拿到的offsetTop依然会受到图片加载的影响（监听img的load事件）
    //   // offsetTop值不对的时候，一般都是因为图片（异步加载进来）的问题。
    //  let offsetY = [0]
    //  offsetY.push(this.$refs.ShopInfo.$el.offsetTop)
    //  offsetY.push(this.$refs.DetailRate.$el.offsetTop)
    //  offsetY.push(this.$refs.ContBar.$el.offsetTop)
    //  this.elOffsetY = offsetY
    // })
  },
  methods: {
    getOffsetY() {
      //img一load就触发，触发频率太多。
      //   let offsetY = [0];
      //   offsetY.push(this.$refs.ShopInfo.$el.offsetTop);
      //   offsetY.push(this.$refs.DetailRate.$el.offsetTop);
      //   offsetY.push(this.$refs.ContBar.$el.offsetTop);
      //   console.log(offsetY);
      //   this.elOffsetY = offsetY;
      this.debounce_F_getOffsetY(); //在created对这个过程进行
    },
    changeTop(i) {
      //eventLock控制changeTop触发scrollTo(0, -this.elOffsetY[i], 200)滚动时不间接触发滚动scrollevent的效果。
      this.eventLock = false;  
      this.$refs.scroll.scroll.scrollTo(0, -this.elOffsetY[i], 200);
      // 当滚动完以后触发事件：使scrollevent起效果。
      this.$refs.scroll.scroll.on('scrollEnd', () => {
        this.eventLock = true;
      })
    },
    scrollevent(position) {
       //gotop按钮是否隐藏
      this.backtop_isShow = -position.y > 1000;
      // -------------------------
      if (!this.eventLock) {return; }
      let y = -position.y;
      if (this.currentIndex !== 0 && y >= 0 && y <= this.elOffsetY[1]) {
        this.currentIndex = 0;
        this.$refs.detailNavBar.currentIndex = 0;
      } else if (
        this.currentIndex !== 1 &&
        y > this.elOffsetY[1] &&
        y <= this.elOffsetY[2]
      ) {
        this.currentIndex = 1;
        this.$refs.detailNavBar.currentIndex = 1;
      } else if (
        this.currentIndex !== 2 &&
        y > this.elOffsetY[2] &&
        y <= this.elOffsetY[3]
      ) {
        this.currentIndex = 2;
        this.$refs.detailNavBar.currentIndex = 2;
      } else if (this.currentIndex !== 3 && y > this.elOffsetY[3]) {
        this.currentIndex = 3;
        this.$refs.detailNavBar.currentIndex = 3;
      }
    },
    showPopup(){
      this.$refs.detailPopup.showCartPopup()
    }
  },
};
</script>
<style scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 201;
  background-color: #fff;
}
.content {
  margin-top: 44px;
  height: calc(100% - 44px - 49px) !important;
}
</style>