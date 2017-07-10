<style scoped lang="scss">

</style>
<template>
  <div id="app">
    {{msg}}
  </div>
</template>
<script>
  export default {
    props: ['msg'],
    data() {
      return {
      }
    },
    components: {},
    created() {
        console.log('Created')
    }
  }
</script>
