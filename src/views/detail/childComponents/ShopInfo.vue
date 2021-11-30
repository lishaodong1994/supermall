<template>
    <div class="shop">
        <div class="shopTitle" v-if="Object.keys(shop).length!==0">
            <img :src="shop.shopLogo" alt="">
            <span>{{shop.name}}</span>
        </div>
        <div class="shopConent">
            <div class="shopSell">
                <p><span>{{C_cSells}}</span><b>总销量</b></p>
                <p><span>{{shop.cGoods}}</span><b>全部宝贝</b></p>
            </div>
            <div class="shopTip">
                <p v-for="item in shop.score" :key="item.name">
                    <span>{{item.name}}</span>
                     <b :class=" item.isBetter?'red':'green' ">{{item.score}}</b>
                      <i :class=" item.isBetter?'redb':'greenb'">{{item.isBetter?"高":"低"}}</i>
               </p>
            </div>
        </div>
            <div class="shop_url">
                <a :href="shop.shopUrl">进店看看</a>
            </div>
    </div>
</template>
<script>
export default {
    props:{shop:{type:Object,default(){return {}} }},
    computed:{
        C_cSells(){
            if(this.shop.cSells>10000){
                return (this.shop.cSells/10000).toFixed(1)+'万'
            }
            return this.shop.cSells
        }
    }
}
</script>
<style scoped>
.shop{
    border-bottom: 8px solid #ddd;
}
.shopTitle{
    height: 50px;
    padding: 15px;
    line-height: 50px;
    font-size: 18px;

}
.shopTitle>img{
    width: 50px;
    margin-right: 10px;
}
.shopTitle>span{
   vertical-align: 15px;
}
.shopConent{
    display: flex;
    align-items: center;
    height: 80px;
    
}
.shopSell{
position: relative;
flex: 1;
display: flex;
justify-content: space-around;

}
.shopSell::after{
    content: '';
    display: block;
    position: absolute;
    right: 0;
    width: 1px;
    height: 40px;
    background-color: #aaa;
}
.shopSell>p{
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
}
.shopSell>p>b{
    font-size: 14px;
    font-weight: normal;
}
.shopTip{
flex:1;
font-size: 14px;
display: flex;
flex-direction: column;
align-items: center;
}
.shopTip>p{
    line-height: 23px;
}
.shopTip>p>span{
    margin-right: 8px;
}
.shopTip>p>b{
    display: inline-block;
    width: 35px;
    font-weight: normal;
}
.red{
    color:tomato
}
.green{
    color:green
}
.redb{
    color:#fff;
    background-color: tomato;
}
.greenb{
      color:#fff;
    background-color: green;
}
.shop_url{
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
}
.shop_url a{
    display: block;
    width: 150px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #ddd;
    border-radius: 5px;
}

</style>