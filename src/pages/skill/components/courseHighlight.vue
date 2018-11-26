<template>
    <div class="courseHighlight "> 
       
            <h2>Course Highlights</h2>
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
.skillbar 
    background-color: #eee
    
    .skills_course
        ul
            li
                width: 90%
                height: 1rem
                background: red
                display: block
                margin: 9px auto
                border-radius: 3px
                position: relative
                z-index: 2
                overflow: hidden
                font-weight: bold
</style>
