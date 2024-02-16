/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        light:"#D0d7e1",
        lightBlue:"#9ccddb",
        mediumBlue:"#5790ab",
        darkBlue:"#064469",
        darkBlue2:"#072d44"
      }
    },
  },
  plugins: [],
}

