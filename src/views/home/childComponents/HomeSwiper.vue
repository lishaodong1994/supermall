<template>
                                         <!-- && reRender -->
  <swiper :loop="true" v-if="banner && banner.length > 0" ref="swiper">
    <swiper-item v-for="item in banner" :key="item.title">
      <a :href="item.link"
        ><img class="banner_img" :src="item.image" alt="" @load="imageLoad"
      /></a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isload: false,
      // reRender: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      if (!this.isload) {
        //利用变量控制次数
        this.$emit("swiperImageLoad");
        this.isload = true;
      }
    },
  },
  //如果vue使用了缓存，当路由跳转回来时候swiper的自动轮播会失效，可以尝试重新渲染页面，使用v-if来实现.
  // 重新渲染会发现：影响体验（会有一下闪屏）。于是改成去调用slideToLoop走一次loop
  // 加setTimeout是为了走一个异步，避免this.$refs.swiper还没生成就去.swiper，undefined选不到swiper实例。
  activated() {
    //   this.reRender = false;
    //   setTimeout(() => {
    //     this.reRender = true;
    //   }, 100);
    setTimeout(() => {
      this.$refs.swiper && this.$refs.swiper.swiper.slideToLoop();
    }, 100);
  },
};
</script>
<style scoped>
.banner_img {
  width: 100%;
  display: block;
}
</style>
