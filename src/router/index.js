import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      // component: GoodsList,
      components: {
        default: GoodsList,
        title: Title,
        img: Image
      },
      children: [
        {
          path: 'title', // 路径，不要加'/'
          name: 'title', // 名字
          component: Title // 组件名
        },
        {
          path: 'img',
          name: 'img',
          component: Image
        }
      ]
    }, {
      path: '/cart/:cartId',
      name: 'cart',
      component: Cart
    }
  ]
})
