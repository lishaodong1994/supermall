<template>
  <div id="app">
    <MainTabBar></MainTabBar>
    <keep-alive exclude="Detail">
      <!-- 
      使用这个可以完美解决不刷新问题。使用router-view时，如果在相同路由之间跳转，
      默认在跳转路由时会采用缓存策略,并不会刷新当前路由组件。即mounted,beforeDestory等钩子函数并不会触发。
      如果想强制刷新，可以在根路由上为其分配一个唯一key。采用$route.fullpath作为其唯一key。
      这样vue就回认为内部路由每个都是不同的路由，在跳转时便会强制刷新组件 
      -->
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "@/components/common/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
