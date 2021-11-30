const actions = {
    addcart(store,payload){
        let flag = false
        for(let i=0;i<store.state.cart.length;i++){
           if (store.state.cart[i].iid===payload.iid){
               flag = true
               break
            }
        }
        flag?store.commit('addcount',payload):store.commit('addgoods',payload)
    }
}
export default actions