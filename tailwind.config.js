/** @type {import('tailwindcss').Config} */
module.exports = {
    // mode: 'jit',
    // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    content: ["./src/**/*.{html,js}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          "dark-purple": "#081A51",
          "light-white": 'rgba(255,255,255,0.18)'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }