/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        n67: {
          dark:         '#0F172A',
          slate:        '#1E293B',
          blue:         '#2563EB',
          'blue-dark':  '#1D4ED8',
          orange:       '#F97316',
          'orange-dark':'#EA580C',
          grey:         '#64748B',
          'grey-light': '#94A3B8',
          light:        '#F1F5F9',
          border:       '#E2E8F0',
          surface:      '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseOrange: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(249,115,22,0.45)' },
          '60%':      { boxShadow: '0 0 0 12px rgba(249,115,22,0)' },
        },
      },
      animation: {
        'fade-in':       'fadeIn 0.5s ease-out both',
        'fade-in-up':    'fadeInUp 0.65s ease-out both',
        'fade-in-left':  'fadeInLeft 0.6s ease-out both',
        'pulse-orange':  'pulseOrange 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
