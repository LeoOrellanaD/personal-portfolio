/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#364F6B',
          accent: '#3FC1C9',
          light: '#F5F5F5',
          highlight: '#FC5185',
        },
      },
     
    },
  },
  plugins: [],
}
