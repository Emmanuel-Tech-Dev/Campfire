/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
         'new':["Schibsted Grotesk","sans-serif"], 
         'old':['Space Grotesk', 'sans-serif'],
         'odd':[ 'Hanken Grotesk', 'sans-serif'],
      },
backgroundImage : {
  'Bg_image' : "url(' ../images/Bg_image.png')",
}
    },
  },
  plugins: [],
}

