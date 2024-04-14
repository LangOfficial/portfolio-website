/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./projects.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        primary: "Raleway",
        logo: "Black Ops One",
      },
      gridTemplateColumns: {
        landingPage: ".7fr 1fr",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/hero.png')",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },

        slideOut: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },

      animation: {
        slideIn: "slideIn 0.5s ease-out",
        slideOut: "slideOut 0.5s ease-out",
      },
    },
  },
  plugins: [require("postcss-nesting"), require("preline/plugin")],
};
