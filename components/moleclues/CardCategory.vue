<template>
  <li class="c-card">
    <CardLink :to="to" class="c-cardLink">
      <CardTitleText :text="text" />
    </CardLink>
  </li>
</template>

<script>
import CardTitleText from '@/components/atoms/CardTitleText.vue';
import CardLink from '@/components/atoms/CardLink.vue';

export default {
  name: 'CardCategory',
  components: {
    CardTitleText,
    CardLink,
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
}
</style>
