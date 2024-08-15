/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8a2be2',
      },
      backgroundImage: {
        'gradient-0':'linear-gradient(135deg, #1e0533, #110a1f)',
        'gradient-1': 'linear-gradient(45deg, #726bff, #57b6fe)',
        'gradient-2': 'linear-gradient(45deg, #8a2be2, #4b0082)',
        'primary-bg': 'linear-gradient(135deg, #1e0533, #110a1f)'
      },
    },
  },
  plugins: [],
}