<template>
  <div>
    这是购物车页面
    <span>{{$route.params.cartId}}</span>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        msg: 'hello vue '
      }
    }
  }
</script>

<style scoped>

</style>
