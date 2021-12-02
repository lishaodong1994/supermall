<template>
  <div class="cartBar">
    <div class="allcheck" @click="changeAllCheck">
      <label class="allcheckicon">
        <i v-show="allCheck" class="iconfont icon-icon check"></i>
      </label>
      <span class="allchecktext">全选</span>
    </div>
    <div class="allprice">总价：￥{{ allPrice.toFixed(2) }}</div>
    <div class="buy" @click="buygoods">去结算({{checkedLength}})</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["allCheck", "allPrice","checkedLength"]),
  },
  methods: {
    ...mapActions(["changeAllCheck"]),
    buygoods(){
      this.$toast.show('目前无法购买~');
    }
  },
};
</script>

<style scpoed>
.cartBar {
  padding: 0px 0px 0px 15px;
  background-color: #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font-size: 12px;
  height: 25px;
  line-height: 25px;
}
.allcheck {
  display: flex;
  align-items: center;
}
.allcheckicon {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  background-color: #fff;
}
.allcheckicon i {
  line-height: 15px;
  vertical-align: top;
}
.allprice {
  height: 16px;
  line-height: 16px;
  width: 110px;
  padding: 0 10px;
  border-radius: 8px;
  background-color: rgb(252, 248, 248);
}
.buy{
    width: 80px;
    text-align: center;
    background-color: tomato;
}
</style>