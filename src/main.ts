import App from '@/App.vue';
import router from '@/router';
// import store from '@/store'
// import '@/styles/main.scss'
import { createApp } from 'vue';

const app = createApp(App);

app.use(router);
app.mount('#app');
