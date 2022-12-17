<script setup>
import { computed } from "vue";
import NavbarItemsDefault from "@vuepress/theme-default/lib/client/components/NavbarItems.vue";
import AutoLink from "@vuepress/theme-default/lib/client/components/AutoLink.vue";
import NavbarDropdown from "@vuepress/theme-default/lib/client/components/NavbarDropdown.vue";
import {
  useNavbarConfig,
  useNavbarSelectLanguage,
  useNavbarRepo,
} from "../composables/useNavbar.ts";

const navbarConfig = useNavbarConfig();
const navbarSelectLanguage = useNavbarSelectLanguage();
const navbarRepo = useNavbarRepo();

const navbarLinksLeft = computed(() => [...navbarConfig.value]);
const navbarLinksRight = computed(() => [
  ...navbarRepo.value,
  ...navbarSelectLanguage.value,
]);
</script>

<template>
  <div class="theme-ext-navbar">
    <div class="theme-ext-navbar-left">
      <nav v-if="navbarLinksLeft.length" class="navbar-items">
        <div
          v-for="item in navbarLinksLeft"
          :key="item.text"
          class="navbar-item"
        >
          <NavbarDropdown v-if="item.children" :item="item" />
          <AutoLink v-else :item="item" />
        </div>
      </nav>
    </div>
    <div class="theme-ext-navbar-right">
      <nav v-if="navbarLinksRight.length" class="navbar-items">
        <div
          v-for="item in navbarLinksRight"
          :key="item.text"
          class="navbar-item"
        >
          <NavbarDropdown v-if="item.children" :item="item" />
          <AutoLink v-else :item="item" />
        </div>
      </nav>
    </div>
  </div>
</template>

<style>
.theme-ext .navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.theme-ext .navbar .navbar-items-wrapper {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  position: initial;
}
.theme-ext-navbar {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
.theme-ext-navbar-left {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
.theme-ext-navbar-right {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebar-open .theme-ext-navbar {
  flex-direction: column;
  align-items: flex-start;
}
</style>
