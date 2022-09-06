<template>
  <h2 class="title">{{ text }}</h2>
</template>

<script>
export default {
  name: 'CardTitleText',
  props: {
    text: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 1.6rem;
}
</style>
