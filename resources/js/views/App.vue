<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const { isAuthenticated, user } = storeToRefs(auth)
const router = useRouter()

onMounted(async () => {
  if (auth.token && !auth.user) {
    try { await auth.fetchUser() } catch (_) { /* ignore */ }
  }
})

function goLogin() {
  router.push({ name: 'login' })
}
function goDashboard() {
  router.push({ name: 'dashboard' })
}
async function logout() {
  await auth.logout()
  router.push({ name: 'login' })
}
</script>

<template>
  <v-app>
    <v-app-bar app density="compact">
      <v-app-bar-title>
        <template v-if="!isAuthenticated && !user">
            <span class="text-h6 ms-3">Kit</span>
        </template>
        <template v-if="isAuthenticated && user">
          <span class="text-body-2 ms-3">Hello, {{ user.user || user.data?.user }}</span>
        </template>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-if="isAuthenticated">
        <v-btn variant="text" @click="goDashboard">Dashboard</v-btn>
        <v-btn color="error" variant="text" @click="logout">Logout</v-btn>
      </template>
      <template v-else>
        <v-btn variant="text" @click="goLogin">Login</v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

