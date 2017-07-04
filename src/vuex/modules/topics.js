import * as types from '../types'
import api from '../../fetch/api'
const state = {
  topicsList: [],
  searchKey: {
    page: 0,
    limit: 20,
    tab: 'all'
  },
  scroll: true
};
const actions = {
  getTopicsList({commit}, params) {
    api.TopicsList(`?tab=${state.searchKey.tab}&page=${state.searchKey.page}&limit=${state.searchKey.limit}`).then(res=>{
      commit(types.GET_TOPICS_LIST, res);
    })
  }
}
const getters = {
  'getTopicsList': state=>state.topicsList,
  'limit': state=>state.searchKey.limit
}
const mutations = {
  [types.GET_TOPICS_LIST](state, res) {
    if(state.searchKey.page <= 1) {
      state.topicsList = res.data
    } else {
      state.topicsList = state.topicsList.concat(res.data)
    }
  },
  [types.GET_SEARCH_KEY](state, obj) {
    state.searchKey = obj
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
