<template>
  <div class="couterDown">
    <div v-for="item of list"
         :key="item.id">


      <count-down
        v-on:start_callback="countDownS_cb(item.id)"
        v-on:end_callback="countDownE_cb(item.id)"
        :startTime="item.startTime"
        :endTime="1533953169"
        :tipText="'后开课'"
        :dayTxt="'天'"
        :hourTxt="'小时'"
        :minutesTxt="'分钟'"
        :secondsTxt="'秒'"
        class="count-down">

      </count-down>
    </div>

  </div>
</template>
<script>
  import CountDown from 'vue2-countdown'

  export default {

    props: {
      list: Array
    },
    components: {
      CountDown
    },
    methods: {
      // currentTime:function(){
      //   var current = new Date().getTime()
      //   console.log('当前时间：'+current)
      // },
      countDownS_cb: function (x) {
        // console.log(x)
      },
      countDownE_cb: function (x) {
        // console.log(x)
      }
    }
  }
</script>
<style scoped lang="stylus">
  .count-down
    margin-top: .1rem
    margin-left: .1rem
    height: 1.3rem
    width: 1.3rem
    background: #eee
    line-height: .5rem


</style>
