<style scoped lang="scss">
  .slide-up-enter-active,.slide-up-leave-active {
    transition: all .2s ease;
  }
  .slide-up-enter, .slide-up-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
  .tabs {
    padding: 10px 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    height: 60px;
  }
  #main {
    .content {
      margin-bottom: 70px;
    }
  }
</style>
<template>
  <div id="main">
    <div class="content">
      <transition name="slide-up" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="tabs">
      <TabBar></TabBar>
    </div>

  </div>
</template>
<script>
  import TabBar from './TabBar.vue'
  export default {
    data() {
      return {
        msg: 'hello world'
      }
    },
    components: {
      'TabBar': TabBar
    }
  }
</script>
