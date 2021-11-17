<template>
  <div class="swiper-container lee">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle' 
import 'swiper/swiper-bundle.css' 
export default {
  props:{
    loop:{type:Boolean,default:true}
  },
  mounted() { 
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
      },
      loop: this.loop,
      autoplay: { delay: 2000, disableOnInteraction: false },
    });
  },
};
</script>
<style  scoped>
.lee{
  width: 100%;
  /* height: 2.1rem; */
}
</style>