/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#333333",
      red: "#F52A3B",
      grey: "#C4C4C4",
      redHover: "#E90115",
    },
    extend: {
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        arrowUpDown: {
          "0%, 50%": { transform: "translateY(0)" },
          "25%, 75%": { transform: "translateY(30px)" },
          "100%": { transform: "translateY(0)" },
        },
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-359deg)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        arrowUpDown: "arrowUpDown 3s cubic-bezier(0.1, 0.7, 0.1, 1) infinite",
        rotate: "rotation 15s infinite linear",
      },
    },
  },
  plugins: [],
};
