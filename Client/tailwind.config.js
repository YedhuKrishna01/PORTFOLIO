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
    extend:{
      colors:{
        'red':'#FE0606'
      }
    }
  },
  plugins: [],
}