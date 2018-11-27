<template>
  <div class="skills">
    <topSlide></topSlide>
    <!-- <skillbar></skillbar> -->
    <skillsMobileMenu></skillsMobileMenu>
    <cssSkill></cssSkill>
    <courseHighlight></courseHighlight>
    <skillFooter></skillFooter>
  </div>

</template>

<script>

  import skillsMobileMenu from '../../common/navigationBar/mobileMenu'
  import skillbar from './components/skillbar'
  import topSlide from './components/topBanner'
  import cssSkill from './components/cssSkill'
  import courseHighlight from './components/courseHighlight'
  import skillFooter from '../../common/footer/footer'

    
  export default {
    name: "Skills",
    components: {
      skillsMobileMenu,
      skillbar,
      topSlide,
      cssSkill,
      courseHighlight,
      skillFooter
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
