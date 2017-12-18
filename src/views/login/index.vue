<template>
  <div class="lg-wrap">
    <div class="lg-header">
      <div class="lg-title">斯人笑谈</div>
      <div class="lg-sub-title">斯人若彩虹 遇上方知有</div>
    </div>
    <div class="lg-main">
      <mt-field label="" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="" placeholder="请输入密码" v-model="password"></mt-field>
      <mt-button size="large" class="lg-btn" @click="login">登录</mt-button>
    </div>
  </div>
</template>

<script>
    // 移动端

    export default {
      data () {
        return {
          username: '',
          password: ''
        }
      },
      methods: {
        login () {
          this.$router.push({ path: '/Contacts' })
          // 改变登录状态
          window.sessionStorage.setItem('login_status', '1')
        }
      }
    }
</script>

<style scoped>
  .lg-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }

  .lg-header {
    width: 100%;
    height: 4rem;
    background: #f63;
    padding-top: 1rem;
  }

  .lg-title {
    text-align: center;
    color: #f5f5f5;
    font-weight: bold;
    font-size: 0.6667rem;
    font-family: 'Helvetica Neue,Helvetica,Roboto,Segoe UI,Arial,sans-serif';
  }

  .lg-sub-title {
    text-align: center;
    margin-top: 0.2rem;
    color: rgba(255,255,255,0.8);
    font-size: 0.3777rem;
  }

  .lg-main {
    padding: 0.3rem;
  }

  .lg-btn {
    height: 1.2rem;
    background: #f63;
    color: #fff;
    margin-top: 0.4rem;
  }
</style>
