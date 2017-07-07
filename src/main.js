// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store';
import Mint from 'mint-ui';
import VueRouter from 'vue-router';
import Util from './utils/util';
import Routers from './router/index';
// import VeeValidate, { Validator } from 'vee-validate';
// import './assets/js/validators'
import messagesZH from './assets/js/zh_CN'
import 'mint-ui/lib/style.min.css'
const RouterConfig = {
  linkActiveClass: 'active',
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

// import * as filters from './util/filter'
Vue.use(VueRouter);
Vue.use(Mint);
router.beforeEach((to, from, next) => {
  // LoadingBar.start();
  Mint.Indicator.open({
    spinnerType: 'fading-circle'
  });
  Util.title(to.meta.title);
  next();
});

router.afterEach((to, from, next) => {
  // LoadingBar.finish();
  setTimeout(() => {
    Mint.Indicator.close();
  })
  window.scrollTo(0, 0);
});
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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
