<template>
  <nuxtLink :to="to" class="c-link">
    <slot />
  </nuxtLink>
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
