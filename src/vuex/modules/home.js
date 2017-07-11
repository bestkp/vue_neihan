import * as types from '../types'
import axios from 'axios'
import urls from '../../utils/urls'
export default {
  state: {
    tabs: [],
    defaultTab: '',
    jokeList: []
  },
  getters: {
    tabs: state => state.tabs,
    defaultTab: state => state.defaultTab,
    jokeList: state => state.jokeList,
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
    },
    changeDefault ({commit}, obj) {
      commit(types.CHANGE_DEFAULT, obj)
    },
    getJoke({commit}, type) {
      let url = '/api';
      switch (type) {
        case 'recommend': {
          url = url + urls.HOME_RECOMMEND_URL;
          break;
        }
        case 'video': {
          url = url + urls.HOME_VIDEO_URL;
          break;
        }
        case 'live': {
          url = url + urls.HOME_IMG_URL;
          break;
        }
        case 'pic': {
          url = url + urls.HOME_IMG_URL;
          break;
        }
        case 'essay': {
          url = url + urls.HOME_JOKE_URL;
          break;
        }
        case 'essence': {
          url = url + urls.HOME_JH_URL;
          break;
        }
        default: {
          url = url + urls.HOME_RECOMMEND_URL;
        }
      }
      axios.get(url)
        .then((res) => {
          if(res.status === 200) {
            console.log(res.data.data)
            commit(types.JOKE_LIST, res.data.data);
          }
        })
        .catch((err) => {
          console.log('list 接口出错')
        })
    }
  },
  mutations: {
    [types.HOME_TABS](state, data) {
      state.tabs = data;
      for(let da in data) {
        if(data[da].is_default_tab === true) {
          state.defaultTab = data[da].umeng_event;
          break
        }
        state.defaultTab = 0
      }

      console.log(data);
    },
    [types.CHANGE_DEFAULT](state, o) {
      state.defaultTab = o.umeng_event;
    },
    [types.JOKE_LIST](state, data) {
      state.jokeList = data
    },
  }
}
