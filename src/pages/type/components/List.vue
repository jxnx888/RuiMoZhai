<template>
  <div class="list">
    <div class="container">
      <ul>
        <router-link
          tag="li"
          class="item"
          v-for="item of list"
          :key="item.id"
          :to="'/Class/'+item.id">
          <div class="col-xs-3">
            <img class="item-img" :src="item.imgUrl">

          </div>
          <div class="item-info col-xs-9 border-bottom">
            <p class="item-title ">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}/已有<span>{{item.count}}</span>人在学习</p>
            <p class="item-title ">{{item.zhuanti}}</p>


          </div>

        </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TypeList",
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="stylus">

</style>
<style scoped lang="stylus">
  .list
    margin-top: .2rem
    background-color: #fff
    .item
      display: flex
      height: 2rem
      overflow: hidden
      padding-top: .2rem
      margin-top: 0.25rem
      width:95%
      margin:0 auto
      .col-xs-3
        float: left;
        width: 25%;
        position: relative;
        min-height: 1px;
        text-align: center
        .item-img
          width: 1.2rem
          -webkit-border-radius: .6rem
          -moz-border-radius: .6rem
          border-radius: .6rem
          margin-top:.1rem
      .item-info
        /*flex:1*/
        padding: .1rem
      .col-xs-9
        float: left
        width: 75%
        position: relative;
        min-height: 1px;
        .item-title
          line-height: .4rem
          height: .9rem
          font-size: .32rem
        .item-desc
          line-height: .4rem
          color: #ccc
          span
            color:#ffA550
      .more
        text-align: center
        margin-top: .25rem

</style>
