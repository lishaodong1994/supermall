<template>
  <div class="detailParams" v-if="Object.keys(detailParams).length!==0">
      <p class="title">{{detailParams.rule.key}}</p>
      <table class="detailTable">
          <tr v-for="(item,index) in detailParams.rule.tables[0]" :key="index">
              <td v-for="(ite,ind) in item" :key="ind">{{ite}}</td> 
          </tr>
          <tr v-for="(item,zzz) in detailParams.info.set" :key="zzz+Date.now()">
              <td>{{item.key}}</td><td class="_value">{{item.value}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
props:{detailParams:{type:Object,default(){return {}}}}
}
</script>

<style scoped>
.detailParams .title{
    padding:0 15px 10px;
}
.detailTable{
    width: 100%;
}
.detailTable>tr{
    display: flex;
    margin:  0 10px;
    height: 50px;
    line-height: 20px;
    align-items: center;
    border-bottom: 1px solid #aaa;
    font-size: 15px;
    text-indent: 10px;
}
.detailTable>tr>td{
    flex: 1;
}

.detailTable>tr>._value{
    flex:3;
    text-align: justify;
    text-indent: 0;
}
</style>