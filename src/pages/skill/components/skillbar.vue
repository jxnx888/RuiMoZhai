<template>
    <div class="skillbar "> 
       <h2 class="text-center">Technical Skills</h2>
            <ul >    
                <li v-for="(skill, index) in skills"  :key="index">    
                    <div class="bar" v-bind:style={width:skill.perc}></div>    
                    <span>{{skill.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{skill.perc}}</span>   
    
                </li>    
            </ul>    
        
    </div>
</template>

<script>
export default {
  name: "skillbar",

  components: {},

  data() {
    return {
      skills: [
        {
          name: "HTML5",
          perc: "95%",
          color:green
        },

        {
          name: "CSS3",
          perc: "90%",
          color: pink
        },

        {
          name: "JavaScript",
          perc: "70%",
          color: yellow
        },

        {
          name: "ASP.NET Webform / C#",
          perc: "75%",
          color: blue
        },

        {
          name: "JavaScript",
          perc: "80%",
          color: oriange
        },
         {
          name: "MySQL",
          perc: "50%",
          color: black
        },

      ]
    };
  },

  methods: {}
};
</script>

<style scoped lang="stylus">
.skillbar 
    margin-top .2rem
    background-color: #fff
    h2
      height 1rem
      line-height 1rem
      font-size .4rem
      text-shadow: 2px 2px 0 #6db6e0
    ul        
        list-style: none
        li   
            width: 90%
            height: 1rem
            background: #505050
            display: block
            margin: 9px auto
            border-radius: 3px
            position: relative
            z-index: 2
            overflow: hidden
            font-weight: bold
            span 
                position: absolute
                color: #fff
                top: 50%
                left:0
                transform: translateY(-50%)
                padding-left: 15px
            .bar 
                position: absolute
                top:0
                left:0
                height:100%
                background: url('../../../images/skillBumblebee.gif')
                /*opacity 0.7*/
    
</style>
