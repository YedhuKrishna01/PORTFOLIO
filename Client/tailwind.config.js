/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'mont': ["Montserrat", "sans-serif"],
      'audio':["Audiowide","sans-serif"]
    },
    screens: {
      'tablet': '700px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend:{
      colors:{
        'red':'#FE0606'
      }
    }
  },
  plugins: [],
}