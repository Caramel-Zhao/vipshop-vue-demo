export default {
  path: '/home',
  component: () => import('@/views/Home'),
  children: [
    {
      path : '/home',
      redirect : '/home/recommend'
    },
    {
      path: 'recommend',
      component: () => import('@/views/Home/Recommend')
    },
    {
      path: 'beauty',
      component: () => import('@/views/Home/Beauty')
    },
    {
      path: 'maternal',
      component: () => import('@/views/Home/Maternal')
    },
    {
      path: 'international',
      component: () => import('@/views/Home/International')
    },
    {
      path: 'appliance',
      component: () => import('@/views/Home/Appliance')
    },
    {
      path: 'household',
      component: () => import('@/views/Home/Household')
    },
    {
      path: 'life',
      component: () => import('@/views/Home/Life')
    },
    {
      path: 'luxury',
      component: () => import('@/views/Home/Luxury')
    },
  ]
}