<template>
  <ul class="option_bar">
    <li
      v-for="(item, index) in option"
      :key="index"
      @click="currentIndex = index"
    >
      <span :class="{ active: currentIndex === index }">{{ item }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    option: {
      type: Array,
      default() {
        return ["aaa", "bbb", "ccc"];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
};
</script>
<style scoped>
.option_bar {
  width: 100%;
  display: flex;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.option_bar > li {
  flex: 1;
}
.active {
    padding-bottom:5px ;
  border-bottom: 3px solid pink;
  color: pink;
}
</style>