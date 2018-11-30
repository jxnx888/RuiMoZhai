<template>
    <div class="skillbar "> 
      <div class=" container">
				<h2 class="text-center">Technical Skills</h2>
				<div class="col-md-offset-3 col-md-6" v-for="(skill, index) in skills"  :key="index">
					<div class="progress" :class="skill.color">
						<h3 class="progress-title">{{skill.name}}</h3>
						<div class="progress-bar"  v-bind:style="{ width: skill.perc, background:skill.color}">
							<div class="progress-value">{{skill.perc}}</div>
						</div>
					</div>
				</div>
			</div>
    </div>
</template>

<script>
export default {
  name: "skillbar",

  components: {},

  data() {
    return {
      skills:  [
        {
          name: "HTML5",
          perc: "95%",
          color: "red"
        },

        {
          name: "CSS3",
          perc: "90%",
          color: "orange"
        },

        {
          name: "JavaScript",
          perc: "75%",
          color: "yellow"
        },

        {
          name: "ASP.NET / C#",
          perc: "75%",
          color: "green"
        },

        {
          name: "Vue.js",
          perc: "60%",
          color: "blue"
        },
				{
          name: "MySQL",
          perc: "50%",
          color: "violet"
        },

      ]
    };
  },

  methods: {}
};
</script>

<style>
.mobileMenu {
	    position: absolute;
}
.skillbar {
		background-color: #fff;
		padding: 15px 0;
}
 h2{    
      width:100%;
      height: 1rem;
      line-height: 1rem;
      font-size: .5rem;
      text-shadow: 3px 3px 0 #ddd;
      }
.progress{
	height: 7px;
	background: #e3e3e3;
	border-radius: 0;
	box-shadow: none;
	margin: 1.5rem auto;
	overflow: visible;
	position: relative;
}
.progress .progress-title{
	padding: 7px 10px;
	margin: 0;
	background: #393a3d;
	border-radius: 5px 0 0 5px;
	box-shadow: 0 7px 7px rgba(0,0,0,0.4);
	font-size: .28em;
	font-weight: 700;
	color: #fff;
	/* text-transform: uppercase; */
	position: absolute;
	top: -13px;
	left: 0;
	z-index: 1;
}
.progress .progress-title:after{
	content: "";
	border-left: 18px solid #393a3d;
	border-top: 17px solid transparent;
	border-bottom: 11px solid transparent;
	position: absolute;
	top: 0;
	right: -17px;
}
.progress .progress-bar{
	box-shadow: none;
	border-radius: 0;
	position: relative;
	-webkit-animation: animate-positive 2s;
	animation: animate-positive 2s;
}
.progress .progress-bar:after{
	content: "";
	width: 20px;
	height: 20px;
	border-radius: 50%;
	box-shadow: 0 5px 5px rgba(0,0,0,0.6);
	background: #fff;
	position: absolute;
	right: -5px;
	top: -6px;
}
.progress .progress-value{
	width: 45px;
	height: 30px;
	line-height: 30px;
	border-radius: 3px;
	background: #393a3d;
	box-shadow: 0 5px 5px rgba(0,0,0,0.4);
	font-size: 15px;
	font-weight: 700;
	color: #fff;
	text-align: center;
	position: absolute;
	bottom: 30px;
	right: -17px;
}
.progress .progress-value:after{
	content: "";
	border-top: 7px solid #393a3d;
	border-left: 7px solid transparent;
	border-right: 7px solid transparent;
	position: absolute;
	bottom: -7px;
	left: 35%;
}

.progress.red .progress-bar:after{ border: 5px solid #FF0000 }
.progress.orange .progress-bar:after{ border: 5px solid #FF7F00 }
.progress.yellow .progress-bar:after{ border: 5px solid #FFFF00 }
.progress.green .progress-bar:after{ border: 5px solid #00FF00 }
.progress.blue .progress-bar:after{ border: 5px solid #0000FF }
.progress.indigo .progress-bar:after{ border: 5px solid #4B0082}
.progress.violet .progress-bar:after{ border: 5px solid #ee82ee }
@-webkit-keyframes animate-positive{
	0% { width: 0; }
}
@keyframes animate-positive{
	0% { width: 0; }
}
 
</style>
