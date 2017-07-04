import Vue from 'vue'
import Vuex from 'Vuex';
import login from './modules/login'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login
  },
  strict: process.env.NODE_ENV !== 'production', //是否开启了严格模式
})
