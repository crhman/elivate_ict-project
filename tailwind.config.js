/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4F8EF7',
        secondary: '#EAF3FF',
        ink: '#1F2937',
        surface: '#F7FAFF',
        midnight: '#0B1630',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #F3F7FF 0%, #FFFFFF 45%, #EAF3FF 100%)',
        'accent-gradient': 'linear-gradient(135deg, #7FD6FF 0%, #4F8EF7 100%)',
        'dark-panel': 'linear-gradient(150deg, #0B1630 0%, #11244A 100%)',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.08)',
        glow: '0 10px 30px rgba(79, 142, 247, 0.25)',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
