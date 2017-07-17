// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store';
import VueRouter from 'vue-router';
import Vuex from 'Vuex';
import Util from './utils/util';
import Routers from './router/index';
const RouterConfig = {
  linkActiveClass: 'active',
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

Vue.use(VueRouter);
Vue.use(Vuex);

router.beforeEach(function (to, from, next) {
  next(vm => {
    console.error(22222)
    vm.$store.commit('updateLoadingStatus', {isLoading: true})
    Util.title(to.meta.title);
  })

})

router.afterEach(function (to) {
  this.$store.commit('updateLoadingStatus', {isLoading: false})
  window.scrollTo(0, 0);
})

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
