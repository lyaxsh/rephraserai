/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'pixel': {
          pink: '#FF6B6B',
          teal: '#4ECDC4',
          blue: '#45B7D1',
          green: '#96CEB4',
          yellow: '#FECA57',
          purple: '#A55EEA',
        }
      }
    },
  },
  plugins: [],
};