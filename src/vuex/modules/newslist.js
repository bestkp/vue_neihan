import * as types from '../types'
const state = {
  pageno: 1
};
const actions = {
  setloginStatus({commit}, status){
    commit(types.NEWS_LIST_PAGENO, status)
  },

}
const getters = {
  'pageNo': state=>state.pageno,
}
const mutations = {
  [types.NEWS_LIST_PAGENO](state, status) {
    state.pageno = status;
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
