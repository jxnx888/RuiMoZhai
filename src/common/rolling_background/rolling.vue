<template>

  <div class="rolling">

  </div>

</template>

<script>
    export default {
        name: "rolling"
    }
</script>

<style scoped>

  .fa-spin {
    -webkit-animation: fa-spin 2s infinite linear;
    animation: fa-spin 2s infinite linear; }

  .fa-pulse {
    -webkit-animation: fa-spin 1s infinite steps(8);
    animation: fa-spin 1s infinite steps(8); }

  @-webkit-keyframes fa-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg); }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg); } }

  @keyframes fa-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg); }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg); } }

  .rolling{
    position: relative;
      }

  .rolling:before{
    position: absolute;
    left: 0px;
    top: 0px;
    background-image: url(../../images/ring-circle1.png);
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: 75%;
    background-size: 75%;
    width: 100%;
    height: 300px;
    content: "";
    -webkit-animation: fa-spin 25s infinite alternate;
    -moz-animation: fa-spin 25s infinite alternate;
    -ms-animation: fa-spin 25s infinite alternate;
    -o-animation: fa-spin 25s infinite alternate;
    animation: fa-spin 25s infinite alternate;
  }




</style>
