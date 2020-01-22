<template>
 <!--https://github.com/surmon-china/vue-awesome-swiper-->
  <div>
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide
          v-for="item of list"
          :key="item.id">
          <img class="swiper-img swiper-lazy" :src="item.imgUrl">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
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
    props: {
      list: Array
    },
    data() {
      return {
        props: {
          list: Array
        },
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
          },
          loop: true,
          // Disable preloading of all images
            // Enable lazy loading
          lazy: true,
          freeMode: false,
         /* autoplay: {
              delay: 2500,
              disableOnInteraction: false
          },*/
          // speed: 5000,
          centeredSlides: true,
        }
      }
    },
    computed:{
      showSwiper(){
        return this.list.length
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff

  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    /*930:572*/
    padding-bottom: 62%
    background-color: #eee
    /*防止图片未加载 出现文字抖动*/
    .swiper-img
      width: 100%

</style>
