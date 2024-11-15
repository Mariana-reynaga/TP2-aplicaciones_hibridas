/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary': '#5aaea5',
        'secondary': '#99d7d0',
        'accent': '#99d7d0',
        'black':'#111817',
        'white': '#f6f9f9'
      }
    },
  },
  plugins: [],
}

