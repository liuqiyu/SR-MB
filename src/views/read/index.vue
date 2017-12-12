<template>
  <div>阅读</div>
</template>

<script>
    // 移动端

    export default {
      created () {
        this.$http.jsonp('https://api.douban.com/v2/book/search?q=%E4%B8%9C%E9%87%8E%E5%9C%AD%E5%90%BE')
          .then((response) => {
            console.log(response)
          })
      }
    }
</script>

<style scoped>

</style>
