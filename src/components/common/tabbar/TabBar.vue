<template>
	<div id="tab-bar">
  	<slot></slot>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
 #tab-bar{
		display: flex;
    position:fixed;
    z-index: 200;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color:#f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.12)
	}
 
</style>