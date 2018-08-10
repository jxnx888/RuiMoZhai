<template>
  <div class="header">
      <div class="col-xs-2">
        <img class="me-img" src="http://www.ning-xin.com/Images/image1/touxiang.jpg">
      </div>
      <div class="col-xs-5 me-account">
        <div class="me-name ">
          鑫仔Alan🐎
        </div>
        <div class="me-accountID">
          墨池号:123123123
        </div>
      </div>
      <div class="col-xs-5 other">
        <div class="iconfont">充值享折扣 &#xe602;</div>
        <div class="">手机：12345678912</div>
      </div>

    <div>
      <div class="vipCenter"><span class="iconfont color">&#xe65a;</span>会员中心</div>
      <div class="gold"><span class="iconfont color">&#xe7dc;</span>金币：0</div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="stylus">
  .header
    background-color: #fff
    height:2.2rem
    .col-xs-2, .col-xs-3, .col-xs-5
      position: relative
      min-height: 1px
      float: left
      padding-top: .2rem
      height: 1.5rem
    .col-xs-2
      width: 16.66666667%
      text-align: center
      .me-img
        width: 1rem
        margin-top: .1rem
        -webkit-border-radius: .5rem
        -moz-border-radius: .5rem
        border-radius: .5rem
    .col-xs-5
      width: 40%
    .me-account
      line-height: 0.6rem
    .col-xs-3
      width: 25%;
    .other
      line-height: 0.6rem
      text-align: right
    .vipCenter, .gold
      float: left
      width:48%
      height:.4rem
      text-align: center
    .vipCenter
      border-right:1px solid #eee
    .gold
      border-left:1px solid #eee
    .color
      color:#eeac14

</style>
