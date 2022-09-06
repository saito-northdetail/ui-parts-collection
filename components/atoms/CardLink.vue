<template>
  <nuxt-link :to="to" class="c-link">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'CardLink',
  props: {
    to: {
      type: String,
      default: '/',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.c-link {
  display: block;
  color: $text-color;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
    transition: opacity 0.5s;
  }
}
</style>
