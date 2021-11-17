<template>
  <div id="app">
    <NavBar>
    </NavBar>
    <MainTabBar></MainTabBar> 
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from '@/components/common/MainTabBar'
import NavBar from '@/components/content/navbar/NavBar'
export default {
  name: 'App',
  components: {
   MainTabBar,
   NavBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
