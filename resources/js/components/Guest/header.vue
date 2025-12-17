<script setup>
import { ref } from 'vue';
import login from '../Auth/login.vue';

const isDialogOpen = ref(false);

</script>
<template>
    <v-app>
    <!-- Enhanced App Bar -->
    <v-app-bar 
      color="primary" 
      elevation="4"
      height="70"
      class="px-6"
    >
      <div class="d-flex align-center">
        <v-avatar 
          color="white" 
          size="40" 
          class="mr-3 elevation-2"
        >
          <v-icon icon="mdi-sparkles" color="primary" size="24" />
        </v-avatar>
        
        <v-app-bar-title>
          <span class="text-h5 font-weight-bold text-white">
            Welcome
          </span>
        </v-app-bar-title>
      </div>

      <v-spacer></v-spacer>
      
      <div class="d-flex align-center ga-4">
        
        <v-dialog v-model="isDialogOpen" max-width="500">
          <template v-slot:activator="{ props }">
            <v-btn 
              color="white"
              variant="elevated"
              prepend-icon="mdi-login"
              size="default"
              class="px-5 font-weight-bold text-primary"
              rounded="pill"
              elevation="3"
              :ripple="{ center: true }"
              v-bind="props"
              v-on="on"
            >
              <span class="text-button">Sign In</span>
            </v-btn>
          </template>
          <login @closeDia="isDialogOpen = false" />

        </v-dialog>
      </div>
   
    </v-app-bar>

    
  </v-app>
</template>