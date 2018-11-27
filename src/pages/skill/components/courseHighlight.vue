<template>
    <div class="courseHighlight container"> 
       
            <h2 class="text-center">Course Highlights</h2>
            <b-row>
                <b-col></b-col>
                <b-col cols="9">
                    <ul>
                        <li>Web Client-side Development I</li>
                        <li>Web Development II with ASP.NET</li>
                        <li>Capstone Professional Project I &amp; II</li>
                        <li>Java for Programmers</li>
                        <li>Advanced Programming in Java</li>
                        <li>Database Management Systems</li>
                        <li>Software Design Methods</li>
                        <li>Software Engineering Methods</li>
                        <li>Software Testing and Maintenance</li>
                    </ul>
                </b-col>
                <b-col></b-col>
            </b-row>        
    </div>
</template>

<script>
export default {
  name: "Course Highlight",

  components: {},

  data() {
    return {
    }
  },

  methods: {}
};
</script>

<style scoped lang="stylus">
.courseHighlight 
    background-color: #fff
    margin-top 15px    
    ul 
        li
            width: 90%
            height: .7rem
            margin: 9px auto
            border-radius: 3px
            position: relative
            z-index: 2
            overflow: hidden
            font-weight: bold
</style>
