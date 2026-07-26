/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import About from '@/pages/about.vue'
import Contact from '@/pages/contact.vue'
import Index from '@/pages/index.vue'
import Portfolio from '@/pages/portfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/portfolio',
      component: Portfolio,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/contact',
      component: Contact,
    },
  ],
})

export default router
