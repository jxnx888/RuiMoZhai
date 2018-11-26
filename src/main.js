// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端 取消 按钮点击300ms延迟
import fasteClick from 'fastclick'
// 引入轮播图插件库和css
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'jquery'

//import Bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import baidu map
import BaiduMap from 'vue-baidu-map'


import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'


import './assets/scripts/typeWrite'

//Validate function
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

Vue.config.productionTip = false
// 移动端 取消 按钮点击300ms延迟
fasteClick.attach(document.body)
// 引入轮播图插件库和css
Vue.use(VueAwesomeSwiper )
Vue.use(BootstrapVue)
Vue.use(BaiduMap, {ak: 'qkiMU0GghA3q4RZmRsfiWttWiufZjos0'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

