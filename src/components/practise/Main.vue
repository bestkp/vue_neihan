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
  }
  #main {
    display: flex;
    flex-direction: column;
    height: 100%;
    .content {
      flex: 1;
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
