import axios from 'axios'
import qs from 'qs'
const HOST = '/api';

export function fetch(url, method = 'GET',data = {}) {
  return new Promise((resolve, reject)=> {
    axios({
      method: method,
      url: HOST + url,
      data: qs.stringify(data)
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  /**
   * 用户登录
   * @param {any} accesstoken
   * @return
   */
  Login(obj) {
    return fetch(`/n/login`, 'post', {
      username: obj.username,
      password: obj.password
    })
  },
  /**
   * 忘记密码
   * @param {any} accesstoken
   * @return
   */
  Forget(obj) {
    return fetch(`/n/updateUserNew`, 'post', {
      mobile: obj.mobile,
      pwd: obj.pwd,
      verificateCode: obj.verificateCode
    })
  },
  /**
   * 获取验证码
   * @param {any} mobile
   * @return
   */
  GetCode(obj) {
    return fetch(`/n/sendVerificateCode`, 'post', {
      mobile: obj.mobile,
      operation: obj.operation
    })
  },
  /**
  * 判断手机号是否注册
  * @param {string} mobile
   * @return
  * */
  isLogin(obj) {
    return fetch(`/n/IsHasMobilePhone`, 'post', {
      mobile: obj.mobile,
    })
  },
  /**
   * 获取文章列表
   */
  TopicsList(params) {
    return fetch(`/topics/${params}`)
  },

  /**
   * 获取文章详情
   */
  TopicsDetail(id) {
    return fetch(`/topic/${id}`)
  },

  /**
   * 获取用户信息
   */
  UserInfo(name) {
    return fetch(`/user/${name}`)
  },

  /**
   * 获取已读和未读消息
   */
  Messages(accesstoken) {
    return fetch(`/messages?mdrender=true&accesstoken=${accesstoken}`)
  },

  /**
   * 新建主题
   */
  Post(form){
    return fetch(`/topics?${form}`, 'post')
  }
}
