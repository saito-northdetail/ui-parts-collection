<template>
  <img :src="src" :alt="alt" class="c-thumbnail" />
</template>

<script>
export default {
  name: 'CardThumbnail',
  props: {
    src: {
      type: String,
      default: '/ui-parts-collection/img/noimage.png',
      required: false,
    },
    alt: {
      type: String,
      default: '画像',
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.c-thumbnail {
  aspect-ratio: 16/9;
  object-fit: cover;
}
</style>
