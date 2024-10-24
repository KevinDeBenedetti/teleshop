import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Primevue
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';

// Telegram
import { init } from '@telegram-apps/sdk-vue';
// Verify Telegram environment is available
function isTelegramEnvironment() {
    return typeof window.Telegram !== 'undefined' && window.Telegram.WebApp;
}
// Init SDK only if it's a Telegram environment
if (isTelegramEnvironment()) {
    init();
} else {
    console.warn('App is not running inside Telegram. Skipping Telegram SDK initialization.');
}

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

app.mount('#app');
