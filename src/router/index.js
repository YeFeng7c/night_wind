import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//解决编程式路由往同一地址跳转时会报错的情况
// const originalPush = VueRouter.prototype.push
// const originalReplace = VueRouter.prototype.replace
// // push
// VueRouter.prototype.push = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => {return;})
// }
// // replace
// VueRouter.prototype.replace = function replace (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
//   return originalReplace.call(this, location).catch(err => err)
// }


// const Index = ()=>import("@/components/Index")
// const Home = ()=>import("@/components/Home")
// const Message = ()=>import("@/components/Message")
// const About = ()=>import("@/components/About")
export default new Router({
  routes: [
     {
          path: '/',
          component: ()=>import('@/components/Index'),
          children:[
            {
              path: '/',
              name: 'Home',
              component: ()=>import('@/components/Home')
            },
            {
              path: '/Message',
              name: 'Message',
               component: ()=>import('@/components/Message')
            },
            {
              path: '/About',
              name: 'About',
               component: ()=>import('@/components/About')
            },
            ]
            }
  ]
})
