<template>
  <div class="main-page">
    <transition name="slide-fade">
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

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
