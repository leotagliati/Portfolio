/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '112':'32rem',
        '144':'36rem',
        '160':'40rem',
      },
      colors: {
        'cream-leo': '#fdf0d5',
        'light-purple-leo': '#C8ACD6',
        'purple-leo': '#433D8B',
        'navy-purple-leo': '#2E236C',
        'dark-purple-leo': '#17153B',
        'mountain-purple': '#210846',

        'black-navy': '#161A30',
        'dark-gray-navy': '#31304D',
        'gray-navy': '#2a2942',
        'light-gray-navy': '#B6BBC4',
        'clay-navy': '#F0ECE5'


      },
      fontFamily: {
        pixelify: ['"Pixelify Sans"', 'serif'],
        pacifico: ['"Pacifico"', 'static'],
        jetbrains: ['"JetBrains Mono"', 'serif'],
        lato: ['"Lato"', 'static'],
        inter: ['"Inter"', 'serif']

      }
    },
  },
  plugins: [],
}

