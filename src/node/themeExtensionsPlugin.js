const { path } = require('@vuepress/utils')
const { activeHeaderLinksPlugin } = require('@vuepress/plugin-active-header-links')
const { containerPlugin } = require('@vuepress/plugin-container');

module.exports = (options, app) => {
  const ahlp = activeHeaderLinksPlugin({
      headerLinkSelector: 'a.vuepress-toc-link'
    }, app);  
  
  return {
    name: 'vuepress-plugin-theme-extensions',

    clientAppEnhanceFiles: [
      path.resolve(__dirname, '../client/clientAppEnhance.js'),
    ],

    clientAppSetupFiles: [
      ahlp.clientAppSetupFiles,
    ],

    define: {
      ...ahlp.define,
    }, 

    extendsMarkdown: containerPlugin({type: 'info', locales: {'/': {defaultInfo: 'Info'}, '/de/': {defaultInfo: 'Info'}}}, app).extendsMarkdown,

    // only if navbar enabled
    alias: (app) => {
      const themeExt = app.options.themeConfig.themeExtensions || {};
      const isNavbar = themeExt.navbar !== false;
      const aliases = {};

      if (isNavbar) {
        aliases['@theme/NavbarItems.vue'] = path.resolve(__dirname, '../client/components/NavbarItems.vue');
      }

      return aliases;
    },

    onInitialized: (app) => {
      const themeExt = app.options.themeConfig.themeExtensions || {};
      const isOnThisPage = themeExt.onThisPage !== false;

      if (isOnThisPage) {
        const isDefaultThemeLayout = app.layouts && app.layouts.Layout && app.layouts.Layout.endsWith('@vuepress/theme-default/lib/client/layouts/Layout.vue');

        if (isDefaultThemeLayout) {
          app.layouts.Layout = path.resolve(__dirname, '../client/layouts/Layout.vue');

          app.options.themeConfig.sidebarDepth = 0;
          if (app.options.themeConfig.locales) {
            for (const tcl of Object.values(app.options.themeConfig.locales)) {
              tcl.sidebarDepth = 0;
            }
          }
        }
      }
    }
  }
}
