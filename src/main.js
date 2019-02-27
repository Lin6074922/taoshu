// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "../static/css/public_stylipt.css"
import "../static/icon/iconfont.css"
import axios from 'axios'
import pub from '../static/js/public_stylipt'
import global from '../static/global.vue'
Vue.config.productionTip = false
Vue.prototype.url=global.url
axios.defaults.withCredentials=false
Vue.prototype.axios=axios
Vue.use(pub)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
