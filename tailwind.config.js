/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#61378A",
        white: "#fff",
        bg: "#fafafa",
        white2: "#F9F9F9",
        white3: "#F2F9FF",
        black1: "#0C0C0D",
        black2: "#1A1A1A",
        orange: "#ED5417",
        gray: "#8D9399",
        gray3: "#8E9499",
        purple: "#61378A",
        lightRed: "#F06C74",
      },
      dropShadow: {
        cardShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
        headerShadow: "0 1px 2px rgba(0, 0, 0, 0.10)",
      },
      screens: {
        mob: "440px",
        tab: "980px",
        px850: "850px",
      },
    },
  },
  plugins: [],
};
