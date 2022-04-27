<script>
import { computed } from 'vue'
import NavbarItemsDefault from '@vuepress/theme-default/lib/client/components/NavbarItems.vue'
import AutoLink from '@vuepress/theme-default/lib/client/components/AutoLink.vue'
import NavbarDropdown from '@vuepress/theme-default/lib/client/components/NavbarDropdown.vue'

export default {
  setup: (props, context) => {
    const s = NavbarItemsDefault.setup(props, context);

    return {
      navbarLinks1: computed(() => [
        ...(s.navbarConfig ? s.navbarConfig.value : []),
      ]),
      navbarLinks2: computed(() => [
        ...(s.navbarRepo ? s.navbarRepo.value : []),
        ...(s.navbarSelectLanguage ? s.navbarSelectLanguage.value : []),
      ]),
    };
  },
  components: {
    AutoLink,
    NavbarDropdown,
  }
}
</script>

<template>
  <div class="theme-ext-navbar">
    <div class="theme-ext-navbar-left">
      <nav v-if="navbarLinks1.length" class="navbar-items">
        <div v-for="item in navbarLinks1" :key="item.text" class="navbar-item">
          <NavbarDropdown v-if="item.children" :item="item" />
          <AutoLink v-else :item="item" />
        </div>
      </nav>
    </div>
    <div class="theme-ext-navbar-right">
      <nav v-if="navbarLinks2.length" class="navbar-items">
        <div v-for="item in navbarLinks2" :key="item.text" class="navbar-item">
          <NavbarDropdown v-if="item.children" :item="item" />
          <AutoLink v-else :item="item" />
        </div>
      </nav>
    </div>
  </div>
</template>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar .navbar-items-wrapper {
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
