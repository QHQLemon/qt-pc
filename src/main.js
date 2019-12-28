// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import $ from 'jquery' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

import './assets/css/main.css'


// import swiper from './assets/js/swiper'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueAxios , axios);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

