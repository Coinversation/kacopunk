module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1BD3D5',
        secondary: '#F59FEE',
        textColor: '#263131',
        secondaryTextColor: '#5B6F6F',
        bgColor: '#F9F9F9',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'spin-slow': 'wiggle 3s linear infinite',
      },
      fontFamily: {
        gotham: ['Gotham'],
      },
      screens: {
        huge: '1920px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['active', 'disabled'],
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
};
