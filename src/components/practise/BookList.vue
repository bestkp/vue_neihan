<style scoped lang="scss">
  @import "../../assets/scss/common";
  .booklist {
    .header {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      background: #eee;
    }
    .book-item {
      display: flex;
      flex-flow: row wrap;
      .book {
        width: 33%;
        text-align: center;
        padding: 0 5px;
        box-sizing: border-box;
        margin-bottom: 5px;
        .title {
          @extend .mult-no-wrap;
          text-align: left;
          margin: 5px 0;
          min-height: 35px;
        }
        .authors {
          font-size: 10px;
          color: #999;
          text-align: left;
          @extend .nowrap;
        }
      }
    }
  }
</style>
<template>
  <div class="booklist">
    <div class="header">
      <div class="heading">{{heading}}</div>
      <div class="more">更多...</div>
    </div>
    <div class="book-item">
      <div class="book" v-for="book in latestUpdated" @click="$emit('onBookSelect', book)">
        <div class="couver">
          <img :src="book.img_url" alt=""/>
        </div>
        <div class="title">{{book.title}}</div>
        <div class="authors">{{book.authors | join}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'heading',
      'latestUpdated'
    ],
    data() {
      return {
        msg: 'hello world'
      }
    },
    filters: {
      join(val) {
        return val.join(' ')
      }
    },
    components: {}
  }
</script>
