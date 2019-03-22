<template>
     <div class="wrapper">
       <!-- https://dafrok.github.io/vue-baidu-map/#/ -->
      <baidu-map class="map" :center="{lng: 121.456973, lat: 31.025154}" :zoom="17">
        <bm-marker :position="{lng: 121.456973, lat: 31.025154}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
            <bm-label content="I'm working here!" :labelStyle="{color: 'red', fontSize : '16px'}" :offset="{width: -50, height: 50}"/>
        </bm-marker>
         
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation><!--定位-->
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale> <!--比例尺-->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation> <!--缩放控件-->
      </baidu-map>
     
    </div>
 </template>

<script>
export default {
  name: "ContactMap",
  data() {
    return {
  
    };
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.map {
  width: 100%;
  height: 200px;
}
</style>
