<template>
  <div class="projects">
    This is projects page
     <projectsMobileMenu></projectsMobileMenu>
     <projectListGallery :list="projectsList"></projectListGallery>
  </div>

</template>

<script>

  import projectsMobileMenu from '../../common/navigationBar/mobileMenu'
  import projectListGallery from './components/ListGallery'
   import axios from 'axios'

  export default {
    name: "Projects",
    components: {
      projectsMobileMenu,
      projectListGallery
    },
    data() {
      return {
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
  .projects
    background-color #eee
</style>
