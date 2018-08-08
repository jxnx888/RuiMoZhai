<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe6bd;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe6bd;</div>
      </router-link>
      课程列表
    </div>
  </div>
</template>

<script>
  export default {
    name: "ClassHeader",
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 60) {
          let opacity = top / 140;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = {opacity};
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="stylus">
  .header-abs
    position: absolute
    text-align: center
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    -webkit-border-radius: .4rem
    -moz-border-radius: .4rem
    border-radius: .4rem
    line-height: .8rem
    background-color: rgba(0, 0, 0, 0.7)
    .header-abs-back
      color: #ffff
      font-size: .4rem

  .header-fixed
    position: fixed
    top: 0
    right: 0
    left: 0
    height: 1rem
    line-height: 1rem
    text-align: center
    color: #fff
    font-size: .32rem
    background-color: #0D72E5
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem

</style>
