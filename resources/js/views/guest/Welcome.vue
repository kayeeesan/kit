<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const login = () => {
  // Your login logic here
  console.log('Login clicked')
}
</script>

<template>
  <v-app>
    <!-- Enhanced App Bar -->
    <v-app-bar 
      color="primary" 
      elevation="4"
      height="70"
      class="px-6"
      :elevation-on-scroll="true"
    >
      <!-- Left side with logo/branding -->
      <div class="d-flex align-center">
        <!-- Logo/Icon -->
        <v-avatar 
          color="white" 
          size="40" 
          class="mr-3 elevation-2"
        >
          <v-icon icon="mdi-sparkles" color="primary" size="24" />
        </v-avatar>
        
        <!-- App Title -->
        <v-app-bar-title>
          <span class="text-h5 font-weight-bold text-white">
            Welcome
          </span>
        </v-app-bar-title>
      </div>

      <!-- Center navigation (optional) -->
      <v-spacer></v-spacer>
      
      <!-- Right side actions -->
      <div class="d-flex align-center ga-4">
        <!-- Optional notification icon -->
        <v-btn 
          icon="mdi-bell-outline" 
          variant="text" 
          color="white"
          size="small"
          class="mr-2"
        />
        
        <!-- Enhanced Login Button -->
        <v-btn 
          color="white"
          variant="elevated"
          prepend-icon="mdi-login"
          @click="login"
          size="default"
          class="px-5 font-weight-bold text-primary"
          rounded="pill"
          elevation="3"
          :ripple="{ center: true }"
        >
          <template v-slot:prepend>
          </template>
          <span class="text-button">Sign In</span>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Main Content (unchanged) -->
    <v-main>
      <v-container class="fill-height d-flex align-center justify-center">
        <!-- Your content here -->
      </v-container>
    </v-main>
  </v-app>
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