<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <resume/>
    <test/>
    <list/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Resume from "./components/resume";
import Test from "./components/test";
import List from "./components/list";

export default {
  name: 'App',
  components: {
    Resume,
    HelloWorld,
    Test,
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
