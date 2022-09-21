<template>
  <LayoutSection>
    <h2 class="c-title">
      {{ title }}
    </h2>
    <slot />
  </LayoutSection>
</template>

<script>
import LayoutSection from '@/components/atoms/LayoutSection.vue';

export default {
  name: 'PageSection',
  components: {
    LayoutSection,
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.c-title {
  font-size: $h2-font-size;
}
</style>
