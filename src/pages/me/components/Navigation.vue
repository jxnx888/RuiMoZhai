<template>
  <div class="nav">
    <router-link to="/">
    <div class="col-sm-6">
      <div class="icon">
        <img  src="http://www.ning-xin.com/Images/image1/homeIcon.png" style="width: .5rem">
      </div>
      <div class="row">
        首页
      </div>
    </div>
    </router-link>
    <router-link to="/me">
    <div  class="col-sm-6">
      <div class="icon">
        <img   src="http://www.ning-xin.com/Images/image1/meIcon.png" style="width: .5rem">
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
    name: "meNavigation",
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
        color: #000

</style>
