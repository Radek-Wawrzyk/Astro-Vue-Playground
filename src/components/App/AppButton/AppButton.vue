<template>
  <component
    :is="componentType"
    :label="label"
    :href="componentType === 'a' && to ? to : false"
    :class="classes"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'AppButton',
  emits: ['click'],
  props: {
    to: {
      type: String as PropType<string | null>,
      required: false,
      default: () => null,
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: () => null,
    },
  },
  setup (props) {
    const componentType = computed(() => props.to ? 'a' : 'button');
    const classes = computed(() => {
      return [
        'app-button',
      ];
    });

    return {
      componentType,
      classes,
    };
  }
});
</script>

<style lang="scss" src="./AppButton.scss" />
