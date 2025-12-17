<script setup>
import { useRouter } from 'vue-router'
import Header from "../../components/Guest/header.vue"

const router = useRouter()

</script>

<template>
  <Header />
</template>

<style scoped>
/* Custom button styling */
.v-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Button hover effect */
.v-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
}

/* Button active effect */
.v-btn:active {
  transform: translateY(0);
}

/* App bar shadow */
.v-app-bar {
  background: linear-gradient(135deg, var(--v-primary-base) 0%, #5a67d8 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Pulse animation for optional notification bell */
@keyframes subtle-pulse {
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
}

.mdi-bell-outline {
  animation: subtle-pulse 2s infinite;
}
</style>