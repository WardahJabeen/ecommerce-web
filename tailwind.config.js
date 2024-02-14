/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#f5ebe0",
        SecondaryColor: "#e3d5ca",
        DarkColor: "#800000",
        ExtraDarkColor: "#a98467",
      },
    },
  },
  plugins: [],
}

