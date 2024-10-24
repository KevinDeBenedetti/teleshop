import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Primevue
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';

// Telegram
import { init } from '@telegram-apps/sdk-vue';

// Eruda - Debugging
import eruda from 'eruda';
eruda.init();

import App from './App.vue';
import router from './router';

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
app.use(init());

app.mount('#app');
