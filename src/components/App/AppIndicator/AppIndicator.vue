<template>
  <div class="container">
    <div class="app-indicator">
      <span class="app-indicator__line" />
      <p class="app-indicator__name">{{ name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'AppIndicator',
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
  },
})
</script>

<style lang="scss" src="./AppIndicator.scss" scoped />
