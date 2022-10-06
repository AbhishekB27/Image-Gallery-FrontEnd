/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' :['Poppins','san-serif'],
        'ubuntu' :['Ubuntu','san-serif'],
        'roboto' :['Roboto','san-serif'],
      }
    },
  },
  plugins: [],
}
