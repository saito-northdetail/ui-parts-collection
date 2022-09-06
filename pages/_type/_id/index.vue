<template>
  <div class="l-content">
    <div class="l-contentInner inner">
      <PageSummary
        :title="part.name_ja"
      />
      <CardIFrame :key="part.codepen_id" :codepen-id="part.codepen_id" />
      <section class="c-relation">
        <PageSummary
          title="■他のスタイル"
        />
        <CardPartsList :parts-datas="relationData.parts" :type="$route.params.type" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import PageSummary from '@/components/moleclues/PageSummary.vue';
import CardPartsList from '@/components/organisms/CardPartsList.vue';
import CardIFrame from '@/components/atoms/CardIFrame.vue';
import { getPart, getParts } from '@/api/parts/get';
import { TPart, TPartsData } from '~/types/parts';

@Component({
  components: {
    PageSummary,
    CardPartsList,
    CardIFrame,
  },
})
export default class Parts extends Vue {
  head() {
    return {
      title: `${this.part?.name_ja}`,
      script: [
        {
          src: 'https://cpwebassets.codepen.io/assets/embed/ei.js',
          body: true,
          defer: true,
          hid: 'codepenScript',
        },
      ],
    };
  }

  part: TPart | undefined | null = {
    id: 0,
    name: '',
    name_ja: '',
    codepen_id: '',
  };

  relationData: TPartsData | undefined | null = {
    id: 0,
    type: '',
    type_ja: '',
    parts: [],
  };

  mounted() {
    this.part = getPart(this.$route.params.type, Number(this.$route.params.id));
    this.relationData = getParts(this.$route.params.type);
  }
}
</script>

<style lang="scss" scoped>
.c-relation {
  margin-top: 50px;
  border-top: 1px solid #CCC;
}
</style>
