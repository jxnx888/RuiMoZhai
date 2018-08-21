<template>
  <div class="searchDetail">
    <div class="searchDetail-top">
      <div class="wrapper">
        <span class="iconfont ">&#xe6e4;</span>
        <input class="searchDetail-input" placeholder="书体、碑帖、课程名称或导师名称"/>
      </div>
    </div>
    <div class="searchDetail-teacher">
      <div class="searchDetail-teacher-top">
        热门导师
      </div>
      <div class="searchDetail-teacher-bottom">
        <button class="btn" onclick="xingzuo_search()">宁保成</button>
        <button class="btn" onclick="qinggan_search()">保成</button>
        <button class="btn " onclick="xinli_search()">保成</button>
        <button class="btn " onclick="xingge_search()">宁保成</button>
        <button class="btn " onclick="aiqing_search()">宁保成</button>
        <button class="btn " onclick="aiqing_search()">保成</button>
        <button class="btn " onclick="aiqing_search()">宁保成</button>
        <button class="btn " onclick="aiqing_search()">宁保成</button>
        <button class="btn " onclick="aiqing_search()">宁保成</button>
      </div>
    </div>
    <div class="searchDetail-beitie">
      <div class="searchDetail-teacher-top">
        热门碑帖
      </div>
      <div class="searchDetail-teacher-bottom">
        <button class="btn" onclick="xingzuo_search()">书谱</button>
        <button class="btn" onclick="qinggan_search()">十七帖</button>
        <button class="btn " onclick="xinli_search()">张迁碑</button>
        <button class="btn " onclick="xingge_search()">礼器碑</button>
        <button class="btn " onclick="aiqing_search()">曹全碑</button>
        <button class="btn " onclick="aiqing_search()">兰亭序</button>
        <button class="btn " onclick="aiqing_search()">集王圣教序</button>
        <button class="btn " onclick="aiqing_search()">寒食帖</button>
        <button class="btn " onclick="aiqing_search()">前后赤壁赋</button>
      </div>
    </div>
    <router-link to="/" class="searchDetail-close">
      点击任意空白关闭搜索页
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "searchDetail"
  }
</script>

<style scoped lang="stylus">
.searchDetail
  background-color: #f7f7f7
  .searchDetail-top
    background-color: #eee
    height: .8rem
    line-height: .8rem
    width: 100%
    .wrapper
      width: 95%
      height: .5rem
      line-height: .5rem
      margin: 0 auto
      padding-top: .15rem
    .iconfont
      float: left
      margin: 0 auto
      margin-left: .2rem
      background-color: #fff
      line-height: .5rem
      -webkit-border-radius: .1rem 0 0 0.1rem
      -moz-border-radius: .1rem 0 0 0.1rem
      border-radius: .1rem 0 0 0.1rem
    .searchDetail-input
      float: left
      width: 90%
      margin: 0 auto
      line-height: .5rem
      -webkit-border-radius: 0 .1rem 0.1rem 0
      -moz-border-radius: 0 .1rem 0.1rem 0
      border-radius: 0 .1rem 0.1rem 0
      padding-left: .1rem;
  .searchDetail-teacher, .searchDetail-beitie
    width: 90%
    margin:0 auto
    background-color:#f7f7f7
    .searchDetail-teacher-top
      line-height:.8rem
      border-bottom:1px solid #c9c9c9
      color: #848484
      margin-bottom:.2rem
    .searchDetail-teacher-bottom
      .btn
        height:.5rem
        background-color:#fff
        border:1px solid #c9c9c9
        color:#848484
        margin:5px
        padding:0 5px
  .searchDetail-close
    display: block;
    text-align: center
    line-height:3rem
    padding-bottom:7rem
    color:#c9c9c9
</style>
