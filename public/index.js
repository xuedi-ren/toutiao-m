import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: () => import('@/views/layout'),
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'house',
        component: () => import('@/views/house')
      },
      {
        path: 'information',
        component: () => import('@/views/information')
      },
      {
        path: 'my',
        component: () => import('@/views/my')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/favorate',
    component: () => import('@/views/favorate')
  },
  {
    path: '/detail',
    component: () => import('@/views/favorate/detail')
  },
  {
    path: '/rent',
    component: () => import('@/views/rent'),
  },
  {
    path: '/rent/add',
    component: () => import('@/views/rent/add.vue')  
  },
  {
    path: '/rent/search',
    component: () => import('@/views/rent/search.vue')  
  }
]

const router = new VueRouter({
  routes
})

export default router
