const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#3dcfb6", 'primary-opacity': "rgba(61, 207, 182, 0.3)",
        secondary: "#1C1C1C",
        lightprimary: "#6FE3D6",
        lightsecondary: "#D6D6D6",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        fira: ["fira", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/assets/imgs/header-bg.svg')",
        skillset: "url('/assets/imgs/skillset-bg.svg')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slidedown: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(+30%)" },
          "100%": { transform: " translateY(0%)" },
        },
        slide: {
          "0%": {
            transform: "translateX(0%) translateY(0%)",
          },
          "100%": { 
            transform: "translateX(-10%) translateY(10%)",
          },
        },
        
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        slidedown: "slidedown 1s ease-in-out infinite",
        slide: "slide 1s ease-in-out forwards"
      },
    },
  },
  plugins: [],
};
