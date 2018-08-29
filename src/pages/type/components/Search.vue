<template>
<div class="search">
  <button class="btn" onclick="all_search()">全部</button>
  <button class="btn" onclick="lantingxu_search()">兰亭序</button>
  <button class="btn " onclick="jiwangshengjiaoxu_search()">集王圣教序</button>
  <button class="btn " onclick="jizhiwengao_search()">祭侄文稿</button>
  <button class="btn " onclick="hanshitie_search()">寒食帖</button>
  <button class="btn " onclick="tiaoxishitie_search()">苕溪诗帖</button>
  <button class="btn " onclick="zhengzuoweitie_search()">争座位贴</button>
  <button class="btn " onclick="qianhouchibifu_search()">前后赤壁赋</button>
  <button class="btn " onclick="shusutie_search()">蜀素贴</button>
</div>

</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped lang="stylus">
.search
  height:1.8rem
  background-color:#fff
  .btn
    height:.5rem
    background-color:#fff
    border:1px solid #4aba92
    margin:5px
    padding:0 5px

</style>
