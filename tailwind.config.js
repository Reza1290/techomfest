/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "101px",
          "2xl": "6rem",
        },
      },
      colors: {
        accent: "#1F420F",
        secondary: "#8CFE5C",
        primary: "#037401",
      },
    },
  },
  plugins: [],
};
