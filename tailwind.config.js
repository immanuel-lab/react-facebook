/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        lightgreen:'#19cf4b',
        tb:'#0f0f0f'
          },
    },
  },
 
  plugins: [ require('tailwind-scrollbar-hide')],
}
