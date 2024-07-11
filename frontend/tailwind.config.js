/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        wave: 'wave 1.5s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        redHat: ['Red Hat Display', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        urbanist: ['urbanist', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(255, 105, 180, 0.8)',
      },
    },
  },
  colors: {
    canvasIndex0: '#171719',
    canvasIndex1: '#212124',
    canvasIndex2: '#1F1F22',
    fgDefault: '#FCFCFC',
    fgHighlight: '#00FFFF',
    fgDefault065: '#FCFCFCa6',
    fgSubtle: '#9898A6',
    bgHover: '#4C4E54',
    actionBorder: '#EBEBFFd',
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
  ],
};
