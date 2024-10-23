import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import BakeryView from '@/views/product/BakeryView.vue';
import DairyView from '@/views/product/DairyView.vue';
import DrinksView from '@/views/product/DrinksView.vue';
import FruitsView from '@/views/product/FruitsView.vue';
import SnacksView from '@/views/product/SnacksView.vue';
import VegetablesView from '@/views/product/Vegetables.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/backery',
      name: 'backery',
      component: BakeryView
    },
    {
      path: '/product/dairy',
      name: 'dairy',
      component: DairyView
    },
    {
      path: '/product/drinks',
      name: 'drinks',
      component: DrinksView
    },
    {
      path: '/product/fruits',
      name: 'fruits',
      component: FruitsView
    },
    {
      path: '/product/snacks',
      name: 'snacks',
      component: SnacksView
    },
    {
      path: '/product/vegetables',
      name: 'vegetables',
      component: VegetablesView
    },
  ]
})

export default router
