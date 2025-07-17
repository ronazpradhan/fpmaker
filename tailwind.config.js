// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Only Inter font for sans-serif
      },
      colors: {
        'background': '#111111',
        'surface': '#1a1a1a',
        'text-primary': '#f0f0f0',
        'text-secondary': '#a0a0a0',
        'border': '#2a2a2a',
        'primary': '#3B82F6',
        'primary-hover': '#2563eb',
        'success': '#22c55e',
        'success-hover': '#16a34a',
        'gradient-start': '#6EE7B7',
        'gradient-end': '#3B82F6',
      }
    },
  },
  plugins: [],
};