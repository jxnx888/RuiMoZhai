<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >

          <a class="visit" :href="url">Visit</a>
          <img class="gallary-img" :src="item"/>
          <!-- <p>{{index}}</p> -->

        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonGallery',
    props: {
      imgs: {
        type: Array,
        default() {
          return []
        }
      },
      url: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true,
          loop: true
        }
      }
    },
    methods: {
      handleGalleryClick() {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit

  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .visit
        display: block;
        margin: 0 auto;
        margin-bottom: .1rem;
        width: 1rem;
        position: relative;
        line-height: .4rem;
        text-align: center;
        color: #fff;
      .visit::before
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background-color: #51bfff;
        transform: skewX(-45deg);
        z-index: -1;
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
