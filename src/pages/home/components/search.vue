<template>
<div>
  <div >
    <div class="search iconfont">&#xe6e4;书体、碑帖、课程名称或导师名称</div>

    <input class="input-search" placeholder="书体、碑帖、课程名称或导师名称"/>
  </div>
</div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped lang="stylus">
  .input-search
    width: 100%
    border: 0.01rem solid #eee
    margin:0 0.3rem
    text-align: center

  .search
    text-align: center

</style>
