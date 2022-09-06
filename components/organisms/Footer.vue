<template>
  <footer class="l-footer">
    <div class="l-footerInner inner">
      <p class="c-copyright">©Ui Parts Collection All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.l-footer {
  font-size: 1.6rem;
  background: $nav-background-color;
  &Inner {
    display: flex;
    justify-content: center;
    padding: 50px;
  }
}
.c-copyright {
  color: $text-color;
}
</style>
