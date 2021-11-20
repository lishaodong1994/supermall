import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'

Vue.config.productionTip = false
Vue.prototype.$bus1 = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
