/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1500px",
      },
      colors: {
        mainBg: "#FAFAFA",
        darkGray: "#636363",
        lightGray: "rgba(99, 99, 99, 0.17)",
        blackText: "#181619",
        darkerGray: "#333",
      },
    },
  },
  plugins: [],
};
