/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        mainColor: "#243642",
        primaryColor: "#219B9D",
        secondaryColor: "#e2f1e7",
        lightWhite: "#f8fafc",
        pureWhite: "#ffffff",
      },
    },
  },
  plugins: [],
}
