<template>
  <div class="home">
     <!--<homeCountDown :list="recommendList"></homeCountDown>-->
    <homeSwiper :list="swiperList"></homeSwiper>
    <div class="container">
      <homeSearch></homeSearch>
      <homeIcons :list="iconList"></homeIcons>
      <homeRecommend :list="recommendList"></homeRecommend>
      <homeVip :list="vipList"></homeVip>
      <homeNav></homeNav>

    </div>
    <router-link to="/Me">我的账户</router-link>
  </div>

</template>

<script>
  import homeSwiper from './components/Swiper'
  import homeSearch from './components/Search'
  import homeIcons from './components/Icons'
  import homeRecommend from './components/Recommend'
  import homeVip from './components/Vip'
  import homeNav from './components/Navigation'
  import axios from 'axios'
  import homeCountDown from './components/CountDown'

  export default {
    name: "Home",
    components: {
      homeSwiper,
      homeSearch,
      homeIcons,
      homeRecommend,
      homeVip,
      homeNav,
      homeCountDown,

    },
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        vipList: [],

      }
    },
    methods: {

      getHomeInfo() {
        axios.get('/api/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.vipList = data.vipList

        }
      }
    },
    mounted() {
      this.getHomeInfo()
    }
  }
</script>

<style scoped lang="stylus">
  .home
    background-color: #eee
</style>
