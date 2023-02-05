/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ssp': ['Source Sans Pro', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
