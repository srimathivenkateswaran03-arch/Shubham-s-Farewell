import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Empty string or relative base path for GitHub Pages compatibility
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '',
});
