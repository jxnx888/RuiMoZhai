<template>
  <div class="class">
    <ClassBanner></ClassBanner>
    <ClassHeader></ClassHeader>
    <ClassNavigation></ClassNavigation>
    <ClassaboutTeacher :aboutTeacher="recommendList" ></ClassaboutTeacher>
    <classIntroduction></classIntroduction>
    <classStyle></classStyle>
    <classOutline></classOutline>
   </div>
</template>

<script>
  import ClassBanner from './components/Banner'
  import ClassHeader from './components/Header'
  import ClassNavigation from './components/Navigation'
  import ClassaboutTeacher from './components/aboutTeacher'
  import classIntroduction from './components/Introduction'
  import classStyle from './components/Style'
  import classOutline from './components/Outline'
  import axios from 'axios'


  export default {
    name: "Class",
    components: {
      ClassBanner,
      ClassHeader,
      ClassNavigation,
      ClassaboutTeacher,
      classIntroduction,
      classStyle,
      classOutline,
    },
    props: {
     },

    data() {
      return {
        recommendList: String
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
          const data = res.data;
          this.recommendList = data.recommendList[parseInt(this.$route.params.id)-1].aboutTeacher;
        }
      }
    },
    mounted() {
      this.getHomeInfo()
    }
  }
</script>

<style scoped lang="stylus">
  .class
    background-color: #eee

  .content
    height: 50rem

</style>
