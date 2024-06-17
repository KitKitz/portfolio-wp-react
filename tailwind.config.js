/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#212121",
      accent: "#93FF68",
      accentAlt: "#FF69F1",
      greyDark: "#484848",
      grey: "#FFFCED ",
    },
    fontFamily: {
      display: ["Mak", "sans-serif"],
      sans: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      micro: "0.75rem",
      xs: "0.9rem",
      base: "1.05rem",
      sm: "1.25rem",
      md: "1.5rem",
      lg: "1.8rem",
      clamp1: "clamp(2.5rem, 1.8rem + 3.5vw, 6rem)",
      clamp2: "clamp(2rem, 0.7rem + 6.5vw, 8.5rem)",
      clamp3: "clamp(2.5rem, 1rem + 7.5vw, 10rem)",
      clamp3rem: "clamp(1.5rem, 1.2rem + 1.5vw, 3rem)",
      clampH3: "clamp(1.25rem, 0.7rem + 2.75vw, 4rem)",
    },
    screens: {
      xs: "360px",
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        "3xl": "1700px",
      },
      width: {
        clampWidth: "clamp(18rem, 90vw, 100rem)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
