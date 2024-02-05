/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#3a86ff",},
        danger: {
          100: "#ff3e3e",}
    },
  },
  plugins: [],
}
}
