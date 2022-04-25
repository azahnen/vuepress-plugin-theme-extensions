<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-top>
     <OnThisPage/>
    </template>
    <template #page-bottom>
     <Footer/>
    </template>
  </ParentLayout>
</template>

