<template>
  <div>
    <b-row class="category--listing">
      <b-col md="4" v-for="item in fm" v-bind:key="item.id" class="category--item">
        <div @click="showProductInfoModal(item.id)">
          <div class="product--info">
            <h3 class="product--title">{{item.masterData.current.name.en}}</h3>
            <p class="product--description">{{item.masterData.current.description.en}}</p>
          </div>
          <div class="image--container_landscape">
            <!-- In order to ensure the highest quality image, the full size image URL should be available and a server-side function should be able to accept parameters in the image URL to resize on the fly. ie: https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/ece4edb2868a8225.cro-U2aFaCJE.jpg?width=100&quality=70 This allows for performance optimization without requiring backend developers to make changes and possible rebuilds of backend code which can be more dangerous than a single file change on a front-end application -->
            <img
              v-if="item.masterData.current.masterVariant.images[0]"
              :src="item.masterData.current.masterVariant.images[0].url"
              :alt="item.masterData.current.masterVariant.images[0].label"
              class="image"
            >
            <img
              v-if="!item.masterData.current.masterVariant.images[0]"
              src="https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/ece4edb2868a8225.cro-U2aFaCJE-thumb.jpg"
              class="image"
            >
          </div>
        </div>
      </b-col>
    </b-row>
    <b-modal ref="product-info-modal" lazy>
      <b-container>
        <product-info-modal :fm="singleProductInfo" :isOrganic="um.isOrganic"></product-info-modal>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import GetCategoryService from "@/services/catalog/get-category.js";
import GetProductInfoService from "@/services/catalog/get-product-info.js";
import ProductInfoModal from "@/components/modal/product-info.vue";
import "./category-page.scss";

export default {
  name: "CategoryPage",
  components: {
    ProductInfoModal
  },
  data: () => {
    return {
      incrementBy: 10, // Thinking forward, set this as a var so that the user can one day change the number of items to display
      listings: 10,
      fm: [], //fm is a key I use to indicate that this object's data derived from the server
      um: {
        isOrganic: false //um is a key I use to indicate that a variable can be / is modified by the JS
      },
      singleProductInfo: {},
    };
  },
  created() {
    // Once the component is created, let's call the API to get the category details
    GetCategoryService.category(0).then(response => {
      this.fm = response.data.results;
    });
  },
  methods: {
    // This would get moved to a common file for reusability. When the user reaches a threshold, lets run the doneScrolling() to load more data
    infiniteScroll() {
      let scrollTimeOut;
      
      window.onscroll = () => {
        // When the user is at most 400px above the bottom of the page, let's load the next set of data
        let threshold = 400;
        let windowBottom = document.documentElement.offsetHeight - (document.documentElement.scrollTop + window.innerHeight) <= threshold;

        if (windowBottom) {
          clearTimeout(scrollTimeOut);
          scrollTimeOut = setTimeout(this.doneScrolling, 500);
        }
      };
    },
    // When the user is done scrolling, lets load more products for them. THis is called within the infiniteScroll()
    doneScrolling() {
        let offset = this.listings + 1;
      GetCategoryService.category(offset).then(response => {
        let temp = response.data.results;
        temp.forEach(element => {
          this.fm.push(element);
        });

        this.listings = this.listings + this.incrementBy;
      });
    },
    // When the user clicks on a product, let's open the modal and pass the data into the modal
    showProductInfoModal(productId) {
      GetProductInfoService.singleProduct(productId).then(response => {
        this.singleProductInfo = response.data.masterData.current;
        // Get "Organic" status
        let temp = this.singleProductInfo.masterVariant.attributes;
        temp.find((x) => {
            if (x.name === 'Organic' && x.value) {
                this.$set(this.$data.um, 'isOrganic', true) // This isn't updating and I didn't have enough time to look into why not.
            } else {
                this.um.isOrganic = false;
            }
        })
        this.$refs["product-info-modal"].show();
      });
    }
  },
  mounted() {
    this.infiniteScroll();
  }
};
</script>
