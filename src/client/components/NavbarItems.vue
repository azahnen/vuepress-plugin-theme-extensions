<script setup>
import { computed } from "vue";
import { useThemeData } from "@vuepress/plugin-theme-data/client";
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

/*
const theme = useThemeData();
const navbarRepo = { value: [{ github: true, link: theme.value.repo }] };
console.log("GH", navbarRepo.value);

*/
const navbarLinksStart = computed(() => [
  ...navbarConfig.value.filter((item) => item.group === "start"),
]);
const navbarLinksLeft = computed(() => [
  ...navbarConfig.value.filter(
    (item) => item.group !== "start" && item.group !== "right"
  ),
]);
const navbarLinksRight = computed(() => [
  ...navbarRepo.value,
  ...navbarConfig.value.filter((item) => item.group === "right"),
  ...navbarSelectLanguage.value,
]);
</script>

<template>
  <div class="theme-ext-navbar">
    <div class="theme-ext-navbar-start">
      <nav v-if="navbarLinksStart.length" class="navbar-items">
        <div
          v-for="item in navbarLinksStart"
          :key="item.text"
          class="navbar-item"
        >
          <NavbarDropdown v-if="item.children" :item="item" />
          <AutoLink v-else :item="item" />
        </div>
      </nav>
    </div>
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
          <!--div v-else-if="item.github" style="height: 1.8rem">
            <span
              :href="item.link"
              target="_blank"
              style="
                width: 20px;
                height: 20px;
                background-image: url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%20330%20330%22%20style%3D%22enable-background%3Anew%200%200%20330%20330%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cpath%20fill%3D%22%233a5169%22%20id%3D%22XMLID_308_%22%20d%3D%22M37.728%2C328.12c2.266%2C1.256%2C4.77%2C1.88%2C7.272%2C1.88c2.763%2C0%2C5.522-0.763%2C7.95-2.28l240-149.999%0A%09c4.386-2.741%2C7.05-7.548%2C7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95%2C2.28c-4.625-2.891-10.453-3.043-15.222-0.4%0A%09C32.959%2C4.524%2C30%2C9.547%2C30%2C15v300C30%2C320.453%2C32.959%2C325.476%2C37.728%2C328.12z%22%2F%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A');
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 98 96"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  fill="#24292f"
                />
              </svg>
            </span>
          </div-->
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
.theme-ext-navbar-start {
  display: flex;
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
