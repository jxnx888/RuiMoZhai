<template>
  <div class="home">
    <homeSwiper :list="swiperList"></homeSwiper>
   
    <homeTypeWrite></homeTypeWrite>
    <div >
      <homeSearch></homeSearch>
      <homeIconsNav :list="iconList"></homeIconsNav>
      <homeRecommend :list="recommendList"></homeRecommend>
      <homeProjects :list="projectsList"></homeProjects>
      <!--<homeNav></homeNav> -->
      <homeMobileMenu></homeMobileMenu>
      <homeFooter></homeFooter>
    </div>
    <homeScrollTop></homeScrollTop>
    <!--<router-link to="/Me">我的账户</router-link>-->
  </div>

</template>

<script>
  import homeSwiper from './components/Swiper'
  import homeSearch from './components/Search'
  import homeIconsNav from './components/IconsNav'
  import homeRecommend from './components/Recommend'
  import homeProjects from './components/Projects'
  import axios from 'axios'
  import homeCountDown from './components/CountDown'
  import homeMobileMenu from '../../common/navigationBar/mobileMenu'
  import homeTypeWrite from './components/typeWrite'
  import homeScrollTop from '../../common/scrollTop/scrollTop'
  import homeFooter from '../../common/footer/footerBar'

 
  export default {
    name: "Home",
    components: {
      homeSwiper,
      homeSearch,
      homeIconsNav,
      homeRecommend,
      homeProjects,
      homeCountDown,
      homeMobileMenu,
      homeFooter,
      homeTypeWrite,
      homeScrollTop

    },
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        projectsList: [],

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
          this.projectsList = data.projectsList

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
