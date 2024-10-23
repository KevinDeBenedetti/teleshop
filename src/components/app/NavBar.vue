<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';

interface MenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  items?: MenuItem[];
}

interface Product {
  id: string;
  name: string;
  route: string;
  description: string;
}

const router = useRouter();
const items = ref<MenuItem[]>([]);

const loadProducts = async () => {
    try {
        const response = await fetch("/content/products.json");
        const products = await response.json();

        const productItems: MenuItem[] = products.map((product: Product) => ({
            label: product.name,
            command: () => {
                router.push('/teleshop' + product.route);
            }
        }));

        items.value = [
            {
                icon: 'pi pi-home',
                command: () => {
                    router.push('/');
                }            
            },
            {
                label: 'Products',
                items: productItems
            },
        ];
        
    } catch (error) {
        console.error("Error loading products:", error);
    }
}

onMounted(() => {
    loadProducts();
});
</script>

<template>
  <header class="px-4 pt-2">        
    <Menubar breakpoint="245px" :model="items" />
  </header>
</template>