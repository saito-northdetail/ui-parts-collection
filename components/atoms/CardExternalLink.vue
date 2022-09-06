<template>
  <a :href="href" class="c-link">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'CardExternalLink',
  props: {
    href: {
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
