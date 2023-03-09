import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const home = () => import('@/views/home/index.vue'/* webpackChunkName: 'home' */)
const order = () => import('@/views/order/index.vue'/* webpackChunkName: 'order' */)
const mine = () => import('@/views/mine/index.vue'/* webpackChunkName: 'mine' */)
const login = () => import('@/views/login/index.vue'/* webpackChunkName: 'login' */)
const shop = () => import('@/views/shop/index.vue'/* webpackChunkName: 'login' */)

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: home },
  { path: '/order', name: 'order', component: order },
  { path: '/mine', name: 'mine', component: mine },
  { path: '/login', name: 'login', component: login },
  { path: '/shop', name: 'shop', component: shop }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// const whiteList = ['/', '/home', '/mine', '/login', '/shop']
// router.beforeEach((to, from, next) => {
//   if (whiteList.includes(to.path)) {
//     next()
//   } else {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     })
//   }
// })
export default router