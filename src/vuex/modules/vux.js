import * as types from '../types'
import axios from 'axios'
import urls from '../../utils/urls'
import 'mint-ui/lib/indicator/style.css'
import 'mint-ui/lib/spinner/style.css'
export default {
  state: {
    isLoading: false
  },
  actions: {

  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
}
