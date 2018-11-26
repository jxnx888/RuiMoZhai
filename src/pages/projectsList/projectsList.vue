<template>
  <div class="projects">
    This is projects page
     <projectsMobileMenu></projectsMobileMenu>
  </div>

</template>

<script>

  import projectsMobileMenu from '../../common/navigationBar/mobileMenu'
    
  export default {
    name: "Projects",
    components: {
      projectsMobileMenu
    },
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped lang="stylus">
  .projects
    background-color #eee
</style>
