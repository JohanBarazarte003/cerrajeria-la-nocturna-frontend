// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a1a1a',      // Nuestro Negro Nocturno
        'brand-yellow': '#01aee8',   // Nuestro Amarillo Urgencia
        'brand-gray': '#888888',     // Nuestro Gris Neutro
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}