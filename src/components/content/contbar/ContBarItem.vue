<template>
  <div class="content_bar_item" @click="itemClick(itemdata.iid)">
    <img :src="itemdata.show.img" alt="" @load="imagesLoad" />
    <div class="content_bar_item_info">
      <p>{{ itemdata.title }}</p>
      <span class="price">{{ itemdata.price }}</span
      ><span class="collect">{{ itemdata.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemdata: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imagesLoad() {
      //事件总线：触发事件
      this.$bus1.$emit("itemImageLoad");
    },
    itemClick(i) {
      this.$router.push({ path: "/detail", query: { iid: i } });
    },
  },
};
</script>
<style scpoed>
.content_bar_item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
.content_bar_item > img {
  width: 100%;
}
.content_bar_item_info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.content_bar_item_info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.content_bar_item_info .price {
  color: red;
  margin-right: 20px;
}
.content_bar_item_info .collect {
  position: relative;
}
.content_bar_item_info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/images/home/collect_icon.png") 0 0/14px 14px;
}
</style>