<template>
  <div class="vip">
    <div class="title">会员专区</div>
    <ul>
      <li class="item " v-for="item of list"
          :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>

      </li>

    </ul>
    <div class="more">
      <span class="iconfont">&#xe6ba;查看更多</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "homeVip",
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../../assets/styles/iconfont.css'
.vip
  padding-bottom:1.5rem
  background: #fff
  margin-top:.2rem
  .title
    text-indent: .2rem
    line-height: .8rem
    background: #fff
    text-align: left
    padding-left: .2rem
    color: #ff0000
    border-left: 4px solid #ff0000

  .item
    display: flex
    /*height: 2rem*/
    /*overflow: hidden*/
    margin-top: 0.25rem
    margin-bottom: 0.25rem
    .item-img-wrapper
      padding-right: 15px
      padding-left: 15px
      margin-right: auto
      margin-left: auto
      .item-img
        width: 100%
        -webkit-border-radius: 10px
        -moz-border-radius: 10px
        border-radius: 10px
        box-shadow: 5px 5px 5px #919191

  .more
    text-align: center
    margin-top:.25rem

</style>
