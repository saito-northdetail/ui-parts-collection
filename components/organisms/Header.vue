<template>
  <header class="l-header">
    <div class="l-headerInner inner">
      <nuxtLink to="/" class="c-logo"> UIパーツ集 </nuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.l-header {
  background: $nav-background-color;
  &Inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 15px;
  }
}
.c-logo {
  font-size: $header-font-size;
  font-weight: 700;
  color: $brand-color;
  text-decoration: none;
}
</style>
