<template>
  <div class="blog">
    This is blog page
     <blogMobileMenu></blogMobileMenu>
  </div>

</template>

<script>

  import blogMobileMenu from '../../common/navigationBar/mobileMenu'
    
  export default {
    name: "Blog",
    components: {
      blogMobileMenu
    },
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped lang="stylus">
  .blog
    background-color #eee
</style>
