/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ku-beige": "#D7C9B2",
        "ku-crimson": "#7B031D",
        "hover-crimson": "#5D0012",
        "dark-gray": "#2D282E",
      },
    },
  },
  plugins: [],
};
