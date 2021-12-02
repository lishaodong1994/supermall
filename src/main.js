import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'
import store from '@/store'
import toast from '@/components/common/toast'
//解决移动端300ms延迟问题：npm i fastclick
import FastClick from 'fastclick'
FastClick.attach(document.body)
//图片懒加载:npm i vue-lazyload -S
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{ loading:require('./assets/logo.png') }) //之后img 的src改成 v-lazy

Vue.config.productionTip = false 
Vue.prototype.$bus1 = new Vue() //开一个事件总线
Vue.use(toast) //加载toast插件

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
