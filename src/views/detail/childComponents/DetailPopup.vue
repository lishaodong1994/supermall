<template>
  <CustomPopup ref="popup" >
    <div slot="PoperContent">
      <div class="content">
        <div class="info">
          <img :src="popupData.image" alt="" />
          <div class="msg">
            <p class="price">{{popupData.price}}</p>
            <p>{{popupData.explan}}</p>
          </div>
        </div>
        <div>
          <p>数量</p>
          <button @click="decrement" :disabled="count===1">-</button>
          <input v-model="count" type="number" />
          <button @click="increment" :disabled="count>9">+</button>
        </div>
      </div>
        <div class="btn" @click="addCart(popupData)">确认</div>
    </div>
  </CustomPopup>
</template>
<script>
import CustomPopup from "@/components/content/customPopup/CustomPopup.vue";
export default {
  props:{
    popupData:{type:Object,default(){return{}}}
  },
  components: {
    CustomPopup,
  },
  data(){
    return{
      count:1
    }
  },
  
  methods: {
    //显示购物车弹出框
    showCartPopup() {
      this.$refs.popup.showCustom();
    },
    decrement(){
      this.count>1&&this.count--
    },
    increment(){  
      this.count++
    },
    addCart(pld){
      let paload ={...pld,count:this.count}
      //console.log('添加到购物车',paload);
      this.$store.dispatch('addcart',paload)
    }
  },
};
</script>
<style scoped>
.content {
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  /* height: 300px; */
}
.content .info {
  display: flex;
  width: 100%;
}
.content .info img {
  width: 80px;
  position: relative;
  top: -60px;
}
.content .info .msg {
  flex: 1;
  margin-left: 10px;
}
.content .info .msg p {
  width: 220px;
  line-height: 20px;
  word-break: break-all;
  word-wrap: break-word;
  /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: -o-ellipsis-lastline;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.btn{
  width: 100vw;
  height: 44px;
  background: tomato;
  line-height: 44px;
  text-align: center;
}
</style>