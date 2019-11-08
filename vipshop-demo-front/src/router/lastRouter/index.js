export default {
  path: '/last',
  component: () => import('@/views/Home/Last'),
  children: [
    {
      path: '/last',
      redirect: '/last/today'
    },
    {
      path: 'today',
      component: () => import('@/components/Last/LaTodayList')
    },
    {
      path: 'tomorrow',
      component: () => import('@/components/Last/LaTomorrowList')
    }
  ]
}