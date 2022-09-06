<template>
  <section class="c-summary">
    <h1 class="c-title">
      {{ title }}
    </h1>
    <p v-if="description" class="c-description">
      {{ description }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'PageSummary',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.c-summary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  text-align: center;
}
.c-title {
  font-size: $h1-font-size;
}
.c-description {
  margin-top: 25px;
  font-size: $text-font-size;
}
</style>
