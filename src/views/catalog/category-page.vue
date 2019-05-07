<template>
  <div class="home">
    <category-page></category-page>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CategoryPage from '@/components/catalog/category/category-page.vue';

export default {
    name: 'CategoryPageView',
    components: {
        CategoryPage
    }
}
</script>
