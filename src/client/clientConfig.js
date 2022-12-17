import { defineClientConfig } from "@vuepress/client";
import { useThemeData } from "@vuepress/plugin-theme-data/client";

import Layout from "./layouts/Layout.vue";
import SplitBadge from "./components/SplitBadge.vue";
import { localeRedirect } from "./localeRedirect";

const theme = useThemeData();
const isOnThisPage = theme.onThisPage !== false;

const layouts = isOnThisPage ? { Layout } : {};

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("SplitBadge", SplitBadge);

    localeRedirect(router, siteData);
  },
  layouts,
});
