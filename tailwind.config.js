/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000',
      'dark-gray': '#A9A9A9',
      'light-gray': '#E7E7E7',
      'cream': '#FAF2EB',
      'brown': '#A06029',
      'bright-brown': "#AC570D"

    },
    fontFamily: {
      'display': ['Unbounded', 'cursive'],
      'satoshi': ['Satoshi-Variable', 'sans']
    },
    extend: {
      
    },
  },
  plugins: [],
}