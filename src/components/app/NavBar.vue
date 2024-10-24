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
        const response = await fetch("/teleshop/content/products.json");
        const products = await response.json();

        const productItems: MenuItem[] = products.map((product: Product) => ({
            label: product.name,
            command: () => {
                router.push(product.route);
            }
        }));

        items.value = [
            // {
            //     icon: 'pi pi-arrow-left',
            //     command: () => {
            //         router.back();
            //     } 
            // },
            // {
            //     icon: 'pi pi-home',
            //     command: () => {
            //         router.push('/');
            //     }            
            // },
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

const onReturn = () => {
    router.back();
}
</script>

<template>
  <header class="px-4 pt-2">        
    <Menubar breakpoint="245px" :model="items">
        <template #start>
            <div class="mr-8">
                <Button icon="pi pi-arrow-left" text @click="onReturn" />
                <RouterLink to="/" >
                    <Button icon="pi pi-home" text />
                </RouterLink>
            </div>
        </template>
        <template #end>
            <RouterLink to="/" >
                <Button icon="pi pi-user" text />
            </RouterLink>
        </template>
    </Menubar>
  </header>
</template>