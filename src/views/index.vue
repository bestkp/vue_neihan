<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 500px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #fff;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-a {
    display: block;
    width: 100%;
    height: 100%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
<template>
  <div class="layout">
    <HeaderView></HeaderView>
    <Row type="flex">
      <i-col span="5" class="layout-menu-left">
        <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              内容管理
            </template>
            <Menu-item name="1-1"><router-link to="newslist" class="menu-a">新闻管理</router-link></Menu-item>
            <Menu-item name="1-2">消息管理</Menu-item>
            <Menu-item name="1-3">热词管理</Menu-item>
            <Menu-item name="1-4">栏目管理</Menu-item>
            <Menu-item name="1-5">视频管理</Menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              用户管理
            </template>
            <Menu-item name="2-1">用户管理</Menu-item>
            <Menu-item name="2-2">用户反馈</Menu-item>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              系统管理
            </template>
            <Menu-item name="3-1">系统设置</Menu-item>
            <Menu-item name="3-2">系统设置</Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col span="19">

        <div class="layout-content">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
        <div class="layout-copy">
          2011-2016 &copy; TalkingData
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  import HeaderView from './components/header.vue'
  export default {
    data() {
      return {
        msg:'hello world'
      }
    },
    components: {
      HeaderView
    }
  }
</script>
