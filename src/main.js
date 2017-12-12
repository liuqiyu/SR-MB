// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'  // 引用mint-ui样式
import 'lib-flexible'   // 引用flexible
import './assets/style/reset.css'
import './assets/font/iconfont.css'
import './mint-ui'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})