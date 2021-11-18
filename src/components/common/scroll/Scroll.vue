<template>
  <div class="wrapper" ref="wrapper">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
//npm install @better-scroll/observe-image --save  当然你要自己处理因图片后加载而引起无法正确滚动bug也可以自己处理
import ObserveImage from "@better-scroll/observe-image";
// npm install @better-scroll/observe-dom --save
// import ObserveDOM from "@better-scroll/observe-dom";
BScroll.use(ObserveImage);
// BScroll.use(ObserveDOM);
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          observeImage: true, // 开启 observe-image 插件
        //observeDOM: true, // 开启 observe-dom 插件
        });
      } else {
        this.scroll.refresh();
      }
    });
  },
};
</script>
<style>
</style>