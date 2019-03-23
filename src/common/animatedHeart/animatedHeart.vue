<template>
  <div class="heart">
    <div class="wings">
      <span class="content"><h4>{{content}}</h4> </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "animatedHeart",
      props: {
        content: {
          type: String,
          default: "Pong...Pong"
        }
      },
    }
</script>

<style scoped>


  .content{
    position:absolute;
    z-index:9;
    font-size:14px;
    transform:rotate(-45deg) translate(-20px, -10px);
    color:#fff;
    text-align:center;

  }

  .content h4{
    font-size:16px;
    color:#ff0;
    text-transform: uppercase;
    margin-top: 10px;
    margin-left: 10px;
  }
  span:before {
    position: absolute;
    content: "";
    left: -115px;
    top: -58px;
    width: 100px;
    height: 100px;
    background-image: url("../../images/left_wing.png");
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: 100%;
    background-size: 100%;
  }
  span:after {
    position: absolute;
     content: "";
    left: 106px;
    top: -58px;
    width: 100px;
    height: 100px;
     background-image: url("../../images/right_wing.png");
     background-repeat: no-repeat;
     background-position: center;
    -webkit-background-size: 100%;
    background-size: 100%;
   }
  .heart{
    /*position: absolute;*/
    margin: 0 auto;
    width: 80px;
    height: 80px;
    background-color: #f00;
    transform: rotate(45deg);
    box-shadow: 10px 0px 50px #f00;
    animation: feel 1s linear infinite;

  }
  .heart:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f00;
    top: -50%;
    left: 0;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
  .heart:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f00;
    top: 0%;
    right: 50%;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;;
  }
  @keyframes feel{
    0%{transform: scale(1) rotate(45deg) translate(10px, 10px);}
    20%{transform: scale(1.2) rotate(45deg) translate(10px, 10px);}
    30%{transform: scale(1) rotate(45deg) translate(10px, 10px);}
    40%{transform: scale(1.2) rotate(45deg) translate(10px, 10px);}
    40%{transform: scale(1) rotate(45deg) translate(10px, 10px);}
    60%{transform: scale(1.2) rotate(45deg) translate(10px, 10px);}
    60%{transform: scale(1) rotate(45deg) translate(10px, 10px);}
    70%{transform: scale(1.2) rotate(45deg) translate(10px, 10px);}
    80%{transform: scale(1) rotate(45deg) translate(10px, 10px);}
    90%{transform: scale(1.2) rotate(45deg) translate(10px, 10px);}
    100%{transform: scale(1) rotate(45deg) translate(10px, 10px);}
  }
</style>
