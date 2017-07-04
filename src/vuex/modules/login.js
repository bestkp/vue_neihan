import * as types from '../types'
const state = {
  isLogin: false
};
const actions = {
  setloginStatus({commit}, status){
    commit(types.SET_LOGIN_STATUS, status)
  },

}
const getters = {
  'isLogin': state=>localStorage.getItem('login') ==1?false:!state.isLogin,
}
const mutations = {
  [types.SET_LOGIN_STATUS](state, status) {
    state.isLogin = status;
    if(status == true) {
      localStorage.setItem('login', 1);
    }
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
