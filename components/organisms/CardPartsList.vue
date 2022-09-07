<template>
  <ul class="c-list">
    <CardParts
      v-for="partsData in partsDatas"
      :key="partsData.id"
      :to="`${prefixPath}${partsData.id}/`"
      :text="partsData.name_ja"
      src=""
      class="c-listItem"
    />
  </ul>
</template>

<script>
import CardParts from '@/components/moleclues/CardParts.vue';

export default {
  name: 'CardPartsList',
  components: {
    CardParts,
  },
  props: {
    type: {
      type: String,
      default: '',
      required: true,
    },
    partsDatas: {
      type: Array,
      default: () => [],
      required: true,
    },
    prefixPath: {
      type: String,
      default: './',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.c-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;
  padding: 50px 0;
  &::after {
    content: '';
    display: block;
    width: 30%;
  }
  &Item {
    width: 30%;
    margin: 10px 0;
    list-style-type: none;
  }
}
</style>
