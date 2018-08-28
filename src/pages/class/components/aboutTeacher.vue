<template>

  <div class="aboutTeacher" name="teacher" >
    <div class="background">
      <div class="container">
        <div class="about">
          <!--<span>| </span>-->
          关于导师
        </div>
        <div>
          <img class="aboutTeacher-img" src="http://www.ning-xin.com/Images/image1/touxiang.jpg">
        </div>
        <div class="aboutTeacher-title">
          宁保成导师
        </div>
        <div class="aboutTeacher-content">
          <showMore style="margin-top: 20px;" :showHeight="showHeight" :content="aboutTeacher"  ></showMore>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  import showMore from '../../../common/showMore/showMore'

  export default {
    name: "aboutTeacher",
    props: {
      aboutTeacher: String
    },
    components:{
      showMore
    },
    data() {
      return {
        showHeight: 200
      }
    },

  }
</script>

<style scoped lang="stylus">
  .aboutTeacher
    text-align: center
    .background
      background-color: #fff
      padding-bottom: .2rem
      .container
        width: 95%
        margin:0 auto
        background-color: #eee

        .about
          text-indent: .2rem
          line-height: .8rem
          text-align: left
          color: #4aba92
          background-color: #fff
          border-left: 2px solid #4aba92
          margin-top: .05rem;
          span
            font-size: .5rem
        .aboutTeacher-img
          width: 1.5rem
          height: 1.5rem
          -webkit-border-radius: .75rem
          -moz-border-radius: .75rem
          border-radius: .75rem
          margin-top:.2rem
        .aboutTeacher-title
          line-height: .9rem
          font-size: .3rem
          color: #9b9b9b
        .aboutTeacher-content
          text-align: left
          text-indent: .5rem
          padding: 0 .3rem;
          padding-bottom: .4rem

</style>
