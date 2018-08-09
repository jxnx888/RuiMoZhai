<template>
<div class="search">
  <button class="btn" onclick="xingzuo_search()">全部</button>
  <button class="btn" onclick="qinggan_search()">兰亭序</button>
  <button class="btn " onclick="xinli_search()">集王圣教序</button>
  <button class="btn " onclick="xingge_search()">祭侄文稿</button>
  <button class="btn " onclick="aiqing_search()">寒食帖</button>
  <button class="btn " onclick="aiqing_search()">苕溪诗帖</button>
  <button class="btn " onclick="aiqing_search()">争座位贴</button>
  <button class="btn " onclick="aiqing_search()">前后赤壁赋</button>
  <button class="btn " onclick="aiqing_search()">蜀素贴</button>
</div>

</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped lang="stylus">
.search
  height:1.5rem
  background-color:#fff
  .btn
    height:.5rem
    background-color:#fff
    border:1px solid #4aba92
    margin:5px
    padding:0 5px

</style>
