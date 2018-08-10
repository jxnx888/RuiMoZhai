<template>
  <div class="nav">
    <a href="#teacher">
    <div class="col-xs-4">
      <span class="iconfont">&#xe737;</span>

      <div>
        关于导师
      </div>

    </div>
    </a>
    <a href="#introduction">
    <div class="col-xs-4">
      <span class="iconfont">&#xe738;</span>
      <div>
        课程介绍
      </div>
    </div>
    </a>
    <div class="col-xs-4">
      <common-gallary></common-gallary>
      <span class="iconfont">&#xe739;</span>
      <div>
        作品欣赏
      </div>
    </div>

  </div>
</template>

<script>
  import CommonGallary from './../../../common/gallary/Gallary'
  export default {
    name: "ClassNavigation",
    components:{
      CommonGallary
    }
  }
</script>

<style scoped lang="stylus">
  .nav
    height: 1.5rem
    margin-top: .2rem
    background-color: #fff
    .col-xs-4
      float: left
      width: 33.33333333%
      height: 1.5rem
      line-height: .5rem
      position: relative
      min-height: 1px
      text-align: center
      margin-top.25rem
      color: #9b9b9b
      .iconfont
        font-size: 25px;
        color: #4aba92
</style>
