<template>
  <div class="couterDown">
    <count-down
      v-on:start_callback="countDownS_cb(parseInt(id))"
      v-on:end_callback="countDownE_cb(parseInt(id))"
      :startTime="parseInt(startTime)"
      :endTime="1534261621"
      :tipText="'后开课'"
      :tipTextEnd="'距离结束文字1'"
      :endText="'结束自定义文字2'"
      :dayTxt="'天'"
      :hourTxt="'小时'"
      :minutesTxt="'分钟'"
      :secondsTxt="'秒'">

    </count-down>

    <!--StartTime:-->
    <!--{{startTime}}-->
  </div>
</template>
<script>
  import CountDown from 'vue2-countdown'

  export default {
    data() {
      return {}
    },
    props: {
      startTime: String,
      id: String
    },
    components: {
      CountDown
    },

    methods: {

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
