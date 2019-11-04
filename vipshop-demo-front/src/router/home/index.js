export default {
  path: '/',
  name: 'home',
  component: () => import('@/views/Home'),
  children: [
    {
      path: '',
      redirect: 'recommend'
    },
    {
      path: 'recommend',
      component: () => import('@/views/Recommend')
    }
  ]
}