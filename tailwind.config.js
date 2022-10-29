/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/images/landscapeFIX-min.png')",
        'hero2': "url('/images/tdh-vector.png')",
        'footer': "url('/images/footerbg.png')",
      },
      colors: {
        primary: '#0F0E0E',
        secondary: '#3D0000',
        textlogo: '#eecfb4',
        'main-red': '#CE2D4F',
        'main-background': '#FFFFFF',
        'main-header': '#FFFFFF',
        'main-text': '#444444',
        'main-banner': 'rgba(4,24,39,.60)',
        'carousel-title1': 'rgba(7, 47, 79, .75)',
        'carousel-title2': 'rgba(255, 255, 255, .75)',
      },
      fontFamily: {
        custom: ['AnotherDanger', 'sans-serif'],
        
    },
    plugins: [],
  },
  } 
}
