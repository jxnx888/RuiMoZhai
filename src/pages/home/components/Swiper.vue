<template>
  <div>
    <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="item of swiperLister"
        :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',

    data() {
      return {

        swiperOption:{
          pagination:'.swiper-pagination',
          loop:true
        },
        swiperLister: [{
          id: '0001',
          imgUrl:'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180716_wap_11043.jpg'
        },
          {
            id: '0002',
            imgUrl:'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png'
          },
          {
            id: '0003',
            imgUrl:'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/sc_sqdc_20180727.jpg'
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background-color:#fff
  .wrapper
    width: 100%
    height:0
    overflow:hidden
    padding-bottom:35%
    background-color: #eee
    /*防止图片未加载 出现文字抖动*/
    .swiper-img
      width:100%
      height:2.9rem

</style>
