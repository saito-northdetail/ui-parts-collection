<template>
  <section class="c-section">
    <h2 class="c-title">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'PageSection',
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
.c-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  text-align: center;
}
.c-title {
  font-size: $h2-font-size;
}
</style>
