module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        cyan: 'hsl(179, 62%, 43%)',
        brightYellow: 'hsl(71, 73%, 54%)',
        lightGray: 'hsl(204, 43%, 93%)',
        grayishBlue: 'hsl(218, 22%, 67%)',
      },
      fontFamily: {
        'sans-serif': ['Karla'],
      },
    },
  },
  plugins: [],
};
