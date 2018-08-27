<template>
  <div class="count-down">
    <count-down
      v-on:start_callback="countDownS_cb(parseInt(id))"
      :currentTime="1534261621"
      :startTime="parseInt(startTime)"
      :endTime="1534261621"
      :tipText="'后开课'"
      :tipTextEnd="'离结束文字1'"
      :endText="'已结束'"
      :dayTxt="'天'"
      :hourTxt="'小时'"
      :minutesTxt="'分钟'"
      :secondsTxt="'秒'">
    </count-down>
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
      id: String,
      currentTime: ''
    },
    components: {
      CountDown
    },
    created() {
      this.currentTimeF();
    },
    methods: {
      currentTimeF: function () {
        var date = new Date();
        var current = Math.round(date.getTime() / 1000).toString();
        var currentTime1 = parseInt(current);
        console.log(currentTime1)
      },
      countDownE_cb: function (x) {
        // console.log(x)
      }
    }

  }
</script>
<style scoped lang="stylus">
  .count-down
    display: flex
    justify-content: center
    align-items: center
    height: 1.3rem
    width:1.3rem

</style>
