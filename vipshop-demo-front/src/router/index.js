import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './homeRouter'
import loginRouter from './loginRouter'
import categoryRouter from './categoryRouter'
import lastRouter from './lastRouter'
import searchRouter from './searchRouter'
import cartRouter from './cartRouter'
import userInfo from './userRouter'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  loginRouter,
  homeRouter,
  categoryRouter,
  lastRouter,
  searchRouter,
  cartRouter,
  userInfo
]


const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let email = window.localStorage.getItem('email');
  next()
  if (to.path === '/user') {
    if (email) {
      next()
    } else {
      next('/login')
    }
  }else if (to.path === '/login') {
    if (email) {
      next('/user')
    } else {
      next()
    }
  }
});


export default router
