/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      gap: {
        3.5: "15px",
      },
      margin: {
        6: "22px",
      },
      padding: {
        6: "22px",
      },
      fontSize: {
        "3xl": "32px",
      },
      borderRadius: {
        "3xl": "20px",
      },
      spacing: {
        5: "20px",
        6: "25px",
      },
      colors: {
        primary: {
          DEFAULT: "#242530",
          BLUE: "#3a3f77",
          ORANGE: "#f49d1a",
          NAVY: "#404258",
          GRAY: "#b2b2b2",
        },
      },
    },
  },
  plugins: [],
};
