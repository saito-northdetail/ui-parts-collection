<template>
  <div class="l-content">
    <div class="l-contentInner inner">
      <PageSummary :title="data.type_ja" />
      <CardPartsList :parts-datas="data.parts" :type="$route.params.type" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import PageSummary from '@/components/moleclues/PageSummary.vue';
import CardPartsList from '@/components/organisms/CardPartsList.vue';
import { getParts } from '@/api/parts/get';
import { TPartsData } from '~/types/parts';

@Component({
  components: {
    PageSummary,
    CardPartsList,
  },
})
export default class Type extends Vue {
  head() {
    return {
      title: `カテゴリ「${this.data?.type_ja}」`,
    };
  }

  data: TPartsData | undefined | null = {
    id: 0,
    type: '',
    type_ja: '',
    parts: [],
  };

  mounted() {
    this.data = getParts(this.$route.params.type);
  }
}
</script>
