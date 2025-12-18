import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('access_token') || null,
    loading: false,
    error: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setToken(token) {
      this.token = token
      if (token) {
        localStorage.setItem('access_token', token)
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      } else {
        localStorage.removeItem('access_token')
        delete api.defaults.headers.common['Authorization']
      }
    },

    async login(credentials) {
      this.loading = true
      this.error = null
      try {
        // If you were using Sanctum cookie flow you would first: await api.get('/sanctum/csrf-cookie')
        const { data } = await api.post('/login', credentials)
        this.user = data.user
        this.setToken(data.access_token)
        return data
      } catch (e) {
        this.error = e.response?.data?.message || 'Login failed'
        throw e
      } finally {
        this.loading = false
      }
    },

    async fetchUser() {
      try {
        const { data } = await api.get('/api/user')
        this.user = data?.data || data
        return this.user
      } catch (e) {
        this.setToken(null)
        throw e
      }
    },

    async logout() {
      try {
        await api.post('/logout')
      } catch (_) {
        // ignore
      } finally {
        this.user = null
        this.setToken(null)
      }
    },
  },
})
