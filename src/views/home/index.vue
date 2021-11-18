<template>
  <div class="home">
    <NavBar>{{ $route.meta.title }}</NavBar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <FeatureView></FeatureView>
    <OptionBar :option="['流行', '新款', '精选']"></OptionBar>
    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
  </div>
</template>
<script>
import HomeSwiper from "./childComponents/HomeSwiper.vue";
import HomeRecommend from "./childComponents/HomeRecommend.vue";
import FeatureView from "./childComponents/FeatureView.vue";

import NavBar from "@/components/content/navbar/NavBar";
import OptionBar from "@/components/content/optionbar/OptionBar";

import { getHomeMultidata,getContentData} from "API/home";
export default {
  data() {
    return {
      banner: [],
      recommend: [],
      keywords: [],
      dKeyword: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    OptionBar,
  },
  mounted() {
    this.getHomeData()
    this.getOptionContentData()
  },
  methods: {
    getHomeData() {
      !(async () => {
        const res = await getHomeMultidata();
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        this.keywords = res.data.keywords.list;
        this.dKeyword = res.data.dKeyword.list;
      })();
    },
    getOptionContentData(){
      !(async()=>{
        const res =  await getContentData(1,10)
        console.log(res);
      })()
      
    }
  },
};
</script>
<style scoped>
.home {
  padding-top: 44px;
  padding-bottom: 49px;
}
</style>