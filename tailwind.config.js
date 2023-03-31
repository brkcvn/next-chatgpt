/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
      {
          pattern: /^bg/,
      },
      {
          pattern: /^text/,
      },
      {
        pattern: /^border/,
    },
  ],
  theme: {
      extend: {
          colors: {
              'green': '#22c55e',
              'green-300': '#86efac',
              'green-900': '#14532d',
              'orange': '#f97316',
              'orange-300': '#fdba74',
              'orange-900': '#7c2d12',
              'red': '#ef4444',
              'red-300': '#fca5a5',
              'red-900': '#7f1d1d'
          }
      },
  },
}
