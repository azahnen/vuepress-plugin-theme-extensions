import { getDirname, path } from "@vuepress/utils";
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { containerPlugin } from "@vuepress/plugin-container";
import { tocPlugin } from "@vuepress/plugin-toc";
import { defaultTheme } from "@vuepress/theme-default";
import { applyMdTable } from "./mdTable.js";

const __dirname = getDirname(import.meta.url);

export default (options) => (app) => {
  const isNavbar = options.navbar !== false;
  const isOnThisPage = options.onThisPage !== false;

  const alias = isNavbar
    ? {
        "@theme/NavbarItems.vue": path.resolve(
          __dirname,
          "../client/components/NavbarItems.vue"
        ),
      }
    : {};

  if (isOnThisPage) {
    options.sidebarDepth = 0;
    if (options.locales) {
      for (const tcl of Object.values(options.locales)) {
        tcl.sidebarDepth = 0;
      }
    }
  }

  return {
    name: "vuepress-plugin-theme-extensions",
    extends: defaultTheme(options),
    alias,

    clientConfigFile: path.resolve(__dirname, "../client/clientConfig.js"),

    extendsMarkdown: (md, app) => {
      containerPlugin(
        {
          type: "info",
          locales: {
            "/": { defaultInfo: "Info" },
            "/de/": { defaultInfo: "Info" },
          },
        },
        app
      ).extendsMarkdown(md, app);

      applyMdTable(md, options);
    },

    plugins: [
      activeHeaderLinksPlugin({
        headerLinkSelector: "a.vuepress-toc-link",
      }),
      tocPlugin({}),
    ],
  };
};
