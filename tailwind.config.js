// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        customBg: "#FFFFFF",
        homeBg: "#F5FCFF", // Adding the new color with the key 'homeBg'
      },
      backgroundImage: {
        "custom-image": "url('/src/assets/images/bg-thunder.png')",
      },
    },
  },
  plugins: [],
});
