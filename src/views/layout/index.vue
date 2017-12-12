<template>
  <div class="main-page">
    <router-view></router-view>
    <mNav></mNav>
  </div>
</template>

<script>
  // 移动端
  import mNav from './mNav'

  export default {
    components: {
      mNav
    }
  }
</script>

<style scoped>
  .main-page {
    padding-bottom: 1.444rem;
  }
</style>
