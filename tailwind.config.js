module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      spacing: {
         '72': '18rem',
         '76':'20em',
         '84': '21rem',
         '96': '24rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],

  options: {
    // List your classes here, or you can even use RegExp
    safelist: ['bg-red-300', 'bg-blue-300'],
  },
}
