/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ConstructTrack brand palette
        navy: {
          primary: '#0A1628',
          secondary: '#112240',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#F0C96B',
        },
        offwhite: '#F4F2ED',
        muted: '#7A8BA0',
        success: '#22C55E',
        danger: '#EF4444',
      },
      fontFamily: {
        // Display/headings: Syne
        syne: ['Syne', 'sans-serif'],
        // Body: Inter
        inter: ['Inter', 'sans-serif'],
        // Numbers/monospace: JetBrains Mono
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'bar-grow': 'barGrow 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(201,168,76,0)' },
        },
        barGrow: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top, #112240 0%, #0A1628 70%)',
        'card-gradient': 'linear-gradient(135deg, #112240 0%, #0A1628 100%)',
      },
    },
  },
  plugins: [],
}
