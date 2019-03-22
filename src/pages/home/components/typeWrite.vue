<template>
  <div class="typeWrite">

    <h1 class="typewrite-word" data-period="2000" data-type='[ "Hi, I am Xin Ning.", " Welcome to my personal website.", "I am Creative, and I Love to Develop.", "I am Good at ASP.NET, C#, JavaScript, HTML5 and CSS3.","嗨，我是宁鑫.", "欢迎来到我的个人主页！", "我有创新能力，并且我非常喜欢开发","我擅长ASP.NET, C#, JavaScript, HTML5 和 CSS3."]'>
          <span class="wrap"></span>
    </h1>
    <!--<h1 class="typewrite" data-period="2000" data-type='[ "嗨，我是宁鑫.", "欢迎来到我的个人主页！", "我有创新能力，并且我非常喜欢开发","我擅长ASP.NET, C#, JavaScript, HTML5 and CSS3."]'>
          <span class="wrap"></span>  
    </h1>-->

    <svg><rect></rect></svg>

   </div>

</template>

<script>
   

  export default {
    name: "typeWrite",
    components: {
     
         },
    data() {
      return {
        }
    },
    methods: {
     
    },


  }
</script>

<style scoped lang="stylus">
  .typeWrite
    width: 95%
    height: 1rem
    margin: .2rem  auto
    background-color: #fff
    -webkit-border-radius: .1rem
    -moz-border-radius: .1rem
    border-radius: .1rem
    color:#000
    .typewrite-word
      line-height: 1rem
      text-align: center
      color: #4aba92
      border:  2px solid #b969a8
      border-radius: .1rem
    h1
     height: 1rem
     line-height: 1rem
    svg
      margin-top: -65px
      top: 0
      left: 0
      width: 100%
      height: 100%
      border-radius: .1rem
      rect
       top: 0
       left: 0
       width: 100%
       height: 100%
       border-radius: .1rem
       stroke: #4aba92
       stroke-width:4px
       stroke-dasharray: 40 //dash length
       animation: animate 3s linear infinite
       fill: transparent
  @keyframes animate
  {
    0%{
      stroke-dashoffset:800 //speed
    }
    100%{
      stroke-dashoffset:0
    }

  }
</style>
