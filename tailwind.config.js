/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:    '#2563EB',   // blue-600
        accentMid: '#3B82F6',   // blue-500
        accentEnd: '#60A5FA',   // blue-400
        accentDark:'#1D4ED8',   // blue-700
        navy:      '#0F2557',   // deep navy for hero only
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      backgroundSize: {
        '200': '200% auto',
      },
    },
  },
  plugins: [],
}
