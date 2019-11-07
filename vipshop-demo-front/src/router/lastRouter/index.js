export default {
  path: '/last',
  component: () => import('@/views/Home/Last'),
  children: [
    {
      path: '',
      redirect: 'today'
    },
    {
      path: 'today',
      component: () => import('@/components/Last/LaTodayList')
    }
  ]
}