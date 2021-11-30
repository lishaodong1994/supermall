<template>
  <nav-bar>
    <img
      slot="left"
      src="~assets/images/fanhui.png"
      alt=""
      class="goback"
      @click="$router.back()"
    />
    <div id="title">
      <span
        v-for="(item, index) in titleMessage"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index)"
      >
        {{ item }}
      </span>
    </div>
  </nav-bar>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  props: {
    titleMessage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods:{
    itemClick(i){
      this.currentIndex = i
      this.$emit('changeTop',i)
    }
  }
};
</script>
<style scpoed>
.goback {
  width: 35px;
}
#title {
  display: flex;
  justify-content: space-around;
  padding: 0 25px;
  font-size: 14px;
}
.active {
  color: tomato;
}
</style>