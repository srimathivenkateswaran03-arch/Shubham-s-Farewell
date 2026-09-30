import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages repository base path
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/Shubham-s-Farewell/',
});

