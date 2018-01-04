export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

// 工厂方法创建实例
export function createSong(musicData) {
  // 调用了上面的方法
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://isure.stream.qqmusic.qq.com/C100${musicData.songmid}.m4a?fromtag=32` // 播放地址
    // url: 'http://dl.stream.qqmusic.qq.com/C4000039MnYb0qxYhV.m4a?vkey=FF31AA0BEA231A818F4B8B78AC1F7A8D24E4F0CF6C166D874AE506F014B2FFD0974EB7E726C7564827D26324BDDFC1F956171336A10DE2BF&guid=2909629524&uin=417466521&fromtag=66'
    // http://dl.stream.qqmusic.qq.com/C400003OUlho2HcRHC.m4a?vkey=569252FF75F8D913AEE048CB3726ADAF1393034CDDC22AE19A99A7A5DD090259A492831227C775B429E7592ECDB9872E6866D74D2E09B86C&guid=2909629524&uin=417466521&fromtag=66
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
