<template>
  <div class="count-down">
    <count-down
      v-on:start_callback="countDownS_cb(parseInt(id))"
      :startTime="parseInt(startTime)"
      :endTime="parseInt(startTime)"
      :tipText="'Post'"
      :tipTextEnd="''"
      :endText="''"
      :dayTxt="'D'"
      :hourTxt="':'"
      :minutesTxt="':'"
      :secondsTxt="''">
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
    line-height: 0.35rem
</style>
