import { defineConfig } from 'vite';
import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, '/src'));
  return {
    plugins: [vue(), vuetify({ autoImport: true })],
    styles: {
      configFile: 'src/styles/_colors.scss',
    },
    define: {
      'process.env': env,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src'),
      },
    },
    server: {
      host: 'localhost',
      port: 5000,
    },
  };
});
