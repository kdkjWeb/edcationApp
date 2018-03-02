/**
 * Created by kdkjPC on 2018/3/1.
 */
// 引入模块
import index from '@/page/index/index'
import wishing from '@/page/wishing/wishing'


export default [
  {
    path: '/',
    name: 'index',
    component:index
  },{
    path: '/wishing',
    name: 'wishing',
    component: wishing
  }
]
