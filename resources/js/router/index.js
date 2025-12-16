import { createRouter, createWebHistory } from 'vue-router'

import Welcome from '@/views/guest/Welcome.vue'
import App from '@/views/App.vue'
import Dashboard from '@/views/auth/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/app',
    component: App, // AUTH LAYOUT
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Dashboard,
      },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
