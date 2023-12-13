/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      kanit: ['Kanit', 'sans-serif'],
      lilita: ['Lilita One', 'sans-serif'],
      racing: ['Racing Sans One', 'sans-serif'],
    },
    extend: {
      darkMode: 'class',
    },
  },
  plugins: [require("daisyui")],
}

