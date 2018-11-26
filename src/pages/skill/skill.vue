<template>
  <div class="skills">
    This is skills page
    <topSlide></topSlide>
    <skillbar></skillbar>
     <skillsMobileMenu></skillsMobileMenu>
  </div>

</template>

<script>

  import skillsMobileMenu from '../../common/navigationBar/mobileMenu'
  import skillbar from './components/skillbar'
  import topSlide from './components/topSlide'

    
  export default {
    name: "Skills",
    components: {
      skillsMobileMenu,
      skillbar,
      topSlide
    },
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped lang="stylus">
  .skills
    background-color #eee
</style>
