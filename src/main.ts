import App from '@/App.vue';
import router from '@/router';
import '@/styles/_main.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from 'vue';

createApp(App).use(router).mount('#app');
