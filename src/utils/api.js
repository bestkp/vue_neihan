import axios from 'axios';
import * as urls from '../utils/urls'
/**
 * 获取首页栏目
 * */
axios.get(urls.HOME_TABS)
  .then((res) => {
    debugger
  })
  .catch((err) => {
    debugger
  })
