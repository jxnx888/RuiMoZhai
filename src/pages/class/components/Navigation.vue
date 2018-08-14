<template>
  <div class="nav">
    <div class="col-xs-4">
      <span class="iconfont">&#xe737;</span>

      <div>
        关于导师
      </div>

    </div>
    <div class="col-xs-4">
      <span class="iconfont">&#xe738;</span>
      <div>
        课程介绍
      </div>
    </div>
    <div class="col-xs-4" @click="handleGalleryClick">
      <span class="iconfont">&#xe739;</span>
      <div>
        作品欣赏
      </div>
    </div>
    <CommonGallery
      :imgs="imgs"
      v-show="showGallery"
      @close="handleGalleryClose"></CommonGallery>
  </div>
</template>

<script>
  import CommonGallery from './../../../common/gallery/Gallery'

  export default {
    name: "ClassNavigation",
    data() {
      return {
        showGallery: false,
        imgs: ['http://ning-xin.com/Images/image1/1.jpg', 'http://ning-xin.com/Images/image1/1.jpg']
      }
    },
    methods: {
      handleGalleryClick() {
        this.showGallery = true;
      },
      handleGalleryClose() {
        this.showGallery = false;
      },

    },
    components: {
      CommonGallery
    }
  }
</script>

<style scoped lang="stylus">
  .nav
    height: 1.5rem
    margin-top: .2rem
    background-color: #fff
    .col-xs-4
      float: left
      width: 33.33333333%
      height: 1.5rem
      line-height: .5rem
      position: relative
      min-height: 1px
      text-align: center
      margin-top.25rem
      color: #9b9b9b
      .iconfont
        font-size: 25px;
        color: #4aba92
</style>
