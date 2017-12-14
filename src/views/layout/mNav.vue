<template>
  <footer class="footer">
    <div class="footer-nav">
      <router-link to="/Contacts" :active-class="active">
        <span class="nav-icon iconfont icon-phonebook-o"></span>
        <span class="nav-name">联系人</span>
      </router-link>
      <router-link to="/Read" :active-class="active">
        <span class="nav-icon iconfont icon-yuedu1"></span>
        <span class="nav-name">阅读</span>
      </router-link>
      <router-link to="/Film" :active-class="active">
        <span class="nav-icon iconfont icon-74"></span>
        <span class="nav-name">电影</span>
      </router-link>
      <router-link to="/My" :active-class="active">
        <span class="nav-icon iconfont icon-home"></span>
        <span class="nav-name">我</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
  // 移动端 导航栏

  export default {
    data () {
      return {
        active: 'active'
      }
    }
  }
</script>

<style scoped>

  .footer-nav {
    width: 100%;
    position: fixed;
    left: 0;
    right:0;
    bottom:0;
    z-index: 8888;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
    background-color: #fff;
    height: 1.3333rem;
  }

  .footer-nav a {
    display: block;
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
  }

  .footer-nav a  .nav-icon{
    display: block;
    font-size: 0.4733rem;
  }

  .footer-nav a  .nav-name{
    display: block;
    font-size: 0.3111rem;
  }

  .active {
    color: #f63;
  }
</style>
