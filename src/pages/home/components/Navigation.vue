<template>
  <div class="nav">
    <div class="col-sm-6" @click='homePage()'>
      <div class="icon">
        <img  src="http://www.ning-xin.com/Images/image1/homeIcon.png" style="width: .5rem">
      </div>
      <div class="row">
        首页
      </div>
    </div>
    <div  class="col-sm-6" @click='mePage()'>
      <div class="icon">
        <img   src="http://www.ning-xin.com/Images/image1/meIcon.png" style="width: .5rem">
      </div>
      <div class="row">
        我的账户
      </div>
    </div>
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
    position: fixed
    bottom: 0
    height: 1rem
    width: 100%
    background-color: #fff
    .col-sm-6
      float: left;
      width: 50%;
      .icon, .row
        text-align: center
        margin-top: .1rem
</style>
