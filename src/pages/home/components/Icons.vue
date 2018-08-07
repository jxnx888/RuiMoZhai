<template>
<div class="icons">
  <swiper >
    <swiper-slide>
      <div class="icon col-sm-2"
           v-for="item of list"
           :key="item.id" >
        <div class="icon-img">
         <img :src="item.imgUrl" class="icon-img-content" />
        </div>
          <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>

</div>
</template>

<script>
    export default {
        name: "HomeIcons",
      props:{
          list:Array
      },
      data () {
          return {

      }
      }
    }
</script>

<style scoped lang="stylus">
  .icons
    height: 0
    padding-bottom:50%
    .icon
      position: relative
      overflow: hidden
      float:left
      width: 20%
      height:0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top:0
        left:0
        right: 0
        bottom:0.44rem
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        padding:.1rem
        .icon-img-content
          display: block
          margin:0 auto;
          height:100%
      .icon-desc
        position: absolute
        left:0
        right: 0
        bottom:0
        height:0.44rem
        line-height:0.44rem
        text-align: center
        color:#333
</style>
