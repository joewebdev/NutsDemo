<template>
    <product-info></product-info>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductInfo from '@/components/catalog/product/product-info.vue';

@Component({
  components: {
    ProductInfo,
  },
})
export default class ProductInfoView extends Vue {}
</script>
