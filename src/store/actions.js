import { ADD_COUNT, ADD_GOODS,CHANGE_ALL_CHECK } from './mutations-type'

const actions = {
    //加入购物车
    addcart(store, payload) {
        return new Promise((resolve,reject)=>{
            let flag = false
            for (let i = 0; i < store.state.cart.length; i++) {
                if (store.state.cart[i].iid === payload.iid) {
                    flag = true
                    break
                }
            }
            // flag ? store.commit(ADD_COUNT, payload) : store.commit(ADD_GOODS, payload)
            if(flag){
                store.commit(ADD_COUNT, payload)
                resolve('小主，已为您添加商品数量~')
            }else{
                store.commit(ADD_GOODS, payload)
                resolve('小主，已为您添加入购物车~')
            }
        })
    },
    //修改全选
    changeAllCheck(store){
        store.commit(CHANGE_ALL_CHECK,store.getters.allCheck)
    }
}
export default actions