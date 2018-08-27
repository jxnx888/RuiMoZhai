<template>
  <div class="recommend">
    <div class="title">即将开始</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/Class/'+item.id"

      >
        <div class="item-img-wrapper">
          <!--<img class="item-img" src="" >-->
          <div class="item-startTime">
            <homeCountDown :startTime="item.startTime" :id="item.id"></homeCountDown>
          </div>
        </div>
        <div class=item-info>
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </router-link>

    </ul>
    <router-link to="/classList">
    <div class="more">
      <span class="iconfont" >&#xe6ba;查看更多</span>
    </div>
    </router-link>
  </div>
</template>

<script>
  import homeCountDown from './CountDown'

  export default {
    name: "homeRecommend",
    props: {
      list: Array,
    },
    components: {
      homeCountDown
    }

  }
</script>

<style scoped lang="stylus">
  .recommend
    background: #fff
    margin-top: .2rem;
    .title
      text-indent: .2rem
      line-height: .8rem
      background: #fff
      text-align: left
      padding-left: .2rem
      color: #4aba92
      border-left: 2px solid #4aba92

    .item
      display: flex
      height: 2rem
      overflow: hidden
      margin-top: 0.25rem
      .item-startTime
        margin-top: .1rem
        margin-left: .1rem
        height: 1.3rem
        width: 1.3rem
        background: #eee
        text-align: center;
    .item-info
      /*flex:1*/
      padding: .1rem
      .item-title
        line-height: .4rem
        height: .9rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
    .more
      text-align: center
      margin-top: .25rem
      height:.5rem
      color:#000


</style>
