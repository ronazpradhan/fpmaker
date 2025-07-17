import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/fpmaker/', // Make sure this matches your GitHub repository name exactly
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Explicitly point to your PostCSS config
  },
});