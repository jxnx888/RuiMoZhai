<template>
  <div class="listGallery">
    <div class="title" >项目中心</div>
    <div v-for="item of list"
        :key="item.id"
        >

      <div class="item">         
          <img class="item-img " :src="item.imgUrl" @click="handleProjectGalleryClick">  
               
      </div>

      <div class="swiperContainer"  
        v-show="showGallery"
        @close="handleProjectGalleryClose">
        <div class="swiperWrapper"  >
            <swiper :options="swiperOptions">
              <swiper-slide
                v-for="(swiperItem, index) in item.screenshots"  :key="index">
                <img class="gallary-img" :src="swiperItem"/>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
      </div>

    </div>   
  </div>
</template>

<script>
import CommonGallery from "./../../../common/gallery/Gallery";

export default {
  name: "ProjectList",
  components: {
    CommonGallery
  },
  props: {
    list: Array
  },
  data() {
    return {
      showGallery: false,
      swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true,
          loop: true
        }
    };
  },
  methods: {
    
    handleProjectGalleryClick() {
      this.showGallery= true;
    },
    handleProjectGalleryClose() {
      this.showGallery = false;
    }
  }
};
</script>

<style scoped lang="stylus">
.listGallery 
  background: #fff;
  margin-top: 0.2rem;

  .title 
    text-indent: 0.2rem;
    line-height: 0.8rem;
    background: #fff;
    text-align: left;
    padding-left: 0.2rem;
    color: #ff0000;
    border-left: 4px solid #ff0000;
    transition: all 1s;
  .item 
    padding-right: 15px;
    padding-left: 15px;
    margin: 0.25rem auto;
    height: 3rem;
    overflow: hidden;

    .item-img 
      width: 100%;
      border: 2px solid #ccc;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      box-shadow: 5px 5px 5px #919191;
  .swiperContainer
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
    .swiperWrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem

</style>
