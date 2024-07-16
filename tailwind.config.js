/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        skillbar: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
      },
      animation: {
        'skillbar': 'skillbar 1s ease-in',
      }
    },
  },
  plugins: [],
}

