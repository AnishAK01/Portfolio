/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      dark: '#0e0e0e',
      primary: '#00ffcc',
      secondary: '#ff4ecf',
      accent: '#4e54ff',
      textLight: '#eaeaea',
      textMuted: '#aaaaaa',
    },
    fontFamily: {
      heading: ['Orbitron', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
  },
},
  plugins: [],
}
