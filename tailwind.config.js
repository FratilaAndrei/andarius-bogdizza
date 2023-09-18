/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarColor: "#222222",
        logoColor: "#FFE400",
      },
    },
  },
  plugins: [],
};
