<template>
    <div class="content_bar">
        <cont-bar-item v-for="item in content" :key="item.iid" :itemdata="item"/>
    </div>    
</template>
<script>
import ContBarItem from './ContBarItem.vue'
export default {
    props:{content:{type:Array,default(){return []}}},
    components:{
        ContBarItem
    }
}
</script>
<style scoped>
.content_bar{
    display: flex !important;
    flex-wrap: wrap;
    justify-content: space-around;
    padding:0 3px;
}
</style>