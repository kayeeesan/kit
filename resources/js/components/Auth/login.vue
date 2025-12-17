<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
</script>

<template>
  <v-card rounded="xl" elevation="10">
    <!-- Header -->
    <v-card-title class="text-center py-6">
      <v-avatar size="56" color="primary" class="mb-3">
        <v-icon size="32" color="white">mdi-account</v-icon>
      </v-avatar>

      <div class="text-h5 font-weight-bold mt-2">
        Welcome Back
      </div>
      <div class="text-body-2 text-medium-emphasis">
        Sign in to continue
      </div>
    </v-card-title>

    <!-- Form -->
    <v-card-text class="px-8">
      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        variant="outlined"
        prepend-inner-icon="mdi-email-outline"
        rounded="lg"
        class="mb-4"
        hide-details
      />

      <v-text-field
        v-model="password"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        variant="outlined"
        prepend-inner-icon="mdi-lock-outline"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="showPassword = !showPassword"
        rounded="lg"
        hide-details
      />
    </v-card-text>

    <!-- Actions -->
    <v-card-actions class="px-8 pb-6">
      <v-btn
        variant="text"
        color="grey"
        @click="$emit('closeDia')"
      >
        Cancel
      </v-btn>

      <v-spacer />

      <v-btn
        color="primary"
        size="large"
        rounded="pill"
        elevation="2"
      >
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
