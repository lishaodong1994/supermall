<template>
  <div class="swiper-container lee" :class="this.swiperName">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next" v-show="nextAndPrev"></div>
    <div class="swiper-button-prev" v-show="nextAndPrev"></div>
  </div>
</template>
<script>
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {
  props: {
    swiperName:{type:String ,default:'swiper-container'},
    loop: { type: Boolean, default: true },
    nextAndPrev:{type: Boolean, default: false },
    paginationType:{type: String, default: 'bullets' },
  },
  data() {
    return {
      swiper: null,
    };
  },
  mounted() {
    this.swiper = new Swiper("."+this.swiperName, {
      pagination: {
        el: ".swiper-pagination",
        type: this.paginationType,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: this.loop,
      autoplay: { delay: 2000, disableOnInteraction: false },
    });
  },
};
</script>
<style  scoped>
.lee {
  width: 100%;
  /* height: 2.1rem; */
}
</style>