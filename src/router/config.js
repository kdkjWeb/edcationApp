/**
 * Created by kdkjPC on 2018/3/1.
 */
// 引入模块
import index from '@/page/index/index'
import tabBar from '@/page/tabBar/tabBar'
import home from '@/page/home/home'
import wishing from '@/page/wishing/wishing'


export default [
  {
    path: '/',
    name: 'index',
    component:index
  },{
    path: '/tabBar',
    name: 'tabBar',
    component: tabBar,
    children:[
      {
        path: '/',
        name: 'home',
        component: home,
      }
    ]
  },{
    path: '/wishing',
    name: 'wishing',
    component: wishing
  }
]
