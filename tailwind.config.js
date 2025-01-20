/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      vsm: "1px",
      md: "375px",
      xmd: "455px",
      tab: "565px",
      tabImg: "601px",
      lg: "750px",
      nxl: "800px",
      xl: "1000px",
      xxl: "1100px",
    },

    extend: {
      colors: {
        whites: "hsl(0, 0%, 100%)", //Added s at the end of every name to avoid clashes
        darkblue: "#062e6f",
        clrtransparentgreen: "rgb(77 150 168 / 0.8)",
        orange: "rgb(231 129 107)",
        rels: "linear-gradient(to right, #7F7FD5, #31B7C2)",
        "very-dark-black-blues": "hsl(240, 10%, 16%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
        // eros: ["ErosFont", "serif"],
        erosCondensed: ["ErosFont Condensed", "serif"],
      },
    },
  },
  plugins: [],
};
