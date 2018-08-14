<template>
  <div class="nav border-top">
    <router-link to="/">
    <div class="col-sm-6" >
      <div class="icon1 iconfont">
        &#xe623;
      </div>
      <div class="row">
        首页
      </div>
    </div>
    </router-link>
    <router-link to="/me">
    <div  class="col-sm-6" >
      <div class="icon iconfont">
        &#xe737;
      </div>
      <div class="row">
        我的账户
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "HomeNavigation",
    methods: {

    }

  }
</script>

<style scoped lang="stylus">
  .nav
    z-index: 99
    position: fixed
    bottom: 0
    height: 1rem
    width: 100%
    padding:.2rem 0
    background-color: #fff
    .col-sm-6
      float: left;
      width: 50%;
      .icon, .row
        text-align: center
        margin-top: .1rem
        color: #000
      .icon1
        text-align: center
        margin-top: .1rem
        color #4aba92


</style>
