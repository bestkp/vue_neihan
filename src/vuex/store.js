import Vue from 'vue'
import Vuex from 'Vuex';
import home from './modules/home'
import vux from './modules/vux'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    vux
  },
  strict: process.env.NODE_ENV !== 'production', //是否开启了严格模式
})
