module.exports = {
    purge: false,
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        gridTemplateColumns:{
          'custom':'20% 80%',
          'less_Sm':'30% 70%'
        },
        gridHeight:{
          '80':'600px'
        },
        height:{
          template:"300px"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }