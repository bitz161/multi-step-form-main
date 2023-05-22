/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        "90%": "90%",
      },
      colors: {
        marineblue: "hsl(213, 96%, 18%)",
        purplishblue: "hsl(243, 100%, 62%)",
        pastelblue: "hsl(228, 100%, 84%)",
        lightblue: "hsl(206, 94%, 87%)",
        strawberryred: "hsl(354, 84%, 57%)",
        coolgray: "hsl(231, 11%, 63%)",
        lightgray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        desktopImage: "url('./assets/images/bg-sidebar-desktop.svg')",
      },
      spacing: {
        "36rem": "36rem",
        "60rem": "60rem",
        "10rem": "5rem",
      },
    },
  },
  plugins: [],
};
