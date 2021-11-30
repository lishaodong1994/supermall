<template>
  <div class="content_bar">
    <!--error: Duplicate keys detected, key重复而报错,用不同的key就行了。 -->
    <cont-bar-item
      v-for="(item, index) in content"
      :key="c_key(item, index)"
      :itemdata="item"
    />
  </div>
</template>
<script>
import ContBarItem from "./ContBarItem.vue";
export default {
  props: {
    content: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    ContBarItem,
  },
  methods: {
    c_key(item, index) {
      let res = item.iid ? item.iid + index : item.item_id;
      return res;
    },
  },
};
</script>
<style scoped>
.content_bar {
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 3px;
}
</style>