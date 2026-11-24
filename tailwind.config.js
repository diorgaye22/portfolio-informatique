/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        night: {
          50: '#f4f7fb',
          100: '#e8eef6',
          200: '#c9d8ea',
          300: '#9db8d5',
          400: '#8aabd0',
          500: '#6f93ba',
          600: '#375983',
          700: '#2d4869',
          800: '#22364f',
          900: '#182739',
          950: '#0d1826',
        },
        electric: {
          50: '#eef6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#5cb3fc',
          500: '#2177eb',
          600: '#1b63c4',
          700: '#174f9d',
          800: '#143f7d',
          900: '#0f2d58',
          950: '#0a1d3a',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
