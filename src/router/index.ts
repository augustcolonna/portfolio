import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/AboutMe.vue';
import Contact from '@/views/Contact.vue';
import Resume from '@/views/Resume.vue';
import Projects from '@/views/Projects.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      headline: 'Home',
      icon: 'fa-solid fa-house',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      headline: 'About',
      icon: 'fa-solid fa-circle-info',
    },
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
    meta: {
      headline: 'Experience',
      icon: 'fa-solid fa-timeline',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      headline: 'Contact',
      icon: 'fa-solid fa-paper-plane',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

export default router;
