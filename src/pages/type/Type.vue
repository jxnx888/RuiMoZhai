<template>
  <div class="type">
    <div class="container">
      <TypeTopNave></TypeTopNave>
      <TypeSearch></TypeSearch>
      <TypeList :list="typeList"></TypeList>
      <TypeListZhuanLan :list="typeListZhuanLan"></TypeListZhuanLan>
    </div>
  </div>
</template>

<script>
  import TypeTopNave from './components/TopNav'
  import TypeList from './components/List'
  import TypeListZhuanLan from './components/zhuanLanList'
  import TypeSearch from './components/Search'
  import axios from 'axios'

  export default {
    name: "Type",
    components: {
      TypeTopNave,
      TypeList,
      TypeListZhuanLan,
      TypeSearch

    },
    data() {
      return {
        typeList: [],
        typeListZhuanLan: []
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
          this.typeList = data.typeList
          this.typeListZhuanLan = data.typeListZhuanLan

        }
      }
    },
    mounted() {
      this.getHomeInfo()
    }
  }
</script>

<style scoped lang="stylus">
  .type
    background-color: #eee
    .container
      padding-left:15px
      padding-right:15px

</style>
