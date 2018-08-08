<template>
  <div class="introduction">
    <div class="background">
      <div class="container">
        <div class="about">
          课程形式
        </div>
        <div class="introduction-content">
          <p class="iconfont">&#xe64e; 报名后,加顾问进群听课</p>
          <p class="iconfont">&#xe64e; 微信群导师亲自授课</p>
          <p class="iconfont">&#xe64e; 小视频+语音+图片</p>
          <p class="iconfont">&#xe64e; 课程结束 永久回放</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "classStyle"
  }
</script>

<style scoped lang="stylus">
  .introduction
    margin-top: .2rem
    text-align: center
    .background
      background-color: #fff
      padding-bottom: .2rem
      .container
        width: 95%
        margin:0 auto
        padding-top: .2rem
        .about
          text-indent: .2rem
          line-height: .8rem
          text-align: left
          color: #4aba92
          background-color: #fff
          border-left: 2px solid #4aba92
          span
            font-size: .5rem
        .introduction-content
          text-align: left
          text-indent: .5rem
          padding-top: .4rem
          padding-bottom: .4rem
          p
            color:#9b9b9b
            line-height:.5rem
</style>
