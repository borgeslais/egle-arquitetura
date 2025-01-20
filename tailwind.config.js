/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C584C',
        secondary: '#463F3A',
        terciary: '#A4998A',
        light: '#EBE9E6',
      },
      fontFamily: {
        title: ['DM Sans', 'sans-serif'],
        body: ['Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        sm: ['0.8em', '1.2'],
        base: ['1.1em', '1.6'],
        lg: ['2em', '1.6'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        bold: 500,
      },
      letterSpacing: {
        narrow: '0.02em',
        wide: '0.03em',
      },
      backgroundSize: {
        '120%': '120%'
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.heading-title': {
          fontFamily: 'Helvetica Neue, sans-serif',
          fontSize: 'clamp(20px, 3.125vw, 32px)',
          fontWeight: 300,
          letterSpacing: '0.03em',
          color: '#6C584C',
        },
        '.hero-title': {
          fontFamily: 'Helvetica Neue, sans-serif',
          fontSize: 'clamp(16px, 3.125vw, 32px)',
          fontWeight: 300,
          letterSpacing: '0.03em',
          color: '#6C584C',
        },
        '.body-text': {
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(14px, 1.72vw, 20px)',
          fontWeight: 400,
          lineHeight: '1.6',
          letterSpacing: '0.02em',
          color: '#463F3A',
        },
        '.body-description': {
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(14px, 1.52vw, 20px)',
          fontWeight: 400,
          lineHeight: '1.6',
          letterSpacing: '0.02em',
          color: '#A4998A',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
