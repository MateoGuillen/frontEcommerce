module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  //darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},


    //para modificar la clase container que viene por defecto en tailwind

    //container: {
      //center: true,
    //}, 
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    //require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}
