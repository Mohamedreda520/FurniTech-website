/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // ...
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#f42c37", 
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
        DarkBlue: "#252d6a",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "2rem",
          sm:'1rem',
          lg:'4rem',
          // xl:'5rem',
          // '2xl':'6rem',
        }
       }
    },
  },
  plugins: [require("daisyui")]
}
// export default {

// }
