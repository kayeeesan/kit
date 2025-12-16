<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer />
      <v-btn variant="text">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- AUTH PAGES LOAD HERE -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
