import { createApp } from 'vue';
import vuetify from '@/plugins/vuetify';
import '@/styles/_main.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import '@/@types/types';

import App from '@/App.vue';
import router from '@/router';

createApp(App).use(vuetify).use(router).mount('#app');
