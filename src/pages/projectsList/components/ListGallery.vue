<template>
  <div class="listGallery">
    <div class="title" >项目中心</div>
    <div v-for="item of list"
        :key="item.id"
        >

      <div class="item">         
          <img class="item-img " :src="item.screenshots[0]" @click="handleGalleryClick(item.id)">
               
      </div>

     <CommonGallery
       :imgs="item.screenshots"
       :url="item.url"
       v-show="showGallery.includes(item.id)"
       @close="handleGalleryClose(item.id)"
     ></CommonGallery>

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
      showGallery: [],

    };
  },
  methods: {

    handleGalleryClick(id) {
      this.showGallery.push(id);
    },
    handleGalleryClose(id) {
      const index = this.showGallery.indexOf(id);
      this.showGallery.splice(index, 1);
    },
  }
};
</script>

<style scoped lang="stylus">
.listGallery 
  background: #fff;
  /*margin-top: 0.2rem;*/

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
