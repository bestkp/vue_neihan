<template>
  <div class="home-page">
    <mt-navbar v-model="selected">
      <mt-tab-item class="tab-item" v-for="tab in tabs" :id="tab.umeng_event" @click.native="changeLi(tab)">
        {{tab.name}}
      </mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="tab.umeng_event" v-for="tab in tabs">
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
          <li v-for="jl in jokeList.data" :key="jl.group?jl.group.id: jl.ad.id">
            <div class="joke-header" v-if="jl.type!=5">
              <div class="user-img">
                <img :src="jl.group.user.avatar_url">
              </div>
              <div class="user-name">
                {{jl.group.user.name}}
              </div>
              <div class="jubao">X</div>
            </div>
            <div v-else>

            </div>
            {{ jl.group ? jl.group.content : jl.ad.title }}
          </li>
        </ul>

      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<style scoped lang="scss">
  .home-page {
    background: #ccc;
    li {
      padding: 10px 0;
      background: #fff;
      margin-bottom: 2px;
      .user
    }
  }
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
  import {Navbar, TabItem, InfiniteScroll} from 'mint-ui';
  export default{
    data(){
      return {
        loading: false
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
      TabItem,
      InfiniteScroll
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
      },
      loadMore() {
          let self = this;
        this.loading = true;
//        setTimeout(() => {
//          let last = self.jokeList.data[self.jokeList.data.length - 1];
//          for (let i = 1; i <= 10; i++) {
//            self.jokeList.data.push(last + i);
//          }
//          self.loading = false;
//        }, 2500);
      }
    },
    created() {
      this.getHomeTabs();
      this.getJoke('recommend');
    }
  }
</script>
