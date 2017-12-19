<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <!--这里是一级路由-->
    <router-view></router-view>
    <router-view class="left" name="title"></router-view>
    <router-view class="right" name="img"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" type="text/stylus">
  @import "common/stylus/variable.styl";
  #app
    color: $color-theme
    text-align: center
  .left, .right
    width:49%;
    border:1px solid gray;
    float:left;

</style>
