<template>
  <div class="count-down">
    <count-down
      v-on:start_callback="countDownS_cb(parseInt(id))"
      :startTime="parseInt(startTime)"
      :endTime="parseInt(startTime)"
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
      id: String
    },
    components: {
      CountDown
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
