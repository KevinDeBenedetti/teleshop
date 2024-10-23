<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/app/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main class="px-4 mt-6">
    <RouterView />
  </main>
</template>

<style scoped>
</style>
