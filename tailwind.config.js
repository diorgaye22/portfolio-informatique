/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          50: '#f4f7fb',
          100: '#e8eef6',
          200: '#c9d8ea',
          300: '#9db8d5',
          400: '#6b93ba',
          500: '#48729e',
          600: '#375983',
          700: '#2d4869',
          800: '#22364f',
          900: '#182739',
          950: '#0d1826',
        },
        electric: {
          50: '#eff8ff',
          100: '#dbedff',
          200: '#bfe1ff',
          300: '#92cfff',
          400: '#5cb3fc',
          500: '#3794f6',
          600: '#2177eb',
          700: '#195fd8',
          800: '#1b4eaf',
          900: '#1c438a',
          950: '#152b5c',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
