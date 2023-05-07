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

    screens : {
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '820',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
        
    },
  },
  plugins: [],
}

