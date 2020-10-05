module.exports = {
  mode: 'layers',
  layers: ['base', 'components', 'utilities'],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  theme: {
    backgroundColor: {
      'brown': '#333333'
    },
    minHeight: {
      'screen-95': '95vh'
    },
    extend: {
      borderRadius: {
        'input-text': '0.75rem'
      },
      spacing: {
        '22': '5.563rem'
      }
    },
  },
  plugins: [],
}
