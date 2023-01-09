module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'ios >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: [':root'],
    }
  }
}