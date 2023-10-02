/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": '0 0 54px 0 rgb(0 0 0 / 31%)'
      },
      transition: {
        "custom": 'z-index .3s step-start,opacity .3s ease,transform .3s ease,left .5s ease'
      },
      animate: {
        "custom": 'moveDown 0.5s ease-in-out'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};