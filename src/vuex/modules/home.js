import * as types from '../types'
import axios from 'axios'
import urls from '../../utils/urls'
export default {
  state: {
    tabs: []
  },
  getters: {
    tabs: state => state.tabs
  },
  actions: {
    getHomeTabs ({commit}) {
      axios.get('/api'+urls.HOME_TABS_URL)
        .then((res) => {
          if(res.status === 200) {
            commit(types.HOME_TABS, res.data.data);
          }
        })
        .catch((err) => {
          console.log('tabs 接口出错')
        })
    }
  },
  mutations: {
    [types.HOME_TABS](state, data) {
      state.tabs = data;
      console.log(data);
    }
  }
}
