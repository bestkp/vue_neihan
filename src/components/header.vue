<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
        color: #fff;
    }
    .layout-ceiling-main{
        float: right;
        margin-right: 15px;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
</style>
<template>
    <div class="layout">
        <div class="layout-ceiling">
            <Icon type="heart" /> <b>管理平台</b>
            <div class="layout-ceiling-main">
                <a href="javascript:;" v-show="isLogin">登录 |</a>
                <a href="javascript:;" v-show="!isLogin">欢迎您，管理员 <span style="color: #fff;">|</span></a>
                <router-link to="/updatepwd">修改密码 <span style="color: #fff;">|</span></router-link>
                <a href="javascript:;" @click="logout">退出</a>
            </div>
        </div>
        <Login></Login>
    </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex';
  import Login from '../views/login.vue';
    export default {
      data() {
        return {

        }
      },
      methods: {
        logout() {
          localStorage.clear();
          this.setloginStatus(false);
          this.$router.go(0);
        },
        ...mapActions([
          'setloginStatus'
        ])
      },
      computed: {
        ...mapGetters([
          'isLogin'
        ])
      },
      components: {
        Login
      }
    }
</script>
