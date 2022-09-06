<template>
  <li class="c-card">
    <CardExternalLink :href="to" class="c-cardLink">
      <CardThumbnail v-show="src" :alt="text" class="c-cardThumbnail" />
      <CardTitleText :text="text" />
    </CardExternalLink>
  </li>
</template>

<script>
import CardTitleText from '@/components/atoms/CardTitleText.vue';
import CardExternalLink from '@/components/atoms/CardExternalLink.vue';
import CardThumbnail from '@/components/atoms/CardThumbnail.vue';

export default {
  name: 'CardCategory',
  components: {
    CardTitleText,
    CardExternalLink,
    CardThumbnail,
  },
  props: {
    to: {
      type: String,
      default: '',
      required: true,
    },
    text: {
      type: String,
      default: '',
      required: true,
    },
    src: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.c-card {
  font-size: 1.6rem;
  border: 1px solid $brand-color;
  border-radius: 5px;
  &Link {
    padding: 10px;
  }
  &Thumbnail {
    margin-bottom: 10px;
  }
}
</style>
