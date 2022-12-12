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
@import "@vuepress/theme-default/lib/client/styles/_variables";

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
  content: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%20330%20330%22%20style%3D%22enable-background%3Anew%200%200%20330%20330%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cpath%20fill%3D%22%233a5169%22%20id%3D%22XMLID_308_%22%20d%3D%22M37.728%2C328.12c2.266%2C1.256%2C4.77%2C1.88%2C7.272%2C1.88c2.763%2C0%2C5.522-0.763%2C7.95-2.28l240-149.999%0A%09c4.386-2.741%2C7.05-7.548%2C7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95%2C2.28c-4.625-2.891-10.453-3.043-15.222-0.4%0A%09C32.959%2C4.524%2C30%2C9.547%2C30%2C15v300C30%2C320.453%2C32.959%2C325.476%2C37.728%2C328.12z%22%2F%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A ");
  display: inline-block;
  vertical-align: text-top;
  width: 12px;
  height: 12px;
}
a.sidebar-item.collapsible.active::after {
  transform: rotate(90deg);
  vertical-align: middle;
  margin-left: 6px;
  color: var(--c-text-accent);
}
</style>
