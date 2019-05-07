<template>
    <div class="d-block text-center">
      <h3>{{this.fm.name.en}}</h3>
      <p>{{this.fm.description.en}}</p>
      <div class="image--container_landscape">
        <img v-if="this.fm.masterVariant.images[0]" :src="this.fm.masterVariant.images[0].url" alt="" class="image">
        <img v-if="!this.fm.masterVariant.images[0]" src="https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/ece4edb2868a8225.cro-U2aFaCJE.jpg" alt="" class="image">
      </div>
      <p v-if="this.fm.masterVariant.prices[0]">{{this.fm.masterVariant.prices[0].value.centAmount | toCurrency}}</p>
      <p v-if="!this.fm.masterVariant.prices[0]">{{um.priceNotAvailable}}</p>
      <!-- <p>{{this.isOrganic}}</p> -->
    </div>
</template>

<script>
// Custom currency filter created to turn the integers into dollar values
import toCurrency from '@/filters/currency.js';

export default {
  name: "ProductInfoModal",
  props: {
      fm: Object,
      isOrganic: Boolean
  },
  data: () => {
    return {
        um:{
            priceNotAvailable: 'Price not available' // This language can be defined in an Admin tool somewhere so it can easily be modified
        }
    };
  }
};
</script>
