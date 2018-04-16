<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--播放器组件-->
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
  import Player from 'components/player/player'

  export default {
    components: {
      MHeader,
      Tab,
      Player
    },
    mounted(){
      console.log('this is just for testing rebase')
      console.log('another commit for rebase')
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import "common/stylus/variable.styl";
  #app
    color: $color-theme


</style>
