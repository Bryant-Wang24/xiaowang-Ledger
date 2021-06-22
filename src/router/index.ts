import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'/money'
  },
  {
    path: '/money',
    component: ()=>import('../views/Money.vue'),
  },
  {
    path: '/labels',
    component: ()=>import('../views/Labels.vue')
  },
  {
    path: '/statistics',
    component: ()=>import('../views/Statistics.vue')
  },
  {
    path: '*',
    component: ()=>import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
