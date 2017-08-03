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
</style>
<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <loading v-model="isLoading"></loading>
  </div>
</template>
<script>
  import Loading from 'vux/src/components/loading'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        msg:'hello world'
      }
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading
      })
    },
    components: {
      Loading
    },

  }
</script>
