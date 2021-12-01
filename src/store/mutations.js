import {
    ADD_COUNT,
    ADD_GOODS,
    DEL_GOODS,
    ADD_COUNT_ONE,
    DEL_COUNT_ONE,
    CHANGE_CHECK,
    CHANGE_ALL_CHECK
} from './mutations-type'

const mutations = {
    //添加任意数量
    [ADD_COUNT](state,pld){ state.cart.find(item=>item.iid ===pld.iid).count += pld.count },
    //添加商品
    [ADD_GOODS](state,pld){ state.cart.push(pld) },
    //删除商品
    [DEL_GOODS](state,pld){
        state.cart= state.cart.filter(item=>item.iid!==pld)
    },
    //加一件
    [ADD_COUNT_ONE](state,id){
        state.cart.find(item=>item.iid ===id).count<10&&
        (state.cart.find(item=>item.iid ===id).count += 1)
    },
    // 减一件
    [DEL_COUNT_ONE](state,id){
        state.cart.find(item=>item.iid ===id).count>1&&
        (state.cart.find(item=>item.iid ===id).count -=1)
    },
    //子项修改勾选
    [CHANGE_CHECK](state,id){
       let temp = state.cart.find(item=>item.iid ===id)
       temp.checked = !temp.checked
    },
    //点击全选修改子项
    [CHANGE_ALL_CHECK](state,pld){ state.cart.forEach(item=>{ item.checked = !pld }) }
}
export default mutations