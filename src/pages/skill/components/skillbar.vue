<template>
    <div class="skillbar "> 
       
            <ul >    
                <li v-for="skill in skills">    
                    <div class="bar" v-bind:style={width:skill.perc}></div>    
                    <span>{{skill.name}} {{skill.perc}}</span>   
    
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
          perc: "95%"
        },

        {
          name: "CSS3",
          perc: "90%"
        },

        {
          name: "JavaScript",
          perc: "70%"
        },

        {
          name: "ASP.NET Webform / C#",
          perc: "75%"
        },

        {
          name: "JavaScript",
          perc: "80%"
        },
         {
          name: "MySQL",
          perc: "50%"
        },

      ]
    };
  },

  methods: {}
};
</script>

<style scoped lang="stylus">
.skillbar 
    background-color: #eee
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
                opacity 0.7
    
</style>
