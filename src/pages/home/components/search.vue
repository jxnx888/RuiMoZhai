<template>

  <div class="search">
    <router-link to="/searchDetail">
    <div class="iconfont input-search" >&#xe6e4;书体、碑帖、课程名称或导师名称</div>
    </router-link>
  </div>
 </template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped lang="stylus">

  .input-search
    width: 95%
    height: .6rem
    line-height: .6rem
    margin: .2rem  auto
    text-align: center
    background-color: #fff
    -webkit-border-radius: .1rem
    -moz-border-radius: .1rem
    border-radius: .1rem
    color:#000
    opacity: 0.5

</style>
