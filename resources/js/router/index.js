import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/guest/welcome.vue'
import Login from '@/views/auth/login.vue'
import Dashboard from '@/views/layout/dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { guestOnly: true },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Global auth guard based on presence of access token in localStorage
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')

  if (to.meta?.requiresAuth && !token) {
    return next({ name: 'login', query: { redirect: to.fullPath } })
  }

  if (to.meta?.guestOnly && token) {
    return next({ name: 'dashboard' })
  }

  return next()
})

export default router
