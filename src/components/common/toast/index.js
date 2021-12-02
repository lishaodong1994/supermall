import Toast from './Toast.vue';
//插件形式的封装：
const obj = {}
obj.install = function(Vue){  //Vue.use(obj)函数使用时会去自动调用对象上的install方法。
    const ToastConstructor = Vue.extend(Toast) //创建组件构造器
    const toast = new ToastConstructor() //创建一个实例
    toast.$mount(document.createElement('div')) //组件对象挂载到div元素上
    document.body.appendChild(toast.$el) //把这个div $el 加到body上
    Vue.prototype.$toast = toast  //挂载到Vue的原形对象上方便调用。
} 
export default obj
