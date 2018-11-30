<template>
  <div class="contact">
    <contactTopBanner></contactTopBanner>
   <contactWays></contactWays>
    <contactMap></contactMap>
    <contactMobileMenu></contactMobileMenu>
    <!-- <contactSwiper :list="contactSwiperList"></contactSwiper> -->
   <contactFooter></contactFooter>
  </div>

</template>

<script>

  import contactMobileMenu from '../../common/navigationBar/mobileMenu'
  import contactSwiper from './components/Swiper'
  import contactMap from './components/Map'
  import contactTopBanner from './components/topBanner'
  import contactWays from './components/contactWays'
  import contactFooter from '../../common/footer/footerBar'


  import axios from 'axios'

  export default {
    name: "Contact",
    components: {
      contactMobileMenu,
      contactFooter,
      contactSwiper,
      contactMap,
      contactTopBanner,
      contactWays
    },
    data() {
      return {
        contactSwiperList: []
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
          this.contactSwiperList = data.contactSwiperList
          
        }
      }
    },
    mounted() {
      this.getHomeInfo()
    }
  }
</script>

<style scoped lang="stylus">
  .contact
    background-color #eee
</style>
