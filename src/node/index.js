const { path } = require('@vuepress/utils')
const themeExtensions = require('./themeExtensionsPlugin')

module.exports = {
  default: themeExtensions,
  themeExtensions,
  Layout: path.resolve(
      __dirname,
      '../client/layouts/Layout.vue'
  ), 
}

