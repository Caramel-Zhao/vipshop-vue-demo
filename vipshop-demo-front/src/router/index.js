import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './homeRouter'
import loginRouter from './loginRouter'
import categoryRouter from './categoryRouter'
import lastRouter from './lastRouter'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  loginRouter,
  homeRouter,
  categoryRouter,
  lastRouter
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
