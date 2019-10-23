// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/vue.scss'
import moment from "moment"
// 引入中文包
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

// Vue.config.productionTip = false
Vue.filter("formatTime", function (value) {
  return moment(value).fromNow()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 