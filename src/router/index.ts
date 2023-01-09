import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const home = () => import('@/views/home/index.vue'/* webpackChunkName: 'home' */)
const order = () => import('@/views/order/index.vue'/* webpackChunkName: 'order' */)
const mine = () => import('@/views/mine/index.vue'/* webpackChunkName: 'mine' */)

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: home },
  { path: '/order', name: 'order', component: order },
  { path: '/mine', name: 'mine', component: mine }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router