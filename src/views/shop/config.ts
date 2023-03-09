import menuView from './components/menu-view.vue'
import commentView from './components/comment-view.vue'
import sellerView from './components/seller-view.vue'

export const TRANSPARENT = 'transparent'
export const WHITE = '#fff'

export const SHOP_TABS = [
  {
    title: '点餐',
    value: 'menu',
    component: menuView
  },
  {
    title: '评价',
    value: 'comment',
    component: commentView
  },
  {
    title: '商家',
    value: 'seller',
    component: sellerView
  }
]