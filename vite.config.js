import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Relative base path ensures asset scripts load perfectly on GitHub Pages
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: './',
});
