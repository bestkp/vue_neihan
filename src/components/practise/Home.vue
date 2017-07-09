<template>
  <div class="home-page">
    <div class="section">
      <!--热门推荐-->
      <mt-swipe :auto="2000"  :show-indicators="false" @change="handleChange" id="mySwipe">
        <mt-swipe-item v-for="slide in slides"><img :src="slide.img_url" alt=""/></mt-swipe-item>
      </mt-swipe>
      <!--快讯-->
      <div class="announcement">
        <label>快讯</label>
        <span>{{announcement}}</span>
      </div>
    </div>
    <div class="section">
      <!--新书上架-->
      <book-list :latestUpdated="latestUpdated" heading="新书上架" @onBookSelect="preview($event)"></book-list>
    </div>
    <div class="section">
      <!--编辑推荐-->
      <book-list :latestUpdated="latestUpdatedb" heading="编辑推荐"></book-list>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .home-page{
    #mySwipe {
      height: 1.58rem;
      background: #fff;
    }
    .announcement {
      height: 26px;
      line-height: 26px;
      border-left: 4px solid #ccc;
      padding-left: 10px;
      font-size: 14px;
      color: #000;
      label {
        font-weight: bold;
      }
      span {color: #666}
    }
  }

</style>
<script>
  import { Swipe, SwipeItem } from 'mint-ui';

  import BookList from './BookList.vue'
  import axios from 'axios'
  export default{
    data(){
      return{
        announcement: '',
        slides: [],
        latestUpdated: [],
        latestUpdatedb: []
      }
    },
    components:{
      Swipe,
      SwipeItem,
      BookList
    },
    methods: {
      handleChange(index) {
//        console.log(index);
      },
      preview(book) {
          alert('显示图书详情');
      }
    },
    created() {
        let self = this;
        axios.get('/mock/home.json')
          .then(res=>{
              if(res.status === 200) {
                  for(let prop in res.data) {
                      self[prop] = res.data[prop]
                  }
              }
          })
          .catch(err=> {
              console.log(`获取数据失败：${err}`);
          })
    }
  }
</script>
