<template>
  <div class="class">
    <ClassBanner></ClassBanner>
    <ClassHeader></ClassHeader>
    <ClassNavigation></ClassNavigation>
    <ClassaboutTeacher></ClassaboutTeacher>
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

  export default {
    name: "Class",
    components: {
      ClassBanner,
      ClassHeader,
      ClassNavigation,
      ClassaboutTeacher,
      classIntroduction,
      classStyle,
      classOutline
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus">
  .class
    background-color: #eee

  .content
    height: 50rem

</style>
