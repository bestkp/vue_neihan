import Vue from 'vue'
import VueValidator from 'vue-validator'

Vue.use(VueValidator)

Vue.validator('tel', function (val) {
  return /^[0-9]{11}$/.test(val)
});
Vue.validator('passw', function (val) {
  return /^(\w){6,20}$/.test(val)
});
