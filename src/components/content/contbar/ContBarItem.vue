<template>
  <div
    class="content_bar_item"
    @click="itemClick(itemdata.iid || itemdata.shop_id)"
    v-if="Object.keys(itemdata).length !== 0"
  >
    <img v-lazy="c_showImg" alt="" @load="imagesLoad" />
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
  computed: {
    c_showImg() {
      return this.itemdata.show?.img || this.itemdata.image;
    },
  },
  //监听路由的变化，解决同一页面无法跳转不同query的情况。//但实际存在BUG
  //   watch: {
  //     '$route' (to, from) {
  //         this.$router.go(0);
  //     }
  // },
  methods: {
    imagesLoad() {
      //事件总线：触发事件
      if (this.$route.path.indexOf("/home") !== -1) {
        this.$bus1.$emit("itemImageLoad");
      }
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