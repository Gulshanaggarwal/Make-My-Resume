module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        gridTemplateColumns:{
          'custom':'20% 80%',
        },
        gridHeight:{
          '80':'600px'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }