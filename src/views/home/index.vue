<template>
  <div>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
  </div>
</template>
<script>
import HomeSwiper from './childComponents/HomeSwiper.vue'
import HomeRecommend from './childComponents/HomeRecommend.vue'

import { getHomeMultidata } from "API/home";
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
    HomeSwiper,
    HomeRecommend
  },
  mounted() {
  !(async () => {
      const res = await getHomeMultidata();
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      this.keywords = res.data.keywords.list;
      this.dKeyword = res.data.dKeyword.list;
    })();
  },
  methods: {},
};
</script>
<style scoped>
</style>