//Vue-Router版本到到3.1.0及以上之后，页面在跳转路由控制台会报Uncaught (in promise)的问题
//重写 Router上的push使多次点击同一个路由不报错。
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
//============================================================

import VueRouter from "vue-router";
import Vue from 'vue'

Vue.use(VueRouter)
const Home = ()=>import('views/home')
const Cart = ()=>import('views/cart')
const Category = ()=>import('views/category')
const Profile = ()=>import('views/profile')
const Detail = ()=>import('views/detail')

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        meta:{title:'购物街'}
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/detail',
        component:Detail
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})
export default router
