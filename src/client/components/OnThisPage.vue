<script setup>
import { useThemeLocaleData } from "@vuepress/plugin-theme-data/client";
import { usePageData } from "@vuepress/client";

const page = usePageData();
const themeLocale = useThemeLocaleData();
const themeExtensions = themeLocale.value.themeExtensions || {};
const enabled = themeExtensions.onThisPage !== false;
const label = themeExtensions.onThisPageLabel || "On This Page";
const tocOptions = {
  linkChildrenActiveClass: "",
};
console.log("HEADERS", page.value.headers);
</script>

<template>
  <div class="toc-place-holder" v-if="enabled">
    <aside id="toc">
      <div class="toc-header">{{ label }}</div>
      <div class="toc-wrapper">
        <Toc :options="tocOptions" />
      </div>
    </aside>
  </div>
</template>

<style lang="scss">
@import "@vuepress/theme-default/lib/client/styles/_variables";

.theme-default-content {
  max-width: none !important;

  @media (max-width: 1279px) {
    margin: 0 0 !important;
  }
  @media (min-width: 1280px) {
    margin: 0 10rem 0 0 !important;
  }
  @media (min-width: 1600px) {
    margin: 0 15rem 0 0 !important;
  }
}
#toc {
  position: absolute;
  right: 0;
  display: none;
  overflow-y: auto;
  width: 15rem;
  max-width: 15rem;
  max-height: 80vh;
  line-height: 1.7;

  @media (min-width: 1280px) {
    display: block;
  }
  @media (min-width: 1280px) and (max-width: 1599px) {
    width: 10rem;
    max-width: 10rem;
  }
}
.toc-header {
  font-weight: bold;
  font-size: 14px;
}
.toc-place-holder {
  position: sticky;
  top: calc(var(--navbar-height) + 6.2rem);
  z-index: 99;
}

.vuepress-toc-list {
  margin: 0;
  padding: 0;
}

.vuepress-toc-item {
  position: relative;
  box-sizing: border-box;
  /*height: 1.7rem;*/
  padding: 0 0.5rem;
  list-style: none;
  line-height: 1.7rem;
}
.vuepress-toc-link {
  position: relative;
  display: block;
  //overflow: hidden;
  max-width: 100%;
  color: var(--c-text-quote);
  line-height: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  --before-color: var(--c-brand-light);
}
.vuepress-toc-link {
  padding-left: 0;
  font-size: 14px;
}
.vuepress-toc-item .vuepress-toc-item .vuepress-toc-link {
  font-size: 13px;
}
.vuepress-toc-link.active {
  color: var(--c-brand-light);
  font-weight: 700;
}
.vuepress-toc-link:hover {
  color: var(--c-brand-light);
}
.vuepress-toc-link:before {
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -0.5rem;
  z-index: 2;
  width: 2px;
  background: 0 0;
}
.vuepress-toc-item .vuepress-toc-item .vuepress-toc-link:before {
  left: -1rem;
}
.vuepress-toc-link.active:before {
  background: var(--before-color);
}
</style>
