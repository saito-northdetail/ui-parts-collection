<template>
  <LayoutCard>
    <CardLink :to="to" class="c-cardLink">
      <CardThumbnail v-show="src" :alt="text" class="c-cardThumbnail" />
      <CardTitleText :text="text" />
    </CardLink>
  </LayoutCard>
</template>

<script>
import LayoutCard from '@/components/atoms/LayoutCard.vue';
import CardTitleText from '@/components/atoms/CardTitleText.vue';
import CardLink from '@/components/atoms/CardLink.vue';
import CardThumbnail from '@/components/atoms/CardThumbnail.vue';

export default {
  name: 'CardCategory',
  components: {
    LayoutCard,
    CardTitleText,
    CardLink,
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
