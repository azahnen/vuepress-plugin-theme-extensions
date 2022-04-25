const { path } = require('@vuepress/utils')
const vuepressOnThisPage = require('./onThisPagePlugin')

module.exports = {
  default: vuepressOnThisPage,
  vuepressOnThisPage,
  Layout: path.resolve(
      __dirname,
      '../client/layouts/Layout.vue'
  ), 
}

