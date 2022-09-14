/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      Dark: "#202023",
      Light: "#FFFFFF",
      HeadLight: "#909096",
      MoonColor: "#F5F3CE",
      ShadowMoonColor: "#C4C2A5",
    },
    extend: {},
  },
  plugins: [],
};