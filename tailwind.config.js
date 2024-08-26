/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-xl': '1800px', 
      },
        fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors:{
        custom:{
          heading:'#2c363f',
          theme:'#ffbf00',
        }
      }
    },
  },
  plugins: [],
}