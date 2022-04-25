const { path } = require('@vuepress/utils')
const themeExtensionsPlugin = require('./themeExtensionsPlugin')

module.exports = themeExtensionsPlugin;
exports = module.exports;
exports.themeExtensionsPlugin = themeExtensionsPlugin;
exports.Layout = path.resolve(
    __dirname,
    '../client/layouts/Layout.vue'
);

