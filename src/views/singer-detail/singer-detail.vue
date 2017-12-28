<template>
  <transition name="slide">
    <div class="singer-detail"></div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex' // 获取数据的语法糖
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'

  export default {
    computed: {
      ...mapGetters([
        'singer' // 对应getters中的singer
      ])
    },
    created() {
      console.log(this.singer)
      this._getDetail()
    },
    methods: {
      _getDetail() {
        if (!this.singer.id) {
          // 如果找不到id，回退
          this.$router.push('/singer')
        }
        getSingerDetail(this.singer.id).then(res => {
          if (res.code === ERR_OK) {
            console.log(res.data.list)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import "~common/stylus/variable"
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background
</style>
