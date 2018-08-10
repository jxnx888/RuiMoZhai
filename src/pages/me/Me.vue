<template>
  <div class="me">
    <meHeader></meHeader>
    <meAds></meAds>
    <meList></meList>

    <meNav></meNav>

  </div>

</template>

<script>

  import meNav from './components/Navigation'
  import meHeader from './components/Header'
  import meAds from './components/Ads'
  import meList from './components/List'


  import axios from 'axios'

  export default {
    name: "Me",
    components: {
      meNav,
      meHeader,
      meAds,
      meList
    },
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped lang="stylus">
  .me
    background-color #eee
</style>
