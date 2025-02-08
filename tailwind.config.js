/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('./src/assets/bg-home.jpg')",
      },
      fontFamily:{
        "montserrat":["Montserrat", "serif"],
        "inter":["Inter", "serif"],
      }
    },
  },
  plugins: [],
};
