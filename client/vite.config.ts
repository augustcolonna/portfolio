import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [vue()],
    define: {
      'process.env': env,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "sass:math";`,
        },
      },
    },
    server: {
      host: 'localhost',
      port: 5000,
    },
    build: {
      outDir: 'dist', // Ensure the output directory is set
      sourcemap: true, // Enable source maps for debugging
    },
  };
});
