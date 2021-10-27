module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1890ff',
        secondary: '#40a9ff',
        light: '#f8f9fa',
        dark: '#343a40',
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
    },
    screens: {
      huge: '1920px',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['active', 'disabled'],
    },
  },
  plugins: [],
};
