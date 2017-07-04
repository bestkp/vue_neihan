<style scoped lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

</style>
<template>
  <div class="layout">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
