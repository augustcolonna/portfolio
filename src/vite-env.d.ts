/// <reference types="vite/client" />

VITE_BASE_URL = '/';

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
