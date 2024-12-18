/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}"],
  theme: {  
    screens: {
      
      "sm": { 'max': '320px'},
      "md": { 'max': '768px' },
      "xl": { 'max': '1024px' },
      
    },
    extend: {},
  },
  plugins: [],
}

