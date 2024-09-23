/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: { colors: { bgdarkgray: "#121212", bglightgray: "#1a1a1a", icongray: "#404040", textlight: "#E6E6E6"} },
  },
  plugins: [require("tailwindcss-font-inter")],
};
