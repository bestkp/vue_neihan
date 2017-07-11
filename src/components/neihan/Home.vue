<template>
  <div class="home-page">
    <mt-navbar v-model="selected">
      <mt-tab-item class="tab-item"  v-for="tab in tabs" :id="tab.umeng_event" @click.native="changeLi(tab)">{{tab.name}}</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="tab.umeng_event" v-for="tab in tabs">
        <mt-cell v-for="n in 10" :title="'内容 ' + n"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<style scoped lang="scss">
  .tab-item {
    font-size: 16px;
  }

  .mint-navbar {
    display: block;
    background: #eee;
    overflow-x: auto;
    white-space: nowrap;
    a {
      &:hover {
        text-decoration: none;
      }
      &.is-selected {
        color: #00a0e9;
        border-bottom: 3px solid #00a0e9;
      }
      padding: 10px;
      display: inline-block;
      .mint-tab-item-label {
        font-size: 16px;
      }
    }
  }
</style>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import {Navbar, TabItem} from 'mint-ui';
  export default{
    data(){
      return {
      }
    },
    computed: {
      ...mapGetters({
        'tabs': 'tabs',
        selected: 'defaultTab',
        jokeList: 'jokeList'
      })
    },
    components: {
      Navbar,
      TabItem
    },
    methods: {
      ...mapActions([
        'getHomeTabs',
        'changeDefault',
        'getJoke'
      ]),
      changeLi(li) {
        this.changeDefault(li);
        this.getJoke(li.umeng_event);
      }
    },
    created() {
      this.getHomeTabs();
      this.getJoke('recommend');
    }
  }
</script>
