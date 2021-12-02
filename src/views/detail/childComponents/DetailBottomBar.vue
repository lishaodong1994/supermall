<template>
  <div class="detailBottomBar">
    <div class="btn">
      <img src="~assets/images/detail/icon01.png" alt="" /><span>客服</span>
    </div>
    <div class="btn">
      <img src="~assets/images/detail/icon02.png" alt="" /><span>店铺</span>
    </div>
    <div class="btn">
      <img src="~assets/images/detail/icon03.png" alt="" /><span>收藏</span>
    </div>
    <div class="cart" @click="addCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addCart() {
      this.$emit("showPopup");
    },
  },
};
</script>

<style scoped>
.detailBottomBar {
  width: 100%;
  height: 49px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  font-size: 16px;
  background-color: #fff;
}
.detailBottomBar .btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 60px;
}
.detailBottomBar .btn img {
  width: 25px;
}

.cart,
.buy {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 90px;
  background-color: tomato;
}
.cart {
  background-color: rgba(197, 230, 53, 0.959);
  color: #333;
}
</style>