/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements-react/dist/js/**/*.js"],
  theme: {
    colors: {
      "green-fam": {
        100: "#ECF39E",
        200: "#90A955",
        300: "#4F772D",
        400: "#31572C",
        500: "#132A13",
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
      extend: {},
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};

// OG CONTENT HERE
//** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,css,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
//   theme: {
//     colors: {
//       "custom-blue": {
//         100: "#8ecae6",
//         200: "#219EBC",
//         300: "#126782",
//         400: "#023047",
//         500: "#023047",
//       },
//       "light-white": {
//         100: "#f1faee",
//         200: "#fefae0",
//         300: "#f8f9fa",
//       },
//       "interesting-orange": {
//         100: "#FFB703",
//         200: "#FB8500",
//       },
//     },
//   },
//   plugins: [require("tw-elements/dist/plugin.cjs")],
//   darkMode: "class",
// };
