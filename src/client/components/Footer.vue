<script setup>
import { useThemeLocaleData } from "@vuepress/plugin-theme-data/client";

const themeLocale = useThemeLocaleData();
const themeExtensions = themeLocale.value.themeExtensions || {};
const enabled =
  themeExtensions.footerSpacing ||
  themeExtensions.legalNoticeUrl ||
  themeExtensions.privacyNoticeUrl;
const footerSpacing = themeExtensions.footerSpacing || "10rem";

const legalNoticeUrl = themeExtensions.legalNoticeUrl || false;
const legalNoticeTarget =
  legalNoticeUrl && legalNoticeUrl.startsWith("http") ? "_blank" : "_self";
const legalNoticeLabel = themeExtensions.legalNoticeLabel || "Legal Notice";

const privacyNoticeUrl = themeExtensions.privacyNoticeUrl || false;
const privacyNoticeTarget =
  privacyNoticeUrl && privacyNoticeUrl.startsWith("http") ? "_blank" : "_self";
const privacyNoticeLabel =
  themeExtensions.privacyNoticeLabel || "Privacy Notice";
</script>

<template>
  <div class="theme-ext-footer" v-if="enabled">
    <a
      :href="legalNoticeUrl"
      :target="legalNoticeTarget"
      v-if="legalNoticeUrl"
      >{{ legalNoticeLabel }}</a
    >
    <a
      :href="privacyNoticeUrl"
      :target="privacyNoticeTarget"
      v-if="privacyNoticeUrl"
      >{{ privacyNoticeLabel }}</a
    >
  </div>
</template>

<style>
.theme-ext-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 2.5rem;
  margin-top: v-bind(footerSpacing);
}
.theme-ext-footer a {
  font-size: 80%;
  font-weight: 400;
  margin-left: 1rem;
}
</style>
