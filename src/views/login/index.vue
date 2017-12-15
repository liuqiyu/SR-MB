<template>
  <div>
    <button @click="login">登陆</button></div>
</template>

<script>
    // 移动端

    export default {
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

</style>
