/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'yellow': '#F8FFA0',
        'light_purple': '#ECEBF9',
        'normal_purple': '#CAB2FF',
        'dark_purple': '#3C3A5F',
      },
      fontFamily:{
        'Poppins': ['Poppins']
      },
      
    },
  },
  plugins: [],
}



