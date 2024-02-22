/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Montserrat, sans-serif'
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          'base-content': '#9d9c9d',
          primary: '#61ff4c',
          accent: '#61ff4c',
          'base-100': '#202020',
          'base-300': '#252525'
        }
      }
    ]
  }
}
