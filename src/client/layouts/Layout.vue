<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <OnThisPage />
    </template>
    <template #page-bottom>
      <Footer />
    </template>
  </ParentLayout>
</template>

<style lang="scss">
.theme-ext-td {
  font-size: 16px;
  line-height: 1.2;
  padding: 0;
}
.theme-ext-td > div {
  max-height: 58px;
  overflow-y: auto;
  padding: 0.6em 1em;
}
a.sidebar-item.collapsible::after {
  content: "▶️";
  display: inline-block;
  vertical-align: text-top;
}
a.sidebar-item.collapsible.active::after {
  transform: rotate(90deg);
}
</style>
