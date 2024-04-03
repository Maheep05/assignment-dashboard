/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato-thin': ['Lato', 'sans-serif'],
        'lato-light': ['Lato', 'sans-serif'],
        'lato-regular': ['Lato', 'sans-serif'],
        'lato-bold': ['Lato', 'sans-serif'],
        'lato-black': ['Lato', 'sans-serif'],
        'lato-thin-italic': ['Lato', 'sans-serif'],
        'lato-light-italic': ['Lato', 'sans-serif'],
        'lato-regular-italic': ['Lato', 'sans-serif'],
        'lato-bold-italic': ['Lato', 'sans-serif'],
        'lato-black-italic': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

