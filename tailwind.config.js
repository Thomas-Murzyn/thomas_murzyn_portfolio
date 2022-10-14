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
      LightGray: "#ececec",
      HeadLight: "#909096",
      DarkGray: "#2A2A2A",
      MoonColor: "#F5F3CE",
      ShadowMoonColor: "#C4C2A5",
      SunColor: "#F28C38",
      ErrorColor: "#FF0000",
      SuccessColor: "#28A745",
    },
    extend: {},
  },
  plugins: [],
};
