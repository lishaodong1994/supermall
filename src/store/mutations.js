const mutations = {
    addcount(state,pld){
        state.cart.find(item=>item.iid ===pld.iid).count += pld.count
    },
    addgoods(state,pld){
        state.cart.push(pld)
    }
}
export default mutations