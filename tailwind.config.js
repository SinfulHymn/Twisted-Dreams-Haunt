/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {

      colors: {
        primary: "#000000",
        secondary: "#3D0000",
        textlogo: "#eecfb4",
        cart: "#242525",
        galleryButton: "#242525ca",
        galleryButtonHover: "#452023",
        "main-red": "#CE2D4F",
        "main-background": "#FFFFFF",
        "main-header": "#FFFFFF",
        "main-text": "#444444",
        "main-banner": "rgba(4,24,39,.60)",
        "carousel-title1": "rgba(7, 47, 79, .75)",
        "carousel-title2": "rgba(255, 255, 255, .75)",
      },
      fontFamily: {
        custom: ["AnotherDanger", "sans-serif"],
        custom2: ['Cinzel', "sans-serif"],
      },
      plugins: [],
    },
  },
};
