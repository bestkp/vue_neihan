<template>
  <div class="home-page">
    <div class="mint-navbar" style="width: 100%;overflow:auto;-webkit-overflow-scrolling:touch;">
      <tab active-color='#fc378c' bar-active-color="#fc378c">
        <tab-item class="tab-item" :selected="selected === tab.umeng_event" v-for="tab in tabs" :id="tab.umeng_event" @click.native="changeLi(tab)">{{tab.name}}
        </tab-item>
      </tab>
    </div>

    <ul class="loadmore">
        <li v-for="jl in jokeList" :key="jl.group?jl.group.id: jl.ad.id">
          <div v-if="jl.type!=5">
            <div class="joke-header">
              <div class="joke-label" v-show="jl.group.label==1||jl.group.label==64">{{label[jl.group.label]}}</div>
              <div class="user-img">
                <img :src="jl.group.user.avatar_url" class="ximg-demo" error-class="ximg-error" :offset="-100"/>
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
                    <x-img :src="jl.group.middle_image.url_list[0].url"  class="ximg-demo" error-class="ximg-error" :offset="-100"></x-img>
                </div>
                <div class="jk-content-video" v-else-if="jl.group.media_type==3">
                  <p class="jk-video-desc">{{jl.group.play_count | wan}}播放</p>

                  <video class="jk-video" preload="none" :src="jl.group.mp4_url" controls
                         :poster="jl.group.large_cover.url_list[0].url">
                  </video>
                </div>
                <div class="jk-content-imgs" v-else-if="jl.group.media_type==4">
                  <x-img v-for="simg in jl.group.thumb_image_list" :src="simg.url_list[0].url"  class="ximg-demo" error-class="ximg-error" :offset="-100"></x-img>
                </div>
              </div>
              <div class="joke-comment">
                <span class="digg">{{jl.group.digg_count | wan}}</span>
                <span class="bury">{{jl.group.bury_count | wan}}</span>
                <span class="comment">{{jl.group.comment_count | wan}}</span>
                <span class="share">{{jl.group.share_count | wan}}</span>
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
                <x-img :src="jl.ad.display_image"  class="ximg-demo" error-class="ximg-error" :offset="-100"></x-img>
              </div>
              <div class="joke-ad-download">
                <span>{{jl.ad.avatar_name}}</span>
                <a :href="jl.ad.download_url">{{jl.ad.button_text}}</a>
              </div>
            </div>
          </div>
        </li>
        <mugen-scroll :handler="fetchData" style="line-height: 30px;text-align: center;" :should-handle="!loading">
        </mugen-scroll>
    </ul>
  </div>
</template>
<style scoped lang="scss">
  @import "../../assets/scss/mixin";

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
        font-size: 14px;
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
          .jk-video-desc {
            font-size: 14px;
            color: #fff;
            line-height: 20px;
            height: 20px;
            background: rgba(0, 0, 0, 0.6);
            position: absolute;
            padding: 0 10px;
            width: 100%;
            box-sizing: border-box;
          }
          .jk-video {
            width: 100%;
          }
        }
        .jk-content-imgs {
          display: flex;
          flex-wrap: wrap;
          img {
            width: 32%;
            height: 30%;
            margin-right: 2%;
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
      .joke-comment {
        background: #fff;
        font-size: 12px;
        color: #666;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .digg {
          @include setBack('../../assets/img/digg.png')
          margin-right: 20px;
        }
        .bury {
          @include setBack('../../assets/img/bury.png');
          margin-right: 20px;
        }
        .comment {
          @include setBack('../../assets/img/comment.png');
          flex: 1;
        }
        .share {
          @include setBack('../../assets/img/share.png');
        }
      }
    }
  }

  .tab-item {
    font-size: 16px;
  }

  .loadmore {
    padding-top: 45px;
  }

  .mint-navbar {
    display: block;
    background: #eee;
    overflow-x: auto;
    white-space: nowrap;
    position: fixed;
    width: 100%;
    z-index: 100;
    height: 45px;
    a {
      &:hover {
        text-decoration: none;
      }
      &.is-selected {
        color: #00a0e9;
        border-bottom: 3px solid #00a0e9;
      }
      padding: 8px 10px;
      display: inline-block;
      .mint-tab-item-label {
        font-size: 16px !important;
      }
    }
  }
</style>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import Tab from 'vux/src/components/tab/tab.vue'
  import TabItem from 'vux/src/components/tab/tab-item.vue'
  import MugenScroll from 'vue-mugen-scroll'
  import { XImg } from 'vux'
  export default{
    data(){
      return {
        label: {
          1: "热门",
          64: "同城",
        },
        allLoaded: false,
        labelArr: [1, 64],
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
      Tab,
      TabItem,
      MugenScroll,
      XImg
    },
    methods: {
      ...mapActions([
        'getHomeTabs',
        'changeDefault',
        'getJoke',
        'setLoading'
      ]),
      changeLi(li) {
        this.$store.commit('updateLoadingStatus', {isLoading: true});
        this.changeDefault(li);
        this.getJoke(li.umeng_event);
      },
      dislike() {
        alert('dislike')
      },
      fetchData() {
        this.loading = true;
        this.getJoke(this.selected);
        this.loading = false
      }
    },
    created() {
    	this.$store.commit('updateLoadingStatus', {isLoading: true});
    	window.scroll(0, 0)
      this.getHomeTabs();
      this.getJoke(this.selected);
    },
    filters: {
      wan(num) {
        return num >= 10000 ? (num / 10000).toFixed(1) + '万' : num;
      }
    }
  }
</script>
