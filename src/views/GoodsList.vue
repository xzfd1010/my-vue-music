<template>
  <div>
    这是商品列表页面
    <span>{{$route.params.goodsId}}</span><br>
    <span>{{$route.params.name}}</span>
    <!--会被渲染为a标签，然后href会自动计算，必须写绝对地址，不能只写路由的title-->
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/img">显示商品图片</router-link>
    <!--这里定义自身的router-view-->
    <router-view></router-view>
    <!--<router-link to="/cart">跳转到购物车页面</router-link>-->
    <!--<button @click="jump">跳转到购物车页面</button>-->
    <!--通过name值进行跳转，params是路由的参数-->
    <br><router-link :to="{name:'cart',params:{cartId:123}}">跳转到购物车页面</router-link>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        msg: 'hello world'
      }
    },
    methods: {
      jump() {
        // this.$router.push("/cart")
        // this.$router.push({path: '/cart?cartId=123'})
        // this.$router.go(-2)
      }
    }
  }
</script>

<style scoped>
</style>
