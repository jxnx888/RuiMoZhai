<template>
  <div class="nav">
    <div class="col-xs-6  border-bottom" style="border-right: 1px solid #eee;">
      <div class="title">
        最新
      </div>

    </div>
    <div class="col-xs-6  border-bottom" style="border-left: 1px solid #eee;">
      <div class="title">
        最热
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ClassNavigation"
  }
</script>

<style scoped lang="stylus">
  .nav
    height: 1rem
    background-color: #fff
    .col-xs-6
      float: left
      width: 49%
      height: 1rem
      line-height: .5rem
      position: relative
      min-height: 1px
      text-align: center
      color: #9b9b9b
      /*border-bottom: 1px solid #eee*/
      .title
        display: block
        font-size: 15px;
        color: #4aba92
        width: 100%
        height: 1rem
        line-height: 1rem
        text-align: center
        vertical-align middle

</style>
