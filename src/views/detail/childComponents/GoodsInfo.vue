<template>
  <div class="goods">
    <div class="Info">
      <h3 class="title">{{ goods.title }}</h3>
      <div class="price">
        <b>{{ goods.newPrice }}</b
        ><span>{{ goods.oldPrice }}</span
        ><i>{{ goods.discount }}</i>
      </div>
    </div>
    <div class="tip" v-if="goods.columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.columns[2] }}</span>
    </div>
    <div class="services">
      <span v-for="(item, index) in goods.services" :key="index"
        ><img :src="item.icon" alt="" />{{ item.name }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.Info {
  margin: 15px 10px 0px 10px;
  font-size: 15px;
}
.title {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* 文字两端对齐 */
  text-align: justify;
}
.price {
  height: 55px;
  line-height: 55px;
}
.price > b {
  font-size: 24px;
  color: tomato;
}
.price > span {
  color: #aaa;
  padding-left: 6px;
  text-decoration: line-through;
}
.price > i {
  display: inline-block;
  line-height: 15px;
  height: 15px;
  vertical-align: 10px;
  margin: 0 10px;
  background-color: tomato;
  padding: 4px;
  color: white;
  font-size: 13px;
  border-radius: 15px;
}
.tip {
  font-size: 14px;
  padding: 0 10px;
  display: flex;
  height: 30px;
  color: #aaa;
  justify-content: space-between;
  align-items: center;
  border-bottom: #ddd solid 1px;
}
.services {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 60px;
  align-items: center;
  border-bottom: 4px solid rgb(235, 234, 234);
}
.services > span > img {
  width: 13px;
  vertical-align: -1px;
  margin-right: 2px;
}
</style>