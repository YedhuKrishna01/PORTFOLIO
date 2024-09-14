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
      'phone':'400px',
      'tablet': '700px',
      'laptop': '1024px',
      'desktop': '1279px',
      'tv':'1511px',
      'ltv':'1639px'
    },
    extend:{
      colors:{
        'red':'#FE0606'
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      }
    }
  },
  plugins: [],
}