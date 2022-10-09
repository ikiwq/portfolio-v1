/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const rotateY = plugin(function({addUtilities}){
  addUtilities({
    '.rotate-icon-anim':{
      transform: 'rotateX(15deg) rotateY(15deg) rotateZ(-15deg)',
    },
  })
})

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        blink: {
          '0%, 100%': { opacity:'1' },
          '50%': { opacity:'0' },
        }
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
      }
    },
    fontFamily: {
      handwrite: 'Satisfy',
    }
  },
  plugins: [rotateY],
}
