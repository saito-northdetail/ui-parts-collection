<template>
  <section class="c-section">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Layoutsection',
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
</style>
