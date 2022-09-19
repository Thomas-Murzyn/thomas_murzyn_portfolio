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
      DarkOppacity: "#202023e6",
      Light: "#FFFFFF",
      LightOppacity: "#ffffffe6",
      HeadLight: "#909096",
      MoonColor: "#F5F3CE",
      ShadowMoonColor: "#C4C2A5",
      SunColor: "#F28C38",
    },
    extend: {},
  },
  plugins: [],
};
