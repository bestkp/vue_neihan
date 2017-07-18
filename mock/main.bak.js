// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store';
import VueRouter from 'vue-router';
import Vuex from 'Vuex';
import Util from './utils/util';
import Routers from './router/index';
// import VeeValidate, { Validator } from 'vee-validate';
// import './assets/js/validators'
// import messagesZH from './assets/js/zh_CN'
const RouterConfig = {
  linkActiveClass: 'active',
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

// import * as filters from './util/filter'
Vue.use(VueRouter);
Vue.use(Vuex);
const loadingStore = new Vuex.Store({}) ;
loadingStore.registerModule('vux', {
  state: {
    isLoading: true
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})
router.beforeEach(function (to, from, next) {
  loadingStore.commit('updateLoadingStatus', {isLoading: true})
  Util.title(to.meta.title);
  next()
})

router.afterEach(function (to) {
  loadingStore.commit('updateLoadingStatus', {isLoading: true})
  window.scrollTo(0, 0);
})

//vee-validate
// Vue.use(VeeValidate);
// Validator.setLocale('zh');
// const dictionary = {
//   zh: {
//     messages:messagesZH.messages
//   },
// };
// Validator.updateDictionary(dictionary);
Vue.config.productionTip = false
// Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
