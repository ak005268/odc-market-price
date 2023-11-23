/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      "color-gray-dark": "#273444",
      "color-gray-light": "#d3dce6",
      "color-red": "#FF0000",
      "color-mild": "#eef2e6",
      "color-blue": "#362abd",
      sky: {
        100: "#87CEEB",
        200: "#87CEEC",
      },
      green: {
        100: "#3cdb2e",
      },
      gray: {
        100: "#f7fafc",
        900: "#1a202c",
      },
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        190: "100rem",
      },
    },
  },
  plugins: [],
};
