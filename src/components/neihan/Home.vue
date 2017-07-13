<template>
  <div class="home-page">
    <mt-navbar v-model="selected">
      <mt-tab-item class="tab-item" v-for="tab in tabs" :id="tab.umeng_event" @click.native="changeLi(tab)">
        {{tab.name}}
      </mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <!--
    digg_count: 被赞数
    bury_count: 被贬数
    comment_count: 评论数
    share_count: 转发数
    category_name: 标签名
    has_comments: 有无神评
    play_count: 播放量
    label {
      1: 热门
      64： 同城
    }
    media_type {
      0: 文本,
      1: 图片,
      2: gif
      3: 视频
      4：多图
    }
    -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id="tab.umeng_event" v-for="tab in tabs">
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
          <li v-for="jl in jokeList.data" :key="jl.group?jl.group.id: jl.ad.id">
            <div v-if="jl.type!=5">
              <div class="joke-header">
                <div class="joke-label" v-show="jl.group.label==1||jl.group.label==64">{{label[jl.group.label]}}</div>
                <div class="user-img">
                  <img :src="jl.group.user.avatar_url">
                </div>
                <div class="user-name">
                  {{jl.group.user.name}}
                </div>
                <div class="dislike" v-show="jl.group.allow_dislike" @click="dislike">X</div>
              </div>
              <div class="joke-content">
                <div class="joke-content-text">
                  {{jl.group.content}}
                  <span class="category_name">{{jl.group.category_name}}</span>
                </div>
                <div class="joke-content-media">
                  <div class="jk-content-img" v-if="jl.group.media_type==1 || jl.group.media_type == 2">
                    <img :src="jl.group.large_image.url_list[0].url" alt=""/>
                  </div>
                  <div class="jk-content-video" v-else-if="jl.group.media_type==3">
                    <video class="jk-video" preload="none" :src="jl.group.mp4_url" controls :poster="jl.group.large_cover.url_list[0].url">
                      <p class="jk-video-desc">{{jl.group.play_count}}播放</p>
                    </video>
                  </div>
                  <div class="jk-content-imgs" v-else-if="jl.group.media_type==4">
                    <img v-for="simg in jl.group.thumb_image_list" :src="simg.url_list[0].url" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="joke-content">
                <div class="joke-header">
                  <div class="joke-label">广告</div>
                  <div class="user-img">
                    <img :src="jl.ad.avatar_url">
                  </div>
                  <div class="user-name">
                    {{jl.ad.avatar_name}}
                  </div>
                  <div class="dislike" @click="dislike">X</div>
                </div>
                <div class="joke-content-text">
                  {{jl.ad.title}}
                </div>
                <div class="joke-content-media">
                  <img :src="jl.ad.display_image"/>
                </div>
                <div class="joke-ad-download">
                  <span>{{jl.ad.avatar_name}}</span>
                  <a :href="jl.ad.download_url">{{jl.ad.button_text}}</a>
                </div>
              </div>
            </div>
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
      background: #fff;
      margin-bottom: 2px;
      padding: 5px 0px;
      .joke-header {
        display: flex;
        position: relative;
        padding: 5px 15px 5px 17px;
        justify-content: space-between;
        .user-img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          overflow: hidden;
        }
        .user-name {
          flex: 1;
          line-height: 25px;
          margin-left: 10px;
          font-size: 12px;
          color: #666;
        }
        .dislike {
          border: 1px solid #333;
          width: 18px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          border-radius: 5px;
        }
        .joke-label {
          font-size: 12px;
          writing-mode: vertical-lr;
          background: #ffb7cd;
          color: #fff;
          margin-right: 2px;
          margin-left: -17px;
        }
      }
      .joke-content {
        line-height: 1.5;
        font-size: 16px;
        .category_name {
          font-size: 12px;
          color: #5a0700;
          border: 1px solid #b96454;
          background: #eee;
          vertical-align: baseline;
          border-radius: 5px;
          padding: 1px 4px;
          margin-left: 5px;
          display: inline-block;
          box-sizing: border-box;
        }
        .joke-content-text {
          padding: 5px 20px;
        }
        .joke-content-media {
          margin-top: 10px;
        }
        .jk-content-video {
          width: 100%;
          .jk-video {
            width: 100%;
            position: relative;
            .jk-video-desc {
              background: #000;
              color: #fff;
            }
          }
        }
        .jk-content-imgs {
          display: flex;
          flex-wrap: wrap;
          img {
            width: 30%;
            height: 30%;
            margin-right: 10px;
            box-sizing: border-box;
            margin-bottom: 10px;
            &:nth-child(3n) {
              margin-right: 0;
            }
          }
        }
        .joke-ad-download {
          display: flex;
          padding: 5px 20px;
          justify-content: space-between;
          span {
            color: #666;
          }
          a {
            border: 1px solid #ff4949;
            color: #ff4949;
            background: transparent;
            padding: 2px 10px;
            border-radius: 5px;
          }
        }
      }
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
        loading: false,
        label: {
          1: "热门",
          64: "同城",
        },
        labelArr: [1, 64]
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
      dislike() {
        alert('dislike')
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
