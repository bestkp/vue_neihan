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
      height: 125px;
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
  import t1 from '../../assets/fixtures/sliders/t1.svg'
  import t2 from '../../assets/fixtures/sliders/t2.svg'
  import c1 from '../../assets/fixtures/covers/1.svg'
  import c2 from '../../assets/fixtures/covers/2.svg'
  import c3 from '../../assets/fixtures/covers/3.svg'
  import c4 from '../../assets/fixtures/covers/4.svg'
  import c5 from '../../assets/fixtures/covers/5.svg'
  import c6 from '../../assets/fixtures/covers/6.svg'
  import BookList from './BookList.vue'
  export default{
    data(){
      return{
        msg:'hello vue',
        announcement: '今日上架的图书全部8折.',
        slides: [
          {id: 1, img_url: t1},
          {id: 2, img_url: t2}
        ],
        latestUpdated: [
          {
            "id": 1,
            "title": '揭开数据真相：从小白到数据分析达人',
            "authors": ["Edward Zaccaro", "Daniel Zaccaro"],
            "img_url": c1
          },
          {
            "id": 2,
            "title": 'Android 高级进阶',
            "authors": ["顾浩鑫"],
            "img_url": c2
          },
          {
            "id": 3,
            "title": '淘宝天猫电商运行与数据化选品完全手册',
            "authors": ["老夏"],
            "img_url": c3
          },
          {
            "id": 4,
            "title": '大数据架构详解：从数据获取到深度学习',
            "authors": ["朱洁", "罗华林o"],
            "img_url": c4
          },
          {
            "id": 5,
            "title": 'Meteor 全栈开发',
            "authors": ["杜亦舒"],
            "img_url": c5
          },
          {
            "id": 6,
            "title": 'Kubernetes权威指南：从Docker到Kubernetes实践全接触（第二版）',
            "authors": ["龚正", "吴志辉", "王伟", "崔秀龙", "闫建勇"],
            "img_url": c6
          },
        ],
        latestUpdatedb: [
          {
            "id": 6,
            "title": '编辑推荐 Kubernetes权威指南：从Docker到Kubernetes实践全接触（第二版）',
            "authors": ["龚正", "吴志辉", "王伟", "崔秀龙", "闫建勇"],
            "img_url": c6
          },
          {
            "id": 2,
            "title": '编辑推荐 Android 高级进阶',
            "authors": ["顾浩鑫"],
            "img_url": c2
          },
          {
            "id": 4,
            "title": '编辑推荐 大数据架构详解：从数据获取到深度学习',
            "authors": ["朱洁", "罗华林o"],
            "img_url": c4
          },
          {
            "id": 1,
            "title": '编辑推荐 揭开数据真相：从小白到数据分析达人',
            "authors": ["Edward Zaccaro", "Daniel Zaccaro"],
            "img_url": c1
          },
          {
            "id": 3,
            "title": '编辑推荐 淘宝天猫电商运行与数据化选品完全手册',
            "authors": ["老夏"],
            "img_url": c3
          },
          {
            "id": 5,
            "title": '编辑推荐 Meteor 全栈开发',
            "authors": ["杜亦舒"],
            "img_url": c5
          },

        ]
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

  }
</script>
