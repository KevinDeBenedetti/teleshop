<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/app/NavBar.vue';
// import { watchEffect, onMounted, onUnmounted } from 'vue';

// import { backButton, useSignal } from '@telegram-apps/sdk-vue';
// const isVisible = useSignal(backButton.isVisible);

// watchEffect(() => {
//   console.log('The button is', isVisible.value ? 'visible' : 'invisible');
// });

// onMounted(() => {
//   backButton.show();
// });

// onUnmounted(() => {
//   backButton.hide();
// });
import { useLaunchParams } from '@telegram-apps/sdk-vue';
const lp = useLaunchParams();
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div>Start param: {{ lp.startParam }}</div>

  <main class="px-4 mt-6">
    <RouterView />
  </main>
</template>

<style scoped>
</style>
