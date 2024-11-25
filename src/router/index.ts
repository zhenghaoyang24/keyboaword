import { createRouter, createWebHistory } from 'vue-router'
import WordView from '../views/WordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: WordView,
    },
    {
      path: '/data',
      name: 'data',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DataView.vue'),
    },
  ],
})

export default router
