import Vue from 'vue'
import Router from 'vue-router'
import CategoryPageView from '@/views/catalog/category-page.vue';
import ProductInfoView from '@/views/catalog/product-info.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'category',
      component: CategoryPageView
    },
    {
        path: '/product',
        name: 'product',
        component: ProductInfoView
    }
  ]
})
