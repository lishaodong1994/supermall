<template>
  <div>
    <NavBar>
      <span>购物车({{ $store.state.cart.length }})</span>
    </NavBar>
    <CartList v-if="cart.length"></CartList>
    <NoMessage v-else></NoMessage>
    <CartBar></CartBar>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import CartList from "./childComponents/CartList.vue";
import CartBar from './childComponents/CartBar.vue'
import NoMessage from './childComponents/NoMessage.vue'
import { mapState } from 'vuex';
export default {
  components: {
    NavBar,
    CartList,
    CartBar,
    NoMessage
  },
  computed:{
    ...mapState(['cart'])
  }
};
</script>
<style>

</style>