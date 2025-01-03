/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-leo': '#fdf0d5',
        'light-purple-leo': '#C8ACD6',
        'purple-leo': '#433D8B',
        'navy-purple-leo': '#2E236C',
        'dark-purple-leo': '#17153B',
        'mountain-purple': '#210846'

      },
      fontFamily: {
        pixelify: ['"Pixelify Sans"', 'serif'],
        pacifico: ['"Pacifico"', 'serif']
      }
    },
  },
  plugins: [],
}

