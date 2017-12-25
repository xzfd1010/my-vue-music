<template>
  <div class="singer">
    歌手页面
  </div>
</template>

<script>
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import Singer from 'common/js/singer'

  const HOT_NAME = '热门'
  const HOT_SINGER_LEN = 10 // 前10条为热门数据

  export default {
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then(res => {
          if (res.code === ERR_OK) {
            this.singers = res.data.list
            console.log(this._normalizeSinger(this.singers))
          }
        })
      },
      // 格式化数据
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          // 拼接热门数据
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
          }
          // 拼接A-Z数据
          const key = item.Findex // 拿到'A'...等排序索引
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        })
        // 此时还需要按hot-A-Z排序，处理map，把对象转为数组
        let hot = []
        let ret = []
        for (let key in map) {
          let val = map[key] // 'hot,a,w...'
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val) // push到保存字母的数组中
          } else if (val.title === HOT_NAME) {
            hot.push(val) // push到hot数组中
          }
        }
        // 利用sort进行排序
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
