<template>
  <div class="projectsList">
    <div class="title">项目中心</div>
    <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/projectsList/'+item.id"
      >
      <ul>
     
      <li>
        <div class="item-img-wrapper">

          <img class="item-img " :src="item.imgUrl">
           
        </div>

      </li>
    
    </ul>
      </router-link>
    <div class="more">
      <span class="iconfont">&#xe6ba;查看更多</span>
    </div>
   
  </div>
</template>

<script>
  export default {
    name: "projects",
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../../assets/styles/iconfont.css'
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
      .item-img
        width: 100%
        -webkit-border-radius: 10px
        -moz-border-radius: 10px
        border-radius: 10px
        box-shadow: 5px 5px 5px #919191
  .more
    text-align: center
    margin-top:.25rem
    color:#000
</style>
