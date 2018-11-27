<template>
  <div class="projectsList">
    <div class="title " >项目中心</div>
    <router-link
        tag="li"
        class="item animated col-sm-6"
        v-for="item of list"
        :key="item.id"
        :to="'/projectsList/'+item.id"
        :class="{'bounceInLeft': scrolled}" 
      >
      
        <div class="item-img-wrapper " >

          <img class="item-img " 
           
          :src="item.imgUrl">
           
        </div>

    </router-link>

     <router-link to="/projectList">
    <div class="more">
      <span class="iconfont" >&#xe6ba;查看更多</span>
    </div>
    </router-link>
   
  </div>
</template>

<script>
  export default {
    name: "projects",
    props: {
      list: Array
    },
    data() {
       return {
         scrolled: false
       }
  },
   methods: {
    handleScroll() {
      let obj = document.querySelector('.item');
      let {top,bottom} = obj.getBoundingClientRect();
      let height = document.documentElement.clientHeight;
      // this.scrolled = top < height && bottom >0;
      
      this.scrolled = window.scrollY > 450;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
     
  }
</script>

<style scoped lang="stylus">
  @import '../../../assets/styles/iconfont.css'
  @import '../../../assets/styles/animate.css'
  @import '../../../assets/scripts/scrollLoading.js'

.projectsList
  padding-bottom:1.5rem
  background: #fff
  margin-top:.2rem
  .title
    text-indent: .2rem
    line-height: .8rem
    background: #fff
    text-align: left
    padding-left: .2rem
    color: #ff0000
    border-left: 4px solid #ff0000
    transition: all 1s
  .item
    display: flex
   
    /*height: 2rem*/
    /*overflow: hidden*/
    margin-top: 0.25rem
    margin-bottom: 0.25rem
    .item-img-wrapper
      padding-right: 15px
      padding-left: 15px
      margin-right: auto
      margin-left: auto
      height: 2rem;
      overflow: hidden;
      .item-img
        width: 100%
        border 2px solid #ccc
        -webkit-border-radius: 10px
        -moz-border-radius: 10px
        border-radius: 10px
        box-shadow: 5px 5px 5px #919191      
  .more
    text-align: center
    margin-top:.25rem
    color:#000
</style>
