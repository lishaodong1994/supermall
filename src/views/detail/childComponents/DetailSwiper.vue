<template>
  <swiper
    swiperName="detailSwiper1"
    :loop="true"
    paginationType="fraction"
    v-if="banner.length"
    class="swiper"
  >
    <swiper-item
      v-for="(item, index) in banner"
      :key="index"
      class="swiper_item"
    >
      <img class="banner_img" :src="item" alt="" />
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
    return {};
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {},
};
</script>
<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
.swiper_item {
  width: 100%;
  height: 100%;
  position: relative;
}
.banner_img {
  width: 100%;
  display: block;
  position: absolute;
  top: -40%;

  /* 图片自动保存宽高比适应：
   width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;   */
}
::v-deep .swiper-pagination-fraction,
::v-deep .swiper-pagination-custom,
::v-deep .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 10px;
  position: absolute;
  width: 30px;
  right: 5%;
  left: auto;
  padding: 5px;
  border-radius: 25%;
  background: white;
  font-size: 14px;
}
</style>
