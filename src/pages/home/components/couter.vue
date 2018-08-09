<template>
  <div class="couterDown">
    <ul>
      <li v-for="item of list" :key="item.id">
        <span class='orange'>时间：{{item.endTime}}</span>

        <span class='orange'>倒计时:{{time}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {

    props: {
      list: Array
     },
    methods: {
      formate(time) {
        let hour = parseInt(time / 1000 / 3600);
        let min = parseInt((time / 1000 - hour * 3600) / 60);
        let sec = parseInt(time / 1000 - hour * 3600 - min * 60)
        return hour + '小时' + min + '分钟' + sec + '秒';
      }
    },
    computed: {
      'time': function () {
        console.log(this.endTime)
        console.log(this.list.endTime)
        return this.formate(new Date(this.endTime).getTime() - this.now);
      }
    },
    // ready() {
    //   let self = this;
    //   setInterval(function () {
    //     self.now = new Date().getTime();
    //   }, 1000);
    // }
  }
</script>
<style>
  .orange {
    color: orange;
  }
</style>
