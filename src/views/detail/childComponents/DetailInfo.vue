<template>
    <div class="detailInfo">
        <div class="border-top"></div>
        <p>{{detailInfo.desc}}</p>
        <div class="border-bottom"></div>
        <div class="detailImg" v-for="(item,index) in detailInfo.detailImage" :key="index">
            <p>{{item.key}}</p>
            <img v-for="(i,idex) in item.list" :key="idex" :src="i" alt="" @load="detailInfoImgLoad">
        </div>
    </div>
</template>
<script>
export default {
    props:{detailInfo: { type:Object, default(){return {}} } },
    methods:{
        detailInfoImgLoad(){
            this.$emit('getOffsetY')
        }
    }
}
</script>
<style scoped>
.detailInfo{
    padding: 10px;
    font-size: 16px;
    text-align: justify;
    letter-spacing: 0.01em;
}
.border-top,
.border-bottom{
    height: 2px;
    width: 80px;
    background-color: #aaa;
    margin: 10px 0;
    position: relative;
}
.border-bottom{
    float: right;
    
}
.border-top::after,
.border-bottom::after{
    content: '';
    width: 5px;
    height: 5px;
    background-color: #aaa;
    position: absolute;
    top: -4px;
}
.border-bottom::after{
    right: 0;
}
.detailImg{
    padding: 30px 0;
}
.detailImg>img{
    width: 100%;
}
</style>