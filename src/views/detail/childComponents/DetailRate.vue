<template>
  <div class="detailRate">
    <p>用户评价<a>更多</a></p>
    <ul v-if="rate.length!==0">
      <li  v-for="(item,index) in rate" :key="index" >
        <div class="user"><img :src="item.user.avatar" alt="" /><span>{{item.user.uname}}</span></div>
        <p class="rateMsg">{{item.content}}</p>
        <div><span>{{C_created(item.created)}}</span><span>{{item.style}}</span></div>
        <div class="rateImg"><img v-for="item in item.images" :key="item" :src="item" alt=""></div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    props:{
        rate:{type:Array,default(){return []}}
    },
    methods:{
       C_created(time){
           return moment(time*1000).format('YYYY/MM/DD hh:mm:ss')
       }    
    }
};
</script>

<style scpoed>
.detailRate{
padding: 10px;
}
.detailRate>p{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #aaa;
}
.detailRate>p>a{
float: right;
}
.user{
    margin: 15px 0;
    display: flex;
}
.user>img{
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
}
.user>span{
    height: 50px;
    line-height: 50px;
}
.rateMsg{
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    margin: 15px 0;
}
.rateImg img{
  margin:10px 8px 10px 0px;
  width: 50px;
}

</style>