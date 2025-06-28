/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Add the Inter font if you plan to use it
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
