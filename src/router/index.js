import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const Recommend = () => import('views/recommend/recommend')
const Singer = () => import('views/singer/singer')
const Rank = () => import('views/rank/rank')
const Search = () => import('views/search/search')
const SingerDetail = () => import('views/singer-detail/singer-detail')
const Disc = () => import('views/disc/disc')
const TopList = () => import('views/top-list/top-list')
const UserCenter = () => import('views/user-center/user-center')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
  // components: {
  //   Recommend, Singer
  // }
})
