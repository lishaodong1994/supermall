<template>
  <div>
    <detail-nav-bar
      :titleMessage="['商品', '参数', '评论', '推荐']"
    ></detail-nav-bar>
    <DetaiSwiper :banner="banner"></DetaiSwiper>
    <GoodsInfo :goods="goods"></GoodsInfo>
  </div>
</template>
<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetaiSwiper from "./childComponents/DetailSwiper.vue";
import GoodsInfo from './childComponents/GoodsInfo.vue'

import { getDetail,Goods } from "@/API/detail.js"; //注意导入和导出方式要对应！
export default {
  name: "Detail",
  data() {
    return {
      banner: [],
      goods:{}
    };
  },
  components: {
    DetailNavBar,
    DetaiSwiper,
    GoodsInfo
  },
  async mounted() {
    const res = await getDetail(this.$route.query.iid);
    const data = res.result
    this.banner = res.result.itemInfo.topImages;
    this.goods= new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    console.log(data);
  },
};
</script>
<style scoped>
</style>