import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Primevue
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';

import App from './App.vue';
import router from './router';
// Telegram Mini App
// import { init } from '@telegram-apps/sdk-vue';
// init()

const app = createApp(App);

// Primevue
app.use(PrimeVue, {
    theme: {
        preset: Aura
    },
    ripple: true
});

app.use(createPinia());
app.use(router);

app.mount('#app');
