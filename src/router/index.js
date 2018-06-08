import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '@/views/Login'
import MainView from '@/views/Main'
import CheckoutCounter from '@/components/CheckoutCounter'
import SkuMgrList from '@/components/SkuMgrList'
import SkuMgrImport from '@/components/SkuMgrImport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: LoginView
    }, {
      name: 'sku',
      path: 'sku',
      component: MainView,
      meta: {
        title: '商品管理'
      },
      children: [
        {
          path: 'list',
          name: 'sku-list',
          component: SkuMgrList,
          meta: {
            title: '全部商品'
          }
        }, {
          path: 'import',
          name: 'sku-import',
          component: SkuMgrImport,
          meta: {
            title: '批量导入'
          }
        }
      ]
    }, {
      name: 'root',
      path: '',
      component: MainView,
      redirect: '/checkout-counter',
      children: [
        {
          path: 'checkout-counter',
          name: 'checkout-counter',
          component: CheckoutCounter,
          meta: {
            title: '收银台'
          }
        }
      ]
    }
  ]
})
