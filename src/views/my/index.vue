<template>
  <div>
    <div class="my-main">
      <div class="photo">
        <img src="./../../assets/images/photo.jpg" alt="">
      </div>
      <p class="username">lqy.</p>
    </div>
    <div class="my-list">
      <ul>
        <li>
          <mt-cell title="性别" is-link>
            <span style="color: #f63">{{gender}}</span>
          </mt-cell>
        </li>
        <li>
          <mt-cell title="城市" is-link>
            <span style="color: #f63">{{city}}</span>
          </mt-cell>
        </li>
        <li>
          <mt-cell title="身高" is-link>
            <span style="color: #f63">{{height}}</span>
          </mt-cell>
        </li>
        <li>
          <mt-cell title="体重" is-link>
            <span style="color: #f63">{{weight}}</span>
          </mt-cell>
        </li>
        <li>
          <mt-cell title="github" to="https://github.com/liuqiyu/VueTemplate-m" is-link>
            <span style="color: #f63">点击链接</span>
          </mt-cell>
        </li>
        <li style="text-align: center">
          <mt-button type="primary" size="large" @click="logout">退出</mt-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    // 移动端
    import { mapState, mapActions } from 'vuex'

    export default {
      created () {
        // 获取当前城市
        this.cityUpdate()
      },
      computed: {
        ...mapState([
          'city',
          'gender',
          'height',
          'weight'
        ])
      },
      methods: {
        ...mapActions([
          'cityUpdate',
          'genderUpdate',
          'heightUpdate',
          'weightUpdate'
        ]),
        logout () {
          this.genderUpdate()
          this.heightUpdate()
          this.weightUpdate()
        }
      }
    }
</script>

<style scoped>
  .my-main {
    width: 100%;
    height: 4rem;
    /*background: rgba(255,100,0, 0.4);*/
    background: #f63;
    /*opacity: 0.9;*/
    padding-top: 0.6rem;
  }

  .photo {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }

  .photo img {
    width: 100%;
  }

  .username {
    text-align: center;
    font-size: 0.4555rem;
    margin-top: 0.2rem;
    color: #fff;
    font-weight: bolder;
    font-family: '幼圆';
  }

  .my-list {
    padding: 0.6rem 1rem;
  }

  .my-list ul li {
    padding: 0.2rem 0;
    border-bottom: 1px solid rgba(0,0,0,.05);
  }

  .mint-button {
    height: 0.8rem;
    background: #f63;
  }

  .mint-button-text {
    font-size: 0.42rem !important;
  }
</style>
