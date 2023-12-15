/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    colors : {
      'primary': '#CC0101',
      'white':'#ffff',
      'black':'#000',
      'light-gray':'#CDCCCC',
      'dark-footer': '#470808',
      'gray':'#94A3B8',
      'yellow': '#FFF500'
    }
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('children','&>*')
    })
  ],
}

