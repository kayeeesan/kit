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
  //Auth Routes
  {
//maybe here? for login
  },
  //Protected Routes
  {
    path: '/app',
    component: App, 
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
