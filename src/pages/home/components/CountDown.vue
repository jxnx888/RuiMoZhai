<template>
  <ul>
    <template v-for='item in count'>

      <li v-if='item.endTime'>
       倒计时 <counter :endtime='item.endTime'></counter>
      </li>
      <li v-else>
        {{item.desc}}
      </li>
    </template>
  </ul>

</template>

<script>
  import counter from '../components/couter';
  export default {
    props: {
      count: Array
    },
    components:{
      counter: counter
    }
  }

</script>

<style scoped>

</style>
