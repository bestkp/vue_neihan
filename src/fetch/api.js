import axios from 'axios'
import urls from '../utils/urls'

const HOST = '/api/'

export function fetch(url, method='GET') {
  return new Promise((resolve, reject)=> {
    axios({
      method:method,
      url: HOST + url,
      //params:params
    })
      .then((response) => {
        resolve(response.data.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  GetTabs () {
    return fetch(urls.HOME_TABS_URL)
  },

  GetJokes () {
    return fetch(urls.HOME_RECOMMEND_URL)
  }
}
