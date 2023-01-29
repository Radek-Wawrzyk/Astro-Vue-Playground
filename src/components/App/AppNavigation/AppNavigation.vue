<template>
  <nav class="app-navigation">
    <div class="container app-navigation__container">
      <figure class="app-navigation__logo">
        <img class="app-navigation__logo-inner" src="@/assets/images/logo.svg" />
      </figure>

      <button 
        class="app-navigation__hamburger" 
        :class="{'app-navigation__hamburger--is-active' : isMenuOpen }"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-label="Open Menu"
        aria-controls="menu"
        title="Open Menu"
        @click="toggleMenu()"
      >
        <transition name="fade">
          <span class="app-navigation__hamburger-text" :key="`${isMenuOpen}`">
            {{ isMenuOpen ? 'Close' : 'Menu' }}
          </span>
        </transition>

        <span class="app-navigation__hamburger-box">
          <span class="app-navigation__hamburger-line"></span>
        </span>
      </button>

      <ul class="app-navigation__menu" :class="{'app-navigation__menu--is-active' : isMenuOpen }">
        <li :key="link.name" v-for="link in menu" class="app-navigation__menu-item">
          <a class="app-navigation__menu-link" :href="link.url" :title="link.name" :aria-label="link.name">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import type { NavigationMenuElement } from "@/types/models/Navigation";
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'AppNavigation',
  props: {
    menu: {
      type: Array as PropType<NavigationMenuElement[]>,
      required: true,
    },
  },
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    }
  }
});
</script>

<style src="./AppNavigation.scss" lang="scss" />
