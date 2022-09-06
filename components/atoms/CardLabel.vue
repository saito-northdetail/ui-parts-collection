<template>
  <span>{{ text }}</span>
</template>

<script>
export default {
  name: 'CardLabel',
  props: {
    text: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
