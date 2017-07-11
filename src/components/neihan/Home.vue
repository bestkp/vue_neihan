<template>
  <div class="home-page">
    <ul class="tabs">
      <router-link v-for="tab in tabs" tag="li" :to="{name: 'Home'}">{{tab.name}}</router-link>
    </ul>
  </div>
</template>
<style scoped lang="scss">
  .home-page{
    .tabs {
      display: flex;
      overflow-x: auto;
    }
  }
</style>
<script>
  import faker from "../../assets/fixtures/faker"
  import {mapGetters, mapActions} from 'vuex'
  export default{
    data(){
      return{
      }
    },
    computed: {
      ...mapGetters([
        'tabs'
      ])
    },
    components:{

    },
    methods: {
      ...mapActions([
        'getHomeTabs'
      ])
    },
    created() {
      this.getHomeTabs();
    }
  }
</script>
