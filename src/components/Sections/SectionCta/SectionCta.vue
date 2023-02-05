<template>
  <section class="section-cta">
    <div class="container section-cta__container">
      <div class="section-cta__container">
        <img class="section-cta__background" alt="" :src="(data.primary?.image?.url as string)" />
        
        <div class="section-cta__content">
          <h2 class="section-cta__content-header">
            {{ renderAsText(data.primary.heading) }}
          </h2>

          <app-button :to="data.primary.button_url" :label="data.primary.button_text">
            {{ data.primary.button_text }}
          </app-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import type { CmsSectionCta } from '@/types/models/Cms';
import AppButton from '@components/App/AppButton/AppButton.vue';

import { defineComponent, PropType } from 'vue';
import { useCms } from '@/composables/useCms';

export default defineComponent({
  name: 'SectionCta',
  components: {
    AppButton,
  },
  props: {
    data: {
      type: Object as PropType<CmsSectionCta>,
      required: true,
    },
  },
  setup () {
    const { renderAsText, renderAsHtml } = useCms();

    return {
      renderAsText,
      renderAsHtml,
    };
  }
});
</script>

<style lang="scss" src="./SectionCta.scss" />
