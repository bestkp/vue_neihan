import * as types from '../types'
import axios from 'axios'
import urls from '../../utils/urls'
import { Indicator } from 'mint-ui';
import 'mint-ui/lib/indicator/style.css'
import 'mint-ui/lib/spinner/style.css'
export default {
  state: {
    tabs: [],
    defaultTab: 'recommend',
    jokeList: [],
  },
  getters: {
    tabs: state => state.tabs,
    defaultTab: state => state.defaultTab,
    jokeList: state => state.jokeList,
    loading: state => state.loading
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

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
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
            commit(types.LOAD_MORE, !res.data.data.has_more);
            Indicator.close();
          }
        })
        .catch((err) => {
          console.log('list 接口出错')
        })
    },
    setLoading({commit}, status) {
      commit(types.LOAD_MORE, status);
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
    [types.LOAD_MORE](state, status) {
      state.loading = status;
    }
  }
}
