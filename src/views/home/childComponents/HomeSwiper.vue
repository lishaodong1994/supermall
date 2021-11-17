<template>
  <swiper :loop="true" v-if="banner.length">
      <swiper-item v-for="item in banner" :key="item.title" >
        <a :href="item.link"><img class="banner_img" :src="item.image" alt="" /></a>
      </swiper-item>
    </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  props: { banner: { type: Array, default(){return []} } },
  components: {
    Swiper,SwiperItem
  },
};
</script>
<style>
.banner_img { width: 100%; display: block;}
</style>
