/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   fontFamily:{
    sans: ["poppins", "sans-serif"]
   },
   colors: {
    colorfont1:"#5a5a5a",
    colorfont2:"#a0a0a0",
    background:"#f5f5f5",
    rednote:"#fe6a6b",
    bluenote:"#69d7e6",
    yellownote:"#fbd33d",

   }
  },
  plugins: [],
}

