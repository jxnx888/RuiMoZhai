<template>
  <div class="home">
    <homeSwiper></homeSwiper>
    <div class="search iconfont">&#xe6e4;书体、碑帖、课程名称或导师名称</div>
    <search></search>
    <router-link to="/Me">我的账户</router-link>
  </div>

</template>

<script>
  import homeSwiper from './components/Swiper'
  import search from './components/search'

  export default {
    name: "Home",
    components: {
      homeSwiper,
      search
    }
  }
</script>

<style scoped>

</style>
