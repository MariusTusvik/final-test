/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        cyan: "#097a80",
        teal: "#173c3e",
        gray: "#24282c",
        offGray: "#818181",
        lightgray: "#d7d8d7",
        offWhite: "#f7f8fa",
      },
    },
  },
  plugins: [],
};
