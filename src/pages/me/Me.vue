<template>
  <div class="home">
    <div class="container">
      <homeNav></homeNav>
    </div>
   </div>

</template>

<script>

  import homeNav from './components/Navigation'
  import axios from 'axios'

  export default {
    name: "Me",
    components: {

      homeNav
    },
    data(){
      return{
        swiperList:[],
        iconList:[],
        recommendList:[],
        vipList:[]
      }
    },
    methods:{
      getHomeInfo(){
        axios.get('/api/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        res=res.data
        if (res.ret && res.data) {
          const data=res.data
          this.swiperList = data.swiperList

        }
      }
    },
    mounted(){
      this.getHomeInfo()
    }
  }
</script>

<style scoped>

</style>
