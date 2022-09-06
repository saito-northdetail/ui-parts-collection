<template>
    <ul class="c-list">
      <CardCategory
        v-for="categoryData in categoryDatas"
        :key="categoryData.id"
        :to="`./${categoryData.type}/`"
        :text="categoryData.type_ja"
        class="c-listItem"
      />
    </ul>
</template>

<script>
import CardCategory from '../moleclues/CardCategory.vue';

export default {
  name: 'CardCategoryList',
  components: {
    CardCategory,
  },
  props: {
    categoryDatas: {
      type: Array,
      default: () => [],
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
  &::after{
    content:"";
    display: block;
    width:30%;
  }
  &Item {
    width: 30%;
    margin: 10px 0;
    list-style-type: none;
  }
}
</style>
