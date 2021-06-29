module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'check': "url('/Assets/Checkmark.svg')",
      }),
      colors: {
        'purple-regal': '#4f12d1'
      }
    }
  },
  variants: {},
  plugins: [],
}
