import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/',
    component: () => import('../views/dashboard/LayoutAdmin.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('../views/dashboard/Dashboard.vue')
      },
      {
        path: '/master',
        component: () => import('../views/dashboard/Master.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
