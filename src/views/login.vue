<style scoped lang="less">

</style>
<template>
  <div id="loginModal">
    <particle></particle>
    <Modal v-model="isLogin" width="360" :closable="false" :mask-closable="false">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="log-in"></Icon>
        <span>登录</span>
      </p>
      <Form ref="formInline" :model="formInline"  :rules="ruleInline">
        <Form-item prop="user" style="width: 100%">
          <Input type="text" name="userName" v-model="formInline.user" placeholder="用户名">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password" style="width: 100%">
          <Input type="password" name="password" v-model="formInline.password" placeholder="密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>

           <router-link to="findpwd">忘记密码？</router-link>
           <router-link to="register" style="float: right">去注册>></router-link>
        <!--<Form-item prop="captcha" style="width: 100%">
          <Row :gutter="24">
            <Col span="16" >
              <Input type="text" name="captcha" v-model="formInline.captcha" placeholder="验证码">
              <Icon type="iphone" style="font-size: 21px" slot="prepend"></Icon>
              </Input>
            </Col>
            <Col span="8" style="height: 32px;">
              <img :src="codeSrc" @click="change" style="height: 32px;" alt="">
            </Col>
          </Row>
        </Form-item>-->
      </Form>
      <div slot="footer">
        <Button type="primary" size="large" long @click="handleSubmit('formInline')">登录</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
  import axios from 'axios';
  import particle from '../components/particle.vue';
  import qs from 'qs';
  import {mapGetters, mapActions} from 'vuex';
  export default {
    data () {
      return {
        codeSrc: '/api/catcha/image',
        isLogin: true,
        formInline: {
          user: 'admin',
          password: '000000',
          captcha: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ],
          captcha: [
            { required: true, message: '请填写验证码', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      change() {
        this.codeSrc='/api/catcha/image?t='+new Date().toString();
      },
      handleSubmit(name) {
        var _this = this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            var data = {'username' : _this.formInline.user, 'password' : _this.formInline.password,'captcha' : _this.formInline.captcha};
            axios.post('/api/users/login', qs.stringify(data))
              .then(function (res) {
                console.log(res);
                if(res.data.ok == true) {
                  _this.setloginStatus(true);
                  _this.$router.push('/main');
                } else {
                  _this.$Message.error(res.data.msg);
                }
              })
              .catch(function (error) {
              });
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      ...mapActions([
        'setloginStatus'
      ])
    },
    components: {
      particle
    }
  }
</script>
