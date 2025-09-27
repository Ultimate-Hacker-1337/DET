/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urdu: ["'Noto Nastaliq Urdu'", "serif"],
      },
    },
  },
  plugins: [],
}