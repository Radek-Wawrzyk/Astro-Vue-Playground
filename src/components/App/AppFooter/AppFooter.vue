<template>
  <footer class="app-footer">
    <div class="container">
      <div class="app-footer__content">
        <app-logo class="app-footer__logo" mode="dark" size="big" />

        <ul class="app-footer__menu">
          <li :key="link.name" v-for="link in menu" class="app-footer__menu-item">
            <a class="app-footer__menu-link" :href="link.url" :title="link.name" :aria-label="link.name">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { NavigationMenuElement } from "@/types/models/Navigation";
import AppLogo from '../AppLogo/AppLogo.vue';

export default defineComponent({
  components: { AppLogo },
  name: 'AppFooter',
  props: {
    menu: {
      type: Array as PropType<NavigationMenuElement[]>,
      required: true,
    },
  },
})
</script>

<style lang="scss" src="./AppFooter.scss" scoped />
