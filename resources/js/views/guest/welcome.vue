<template>
  <section class="pa-6">
    <h1>Welcome</h1>
    <p>This is a public page.</p>
    <RouterLink :to="{ name: 'login' }">Go to Login</RouterLink>
  </section>
</template>
