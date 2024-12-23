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
      headline: 'About August',
      icon: 'fa-solid fa-person',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      headline: 'Contact August',
      icon: 'fa-solid fa-address-card',
    },
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
    meta: {
      headline: "August's Resume",
      icon: 'fa-solid fa-timeline',
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: {
      headline: "August's Projects",
      icon: 'fa-solid fa-rocket',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

export default router;
