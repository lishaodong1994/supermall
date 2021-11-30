import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'
import store from '@/store'

Vue.config.productionTip = false
Vue.prototype.$bus1 = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
