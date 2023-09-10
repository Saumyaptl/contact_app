/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#5a5959",
        red:"#d01c28",
        yellow:"#ffeaae",
        purple:"#5f00d9",
        white:"#ffffff",
        orange: "#F6820C"

      }
    },
  },
  plugins: [],
}