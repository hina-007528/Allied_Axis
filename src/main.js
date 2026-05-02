import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

const head = createHead();
createApp(App).use(router).use(head).mount('#app');
