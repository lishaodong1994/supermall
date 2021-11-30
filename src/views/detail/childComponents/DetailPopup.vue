<template>
  <CustomPopup ref="popup">
    <div slot="PoperContent">
      <button>-</button><input type="Number" /><button>+</button>
    </div>
  </CustomPopup>
</template>
<script>
import CustomPopup from "@/components/content/customPopup/CustomPopup.vue";
export default {
  components: {
    CustomPopup,
  },
  methods: {
    //显示购物车弹出框
    showCartPopup() {
      this.$refs.popup.showCustom();
    },
  },
};
</script>
<style scoped>
</style>