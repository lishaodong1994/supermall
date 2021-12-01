const getters = {
    // 全选是否勾选
    allCheck(state){
        if(state.cart.length===0){return false}
        const list = state.cart
        const listCount = state.cart.length
        for(let i=0;i<listCount;i++){
            if(!list[i].checked){ return false }
        }
        return true
    },
    // 总价
    allPrice(state){
        return state.cart.reduce((prev,item)=>{
            if(item.checked){return prev += (item.price.slice(1,5)-0) * item.count}
            return prev
        },0)
    },
    //勾选的数量
    checkedLength(state){
       return state.cart.filter(item=>item.checked).length
    }
}
export default getters