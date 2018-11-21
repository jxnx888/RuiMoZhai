<template>
  <div class="home">
     <!--<homeCountDown :list="recommendList"></homeCountDown>-->
    <homeSwiper :list="swiperList"></homeSwiper>
   
    <homeTypeWrite></homeTypeWrite>
    <div >
      <homeSearch></homeSearch>
      <homeIconsNav :list="iconList"></homeIconsNav>
      <homeRecommend :list="recommendList"></homeRecommend>
      <homeProjects :list="projectsList"></homeProjects>
      <!--<homeNav></homeNav> -->
      <homeMobileMenu
          :iconImgArr="iconImgArr"
          :startAngle="290"
          :endAngle="160"
          :itemNum="6"
          class="homeMobileMenu-position ">
      </homeMobileMenu>
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
  import homeNav from './components/Navigation'
  import axios from 'axios'
  import homeCountDown from './components/CountDown'
  import homeMobileMenu from '../../common/navigationBar/Menu'
  import homeTypeWrite from './components/typeWrite'
  import homeScrollTop from '../../common/scrollTop/scrollTop'

  //import the Nav Icons.(Main menu icon is in Menu.vue)
  import home from '../../common/icon/home.svg'
  import skill from '../../common/icon/skill.svg'
  import project from '../../common/icon/project.svg'
  import blog from '../../common/icon/blog.svg'
  import contact from '../../common/icon/contact.svg'
  import top from '../../common/icon/topArror.svg'



  export default {
    name: "Home",
    components: {
      homeSwiper,
      homeSearch,
      homeIconsNav,
      homeRecommend,
      homeProjects,
      homeNav,
      homeCountDown,
      homeMobileMenu,
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
      // Nav Start 分别指定图标的url ,名称， 以及background-size属性
      genarateIconObj(url, name, size) {
        let tmp = {}
        tmp.iconUrl = url
        tmp.iconName = name
        tmp.iconSize = size
        return tmp
      },
      // Nav End 
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
    },
    computed: {
      //Nav Start
      iconImgArr() {
        let tmp = []
        tmp.push(this.genarateIconObj(top, 'top', '50'))
        tmp.push(this.genarateIconObj(home, 'home', '50'))
        tmp.push(this.genarateIconObj(skill, 'skill', '50'))
        tmp.push(this.genarateIconObj(project, 'project', '50'))
        tmp.push(this.genarateIconObj(blog, 'blog', '50'))
        tmp.push(this.genarateIconObj(contact, 'contact', '50'))
        return tmp
      } //Nav end
    } 
      
  }
</script>

<style scoped lang="stylus">
  .home
    background-color: #eee
    .homeMobileMenu-position
      position: fixed
      bottom: 1.7rem
      right: 1.7rem
</style>
