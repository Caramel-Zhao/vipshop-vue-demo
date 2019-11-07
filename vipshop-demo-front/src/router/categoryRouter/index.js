export default {
  path: '/category',
  component: () => import('@/views/Category'),
  children: [
    {
      path: '',
      redirect: 'products'
    },
    {
      path: 'products',
      component: () => import('@/components/Category/CaProducts')
    },
    {
      path: 'shops',
      component: () => import('@/components/Category/CaShops')
    }
  ]
}