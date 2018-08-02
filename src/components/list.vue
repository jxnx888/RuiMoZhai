<template>

<div>
  <h1>{{msg}}</h1>
  <div v-if="show">Hello World</div>
  <!--元素被销毁-->
  <div v-show="show">Hello World</div>
  <!--元素添加style display:none;-->

  <button @click="handleClickToggle">toggle</button>
</div>

</template>

<script>
    export default {
        name: "other",
      data() {
        return {
          msg: 'This is List.Vue ',
          show: true
        }
      },
      methods: {
handleClickToggle:function () {
  this.show = !this.show;
}
      }
    }
</script>

<style scoped>

</style>
