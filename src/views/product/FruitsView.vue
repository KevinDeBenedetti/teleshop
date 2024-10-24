<script setup lang="ts">
import { ref, onMounted } from "vue";

const products = ref([
{
        "id": "2000",
        "code": "fru01",
        "name": "Apple",
        "description": "Fresh and juicy red apples",
        "image": "apple.jpg",
        "price": 1.5,
        "category": "Fruits",
        "quantity": 120,
        "inventoryStatus": "INSTOCK",
        "rating": 4
    },
    {
        "id": "2001",
        "code": "fru02",
        "name": "Banana",
        "description": "Ripe yellow bananas",
        "image": "banana.jpg",
        "price": 0.9,
        "category": "Fruits",
        "quantity": 80,
        "inventoryStatus": "INSTOCK",
        "rating": 5
    },
    {
        "id": "2002",
        "code": "fru03",
        "name": "Orange",
        "description": "Citrus-rich oranges",
        "image": "orange.jpg",
        "price": 1.2,
        "category": "Fruits",
        "quantity": 50,
        "inventoryStatus": "INSTOCK",
        "rating": 4
    },
    {
        "id": "2003",
        "code": "fru04",
        "name": "Strawberry",
        "description": "Sweet and fresh strawberries",
        "image": "strawberry.jpg",
        "price": 2.5,
        "category": "Fruits",
        "quantity": 30,
        "inventoryStatus": "INSTOCK",
        "rating": 5
    },
    {
        "id": "2004",
        "code": "fru05",
        "name": "Grapes",
        "description": "Fresh green grapes",
        "image": "grapes.jpg",
        "price": 3.0,
        "category": "Fruits",
        "quantity": 40,
        "inventoryStatus": "LOWSTOCK",
        "rating": 4
    },
    {
        "id": "2005",
        "code": "fru06",
        "name": "Pineapple",
        "description": "Tropical and juicy pineapples",
        "image": "pineapple.jpg",
        "price": 4.5,
        "category": "Fruits",
        "quantity": 20,
        "inventoryStatus": "INSTOCK",
        "rating": 4
    },
    {
        "id": "2006",
        "code": "fru07",
        "name": "Watermelon",
        "description": "Fresh and juicy watermelons",
        "image": "watermelon.jpg",
        "price": 7.0,
        "category": "Fruits",
        "quantity": 15,
        "inventoryStatus": "INSTOCK",
        "rating": 5
    }
]);

onMounted(async () => {
  try {
    const response = await fetch("/teleshop/content/fruits.json");
    const data = await response.json();
    products.value = data
    console.log(products.value)
  } catch (error) {
    console.error("Error loading products:", error);
  }

});

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warn';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
</script>

<template>
  <h1 class="text-center text-green-600 text-2xl mb-8">Fruits</h1>

  <DataView :value="products">
      <template #list="slotProps">
          <div class="flex flex-col">
              <div v-for="(item, index) in slotProps.items" :key="index">
                  <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                      <div class="md:w-40 relative">
                          <img class="block xl:block mx-auto rounded w-full" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                          <div class="absolute bg-black/70 rounded-border" style="left: 4px; top: 4px">
                              <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                          </div>
                      </div>
                      <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                          <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                              <div>
                                  <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                                  <div class="text-lg font-medium mt-2">{{ item.name }}</div>
                              </div>
                              <div class="bg-surface-100 p-1" style="border-radius: 30px">
                                  <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                      <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                                      <i class="pi pi-star-fill text-yellow-500"></i>
                                  </div>
                              </div>
                          </div>
                          <div class="flex flex-col md:items-end gap-8">
                              <span class="text-xl font-semibold">${{ item.price }}</span>
                              <div class="flex flex-row-reverse md:flex-row gap-2">
                                  <Button icon="pi pi-heart" outlined></Button>
                                  <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </template>
  </DataView>
</template>

<style scoped>
</style>
