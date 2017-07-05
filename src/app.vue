<style scoped lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

</style>
<template>
  <!--<div class="layout">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>-->
  <div id="app">
    <div class="tabs">
      <ul>
        <router-link :to="{name: 'Home'}" tag="li">
          <div><img src="./assets/svg/home.svg" alt=""></div>
          <div>首页</div>
        </router-link>
        <router-link :to="{name: 'Categories'}" tag="li">
          <div><img src="./assets/svg/category.svg" alt=""></div>
          <div>分类</div>
        </router-link>
        <router-link :to="{name: 'Cart'}" tag="li">
          <div><img src="./assets/svg/cart.svg" alt=""></div>
          <div>购物车</div>
        </router-link>
        <router-link :to="{name: 'Me'}" tag="li">
          <div><img src="./assets/svg/me.svg" alt=""></div>
          <div>我的</div>
        </router-link>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
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
