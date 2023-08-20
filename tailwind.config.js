/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ### Primary
        'neo-cyan': 'hsl(180, 66%, 49%)',
        'neo-dark-violet': 'hsl(257, 27%, 26%)',

        // ### Secondary
        'neo-red': 'hsl(0, 87%, 67%)',

        // ### Neutral
        'neo-gray': 'hsl(0, 0%, 75%)',
        'neo-grayish-violet': 'hsl(257, 7%, 63%)',
        'neo-very-dark-blue': 'hsl(255, 11%, 22%)',
        'neo-very-dark-violet': 'hsl(260, 8%, 14%)',

        // ### Others
        'other-one': 'hsl(180, 56%, 75%)',
        'other-two': 'hsl(225, 32%, 95%)',
      },
      fontFamily: {
        'poppins': 'Poppins',
      },
      screens: {
        'DT': '1440px',
        'DTL': '1750px',
      }
    },
  },
  plugins: [],
}