<template>
  <tab-bar>
  	<tab-bar-item routerPath="/home" activeColor="#FF7F24" >
  		<img slot="item-icon" src="~assets/images/tabbar/img1.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/img1a.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item routerPath="/category" activeColor="#FF7F24" >
      <img slot="item-icon" src="~assets/images/tabbar/img2.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/img2a.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item routerPath="/cart" activeColor="#FF7F24" >
      <img slot="item-icon" src="~assets/images/tabbar/img3.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/img3a.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item routerPath="/profile" activeColor="#FF7F24" >
      <img slot="item-icon" src="~assets/images/tabbar/img4.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/img4a.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
  import TabBar from '@/components/content/tabbar/TabBar'
	import TabBarItem from '@/components/content/tabbar/TabBarItem'
  export default {
		components:{
    	TabBar,
      TabBarItem
    }
	}
</script>
<style >
	
 </style>