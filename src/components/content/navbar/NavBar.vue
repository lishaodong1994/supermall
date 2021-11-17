<template>
  <div class="navbar">
      <div class="left"><slot name=left></slot></div>
      <div class="content">{{$route.meta.title}}</div>
      <div class="right"><slot name="right"></slot></div> 
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color:#f3f3f3;
}
.left{
    width: 45px;
}
.content{
    flex:1;
    text-align: center;
}
.right{
    width: 45px;
}
</style>