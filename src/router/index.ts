import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/AboutMe.vue';
import Contact from '@/views/Contact.vue';
import Resume from '@/views/Resume.vue';
import Projects from '@/views/Projects.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
  ],
});

export default router;
