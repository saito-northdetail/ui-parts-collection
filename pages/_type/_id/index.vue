<template>
  <LayoutContent>
    <PageSummary :title="part.name_ja" />
    <CardIFrame :key="part.codepen_id" :codepen-id="part.codepen_id" />
    <LayoutRelation>
      <PageSummary title="■他のスタイル" />
      <CardPartsList
        :parts-datas="relationData.parts"
        :type="$route.params.type"
        prefix-path="../"
      />
    </LayoutRelation>
  </LayoutContent>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import LayoutContent from '@/components/atoms/LayoutContent.vue';
import LayoutRelation from '@/components/atoms/LayoutRelation.vue';
import PageSummary from '@/components/moleclues/PageSummary.vue';
import CardPartsList from '@/components/organisms/CardPartsList.vue';
import CardIFrame from '@/components/atoms/CardIFrame.vue';
import { getPart, getParts } from '@/api/parts/get';
import { TPart, TPartsData } from '~/types/parts';

@Component({
  components: {
    LayoutContent,
    LayoutRelation,
    PageSummary,
    CardPartsList,
    CardIFrame,
  },
})
export default class Parts extends Vue {
  head() {
    return {
      title: `${this.part?.name_ja}`,
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
    // データの取得
    this.part = getPart(this.$route.params.type, Number(this.$route.params.id));
    this.relationData = getParts(this.$route.params.type);
    // CodePen用のスクリプトの追加
    const script = document.createElement('script');
    script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
    this.$el.appendChild(script);
  }
}
</script>

<style lang="scss" scoped>
.c-relation {
  margin-top: 50px;
  border-top: 1px solid #ccc;
}
</style>
