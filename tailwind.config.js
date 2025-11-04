/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        admiral: {
          blue: '#0066CC',
          purple: '#9333EA',
          dark: '#581C87',
        },
        amethyst: {
          DEFAULT: '#9B59B6',
          light: '#9333EA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
