<template>
  <div class="projects">
    <projectBanner></projectBanner>
     <projectListGallery :list="projectsList"></projectListGallery>
  </div>

</template>

<script>

  import projectListGallery from './components/ListGallery'
  import projectBanner from './components/topBanner'
   import axios from 'axios'

  export default {
    name: "Projects",
    components: {
      projectListGallery,
      projectBanner
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
