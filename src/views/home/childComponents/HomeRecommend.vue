<template>
  <div class="home_recommend">
    <div class="recommend_item" v-for="item in recommend" :key="item.title">
      <a :href="item.link">
        <!-- <img class="recommend_item_img" :src="item.image" alt="" /> -->
        <img class="recommend_item_img" v-lazy="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.home_recommend {
  margin-top: 10px;
  padding-bottom: 15px;
  display: flex;
  border-bottom:10px solid rgb(245, 245, 245) ;
}
.recommend_item {
  flex: 1;
  text-align: center;
}
.recommend_item_img {
  margin: 5px 0 5px 0;
  width: 60px;
}
</style>