<template>
  <div class="read">
    <div class="page-infinite-wrapper">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="(item, index) in list" class="item-li" :key="index" @click="bookItem(item)">
          <div class="image">
            <img :src="item.images.small" alt="">
          </div>
          <div class="descript">
            <p class="name">{{ item.title}}</p>
            <p class="rating">
              <el-rate
                v-model="item.rating.average/2"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
                :max="item.rating.max/2">
              </el-rate>
            </p>
            <p class="other">
              {{item.author[0]}} / {{item.pubdate}} / {{item.price}}
            </p>
          </div>
        </li>
      </ul>
      <div class="page-infinite-loading" v-if="showLoading">
        <span>加载中...</span>
      </div>
    </div>
  </div>
</template>

<script>
    // 移动端
    import api from './../../api'

    export default {
      data () {
        return {
          loading: false,
          list: [],
          page: 0,
          start: 0,
          count: 8,
          searchName: '东野圭吾',
          showLoading: false
        }
      },
      created () {
        this.list = []
        // this.getLists()
      },
      methods: {
        // 获取列表数据
        getLists () {
          const apiUrl = api.api + 'book/search?q=' + this.searchName + '&start=' + this.start + '&count=' + this.count
          this.$http.jsonp(apiUrl)
            .then((response) => {
              console.log(response)
              if (response.status === 200) {
                console.log(response.body.books)
                this.list = this.list.concat(response.body.books)
                this.page += 1
                console.log(this.page)
              }
            })
        },
        // 加载更多
        loadMore () {
          this.loading = true
          this.showLoading = true
          this.start = this.count * (this.page - 1)
          this.getLists()
          setTimeout(() => {
            this.showLoading = false
            this.loading = false
          }, 2500)
        },
        // 查看书籍详情
        bookItem (item) {
          console.log(item)
          this.$router.push({path: '/Read/BookItem', query: {id: item.id}})
        }
      }
    }
</script>

<style scoped>
  .read {
    padding: 0 0.2667rem
  }

  .item-li {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-items: stretch;
    align-items: stretch;
    padding: 0.2rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }

  .image {
    width: 2rem;
    position: relative;
    -webkit-flex: none;
    flex: none;
  }

  .image img {
    width: 100%;
    vertical-align: middle;
  }

  .descript {
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

  .descript p{
    margin-bottom: 0.4rem;
  }

  .name {
    font-size: 0.3778rem;
    font-weight: bolder;
  }

  .other {
    color: #999;
    font-size: 0.32rem;
  }

  .page-infinite-loading {
    text-align: center;
    padding: 0.2rem 0;
    font-size: 0.3733rem;
  }
</style>
