/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
      'minMobile': '320px',
       'mobile':'480px',
      'tablet': '768px',
      'maxMobile': {'max': '767px'},
      'laptop': {'min': '768px', 'max': '1279px'},
      'desktop': '1280px',
    },
      colors: {
        primary: '#173D33',
        secondary: '#97D28B',
        gray:'#828382',
        middleGray:'rgba(23, 61, 51, 0.25)',
        lightGray:'rgba(255, 255, 255, 0.25)',
        white: "#FFF",
        bgBackdropNav:'#F3F5FA',
        bgNav: ' rgba(23, 61, 51, 0.75)',
        bgBtnMenu: '#DCEFD8',
        bgContacts:'#EAEDF1',
        placholderContact:'BDBDBD',
        errorColor: '#D28B8B',
      },
      backgroundImage: {
        Hero: "url('/assets/images/hero.jpg')",
      },
    },
  },
  plugins: [],
}
