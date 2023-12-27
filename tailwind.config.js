/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,css,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    colors: {
      "custom-blue": {
        100: "#8ecae6",
        200: "#219EBC",
        300: "#126782",
        400: "#023047",
        500: "#023047",
      },
      "light-white": {
        100: "#f1faee",
        200: "#fefae0",
        300: "#f8f9fa",
      },
      "interesting-orange": {
        100: "#FFB703",
        200: "#FB8500",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
