<template>
  <main class="l-main">
    <Header />
    <nuxt />
    <Footer />
  </main>
</template>

<script>
import Header from '@/components/organisms/Header.vue';
import Footer from '@/components/organisms/Footer.vue';

export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Footer,
  },
};
</script>
