/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f0ed',
          100: '#e3dcd2',
          200: '#cc8b65',
          300: '#b67a58',
          400: '#a0694b',
          500: '#8a583e',
          600: '#744731',
          700: '#5e3624',
          800: '#482517',
          900: '#32140a',
        },
        secondary: {
          50: '#e6f2ef',
          100: '#cde5db',
          200: '#9fd4c4',
          300: '#6fc2ac',
          400: '#3fb094',
          500: '#0f9d7c',
          600: '#0d8469',
          700: '#0a6b56',
          800: '#085243',
          900: '#013328',
        },
        dark: '#100c0d',
        light: '#e3dcd2',
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        'display': ['"Outfit"', 'sans-serif'],
        'body': ['"Plus Jakarta Sans"', 'sans-serif'],
        'heading': ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}