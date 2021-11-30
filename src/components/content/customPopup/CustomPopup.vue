<template>
  <div>
    <!-- 弹出层 -->
    <div :class="{ CustomPopup: showCustomPopup }" @click="maskClick" 
    @touchmove="aaa" >
    </div>
    <div
      class="CustomPopupContent"
      :class="{ CustomPopupContentShow: showCustomPopup }"
      @touchmove="aaa"
    >
      <div class="close" @click="maskClick">x</div>
      <slot name="PoperContent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCustomPopup: false,
    };
  },
  methods: {
    showCustom() {
      this.showCustomPopup = true;
    },
    maskClick() {
      this.showCustomPopup = false;
    },
    aaa(e){
      // e.stopPropagation()//阻止冒泡
      e.preventDefault()//阻止默认事件，防止影响父组件的touchmove事件
    }
  },
};
</script>

<style scoped>
.CustomPopup {
  height: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}

.CustomPopupContent {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  transition: all 0.3s ease;
  transform: translateY(100%);
  opacity: 0;
  z-index: 3000;
}
.close{
  position: absolute;
  right: 20px;
  top: 20px;
}
.CustomPopupContentShow {
  transform: translateY(0);
  opacity: 1;
}
</style>