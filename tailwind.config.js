/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-slow': 'float 20s ease-in-out infinite',
        'float-delayed': 'float 20s ease-in-out infinite',
      },
      backdropBlur: {
        'lg': '10px',
      },
    },
  },
  plugins: [],
};