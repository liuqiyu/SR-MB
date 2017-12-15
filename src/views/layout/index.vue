<template>
  <div class="main-page">
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
    position: relative;
    width: 100%;
    padding-bottom: 1.444rem;
  }

  .fade-enter-active {
    transition: opacity .05s
  }
  .fade-enter /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>
