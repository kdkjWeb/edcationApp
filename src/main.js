// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router/index.js'
import store from './vuex/index.js'

// 引入UI组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
Object.defineProperty(Vue.prototype, '$mint', { value: Mint });
import '@/assets/font/iconfont.css'

// 引入axios
import axiosConfig from './server/axiosConfig.js'
Object.defineProperty(Vue.prototype,'$axios',{value:axiosConfig});

// 封装方法axios的get以及post
import  Server from './server/server.js'
Object.defineProperty(Vue.prototype,'$g',{value:Server.g});
Object.defineProperty(Vue.prototype,'$p',{value:Server.p});

// 引入公用方法 common.js
import common from './util/common.js'
Object.defineProperty(Vue.prototype,'$common',{value:common});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
