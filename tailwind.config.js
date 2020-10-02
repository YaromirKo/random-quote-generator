module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
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
