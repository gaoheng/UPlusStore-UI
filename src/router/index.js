import Vue from 'vue'
import Router from 'vue-router'
import CheckoutCounter from '@/components/CheckoutCounter'
import SkuMgrList from '@/components/SkuMgrList'
import SkuMgrImport from '@/components/SkuMgrImport'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: CheckoutCounter
    },
    {
      path: '/sku/list',
      name: 'SkuMgrList',
      component: SkuMgrList
    },
    {
      path: '/sku/import',
      name: 'SkuMgrImport',
      component: SkuMgrImport
    },
    {
      path: '/checkout-counter',
      name: 'CheckoutCounter',
      component: CheckoutCounter
    }
  ]
})
