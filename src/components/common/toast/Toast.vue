<template>
  <div class="toast" v-show="isshow">
    <!-- span不换行默认只针对英文有效 如果想对中文设置有效需要添加样式 style="white-space:nowrap;" -->
    <!-- p标签中的字符串太长不换行（但中文字会换行，字母数字不换行）p标签中添加样式style="word-break:break-all;"<p style="word-break:break-all;"></p> -->
    <span style="white-space:nowrap">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isshow: false,
    };
  },
  methods: {
    show(message, time = 1000) {
      this.message = message;
      this.isshow = true;
      setTimeout(() => {
        (this.message = ""), (this.isshow = false);
      }, time);
    },
  },
};
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(111,111,111,.8);
    border-radius: 5px;
    padding: 20px;
    /* width: 200px; */
    font-size: 14px;
    z-index: 202;
    color: #fff;
}
</style>