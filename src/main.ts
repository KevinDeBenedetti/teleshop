import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// Primevue
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
// Telegram
import { init } from '@telegram-apps/sdk-vue';
// Vue
import App from './App.vue';
import router from './router';
// Eruda - Debugging
if (import.meta.env.MODE === 'development') {
    import('eruda').then(eruda => eruda.default.init());
}

init()

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