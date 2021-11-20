<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="content"><slot></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #f3f3f3;
  box-shadow: silver 1px 1px 1px;
}
.left {
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  flex: 1;
  text-align: center;
}
.right {
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>