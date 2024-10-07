<script setup lang="ts">
// ONLY USE COMPOSITION API MEANING USE SCRIPT SETUP
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
body {
  background-color: aliceblue;
}

.container {
  background-color: whitesmoke;
  box-shadow: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.1));
  min-height: 100vh;
}
</style>
