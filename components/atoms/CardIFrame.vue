<template>
  <p
    class="codepen"
    data-default-tab="html,result"
    :data-slug-hash="codepenId"
  ></p>
</template>

<script>
export default {
  name: 'CardIFrame',
  props: {
    codepenId: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss">
iframe {
  width: 100%;
  height: 600px;
}
</style>
