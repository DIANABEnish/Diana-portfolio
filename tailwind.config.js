/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // נוסיף צבעים מותאמים לטעם הנשי
        primary: {
          500: '#FF6B8B', // ורוד-אדום עדין
          600: '#FF5C7A',
        },
        secondary: {
          500: '#A78BFA', // סגול עדין
          600: '#8B5CF6',
        },
      },
    },
  },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}