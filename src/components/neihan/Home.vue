<template>
  <div class="home-page">
    <ul class="tabs">
      <li v-for="(tab, index) in tabs" @click="changeLi(tab, index)" :class="defaultTab == index?'active': ''">{{tab.name}}</li>
    </ul>
    <mt-tab-container v-model="defaultTab">
      <mt-tab-container-item v-for="tab in tabs" :key="tab.umeng_event" :id="tab.umeng_event">
        <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<style scoped lang="scss">
  .home-page{
    .tabs {
      overflow-x: auto;
      height: 50px;
      font-size: 18px;
      white-space: nowrap;
      background: #eee;
      color: #380701;
      li {
        padding: 0 10px;
        line-height: 40px;

        display: inline-block;
        &.active {
          font-size: 20px;
          border-bottom: 4px solid red;
        }
      }
    }
  }
</style>
<script>
  import faker from "../../assets/fixtures/faker"
  import {mapGetters, mapActions} from 'vuex'
  import { TabContainer, TabContainerItem } from 'mint-ui';
  export default{
    data(){
      return{
        msg: 'Hello world!',
      }
    },
    computed: {
      ...mapGetters([
        'tabs',
        'defaultTab',
        'jokeList'
      ])
    },
    components:{
      TabContainer,
      TabContainerItem
    },
    methods: {
      ...mapActions([
        'getHomeTabs',
        'changeDefault',
        'getJoke'
      ]),
      changeLi(li, i) {
        this.changeDefault(i);
        this.active = li.umeng_event;
        this.getJoke(li.umeng_event);
      }
    },
    created() {
      this.getHomeTabs();
    }
  }
</script>
