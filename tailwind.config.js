/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
      },
      screens: {
        'vvs': '365px',
        'vs': '450px',
        'xs': '480px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
       fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
    },
  },
  plugins: [],
};
