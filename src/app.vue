<style lang="scss">
  @import "./assets/scss/reset";
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-430px);
    opacity: 0;
  }
  #app {
    height: 100%;}
</style>
<template>

  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import HeaderView from './components/header.vue';
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
