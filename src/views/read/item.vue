<template>
  <div class="item-wrap">
    <div class="book-name">{{item.title}}</div>
    <div class="book-main">
      <div class="book-img">
        <img :src="item.image" alt="">
      </div>
      <div class="book-describe">
        <p>作者：<span v-for="(item1, index1) in item.author">{{ item1 }}</span></p>
        <p>出版社：{{item.publisher}}</p>
        <p>原作名：{{item.origin_title}}</p>
        <p>译者：<span v-for="(item2, index2) in item.translator">{{ item2 }}</span></p>
        <p>出版年：{{item.pubdate}}</p>
        <p>页数：{{item.pages}}</p>
        <p>定价：{{item.price}}</p>
        <p>装帧：{{item.binding}}</p>
        <p>ISBN：{{item.isbn13}}</p>
      </div>
    </div>
    <!--<div class="book-author-wrap">-->
      <!--<p class="book-author">作者简介</p>-->
      <!--<pre class="book-brief" v-html="item.author_intro"></pre>-->
    <!--</div>-->
    <div class="tag-wrap">
      <mt-badge size="small" v-for="tag in item.tags" color="#f63">{{tag.name}}</mt-badge>
    </div>
    <div class="book-catalog-wrap">
      <p class="book-catalog">目录</p>
      <pre v-html="item.catalog"></pre>
    </div>
  </div>
</template>

<script>
    // 移动端
    import api from './../../api'

    export default {
      created () {
        this.getItem()
      },
      data () {
        return {
          item: {}
        }
      },
      methods: {
        getItem () {
          const apiUrl = api.api + 'book/' + this.$route.query.id
          console.log(apiUrl)
          this.$http.jsonp(apiUrl)
            .then((response) => {
              console.log(response)
              if (response.status === 200) {
                const data = response.body
                console.log(data)
                this.item = Object.assign({}, this.item, data)
              }
            })
        }
      }
    }
</script>

<style scoped>

  .item-wrap {
    padding: 0.5333rem;
  }

  .book-name {
    font-size: 0.64rem;
    margin-bottom: 0.1222rem;
  }

  .book-main {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-items: stretch;
    align-items: stretch;
  }

  .book-img {
    width: 4rem;
    position: relative;
    -webkit-flex: none;
    flex: none;
  }

  .book-img img {
    width: 100%;
    vertical-align: middle;
  }

  .book-describe {
    display: -webkit-flex;
    display: flex;
    /*-webkit-justify-content: space-between;*/
    /*justify-content: space-between;*/
    overflow: hidden;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-user-select: none;
    user-select: none;
    padding-left: 0.3rem
  }

  .book-describe p {
    font-size: 0.3456rem;
    margin-bottom: 0.05rem;
  }

  .tag-wrap {
    padding: 0.4rem 0 0 0;
  }

  .book-author-wrap {
    padding: 0.3rem 0.1rem;
  }

  .book-author {
    font-size: 0.4rem;
    padding: 0.1rem 0;
  }

  .book-catalog-wrap {
    padding: 0.3rem 0.1rem;
  }

  .book-catalog {
    font-size: 0.4rem;
    padding: 0.1rem 0;
  }
</style>
