<template>
  <div class="gallary">
    <div class="wrapper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide
          v-for="item of list"
          :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next" slot="button-next"></div>-->
        <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gallary",
    swiperOption: {
      pagination: '.swiper-pagination',
      loop: true,
      autoplay: true,
      speed: 5000,
      centeredSlides: true,
    }
  }
</script>

<style scoped lang="stylus">
  .gallary
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background-color: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      background-color #000
</style>
