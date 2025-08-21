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
          'base-content': '#EEE',
          primary: '#61ff4c',
          accent: '#61ff4c',
          'base-100': '#323232',
          'base-300': '#252525'
        }
      }
    ]
  }
}
