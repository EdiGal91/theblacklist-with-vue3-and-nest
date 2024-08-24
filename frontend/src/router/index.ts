import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ExploringView from '@/views/ExploringView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/exploring',
      name: 'exploring',
      component: ExploringView
    },
    {
      path: '/profile',
      name: 'profile',
      props: true,
      component: ProfileView
    },
  ]
})

export default router
