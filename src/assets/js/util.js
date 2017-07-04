import api from '../../fetch/api'
var isRealLogin = function (obj) {
  var realLogin = 'false';
  debugger
  api.isLogin(obj)
    .then((res)=>{
      debugger
      if(res == true){
        realLogin = true
      } else {
        realLogin = false
      }
    })
    .catch((err)=>{
      realLogin = false
    })
  return realLogin
}
export default {
  isRealLogin
}
