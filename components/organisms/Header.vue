<template>
  <header class="l-header">
    <div class="l-headerInner inner">
      <nuxt-link to="/" class="c-logo">UIパーツ集</nuxt-link>
      <!-- <nav class="c-nav">
        <button type="button" class="c-navButton">パーツ種類</button>
        <ul class="c-navList">
          <li v-for="type in datas" :key="type.id" class="c-navItem">
            <nuxt-link :to="'/'+type.type+'/'" class="c-navItemLink">{{ type.type_ja }}</nuxt-link>
          </li>
        </ul>
      </nav> -->
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getAllData } from '@/api/parts/get';
import { TPartsDatas } from '~/types/parts';

@Component
export default class Header extends Vue {
  datas: TPartsDatas = [];
  mounted() {
    this.datas = getAllData();
  }
}
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
.c-nav {
  font-size: 1.6rem;
  &Button {
    background: none;
    border: none;
    cursor: pointer;
    &:hover + .c-navList {
      display: flex;
      flex-wrap: wrap;
    }
  }
  &List {
    display: none;
    justify-content: space-around;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: $nav-background-color;
  }
  &Item {
    width: 30%;
    height: 50px;
    list-style-type: none;
    text-align: center;
    &Link {

    }
  }
}
</style>
