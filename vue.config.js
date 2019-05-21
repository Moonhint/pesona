const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        mixins: path.resolve('src/mixins'),
        utils: path.resolve('src/utils')
      }
    }
  },
  css: { extract: false },
}