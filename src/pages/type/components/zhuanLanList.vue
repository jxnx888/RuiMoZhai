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
            <div class="item-single">
              单字专栏
            </div>
            <div class="item-update">
               已更新{{item.update}}期
            </div>
            <div class="item-price">
             ￥{{item.price}}
            </div>
            <div class="item-oldPrice">
              {{item.oldPrice}}
            </div>
          </div>

        </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TypeListZhuanLan",
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="stylus">

</style>
<style scoped lang="stylus">
  .list
    background-color: #fff
    .item
      display: flex
      height: 2.2rem
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
          /*-webkit-border-radius: .6rem*/
          /*-moz-border-radius: .6rem*/
          /*border-radius: .6rem*/
          margin-top:.3rem
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
        .item-single
          color: #fff
          background-color: #4aba92
          width:30%
          margin: .1rem 0
          line-height:.4rem
          text-align: center
        .item-update
          color:#4aba92
          float: left
          letter-spacing:.05rem
        .item-price
          float: left
          text-indent:.4rem
          color:#ff0000
        .item-oldPrice
          float: left
          text-indent:.2rem
          text-decoration:line-through
      .more
        text-align: center
        margin-top: .25rem

</style>
