<template>
<div class="list">
  <div class="list-items">
    <div class="iconfont icon-size">&#xe606;</div>
    <div>我的课程</div>
  </div>
  <div class="list-items">
    <div class="iconfont icon-size">&#xe607;</div>
    <div>我的专栏</div>
  </div>
  <div class="list-items">
    <div class="iconfont icon-size">&#xe642;</div>
    <div>我的优惠卷</div>
  </div>
  <div class="list-items">
    <div class="iconfont icon-size">&#xe618;</div>
    <div>我的订单</div>
  </div>
</div>
</template>

<script>
    export default {
        name: "list"
    }
</script>

<style scoped lang="stylus">
.list
  height:2rem
  background-color:#fff
  .list-items
    float: left;
    width:25%
    text-align: center
    .icon-size
      line-height:1rem
      font-size:35px
      color: #4aba92
</style>
