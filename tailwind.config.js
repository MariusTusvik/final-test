/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        cyan: "#097a80",
        teal: "#173c3e",
        gray: "#24282c",
        offGray: "#3d4044",
        lightgray: "#d7d8d7",
        offWhite: "#dedede",
      },
    },
  },
  plugins: [],
};
