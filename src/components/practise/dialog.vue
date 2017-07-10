<style scoped lang="scss">
  .dialog-wrapper {
    &.open {
      display: block;
    }
    height: 100%;
    display: none;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    &>.dialog {
      height: 100%;
      z-index: 10;
      background: #fff;
      position: relative;
      box-sizing: border-box;

      padding: 24px 14px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
      & .heading {
        padding: 12px;
        text-align: right;
      }
    }
  }
</style>
<template>
  <div class="dialog-wrapper" :class="{'open': isopen}">
    <div class="overlay" @click="close"></div>
    <div class="dialog">
      <div class="heading">
        <slot name="heading"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'hello world',
        isopen: false
      }
    },
    methods: {
      open() {
        if(!this.isopen){
          this.$emit('dialogOpen')
        }
        this.isopen = true;
      },
      close() {
        if(this.isopen) {
          this.$emit('dialogClose')
        }
        this.isopen = false;
      }
    },
    components: {}
  }
</script>
