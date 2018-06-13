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
        title: '商品管理',
        iconClasses: 'fa fa-fw fa-archive'
      },
      children: [
        {
          path: 'list',
          name: 'sku-list',
          component: SkuMgrList,
          meta: {
            title: '商品列表',
            iconClasses: 'fa fa-fw fa-archive'
          }
        }, {
          path: 'import',
          name: 'sku-import',
          component: SkuMgrImport,
          meta: {
            title: '批量导入',
            iconClasses: 'fa fa-fw fa-upload'
          }
        }
      ]
    }, {
      name: 'root',
      path: '',
      component: MainView,
      redirect: '/checkout-counter',
      meta: {
        title: '优+童装'
      },
      children: [
        {
          path: 'checkout-counter',
          name: 'checkout-counter',
          component: CheckoutCounter,
          meta: {
            title: '收银台',
            iconClasses: 'fa fa-fw fa-cny'
          }
        }
      ]
    }
  ]
})
