<template>
  <div class="cart">
    <!-- :domListener="true"  -->
    <Scroll class="cartBox" ref="cartScroll" :key="cart.length">
      <li v-for="item in cart" :key="item.iid" class="cartItem">
        <label @click="CHANGE_CHECK(item.iid)">
          <i v-show="item.checked" class="iconfont icon-icon check"></i>
        </label>
        <img :src="item.image" alt="" />
        <div class="content">
          <p>{{ item.explan }}</p>
          <p>{{ item.price }}</p>
          <p class="count">
            <i
              @click="DEL_COUNT_ONE(item.iid)"
              :class="{ disable: item.count === 1 }"
              >-</i
            >
            <span>{{ item.count }}</span>
            <i
              @click="ADD_COUNT_ONE(item.iid)"
              :class="{ disable: item.count === 10 }"
              >+</i
            >
          </p>
        </div>
        <div class="btn">
          <span @click="DEL_GOODS(item.iid)">移出</span>
        </div>
      </li>
    </Scroll>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Scroll from "@/components/common/scroll/Scroll.vue";
import { ADD_COUNT_ONE, DEL_COUNT_ONE,CHANGE_CHECK,DEL_GOODS } from "@/store/mutations-type.js";
export default {
  name: "CartList",
  data() {
    return {};
  },

  components: {
    Scroll,
  },
  computed: {
    ...mapState(["cart"]),
  },
  activated() {
    this.$refs.cartScroll.scroll && this.$refs.cartScroll.scroll.refresh();
  },
  methods: {
    ...mapMutations({
      ADD_COUNT_ONE,
      DEL_COUNT_ONE,
      CHANGE_CHECK,
      DEL_GOODS
    }),
  },
};
</script>

<style scoped>
.cart {
  margin-top: 44px;
  width: 100vw;
  font-size: 14px;
}
.cartBox {
  height: calc(100vh - 49px - 44px - 25px);
  overflow: hidden;
}
.cartItem {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #aaa;
  align-items: center;
}
.cartItem > label {
  width: 15px;
  height: 15px;
  border: #aaa solid 1px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 10px;
}
.cartItem input {
  width: 20px;
  height: 20px;
  border: none;
  /* position: relative;
  left: -200px; */
}

.cartItem > img {
  width: 80px;
  margin-right: 10px;
  border-radius: 8px;
}
.cartItem > .content {
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
}
.cartItem > .content > p {
  line-height: 16px;
  text-align: justify;
}
.cartItem > .content > p.count {
  margin-left: auto;
  margin-right: 10px;
}
.cartItem > .content > p > i,
.cartItem > .content > p > span {
  font-size: 20px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin: 0 5px;
  display: inline-block;
}
.cartItem > .content > p > i {
  border: 1px solid #aaa;
  border-radius: 10px;
}
.cartItem > .btn {
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 50px;
  border: solid #aaa 1px;
  padding: 0 5px;
  border-radius: 5px;
  font-size: 10px;
  margin-left: 10px;
}
.disable {
  background-color: #aaa;
}
.check{
  line-height: 15px;
}
</style>