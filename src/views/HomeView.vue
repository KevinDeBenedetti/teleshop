<script setup lang="ts">
</script>

<template>

  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-8">

    <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to Teleshop</h1>
    
    <p class="text-lg text-gray-600 mb-8">
      Teleshop is an open-source Telegram mini app for discovering and purchasing a store. Explore various categories and enjoy a user-friendly shopping experience !
    </p>

    <RouterLink to="/product/fruits" >
      <Button label="Explore Fruits" class="p-button-primary" />
    </RouterLink>
  </div>
</template>
