import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@game': resolve(__dirname, 'src/game'),
      '@ui':   resolve(__dirname, 'src/ui'),
      '@types-local': resolve(__dirname, 'src/types'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 0,
  },
});
