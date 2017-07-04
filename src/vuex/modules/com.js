import * as types from '../types'
import api from '../../fetch/api'
import cookie from '../../assets/js/cookie'
const state = {
  isLogin: cookie.getCookie('logined') == null ? 0 : 1
};
const actions = {
  setloginStatus({commit}, status){
    commit(types.SET_LOGIN_STATUS, status)
  },

}
const getters = {
  'isLogin': state=>state.isLogin,
}
const mutations = {
  [types.SET_LOGIN_STATUS](state, status) {
    state.isLogin = 1;
    cookie.setCookie('logined', status, '1h');
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
