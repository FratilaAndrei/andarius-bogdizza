/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heightTransition: {
          "0%": { "max-height": "0px" },
          "100%": { "max-height": "auto" },
        },
      },
      animation: {
        heightTransition: "heightTransition 0.3s forwards",
      },
    },
  },
  plugins: [],
};
