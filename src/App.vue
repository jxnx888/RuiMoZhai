<template>
  <div id="app">
    <router-view/>
    <MobileMenu></MobileMenu>
  </div>
</template>

<script>
    import MobileMenu from '../src/common/navigationBar/mobileMenu'

    export default {
        name: 'App',
        components: {
            MobileMenu,
        },
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
