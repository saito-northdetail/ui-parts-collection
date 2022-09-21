<template>
  <LayoutContent>
    <PageSummary
      title="UIパーツ集"
      description="よくあるパーツをまとめたページとなります"
    />
    <PageSection title="パーツ種類">
      <CardCategoryList :category-datas="datas" />
    </PageSection>
  </LayoutContent>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import LayoutContent from '@/components/atoms/LayoutContent.vue';
import PageSummary from '@/components/moleclues/PageSummary.vue';
import PageSection from '@/components/moleclues/PageSection.vue';
import CardCategoryList from '@/components/organisms/CardCategoryList.vue';
import { getAllData } from '@/api/parts/get';
import { TPartsDatas } from '@/types/parts';

@Component({
  components: {
    LayoutContent,
    PageSummary,
    PageSection,
    CardCategoryList,
  },
})
export default class Index extends Vue {
  head() {
    return {
      title: 'TOP',
    };
  }

  datas: TPartsDatas = [];
  mounted() {
    this.datas = getAllData();
  }
}
</script>

<style lang="scss" scoped>
.c-listBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  text-align: center;
}
</style>
