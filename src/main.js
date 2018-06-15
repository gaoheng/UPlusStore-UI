// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import store from './store'
import router from './router'
import App from './App'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.http.options.root = process.env.API_BASE
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
console.log(process.env)
