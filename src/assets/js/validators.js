import { Validator } from 'vee-validate';
const isMobile = {
  messages: {
    en: (field, args) => {
      return '请输入正确格式手机号.'
    },
    zh: (field, args) => {
      return '请输入正确格式手机号.'
    }
  },
  validate(value, args) {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
};
Validator.extend('mobile', isMobile);

